const CustomError = require('./custom/customError')
const configureError   = require('./configureError/index')
configureError.configure('./test/configuration')
throw new CustomError(10000)
module.exports = {
    CustomError,
    configure: configureError.configure
}