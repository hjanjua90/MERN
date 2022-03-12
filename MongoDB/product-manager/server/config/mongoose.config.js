const mongoose = require("mongoose");

const dbName = "products";

mongoose
    .connect(`mongodb://localhost/${dbName}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
})
    .then(() => console.log('connected to ${dbName} database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


