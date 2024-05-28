require('dotenv').config();

const jwt = require('jsonwebtoken');
const log = require('../utils/winston');

const validateToken = (req, res, next) => {
  try {
    const tokenFront = req.headers.token;
    const clientId = req.headers.clientid;
    const client = clientId === process.env.CLIENT_ID;

    if (tokenFront === undefined || client === false)  {
      const errorMessage = 'Unauthorized - Token not provided';
      log.loggerError.http(errorMessage);
      return res.status(401).json({
        Message: errorMessage,
        Success: false,
        Results: null,
      });
    }

    const payload = { key: process.env.KEY + tokenFront }; 
    const token = jwt.sign(payload, process.env.KEY, { algorithm: 'HS256' });  
    const decoded = jwt.verify(token, process.env.KEY, { algorithms: ['HS256'] });  

    req.user = decoded;
    next();
  } catch (err) {
    const errorMessage = `Unauthorized - Invalid key or decoding error`;
    log.loggerError.http(errorMessage);
    return res.status(401).json({
      Message: errorMessage,
      Success: false,
      Results: null,
    });
  }
};

module.exports = validateToken;
