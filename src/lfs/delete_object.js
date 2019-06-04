'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {
    return promisify((bucketname,objectname, opts, callback) => {
        if (typeof (opts) === 'function') {
            callback = opts
            opts = {}
        }
        send({
            path: 'lfs/delete_object',
            args: [bucketname, objectname],
            qs: opts
        }, callback)
    })
}
