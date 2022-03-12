const express = require("express");

// starts the server, create the express app object

const app = express();

// this piece of code allows for JSON post and get requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// mongoose work starts here
const mongoose = require ("mongoose");
const databaseName = "dogs";

mongoose.connect("mongodb://localhost/"+ databaseName, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
    .then(()=>{
        console.log("you connected to the" + databaseName + "database")
    })
    .catch((err)=>{
        console.log("There was an error while connecting to the database" + databaseName +"database")
    })


// create the "dog" model - shape of the document inside of a collection 
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
    },
    age: {
        type: Number,
    },
    isFriendly: {
        type:Boolean,
    },
},
    {timestamps: true});

const DogModel = mongoose.model("Dog", DogSchema);

// Routes go here 
app.get("/", (req, res)=>{
    return res.json({message:"Hello World!"});
})

app.get("/api/dogs/getAll", (req, res)=>{
    console.log("Inside of get all dogs");
// Find all query
    DogModel.find({})
            .then((allDogObjects)=>{
                console.log("found all dogs sucessfull");
                console.log(allDogObjects);
                return res.json(allDogObjects);
            })
            .catch((err)=>{
                console.log("err"+ err);
                return res.json(err);
            })
})

// get dog by its mongo_id
app.get("/api/dogs/:thisDogId", (req, res)=>{
    console.log("inside create a dog route");
    console.log(req.body);

    DogModel.create(req.body)
            .then((newDogObject)=>{
                console.log("new dog created successsfully")
                console.log(newDogObject)
                return res.json(newDogObject);
            })
            .catch((err)=>{
                console.log("err " + err);
                return res.json(err);
            })
})

// create a dog document and save it to the database
app.post('/api/dogs/create', (req, res) => {
	console.log("inside create dog route");
	console.log(req.body);

	DogModel.create(req.body)
		.then((newDogObject) => {
			console.log("new dog created successfully");
			console.log(newDogObject);
			return res.json(newDogObject);
		})
		.catch((err) => {
			console.log("err: " + err);
			return res.json(err);
		})
})




// runs the server to 
app.listen(8000, ()=>{
    console.log("Server is started")
})


