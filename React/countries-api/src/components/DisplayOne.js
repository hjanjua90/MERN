import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"; 
import axios from "axios";

const DisplayOne = (props) => {

    const {countryCode} = useParams();


    const [country, setCountry] = useState({});



    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/alpha/${countryCode}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                // console.log(res.data[0]);
                setCountry(res.data);
            })
            .catch((err)=>console.log(err))
    }, [])



    return (
        <div>
            <p>Name: {country.name}</p>
            <p>Population: {country.population}</p> 

            {
                rating?
                <p>Thank you for rating my country {rating}! </p>
                :null
            }

            {
                review?
                <p>Your review: {review}</p>
                :null
            }
        </div>








    )
}

export default DisplayOne;