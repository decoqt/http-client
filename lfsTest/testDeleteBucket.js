var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.delete_bucket("bucket2",function (err, deleteBucketInfo) {
    if (err) {
        throw err
    }
    console.log(deleteBucketInfo)
})