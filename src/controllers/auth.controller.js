const jwt = require('jsonwebtoken');
const AuthService = require('../services/auth.service');
require('dotenv').config();

const userLogin =  async (req, res)=>{
  try {
    const { email, password } = req.body;
    const response = await AuthService.login(email, password);
    //{isValid: true/false}
    if(response.isValid){
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id
      }
      //firmamos un nuevo token
      const token = jwt.sign(data, process.env.JWT_SECRET, {algorithm: 'HS512'});//agregar el tiempo de validez de token tb
      data.token = token;//metemos el token en el objeto
      console.log(data);
      res.json(data);
    } else{
      res.status(401).json({message: 'Credenciales incorrectas'})
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = userLogin;