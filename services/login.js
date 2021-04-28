var bcrypt = require('bcrypt');

const comparePassword = (user, password) => {
    let msg = '';
    let error = false;
    const equals = bcrypt.compareSync(password, user.password);
    if(!equals){
      msg = 'Error, Identificacion o contraseña incorrectos'
      error = true
    }else{
      if(user.role_id != 2){
        msg = 'Error, No posee los permisos necesarios para acceder, comuniquese con el administrador del citio'
        error = true
      }else{
        msg = 'Inicio de sesion, ejecutado correctamente'
      }
    }

    return {
        msg: msg,
        error: error
    }
}

module.exports = {
    comparePassword:comparePassword
}