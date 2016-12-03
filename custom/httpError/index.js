/**
 * Created by northka.chen on 2016/11/29.
 */
const httpStatusCodes = require('http').STATUS_CODES
const util            = require('util')

const HttpError       = require('../../base/httpError')
const httpErrorList   = require('./errorList')
/**
 * cutom httpError
 * @param {Number}        statusCode
 * @param {String|Object} messageOrProperties
 * @param {Object}        properties
 */
function HttpErrors(statusCode, messageOrProperties, properties){
    if(!(this instanceof HttpErrors)){
        return new HttpErrors(statusCode, messageOrProperties, properties)
    }

    statusCode = statusCode || 500
    properties = properties || {}
    HttpErrors.super_.call(this, httpStatusCodes[statusCode] || statusCode + 'Error', this.constructor)
    let message
    if(messageOrProperties instanceof Object){
        properties = messageOrPropertiess
        if(properties.message){
            message = properties.message
        }else{
            message = httpErrorList[statusCode] && httpErrorList[statusCode]
        }
        HttpErrors.super_.call(this, message, this.constructor)
    }else if(typeof messageOrProperties === 'string'){
        message = messageOrProperties
    }
    this.name = message || httpErrorList['500']
    Object.assign(this, properties)
    this.code = statusCode
    this.status     = statusCode
}
util.inherits(HttpErrors, HttpError)

module.exports = HttpErrors