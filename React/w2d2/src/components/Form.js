import React, {useState} from 'react'





const Form = (props)=>{

    //Because our state is lifted, we will no longer be setting state in this child component. 
        //Both Form AND Display need access to this state's getter and setter,
    //So we initialize state in our useState hook in the App.js parent 
        //component and pass the getter/setter methods down via props!
    //const [ studentList, setStudentList ] = useState([]);
    
    //Instead, will destructure the getter and setter from props using the keys (studentList, setStudentList)
        //which will allow us to use these as variables (syntactically the same as if we had our useState hook here)
    const {studentList, setStudentList} = props;

    const [name, setName] = useState("");

    const [favStack, setFavStack] = useState("");

    const [tallClub, setTallClub] = useState(false);


    const submitHandler = (e) =>{
        e.preventDefault();

        if(name.length <3 || favStack === ""){
            setErrorMsg("Your form has unresolved Issues!")
        }
        else{
            setStudentList([...studentList,
            {
                name:name,
                favStack:favStack,
                tallClub:tallClub,
                id:Math.floor(Math.random()*1000).toString()
            }
        ])
        }
        
        setStudentList([...studentList, 
        {
            name: name,
            favStack: favStack,
            tallClub: tallClub
        }
        ])

        //These setters will clear out our inputs so that the previously typed info doesn't stay in there
        //NOTE: THIS ONLY WORKS IF THE VALUE PROPERTY ON THE INPUTS ARE SET TO = THE GETTER
            //Example: value={favStack}
        setName("");
        setFavStack("");
        setTallClub(false);
    }

    return(
        <div>
            <h1>Add a Student!</h1>

            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label>Name: </label>
                    <input 
                    //The event object is created when an event happens in JS/React.
                    //We pass in the event object itself as a parameter
                    //This event's target is this input, which has a property of value.
                    //The target's (input's) value is what the user types into that input.
                    onChange={(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setName(e.target.value);
                    }} 
                    //We can create just fine without this, but it is necessary to clear our form!
                    value={name}
                    type="text" />

                    {
                        name.length > 0 && name.length < 3?
                        <p>You name must be at least 3 characters long!</p>
                        :null
                    }

                </div>

                <div>
                    <label>Tall Club?</label>
                    <input type="checkbox" 
                    onChange={(e)=>{
                        console.log(e.target);
                        setTallClub(!tallClub);
                    }}
                    //Notice how we use the checked property instead of value.
                    //For checkboxes, the value property will be "on/off" rather than true/false.
                    //The checked is true/false as we expect!
                    checked={tallClub}
                    />
                </div>

                <div>
                    <label>Fav Stack:</label>
                    <select
                        onChange={(e) => setFavStack(e.target.value)}
                        value={favStack}
                    >
                        <option default>Make Your Selection</option>
                        <option value="mern">MERN</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="all">All</option>
                    </select>
                </div>

                <button>Add a student</button>
            </form>


            {/* We want to make our components do only what they are meant to do! 
            A form creates, it doesn't display what it creates! 
            So we will put this in the Display component where it belongs.
            */}

            {/* {
            studentList.map((student, index) => (
                <div key={index}>
                    <p>Name: {student.name}</p>
                    <p>Fav Stack: {student.favStack}</p>
                    {
                        student.tallClub? //if you are in the tallClub
                        <p>You are tall!</p>
                        : <p>Sorry shawty!!!</p>
                    }
                </div>
            ))
            } */}
        

        </div>
    )

}


export default Form;