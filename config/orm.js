const connection = require(`./connection`)





const orm = {


selectAll (tableName, cb) {
    connection.query(`SELECT * FROM ??;` , [tableName], (err, data) => {
        if (err) {
            throw err;
        }

        cb(data)
        
    })
},


insertOne (tableName, columnArr, valuesArr, cb) {
    connection.query(`INSERT INTO ?? (??) VALUES (?);`, [tableName, columnArr, valuesArr], (err, data) => {
        if (err) {
            throw err;
        }

        cb(data)


    })
},

updateOne (tableName, columnName, devouredStatus, id, cb) {
    connection.query(`UPDATE ?? SET ?? = ? WHERE id = ? `, [tableName, columnName, devouredStatus, id], (err, data) => {
        if (err) {
            throw err;
        }

        cb(data)
    })
}

}

module.exports = orm;








