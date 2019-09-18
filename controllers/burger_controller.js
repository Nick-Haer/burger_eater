const express =  require(`express`);



const orm = require(`../models/burger`)


const router = express.Router()




router.get(`/`, (req, res) => {
    orm.selectAll
})


router.post(`/newBurger`, (req, res) => {
    orm.insertOne

})

router.put(`/ateBurger`, (req, res) => {
    orm.updateOne
})
