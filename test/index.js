/**
 * Created by northka.chen on 2016/12/6.
 */
const errorsSystem = require('../index')

errorsSystem.configure('./test/configuration')

let CustomeError = errorsSystem.CustomError
console.log(CustomeError)
throw  new errorsSystem.CustomError(10000)