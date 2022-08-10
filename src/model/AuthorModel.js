const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://tiya:tiya@cluster0.qh8z9se.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;