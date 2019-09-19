const express = require(`express`);


const app = express()



const burger = require(`../models/burger`)


const router = express.Router()



router.get(`/`, (req, res) => {
    burger.selectAll(function (data) {


        res.render("index",
            {
                burgers: data
            }
        )
        //need to render
    })
})


router.post(`/api/burgers`, (req, res) => {

    let burger_name = req.body.data


    // console.log(Object.keys(burger_name))
    // console.log(burger_name)

    burger.insertOne(["burger_name", "devoured"], [burger_name, false], function (data) {
        res.status(201).end()
    })

})

router.put(`/ateBurger`, (req, res) => {

    let id = req.body.data

    burger.updateOne("devoured", true, id, function (data) {
        res.status(204).end()
    })
})

module.exports = router;
