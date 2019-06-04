var mefsClient = require('ipfs-http-client')
var mefs = mefsClient('212.64.28.207', '5001', { protocol: 'http' })
mefs.lfs.show_balance(function (err, showBalanceInfo) {
    if (err) {
        throw err
    }
    console.log(showBalanceInfo)
})