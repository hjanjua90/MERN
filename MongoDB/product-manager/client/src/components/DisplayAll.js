import React,{useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props)=>{
    const {productList, setProductList}= props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=> console.log(err));
    }, []);

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {productList.map((product, index) => (
                <div key={product._id}>{product.title}
                <Link to={`/product/${product._id}`}></Link>
                </div> 
        ))}
        </div>
        </div>
    )






}

export default DisplayAll;