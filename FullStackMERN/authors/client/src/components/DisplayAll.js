import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const DisplayAll = (props) =>{
    const [authorList, setAuthorList] = useState([]); 
    // to get all authors from db
    useEffect(()=>{
                axios.get("http://localhost:8000/api/authors")
                    .then((res)=>{
                        console.log(res);
                        // data special property comes with axios allows for the conversion of json.
                        console.log(res.data);
                        setAuthorList(res.data);
                    })
                    .catch((err)=>console.log(err))
            }, [])
    
    const deleteAuthor = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(authorList.filter(movie => movie._id !== idFromBelow))
                    })
            .catch((err)=>console.log(err))
            }



    return(
        <div>
            <header>
                <h1 style={{
                    fontSize:"50px", borderBottom:"10px double darkgray"
                }}>List of Authors</h1>
            </header>
            {/* to add new authors on display all page */}
            <Link to={"/add"}>Add an Author</Link>
            <table style={{margin:"auto", border:"1px solid black"}}>
                <thead style={{backgroundColor:"lightgray", color:"white"}}>
                <tr>
                        <th> Name</th> 
                        <th>Book</th>
                        <th>Date Published</th>
                        <th>Review</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            authorList.map((author,index)=>(
                                <tr key={index}>
                                    <td>
                                        <Link to={`/author/${author._id}`}>{author.name}</Link>
                                    </td>
                                    <td>
                                        {author.book}
                                    </td>
                                    <td>
                                        {new Date(author.datePublished). toLocaleDateString()}

                                    </td>
                                    <td>
                                        {author.review}
                                        
                                    </td>
                                    <td>
                                    <Link to={`/author/edit/${author._id}`}><button >Edit </button></Link>
                                    <button className='delete-button-style' onClick={()=>deleteAuthor(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default DisplayAll;