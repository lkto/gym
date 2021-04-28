const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if(!req.headers['user_token'])
        return res.json({
            error: "La peticion no incluye el token"
        })

    const token = req.headers['user_token'];
    let payload = null;
    try{
        payload = jwt.decode(token, 'Token-Auth');
    }catch(err){
        return res.json({
            error: "Token incorrecto"
        })
    }

    if(moment().unix() > payload.expiresAt) {
        return res.json({
            error: "Token expiro, inicia sesion nuevamente"
        })
    }

    req.userId = payload.userId;

    next();
};

module.exports = {
    checkToken:checkToken
}