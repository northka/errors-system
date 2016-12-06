/**
 * Created by northka.chen on 2016/12/6.
 */
const errorsSystem = require('../index')

errorsSystem.configure('./test/configuration')
throw new errorsSystem.CustomeError(10000)