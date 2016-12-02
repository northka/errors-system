/**
 * Created by northka.chen on 2016/12/2.
 */
const AbstractError = require('./abstractError')
const util = require('util')

function CustomError(msg) {
    msg = msg || 'Custom Error'
    CustomError.super_.call(this, msg, this.constructor)
}

util.inherits(CustomError, AbstractError)
CustomError.prototype.name = 'Custom Error'

module.exports = CustomError