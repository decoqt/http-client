'use strict'

const promisify = require('promisify-es6')
const SendOneFile = require('../utils/send-one-file-multiple-results')
const FileResultStreamConverter = require('../utils/file-result-stream-converter')

module.exports = (send) => {

    return promisify(( path, opts, callback) => {
        if (typeof opts === 'function' &&
            callback === undefined) {
            callback = opts
            opts = {}
        }

        // opts is the real callback --
        // 'callback' is being injected by promisify
        if (typeof opts === 'function' &&
            typeof callback === 'function') {
            callback = opts
            opts = {}
        }


        if (typeof path !== 'string') {
            return callback(new Error('"path" must be a string'))
        }

        const sendFile = SendOneFile(send, 'lfs/put_object')

        const requestOpts = {
            qs: opts,
            converter: FileResultStreamConverter
        }
        sendFile(path, requestOpts, callback)
    })
}
