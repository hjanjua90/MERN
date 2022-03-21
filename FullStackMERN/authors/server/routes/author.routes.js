const AuthorController = require("../controllers/author.controller");

module.exports=(apps)=>{
    apps.get("/api/authors", AuthorController.findAllAuthors);
    apps.post('/api/authors', AuthorController.addAuthor);
    apps.get("/api/authors/:id", AuthorController.findOneAuthor);
    apps.put("/api/authors/:id", AuthorController.updateAuthor);
    apps.delete("/api/authors/:id", AuthorController.deleteAuthor);
    

}