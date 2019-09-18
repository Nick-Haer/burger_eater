const orm = require(`../models/burger`);



const burger = {

selectAll(cb) {


 orm.selectAll(function(data) {
     cb(data)
 })



},


insertOne (burger_name, cb) {


orm.insertOne(burger_name, function(data) {
    cb(data)
})


},

updateOne (id, cb) {


orm.updateOne(id, function (data) {
    cb(data)
})


}






}



module.exports = burger