var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.start("address",function (err, startInfo) {
    if (err) {
        throw err
    }
    console.log(startInfo)
})