const connection = require(`./connection`)





const orm = {


selectAll () {
    connection.query(`SELECT * FROM burgers;` , (err, data) => {
        if (err) {
            throw err;
        }
        
    })
},


insertOne (name) {
    connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`, [name], (err, data) => {
        if (err) {
            throw err;
        }


    })
},

updateOne (id) {
    connection.query(`UPDATE burgers SET devoured = false WHERE id = ? `, [id], (err, data) => {
        if (err) {
            throw err;
        }
    })
}

}

module.exports = orm;








