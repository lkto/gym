var connection = require('./../db/connection');

const findByid = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM campus WHERE id = ?', [id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

const insert = ({name, city_id }) => {
    const date = new Date();
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO campus (name, city_id, create_at) VALUES (?,?,?)', [name, city_id ,date], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result)
            }
        });
    });
};

module.exports = {
    findByid: findByid,
    insert:insert
}