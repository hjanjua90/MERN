import React, {useState} from "react"
import {Link} from "react-router-dom";



const DisplayAll = (props) => {

    const {countryList, setCountryList} = props

    const [rating, setRating] = useState(0);

    const[review, setReview] =useState("");

    const ratingHandler = (e, country)=>{
        country.rating = e.target.value;
        setRating(e.target.value)
    }


    const reviewHandler = (e, countryFromBelow)=>{
        let countryListCopy = countryList.map((country)=>{
            if(country === countryFromBelow){
                let countryCopy = {...countryFromBelow};
                countryCopy.review = e.target.value;
                console.log(countryCopy);
                setReview(e.target.value);
                return countryCopy
            }
            else{
                return country;
            }
        })
        setCountryList(countryListCopy);
    }

    //This function will return a different Link depending on which
        //property keys the country (passed in as an arument in the return) has


    const paramsHandler  = (country)=>{
        if(country.rating && country.review){ //IF we've added a rating AND Review
            return(
                <Link className="card-title border py-3 bg-secondary text-light fw-bold" 
                to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}>
                {country.name}
                </Link>
            )
        }
        else if(country.rating){ //If we've just added a rating
            return(
                <Link className="card-title border py-3 bg-secondary text-light fw-bold"
                    to={`/country/${country.alpha2Code}/${country.rating}`}>
                    {country.name}
                </Link>
            )
        }
        else{ //If we haven't added either a review or rating
            return(
                <Link className="card-title border py-3 bg-secondary text-light fw-bold"
                    to={`/country/${country.alpha2Code}`}>
                    {country.name}
                </Link>
            )
        }
    }


    return (
        <div className = "d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-content-around">
            {
                countryList.map((country, index)=>(
                    <div key={index}
                        className = "card m-2 w-10 rounded"
                    >

                        {
                            paramsHandler (country)
                    
                        }                        
                        <input type="number"
                        className="form-control mx-auto text-center my-3 border-3 p-2"
                        placeholder="Rating"
                        onChange={(e)=>ratingHandler(e, country)}
                        />

                        {
                            country.rating?
                            <div>
                                <label htmlFor="review">Please Leave a Rating (optional):</label>
                                <textarea className="form-control mx-auto text-center my-3 border border fixed-bottom w-50"
                                    placeholder={`${country.name} Review`}
                                    text="text"
                                    onChange={(e)=>reviewHandler(e, country)}
                                    />
                            </div>
                            :null
                        }

                        <p>{country.population}</p>
                        <p>{country.alpha2Code}</p>
                        <p>{country.capital}</p>
                        <img style={{objectFit:"cover", height: "100px"}} src ={country.flag} alt=" country's flag"/>
                    </div>
                ))
            }
        </div>








    )
}

export default DisplayAll;