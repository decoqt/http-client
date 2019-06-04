'use strict'

const bs58 = require('bs58')
const CID = require('cids')

module.exports = function (multihash) {
  if (Buffer.isBuffer(multihash)) {
    multihash = bs58.encode(multihash)
  }
  if (CID.isCID(multihash)) {
    multihash = multihash.toBaseEncodedString()
  }
  if (typeof multihash !== 'string') {
    throw new Error('unexpected multihash type: ' + typeof multihash)
  }
  return multihash
}
