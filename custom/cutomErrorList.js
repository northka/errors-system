/**
 * Created by northka.chen on 2016/12/1.
 */
const HttpErrors = require('./httpError/index')
const ErrorList  = []
module.exports = {
    addError : function (error) {
        ErrorList.push(error)
    },
    getError : function (codeOrName, name) {
        let errorLength = ErrorList.length
        if(typeof codeOrName === 'number'){
            if(codeOrName < 600){
                return HttpErrors(codeOrName, name)
            }
            for(let i = 0 ; i < errorLength ; i++){
                if(ErrorList[i].code === codeOrName){
                    return ErrorList[i]
                }
            }
        }else{
            for(let i = 0 ; i < errorLength ; i++){
                if(ErrorList[i].name === codeOrName){
                    return ErrorList[i]
                }
            }
        }
    }
}