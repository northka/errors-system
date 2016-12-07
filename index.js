const CustomError = require('./custom/customError')
const configureError   = require('./configureError/index')
// configureError.configure('./test/configuration')
// throw new CustomError(10000)
console.log(CustomError)
module.exports = {
    CustomError:CustomError,
    configure: configureError.configure
}