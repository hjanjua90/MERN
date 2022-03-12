//We export an object of key-value pairs from our controller.
//Rather than writing the ENTIRE function, we simply access it using MovieController.findAllMovies
    //(or whatever key corresponds with the route)

    const MovieController = require("../controllers/movie.controller");

    //app parameter gets app (express()) in server.js when invoked. model exports to controller, controller exports to routes, routes are exported to the server.js

    module.exports=(app)=>{

        //if data is only being read, we can use a GET HTTP Verb
        app.get("/api/movies", MovieController.findAllMovies);


        //if data is being sent to my server to create a new document, we use a POST HTTP Verb
        app.post("/api/movies", MovieController.createNewMovie);

        //Make sure calls with params go after the previous calls!    
        app.get("/api/movies/:id", MovieController.findOneMovie);

        //The parameter id, as defined in the controller MUST MATCH
        //what we defined it as in the controller!
        app.delete("/api/movies/:id", MovieController.deleteOneMovie);

        app.put("/api/movies/:id", MovieController.updateMovie);
    


}
