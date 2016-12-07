/**
 * Created by northka.chen on 2016/12/5.
 */
const path        = require('path')

const errorsCache = require('../custom/errorsCache')
function processErrorConfig(errorConfig) {
    let error = {}
    if(errorConfig.code){
        error.code = errorConfig.code
    }else{
        throw new Error('custom Error need configure code')
    }
    error.name   = errorConfig.name || 'Custom Error'
    error.msg    = errorConfig.msg  || errorConfig.message || 'customError'
    error.status = errorConfig.status || 500
    errorsCache.add(error)
}
function processConfiguration(errorsConfig){
    if(Array.isArray(errorsConfig)){
        let length = errorsConfig.length
        for(let i = 0 ; i < length ; i++){
            processErrorConfig(errorsConfig[i])
        }
    }else if((typeof errorsConfig=='object') && errorsConfig.constructor==Object){
        let keyArr = Object.keys(errorsConfig)
        let length = keyArr.length
        for(let i = 0 ; i < length ; i++){
            let errorConfig = Object.assign({name: keyArr[i]}, errorsConfig[keyArr[i]])
            processErrorConfig(errorConfig)
        }
    }
}

module.exports = {
    configure: function (fileName) {
        if(typeof fileName ==='string'){
            fileName = path.isAbsolute(fileName)
                ? fileName
                : path.resolve(process.cwd(), fileName)

            let configuration = require(fileName)
            processConfiguration(configuration)
        }
    }
}