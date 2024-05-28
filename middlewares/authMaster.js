require('dotenv').config();
const log = require('../utils/winston');

const validateMaster = (req, res, next) => {
  try {
    const masterEmails = [
      'anderson.giusti@ibm.com',
      'jaque.felix@ibm.com',
      'lgaleoti@br.ibm.com',
    ];

    const email = req.headers.email;
    const password = req.headers.password;

    if (masterEmails !== email && password !== process.env.PASSWORD_MASTER) {
      const errorMessage = 'Login or password incorrect';
      log.loggerError.http(errorMessage);
      return res.status(401).json({
        Message: errorMessage,
        Success: false,
        Results: null,
      });
    }

    next();
  } catch (err) {
    const errorMessage = 'Unauthorized';
    log.loggerError.http(errorMessage);
    return res.status(401).json({
      Message: errorMessage,
      Success: false,
      Results: null,
    });
  }
};

module.exports = validateMaster;
