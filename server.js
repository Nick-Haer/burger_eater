const express = require(`express`);

const app = express()

const router = require(`./controllers/burger_controller`)

const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({extended: true}))

app.use(express.json())



app.use(`/`, router)









app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})