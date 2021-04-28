var express = require('express');
var router = express.Router();
var Users = require('../models/users');
var UsersCampues = require('./../models/userCampus');
var Campus = require('../models/campus');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var moment = require('moment');
var middleware = require('../routes/middleware');
var login = require('../services/login');


router.post('/register', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const userRegistered = await Users.findByidentifica(req.body.identifica);
  let dataUserCampus = [];
  let msg = '';
  let error = false;
  const existCampus = await Campus.findByid(req.body.campus_id)

  if(existCampus.length > 0){
    const totalCampusRegistered =  await UsersCampues.getAllByCampus(req.body.campus_id);
    if(totalCampusRegistered.length == 300){
      msg = 'La sede indicada ya tiene el maximo de usuarios permitidos';
      error = true;
    }else{
      if(userRegistered.length > 0){
        const dataConsultUserCampus = {
          "user_id" : userRegistered[0].id,
          "campus_id" : req.body.campus_id
        }
        const countUserCampus = await UsersCampues.getAllByUserIdAndCampus(dataConsultUserCampus)
        if(countUserCampus.length > 0){
          msg = 'El usuario ya se encuentra registrado en esta sede';
          error = true;
        }else{
          const countRegisterUsers = await UsersCampues.getAllByUser(userRegistered[0].id);
          if(countRegisterUsers.length >= 2){
            msg = 'El usuario ya se encuentra registrado en dos sedes diferentes, razon por la cual no puede registrarse en mas';
            error = true;
          }else{
            const dataInsertUserCampus = {
              "user_id" : userRegistered[0].id,
              "campus_id" : req.body.campus_id
            }
            dataUserCampus = await UsersCampues.insert(dataInsertUserCampus);
            msg = 'registro guardado con exito';
          }
        }
      }else{
        const user = await Users.insert(req.body);
        const dataUser = await Users.findByidentifica(req.body.identifica);
        const dataInsertUserCampus = {
          "user_id" : dataUser[0].id,
          "campus_id" : req.body.campus_id
        }
        dataUserCampus = await UsersCampues.insert(dataInsertUserCampus);
        msg = 'registro guardado con exito';
      }
    }
  }else{
    msg = 'La sede indicada no existe';
    error = true;
  }

  const result = {
    "msg": msg,
    "error": error
  }
  res.json(result);
});

router.post('/login', async (req, res) => {
  const userData = await Users.findByidentifica(req.body.identifica);
  let msg = '';
  let error = false;
  let token = '';
  if(userData.length > 0){
    const user = userData[0];
    const infoLogin = login.comparePassword(user,req.body.password)
    if(!infoLogin.error){
      token = createToken(user);
    }
    msg = infoLogin.msg;
    error = infoLogin.error;
    
  }else{
    msg = 'Error, Identificacion o contraseña incorrectos'
    error = true
  }

  const result = {
    "msg": msg,
    "error": error,
    "token": token
  }
  res.json(result);
  
});

router.use(middleware.checkToken);

router.get('/', async (req, res) => {
  const data = await Users.findUserByCampus(req.body.campus_id);
  res.json({
    error: false,
    users: data
  })
})

const createToken = (user) => {
  let payload = {
    userId: user.id,
    createAt: moment().unix(),
    expiresAt: moment().add(1, 'day').unix()
  }

  return jwt.encode(payload, 'Token-Auth')
}

module.exports = router;
