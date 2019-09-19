const orm = require(`../config/orm`);



const burger = {

    selectAll(cb) {


        orm.selectAll('burgers', function (data) {
            cb(data)
        })



    },


    insertOne(columnNameArr, burger_name, devouredStatus, cb) {


        orm.insertOne(`burgers`, columnNameArr, burger_name, devouredStatus, function (data) {
            cb(data)
        })


    },

    updateOne(columnName, devouredStatus, id, cb) {


        orm.updateOne(`burgers`, columnName, devouredStatus, id, function (data) {
            cb(data)
        })


    }






}



module.exports = burger