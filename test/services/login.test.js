const login = require('./../../services/login');
var bcrypt = require('bcrypt');

const password = 'TestingPassword';
const passwordEncrypt = bcrypt.hashSync(password, 10);
const userCorrect = {
    password: passwordEncrypt,
    role_id: 2
}
const expected = {
    msg: 'Inicio de sesion, ejecutado correctamente',
    error: false
}

test('Validar que el rol del usuario es correcto', () => {
    const info = login.comparePassword(userCorrect,password);
    expect(info.msg).toBe(expected.msg);
    expect(info.error).toBe(expected.error);
})

const userIncorrect = {
    password: '787fgfggfg545',
    role_id: 2
}

const expectedFail = {
    msg: 'Error, Identificacion o contraseña incorrectos',
    error: true
}

test('Denegar acceso por error de password', () => {
    const info = login.comparePassword(userIncorrect,password);
    expect(info.msg).toBe(expectedFail.msg);
    expect(info.error).toBe(expectedFail.error);
})

const userIncorrect2 = {
    password: passwordEncrypt,
    role_id: 1
}

const expectedFail2 = {
    msg: 'Error, No posee los permisos necesarios para acceder, comuniquese con el administrador del citio',
    error: true
}

test('Denegar acceso por falta de permisos', () => {
    const info = login.comparePassword(userIncorrect2,password);
    expect(info.msg).toBe(expectedFail2.msg);
    expect(info.error).toBe(expectedFail2.error);
})
