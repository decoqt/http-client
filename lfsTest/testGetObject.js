var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.get_object("bucket01","aa",function (err, file) {
    console.log("get_object")
    if (err) {
        throw err
    }
    console.log(file)
})