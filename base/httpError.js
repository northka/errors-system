/**
 * Created by northka.chen on 2016/11/24.
 */
const AbstractError = require('./AbstractError')
const util = require('util')

function HttpError(msg, constr) {
    if (!(this instanceof AbstractError)) {
        return new HttpError(message);
    }
    Error.captureStackTrace(this, constr || this.constructor)
    this.message = msg || 'Error'
}

util.inherits(HttpError, AbstractError)
HttpError.prototype.name = 'Http Error'

module.exports = HttpError