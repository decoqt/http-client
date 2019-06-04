var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.delete_object("bucket01","proof-of-replication.pdf",function (err, deleteObjectInfo) {
    if (err) {
        throw err
    }
    console.log(deleteObjectInfo)
})