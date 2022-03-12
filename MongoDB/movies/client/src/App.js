import React, {useEffect} from "react";
import './App.css';
import axios from "axios"


function App() {

  useEffect(()=>{
    axios.get("http://localhost:8000/api/movie")
      .then((res)=>{
        console.log(res);
        console.log(res.data)
      })
  },[])



  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
