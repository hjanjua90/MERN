const mongoose = require ("mongoose");

const AuthorSchema = new mongoose.Schema({

    name:
    {type: String,
    required:[true, "Author Name is required"],
    minlength:[3, "minimum of three characters are required"]
    },
    book: {
        type: String,
        required:[true, "Please enter your favorite book from the author"],
        minlength:[3, "minimum of three characters are required"]
    },
    datePublished:{
        type: Date,
        required:[true, "Please enter the Publishing date"]
    }, 
    review:{
        type: String,
        required:[true, "Please leave a detailed review"],
        minlength:[10, "minimum of 10 characters are required"]
    }

},{timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

