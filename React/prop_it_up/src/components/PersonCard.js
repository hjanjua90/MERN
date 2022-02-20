import React, {useState} from 'react'



const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(age);
    






    return (
        <div class="container">
            <h2> {props.lastName}, {props.firstName}</h2>
            <p>Age: {currentAge}</p>
            <button onClick={()=> setCurrentAge(currentAge +1)}> Birthday Button </button>
            <p>hair color: {props.hairColor}</p>
        </div>








    )










}
export default PersonCard;