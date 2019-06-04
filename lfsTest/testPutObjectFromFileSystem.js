var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.put_object_from_file_system("/mnt/d/1.txt",{args:'bucket01'},function (err, file) {
    console.log("put_object")
    if (err) {
        throw err
    }
    console.log(file)
})