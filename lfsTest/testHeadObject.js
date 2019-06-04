var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.head_object("bucket01","aa",function (err, headObjectInfo) {
    if (err) {
        throw err
    }
    console.log(headObjectInfo)
})