/**
 * Created by northka.chen on 2016/12/1.
 */
const HttpErrors = require('./httpError/index')
const systemCustomError = require('./systemError/systemCustomError')
const ErrorCache = require('./errorsCache')

module.exports = {
    addError : function (error) {
        ErrorList.push(error)
    },
    getError : function (codeOrName, name) {
        let errorLength = ErrorList.length
        if(typeof codeOrName === 'number'){
            if(codeOrName < 600){
                return HttpErrors
            }
            if(codeOrName < 10000){
                return systemCustomError
            }
            for(let i = 0 ; i < errorLength ; i++){
                if(ErrorCache[i].code === codeOrName){
                    return ErrorCache[i]
                }
            }
        }else{
            for(let i = 0 ; i < errorLength ; i++){
                if(ErrorCache[i].name === codeOrName){
                    return ErrorCache[i]
                }
            }
        }
    }
}