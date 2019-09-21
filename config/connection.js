const mysql = require(`mysql`);

const connection = mysql.createConnection({
    host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "bwknhqpg2bjnosj7",
    password: "g6g2kcfpc6w6hzr3",
    database: "vfehq9vxo8uabrsz"
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("connected")
})

module.exports = connection;