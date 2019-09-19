const express =  require(`express`);



const burger = require(`../models/burger`)


const router = express.Router()




router.get(`/`, (req, res) => {
    burger.selectAll(function(data) {
        res.json(data) 
        //need to render
    })
})


router.post(`/newBurger`, (req, res) => {

    burger.insertOne(["burger_name", "devoured"], burger_name, false, function (data) {
        res.json(data)
    })

})

router.put(`/ateBurger`, (req, res) => {

    burger.updateOne("devoured", false,  id, function (data) {
        res.json(data)
    })
})

module.exports = router;
