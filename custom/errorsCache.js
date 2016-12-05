/**
 * Created by chenchaochao on 16/12/3.
 */
const errorList  = []

module.exports = {
    get: (codeOrName) => {
        let errorNum = errorList.length
        if(typeof codeOrName === 'number'){
            for(let i = 0 ; i < errorNum ; i++ ){
                if(errorList[i].code === codeOrName){
                    return errorList[i]
                }
            }
        }else {
            for(let i = 0 ; i < errorNum ; i++ ){
                if(errorList[i].name === codeOrName){
                    return errorList[i]
                }
            }
        }
    },
    add: (customeErrorConfig) => {
        errorList.push(customeErrorConfig)
    }
}