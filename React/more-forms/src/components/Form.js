import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    const formDataDivStyle ={
        textAlign: "left",
        width: "450px",
        margin: "auto",
    }


    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }






    return (

        <div>
            <form style ={{marginTop: "20px"}}>
                <div style={inputDataDivStyle}>
                    <label>First Name</label>
                    <input
                    type="text"
                    name="firstName"
                    onChange={(e => setFirstName(e.target.value))}
                    />
                    {
                        firstName.length > 0 && firstName.length < 2?
                        <p>First Name must be at least two characters long</p>
                        : null
                    } 
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                    type="text"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    />
                        {
                        lastName.length > 0 && lastName.length < 2?
                        <p>Last Name must be at least two characters long</p>
                        : null
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input
                    onChange={
                        (e)=>setEmail(e.target.value)
                    }
                    name="email"
                    type="email"
                    />
                    {
                        email.length < 5 ? 
                        <p>Email must be at least 5 characters long</p>
                        : null
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        password.length < 8 ? (
                            <p>Password must be at least 8 characters long</p>
                        )
                        : null
                    }
                </div>
                <div>
                <label>Confirm Password</label>
                    <input
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        confirmPassword !== password ?
                        <p>Passwords must match </p>
                        : null
                    }
                </div>
            </form>


            <div style ={formDataDivStyle}>
                <h3 style={{textAlign:'center'}}>Form Data</h3>
                <p>
                    <label>First Name: </label> { firstName}
                </p>
                <p>
                    <label>Last Name: </label> {lastName}
                </p>
                <p>
                    <label>Email: </label> {email}
                </p>
                <p>
                    <label>Password: </label> {password}
                </p>
                <p>
                    <label> Confirm Password</label> {confirmPassword}
                </p>



            </div>




        </div>




    )




}



export default Form; 