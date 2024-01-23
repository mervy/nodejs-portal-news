import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { Author, Category, News } from '../src/models/models.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

//Config EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

//Servir arquivos estáticos
app.use(express.static('public'));

//Configuring bodyParser to handle form data
app.use(bodyParser.urlencoded({ extended: true }))

//Route for login
app.get('/', (req, res) => {
    res.render('home', {title: "Homepage"})
})

//Route for login
app.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
})

//Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running in port: ${PORT}`)
})
