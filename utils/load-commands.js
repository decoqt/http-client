'use strict'

function requireCommands () {
  return {
    bootstrap: require('../bootstrap'),
    dht: require('../dht'),
    lfs: require('../lfs'),
    ping: require('../ping'),
    pingReadableStream: require('../ping-readable-stream'),
    pingPullStream: require('../ping-pull-stream'),
    swarm: require('../swarm'),
    commands: require('../commands'),
    config: require('../config'),
    diag: require('../diag'),
    id: require('../id'),
    log: require('../log'),
    repo: require('../repo'),
    stop: require('../stop'),
    shutdown: require('../stop'),
    stats: require('../stats'),
    update: require('../update'),
    version: require('../version'),
    getEndpointConfig: (send, config) => require('../get-endpoint-config')(config)
  }
}

function loadCommands (send, config) {
  const files = requireCommands()
  const cmds = {}

  Object.keys(files).forEach((file) => {
    cmds[file] = files[file](send, config)
  })

  return cmds
}

module.exports = loadCommands
