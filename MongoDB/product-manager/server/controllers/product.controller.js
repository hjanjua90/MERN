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

    // update one by _id
    updateProduct: (req, res)=>{
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
            .then((newProduct)=>res.json(newProduct))
            .catch((err)=>console.log(err))
    },

    // delete one by id 
    deleteProduct:(req, res)=>{
        Product.deleteOne({_id: req.params.id})
        .then((deletedProduct)=> res.json(deletedProduct))
        .catch((err)=> console.log(err))
    },
    // // delete all products
    // deleteAllProducts: (res, req)=>{
    //     Product.deleteMany({})
    //         .then((allDeletedProducts) => res.json(allDeletedProducts))
    //         .catch((err)=> console.log(err))
    // },


};