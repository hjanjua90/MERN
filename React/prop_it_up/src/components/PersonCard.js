import React from 'react'



const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;






    return (
        <div class="container">
            <h2> {lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>hair color: {hairColor}</p>
        </div>








    )










}
export default PersonCard;