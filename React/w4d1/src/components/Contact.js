import {Link} from "react-router-dom";




const Contact = (props)=>{


    return(
        <div>
            <h1 style={{color: "yellow"}}>
                Contact Component
            </h1>
            <hr/>
            <Link to={"/"}>Home</Link>

        </div>
    )
}

export default Contact;