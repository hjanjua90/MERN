import React,{useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props)=>{
    const {productList, setProductList}= props;
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=> console.log(err));
    }, []);

    const deleteProduct = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                const newList = productList.filter(product, index)
                setProductList(productList.filter(product=>product._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {productList.map((product, index) => (
                <div key={product._id}>{product.title}
                <Link to={`/product/${product._id}`}>{product.title}</Link>
                <br />
                <button onClick={()=> navigate(`/product/edit/${product._id}`)}>
                            Edit
                        </button>
                <button  onClick={() => deleteProduct(product._id)}>
                            Delete
                        </button>
                </div> 
        ))
        }
            </div>
        </div>
    )






}

export default DisplayAll;