var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.list_buckets(function (err, listBucketsInfo) {
    if (err) {
        throw err
    }
    console.log(listBucketsInfo)
})