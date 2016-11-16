/**
 * Created by northka.chen on 2016/11/16.
 */
const util = require('util')

function AbstractError (msg, constr){
    if (!(this instanceof AbstractError)) {
        return new AbstractError(message);
    }
    Error.captureStackTrace(this, constr || this.constructor)
    this.message = msg || 'Error'
}

util.inherits(AbstractError, Error)

AbstractError.prototype.name = 'Abstract Error'

module.exports = AbstractError