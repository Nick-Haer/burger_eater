const express = require(`express`);

const exphbs = require(`express-handlebars`)

const app = express()



const router = require(`./controllers/burger_controller`)


app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({extended: true}))

app.use(express.json())



app.use(`/`, router)









app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})