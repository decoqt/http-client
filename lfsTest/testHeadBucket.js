var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.head_bucket("bucket01",function (err, headBucketInfo) {
    if (err) {
        throw err
    }
    console.log(headBucketInfo)
})