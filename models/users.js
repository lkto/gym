var connection = require('./../db/connection');

const insert = ({first_name, last_name, identifica, role_id, password, sede_id }) => {
    const date = new Date();
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO user (first_name, last_name, identifica, role_id, create_at, password) VALUES (?,?,?,?,?,?)', [first_name, last_name, identifica, role_id,date, password], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

const findByidentifica = (identifica) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user WHERE identifica = ?', [identifica], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

const findByid = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user WHERE id = ?', [id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result[0])
            }
        });
    });
};

const findUserByCampus = (sede_id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT u.* FROM USER u INNER JOIN user_campus uc ON uc.user_id = u.id AND uc.campus_id = ?', [sede_id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
}

module.exports = {
    insert: insert,
    findByidentifica: findByidentifica,
    findByid:findByid,
    findUserByCampus:findUserByCampus
}