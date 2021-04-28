var connection = require('./../db/connection');

const findByid = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM city WHERE id = ?', [id], (err, result) => {
            if(err) reject(err)
            if(result){
                resolve(result[0])
            }
        });
    });
};

const insert = ({name}) => {
    const date = new Date();
    
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO city (name, create_at) VALUES (?,?)', [name ,date], (err, result) => {
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