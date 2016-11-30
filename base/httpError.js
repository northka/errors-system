/**
 * Created by northka.chen on 2016/11/24.
 */
const AbstractError = require('./AbstractError')
const util = require('util')

function HttpError(msg) {
    msg = msg || 'Http Error'
    HttpError.super_.call(this, msg, this.constructor)
}

util.inherits(HttpError, AbstractError)
HttpError.prototype.name = 'Http Error'

module.exports = HttpError