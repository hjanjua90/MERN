const express = require('express');
const cors = require("cors");
const app = express ();

//  need this to read json objects that are sent from client reqquest.
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(
    // cors allow differents ports to communicate
    cors({
        origin: "http://locoalhost:3000",
    }),
);

require("./config/mongoose.config");

require("./routes/product.routes")(app);



app.listen(8000, ()=>{
    console.log("Port 8000 is working and listening")
});

