import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"

const EditAuthor = (props)=>{

    const [name, setName] = useState("");
    const [book, setBook] = useState("");
    const [datePublished, setDatePublished] = useState("");
    const [review, setReview] =useState("");

    const [ errors, setErrors] = useState("");

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
                setBook(res.data.book);
                setDatePublished(res.data.datePublished);
                setReview(res.data.review);
            })
            .catch((err)=>console.log(err))
    },[id])
    

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`,
            {
                name, // short-hand for title:title
                book, //the getter MUST MATCH the field name in schema to write it this way
                datePublished,
                review
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <header style={{ borderBottom: "5px double lightgray", padding: "10px", margin: "10px" }}>
                <h1 style={{ fontSize: "50px", marginLeft: "450px", marginRight: "450px" }}>Update Author Information</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Book</label>
                    <input value={book} onChange={(e) => setBook(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Date Published</label>
                    <input value={datePublished} onChange={(e) => setDatePublished(e.target.value)} type="date" />
                </div>
                <div>
                <label>Review</label>
                    <input value={review} onChange={(e) => setReview(e.target.value)} type="text-box" />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}
export default EditAuthor;