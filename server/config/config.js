const configDefault = require('./config.default')
const configLocal = require('./config.local')

module.exports = Object.assign(configDefault, configLocal)
