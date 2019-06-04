'use strict'

module.exports = (args) => {
  const callback = args.pop()
  let opts = {}
  let sources = []

  if (!Array.isArray(args[args.length - 1]) && typeof args[args.length - 1] === 'object') {
    opts = args.pop()
  }

  if (args.length === 1 && Array.isArray(args[0])) {
    sources = args[0]
  } else {
    sources = args
  }

  return {
    callback,
    sources,
    opts
  }
}
