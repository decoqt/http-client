'use strict'

function stringlistToArray (res, cb) {
  cb(null, res.Strings || [])
}

module.exports = stringlistToArray
