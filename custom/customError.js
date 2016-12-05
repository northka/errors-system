/**
 * Created by northka.chen on 2016/12/2.
 */
const util = require('util')

const errorsCache = require('./errorsCache')
const customError = require('../base/customError')

function CustomErrors(statusOrCode, messageOrProperties, properties) {
    if(!(this instanceof CustomError)){
        return new CustomError(statusOrCode, messageOrProperties, properties)
    }
    statusOrCode = statusOrCode || 10000
    properties   = properties || {}
    let errConfig = errorsCache.get(statusOrCode) || errorsCache.get(10000)
    CustomError.super_.call(this, errConfig.msg || 'customError', this.constructor)
    this.code = errConfig.code
    this.name = errConfig.name
    Object.assign(this, properties)
}

util.inherits(CustomErrors, customError)

module.exports = CustomErrors
