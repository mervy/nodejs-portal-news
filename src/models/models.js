import mongoose from 'mongoose'

//Connection
import dotenv from 'dotenv'
dotenv.config()

/*
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} ,(err, db)=>{
    if(err) throw err;
    console.log(`Connect sucessfully in server: ${process.env.MONGODB_URI}`)
})
*/
mongoose.connect(process.env.MONGODB_URI)
 .then(() => console.log(`Connect sucessfully in server: ${process.env.MONGODB_URI}`))
 .catch(err => console.log('Error connecting: ', err));

//Schema for authors
const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    nick: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    is_active: { type: Boolean, default: false, required: true },
})

//Schema for categories
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug_category: { type: String, required: true },
    is_active: { type: Boolean, default: true, required: true },
})

//Schema for news
const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug_title: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    image: { type: String }, // Caminho para a imagem (opcional)
    is_active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

//Creating the models
const Author = mongoose.model('Author', authorSchema)
const Category = mongoose.model('Category', categorySchema)
const News = mongoose.model('News', newsSchema)

export { Author, Category, News }
