import {Link,useNavigate, useParams} from "react-router-dom";


const About = (props)=>{
    
    const navigate = useNavigate();
    const goHome = ()=>{
        navigate("/")
    }
    const {big} = useParams()



    return(
        <div>
            <button onClick={goHome}>Go Home Button</button>
            <h1 style={{color: "purple"}}>
                        About Component
                    </h1>
            {
                big?
                    <h1 style ={{color:"purple", fontSize: big + "px"}}>
                    </h1>
                    :
                    <h1 style={{color: "purple"}}>
                        About Component
                    </h1>
            }


            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default About;