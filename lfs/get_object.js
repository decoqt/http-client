'use strict'

const promisify = require('promisify-es6')
const TarStreamToObjects = require('../utils/tar-stream-to-objects')
const concat = require('concat-stream')
const through = require('through2')
const streamToValue = require('../utils/stream-to-value')

module.exports = (send) => {
    return promisify((bucketname,objectname, opts, callback) => {
        if (typeof opts === 'function' && !callback) {
            callback = opts
            opts = {}
        }

        // opts is the real callback --
        // 'callback' is being injected by promisify
        if (typeof opts === 'function' && typeof callback === 'function') {
            callback = opts
            opts = {}
        }

        const request = { path: 'lfs/get_object', args: [bucketname, objectname], qs: opts }

        // send(request,callback)
        // Convert the response stream to TarStream objects
        // send.andTransform(request, TarStreamToObjects, (err, stream) => {
        //     if (err) { return callback(err) }
        //
        //     const files = []
        //
        //     stream.pipe(through.obj((file, enc, next) => {
        //         if (file.content) {
        //             file.content.pipe(concat((content) => {
        //                 files.push({ path: file.path, content: content })
        //             }))
        //         } else {
        //             files.push(file)
        //         }
        //         next()
        //     }, () => callback(null, files)))
        // })
        send.andTransform(request, streamToValue, callback)
    })
}
