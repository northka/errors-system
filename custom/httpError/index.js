/**
 * Created by northka.chen on 2016/11/29.
 */
const httpStatusCodes = require('http').STATUS_CODES
const util            = require('util')

const httpError       = require('../../base/httpError')
const httpErrorList   = require('./errorList')
/**
 * cutom httpError
 * @param {Number}        statusCode
 * @param {String|Object} messageOrProperties
 * @param {Object}        properties
 */
function HttpErrors(statusCode, messageOrProperties, properties){
    if(!(this instanceof httpErrors)){
        return new HttpErrors(statusCode, messageOrProperties, properties)
    }
    statusCode = statusCode || 500
    properties = properties || {}
    if(messageOrProperties instanceof Object){
        properties = messageOrPropertiess
        let message
        if(properties.message){
            message = properties.message
        }else{
            if(httpErrorList[statusCode]){
                message = httpErrorList[statusCode]
            }else{
                message = httpErrorList['500']
            }
        }
        HttpErrors.super_.call(this, message, this.constructor)
    }else if(typeof messageOrProperties === 'string'){
        HttpErrors.super_.call(this, messageOrProperties, this.constructor)
    }
    Object.assign(this, properties)
    this.name = httpStatusCodes[statusCode] || statusCode + 'Error'
    this.statusCode = statusCode
    this.status     = statusCode
}
util.inherits(HttpErrors, httpError)
module.exports = HttpErrors