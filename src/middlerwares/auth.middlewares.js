/*validar el token
si es valido, lo dejamos pasar,
si es invalido, obvio que nop*/

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next)=>{
  let { authorization: token } = req.headers;//ó const req.headers.authorization
  token = token.replace('Bearer ', '')
  console.log(token);
  jwt.verify(
    token, 
    process.env.JWT_SECRET, 
    {algorithms: 'HS512'}, 
    (err, decoded)=>{
      if(err){
        res.status(400).json({error: 'invalid token', message: 'El token no es valido, envía un token correcto'})
      } else {
        console.log(decoded);
        next();
      }
  });
}

module.exports = authMiddleware;