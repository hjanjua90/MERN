const Author = require("../models/author.model");

module.exports ={
// Create(Add)
addAuthor: (req, res) =>{
    Author.create(req.body)
        .then((newAuthor)=>{
            console.log(newAuthor);
            res.json(newAuthor)
        })
        .catch((err)=>{
            console.log("Something went wrong in adding an author")
            res.status(400).json(err)
        })
},
// Find ALl


findAllAuthors:(req, res)=>{
    Author.find()
        .then((allAuthors)=>{
            console.log(allAuthors)
            res.json(allAuthors)
        })
        .catch((err)=>{
            console.log("failed to find all authors")
            res.json({message: "Oh no something went wrong, we are unable to find all authors"})
        })
},

// Find One
findOneAuthor: (req, res)=>{
    Author.findOne({_id:req.params.id})
        .then((oneAuthor)=>{
            console.log(oneAuthor);
            res.json(oneAuthor);
        })
        .catch((err)=>{
            console.log("Failed to find an author");
            res.json({ message: "Something went wrong in while finding an author", error: err })
        })
},
// Update 

updateAuthor: (req, res)=>{
        Author.findOneAndUpdate({_id: req.params.id},
        // update using new info passed in
            req.body,
        //These options return a new doc and allow schema valids to run on PUT req
        // option to require new object (old one by default) and enact validations
            {new: true, runValidators: true}
            )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor)
                res.json(updatedAuthor)
            })
            .catch((err)=>{
                console.log("Something went wrong in updating the author");
                res.status(400).json(err) 
        })
},

// Delete
deleteAuthor: (req, res)=>{
    Author.deleteOne({_id: req.params.id})
        .then((deletedAuthor)=>{
            console.log(deletedAuthor);
            res.json(deletedAuthor);
        })
        .catch((err)=>{
            console.log("FAILED to delete an author");
            res.json({ message: "Something went wrong in deleting an author", error: err })
        })
},


}

