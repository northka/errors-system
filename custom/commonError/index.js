/**
 * Created by northka.chen on 2016/12/7.
 */
const AbstractError = require('../../base/AbstractError')
const util = require('util')

function ConfigureError(message) {
    if(!(this instanceof ConfigureError)){
        return new ConfigureError(message)
    }
}

util.inherits(ConfigureError, AbstractError)
ConfigureError.prototype.name = 'Configure Error'

module.exports = ConfigureError