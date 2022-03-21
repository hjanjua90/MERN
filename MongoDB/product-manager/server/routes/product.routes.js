const ProductController = require("../controllers/product.controller");
// setting up and exporting API routes for requests
module.exports = (app)=>{
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.put("/api/products/edit/:id", ProductController.updateProduct);
    // app.delete("/api/products/delete",ProductController.deleteAllProducts);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}

