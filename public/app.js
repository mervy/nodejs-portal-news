import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { Author, Category, News } from '../src/models/models.js'

const app = express()

//Config EJS
app.set('view engine', 'ejs')
app.set('views', '../src/views')

//Configuring bodyParser to handle form data
app.use(bodyParser.urlencoded({ extended: true }))

//Route for login
app.get('/login', (req, res) => {
    res.render('login')
})

//Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running in port: ${PORT}`)
} )
