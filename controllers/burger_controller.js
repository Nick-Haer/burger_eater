const express =  require(`express`);



const orm = require(`../models/burger`)


const router = express.Router()




router.get(`/`, (req, res) => {
    orm.selectAll(function(data) {
        res.render(``, data)
    })
})


router.post(`/newBurger`, (req, res) => {
    let burger_name = res.body.burger_name
    orm.insertOne(burger_name, function (data) {
        res.render(``, data)
    })

})

router.put(`/ateBurger`, (req, res) => {
    orm.updateOne(id, function (data) {
        res.render(``, data)
    })
})

module.exports = router;
