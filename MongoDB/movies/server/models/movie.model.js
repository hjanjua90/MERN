const mongoose = require ("mongoose");

const MovieSchema = new mongoose.Schema({
// similar to creating a table in MYSQL. Valindations are also added in the schema.
// id is automatically created each time we add a new document.

    tite:{
        type: String,
        // validations go here in schema. most validations require two values, the criteria and the message.
        required: [true, "Movie title is required"],
        // max length, and min length are for strings and max and min are for numbers.
        maxlength:[30, "The title's length can be no more than 30 characters."]
    },

    genre:{
        type:String,
        required:[true, "Genre is required"],

        // enum(enumeration) an enum will require the field's value in the request to. 
        // include one of these values EXACTLY as typed here
        enum:[
            "Crime Noir",
            "Romantic- Comedy",
            "thriller",
            "Action",
            "Family",
            "Bollywood",
            "Action",
            "Drama",
            "Sci-Fi",
        ]
    },
// boxArt is a picture we will send via url
    boxArt:{
        type: String,
           //The messages from validators will be accessible after we set our
    //res.status(400).json(err) in our controller
    required: [true, "Because we love pictures!!!"]
    },


    watchLength:{
        type: Number
    },

    rating:{
        type: String,
        enum:[
            "G",
            "PG",
            "PG-13",
            "R",
            "NC-17"
        ]
        
    },

    actors:{
        type: String
    },

    kidFriendly:{
        type: Boolean,
        required:[true, "Need to know if it's good for kids!!!"]
    },

    yearReleased:{
        type:Number,
        min:[1990, "I dont like classics"]
    }

       //timestamps automatically create "createdAt" and"updatedAt" date and time info for each document
//everytime a doc is updated, it will change the "updatedAt"

}, {timestamps:true})

//The Model is a combination of the:
//1. Collection name which will be a singular, capitalized version of the collection name that's held in the db (will show in our db as "movies")
//2. The Schema 

const Movie = mongoose.model("Movie", MovieSchema);

//Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.


//We export the model to be imported and used in our controller. We will write Movie.find({}) for example to find all documents inside of the movie collection we've created!


module.exports = Movie;
