const mysql = require(`mysql`);

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "63_TRooTandTree!",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
})

module.exports = connection;