const Product = require("../models/product.model.js");

module.exports = {
    createProduct: (req, res)=>{
        Product.create(req.body)
        .then((newProduct)=>res.json(newProduct))
        .catch((err)=>console.log(err))
    },
    // get all products
    getAllProducts:(req, res)=>{
        Product.find({})
            .then((allProducts)=>{res.json(allProducts)})
            .catch((err)=> console.log(err))
    },
    // get one = use _id
    getOneProduct:(req, res)=>{
        Product.findOne({_id:req.params.id})
            .then((oneProduct)=>res.json(oneProduct))
            .catch((err)=>console.log(err))
    },

    // update one use _id
    

    // delete on


};