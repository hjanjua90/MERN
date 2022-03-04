import './App.css';
import axios from "axios";
import React,{useState,useEffect} from "react";

function App() {
  const [radioList,setRadioList]=useState([]);
  useEffect(()=>{
    axios.get("https://nl1.api.radio-browser.info/json/stations/byname/jazz")
    .then(res =>{
      console.log(res);
      console.log(res.data);
      setRadioList(res.data);
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
      {radioList.map((station,index)=>{
        return (
          <div>
            <a href={station.url}>{station.url}</a>
          </div>
        )
      })}

    </div>
  );
}

export default App;