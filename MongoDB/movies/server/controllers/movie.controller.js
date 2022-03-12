// in our controller we will create methods for our queries and routes will have our get, post, delete, put. methods.
const Movie = require("../models/movie.model");

// controllers have functionality in terms of our database
// We are exporting an object of key value pairs.
//The Key being how we're referring to our calls
// And the Call itself (arrow func), being the value!
//We can easily access these in the movie.routes.js

module.exports = {

    findAllMovies:( res, req)=>{
        Movie.find()
            .then((allMovies)=>{
                console.log(allMovies)
            })
            .catch((err)=>{
                console.log("findAllMovies has unsucessful")
                res.json({ message: "uh oh something went wrong in findAll", error: err})
            })
    },
    createNewMovie: (req, res) =>{
        Movie.create(req.body)
            .then((newMovie)=>{
                console.log(newMovie);
                res.json(newMovie)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewMovie")

                // We set the response status of 400 to 
                    //display our err, which is the rejection of our promise.

                //A 400 status means our client is talking 
                    //to our server just fine, but the client isn't sending good info.

                //This is how we will eventually display 
                    //our validations from the server in react!

                //A 404 status error means the client's 
                    //request isn't to the right place or your server is not set up properly
                    //On the flip-side, a status of 200 means we are looking good!


                // respond to client with error status. error 400 = request was made but there is an error 
                // 404 = does not exist.
                res.status(400).json(err)
            })
    },
// find one method must use ID
    findOneMovie: (req, res)=>{
        Movie.findOne({_id:req.params.id})
            .then((oneMovie)=>{
                console.log(oneMovie);
                res.json(oneMovie);
            })
            .catch((err)=>{
                console.log("Find One Movie failed");
                res.json({ message: "Something went wrong in findOneMovie", error: err })
            })
    },
//  use Id field to delete movie and also use request param
    deleteOneMovie: (req, res)=>{
        Movie.deleteOne({_id: req.params.id})
            .then((deletedMovie)=>{
                console.log(deletedMovie);
                res.json(deletedMovie);
            })
            .catch((err)=>{
                console.log("FAILED to delete one movie");
                res.json({ message: "Something went wrong in deleteOneMovie", error: err })
            })
    },

// update method we use put (hhtp verb)
updateMovie: (req, res)=>{
    //This Mongoose query requires both a parameter AND body from the request!
    Movie.findOneAndUpdate({_id: req.params.id},
        req.body,
        //These options return a new doc and allow schema valids to run on PUT req
        // By default validatiors run only on POST request so when writing a method for update PUT request we must our run validators in the update method/
        {new: true, runValidators: true}
        )
        .then((updatedMovie)=>{
            console.log(updatedMovie)
            res.json(updatedMovie)
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewMovie");
            res.status(400).json(err) //See above (explained in create)
        })
}

}


//ALTERNATIVE WAY TO WRITE IN IN THE PLATFORM.
//THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
//I THINK THE WAY ABOVE IS EASIER, BUT THEY ARE ULTIMATELY THE SAME, SO DO WHAT FEELS GOOD!


// module.exports.findAllMovies = (req, res) => {
//     Movie.find({})
//         .then(allMovies => res.json(allMovies))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// },