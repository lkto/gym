var connection = require('./../db/connection');

const insert = ({user_id, campus_id }) => {
    console.log(user_id, campus_id)
    const date = new Date();
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO user_campus (user_id, campus_id, create_at) VALUES (?,?,?)', [user_id, campus_id, date], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

const getAllByUserIdAndCampus = ({user_id, campus_id }) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user_campus WHERE user_id = ? and campus_id = ?', [user_id, campus_id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

const getAllByUser = (user_id) => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user_campus WHERE user_id = ? ', [user_id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

const getAllByCampus = ( campus_id ) => {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user_campus WHERE campus_id = ?', [campus_id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

module.exports = {
    insert:insert,
    getAllByCampus:getAllByCampus,
    getAllByUserIdAndCampus:getAllByUserIdAndCampus,
    getAllByUser:getAllByUser
}