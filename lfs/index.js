'use strict'

const moduleConfig = require('../utils/module-config')

module.exports = (arg) => {
    const send = moduleConfig(arg)

    return {

        create_bucket: require('./create_bucket')(send),
        delete_bucket: require('./delete_bucket')(send),
        head_bucket: require('./head_bucket')(send),
        list_buckets: require('./list_buckets')(send),

        put_object_from_file_system: require('./put_object_from_file_system')(send),
        put_object_from_stream: require('./put_object_from_stream')(send),
        get_object: require('./get_object')(send),
        delete_object: require('./delete_object')(send),
        head_object: require('./head_object')(send),
        list_objects: require('./list_objects')(send),

        list_providers: require('./list_providers')(send),
        list_keepers: require('./list_keepers')(send),
        show_storage: require('./show_storage')(send),
        show_balance: require('./show_balance')(send),
        start: require('./start')(send),
        kill: require('./kill')(send),
        fsync: require('./fsync')(send)

    }
}
