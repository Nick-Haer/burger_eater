const connection = require(`./connection`)





const orm = {


selectAll (cb) {
    connection.query(`SELECT * FROM burgers;` , (err, data) => {
        if (err) {
            throw err;
        }

        cb(data)
        
    })
},


insertOne (burger_name, cb) {
    connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`, [burger_name], (err, data) => {
        if (err) {
            throw err;
        }

        cb(data)


    })
},

updateOne (id, cb) {
    connection.query(`UPDATE burgers SET devoured = false WHERE id = ? `, [id], (err, data) => {
        if (err) {
            throw err;
        }

        cb(data)
    })
}

}

module.exports = orm;








