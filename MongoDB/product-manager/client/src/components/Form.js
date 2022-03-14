import React, { useState } from "react";
import axios from "axios";
// import {Button} from 'react-bootstrap';

// create Form function then create getters and setters for the items in the schema
const Form = (props)=>{
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products",{
            title,
            price, 
            description
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                    setProductList([...productList, res.data])
                    setTitle("");
                    setPrice("")
                    setDescription("");
            })
            .catch((err)=>{
                console.log(err)
            });
    }




    return (
        <div >
            <header>Product Manager</header>
            <form onSubmit={submitHandler}>
                {/* <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" />
                </Form.Group> */}
                <div className="form-field">
                    <label>Title</label>
                    <input
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                    />
                </div>
                <br />
                <div className="form-field">
                    <label>Price</label>
                    <input
                    onChange={(e)=> setPrice(e.target.value)}
                    value={price}
                    name="Price"
                    type="number"
                    />
                </div>
                <br />
                <div className="form-field">
                    <label>Description</label>
                    <input
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                    />
                </div>
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    )

}

export default Form; 

