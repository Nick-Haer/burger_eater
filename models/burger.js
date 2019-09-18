const orm = require(`../models/burger`);



const burger = {

showAll () {


 orm.selectAll()



},


addBurger (burgerName) {


orm.insertOne(burgerName)


},

eatBurger (burger_id) {


orm.updateOne(burger_id)



}






}



module.exports = burger