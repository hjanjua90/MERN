// import axios, react, useEffect, useState, Link
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom"


const DisplayOne = (props) =>{
    
    const [author, setAuthor] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{

        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then ((res)=>{
                console.log(res)
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch((err)=>{
                console.log(err``)
            })
    }, [id])


    return (
        <div className = "info-card">
            <header>
                <h1 style={{
                    fontSize: "50px", borderBottom: "5px double lightgray",
                    marginLeft: "450px", marginRight: "450px"
                }}>{author.name}</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            <div>
                <p>{author.name}</p>
                <p>{author.book}</p>
                <p>{new Date(author.datePublished). toLocaleDateString()}</p>
                <p>{author.review}</p>
            </div>
        </div>
    )
}

export default DisplayOne;