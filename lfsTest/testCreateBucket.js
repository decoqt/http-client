var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.create_bucket("",function (err, createBucketInfo) {
    if (err) {
        throw err
    }
    console.log(createBucketInfo)
})