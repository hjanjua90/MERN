import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const AddAuthor = (props) =>{
    const [name, setName] = useState("");
    const [book, setBook] = useState("");
    const [datePublished, setDatePublished] = useState("");
    const [review, setReview] =useState("");

    const [ errors, setErrors] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors",
        {
            name, 
            book, 
            datePublished,
            review,
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <header style={{ borderBottom: "5px double lightgray", padding: "10px", margin: "10px" }}>
                <h1 style={{ fontSize: "50px", marginLeft: "450px", marginRight: "450px" }}>Add Your Favorite Author!</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    <br/>
                    {
                        errors.name?
                        <span>{errors.name.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Book</label>
                    <input value={book} onChange={(e) => setBook(e.target.value)} type="text" />
                    <br/>
                    {
                        errors.book?
                        <span>{errors.book.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Date Published</label>
                    <input value={datePublished} onChange={(e) => setDatePublished(e.target.value)} type="date" />
                    <br/>
                    {
                        errors.datePublished?
                        <span>{errors.datePublished.message}</span>
                        :null
                    }
                </div>
                <div>
                <label>Review</label>
                    <input value={review} onChange={(e) => setReview(e.target.value)} type="text-box" />
                    <br/>
                    {
                        errors.review?
                        <span>{errors.review.message}</span>
                        :null
                    }
                </div>
                <button>Add an Author!</button>

            </form>
        </div>
    )

}

export default AddAuthor;