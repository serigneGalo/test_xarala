const express = require('express')
const cors = require('cors')

//Configuration de nos variables d'environnement.
require('dotenv').config({path:"./configuration/.env"})

//Concerne notre base de données.
require('./configuration/dataBase')

const app = express()

//Nous permet d'acceder au corps de nos requettes
var bodyParser = require('body-parser')

//Sert à donner l'acces a tout autre user externe
app.use(cors())

app.use(bodyParser.json())

app.use('/api', require('./routes/user.routes') )

app.listen(
    process.env.PORT, 
    ()=>console.log(`connected on port ${process.env.PORT}`)
)