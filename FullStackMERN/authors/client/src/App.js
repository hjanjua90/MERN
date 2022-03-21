import './App.css';
import React, {useEffect} from "react";
import axios from "axios"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DisplayAll from "./components/DisplayAll";
import AddAuthor from './components/AddAuthor';
import DisplayOne from './components/DisplayOne';
import EditAuthor from './components/EditAuthor';

function App() {

  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
    .then((res)=>{
      console.log(res);
      console.log(res.data)
    })
  },[])

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element = {<DisplayAll/>}/>
        <Route path="/add" element={<AddAuthor/>}/>
        <Route path="/author/:id" element={<DisplayOne/>}/>
        <Route path= "/author/edit/:id" element={<EditAuthor/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
