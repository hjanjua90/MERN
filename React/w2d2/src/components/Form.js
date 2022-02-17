import React, {useState} from 'react'





const Form = (props) => {

    const[studentList, setStudentList] = useState ([])

    const[name, setName] = useState("");
    const[favStack, setFavStack] = useState("");
    const[tallClub, setTallClub] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();

        setStudentList([...studentList, {
            name: name,
            favStack: favStack,
            tallClub: tallClub
        }])

        setName("")

    }

    return (



        <div>

            <h1>Add a Student</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <lable>Name</lable>
                    <input onChange = {(e)=> {
                            console.log(e);
                            console.log(e.target);
                            console.log(e.target.value);
                            setName(e.target.value);
                        }} value={name} name="name" type="text"/>
                </p>
                <p>
                    <lable>Tall? (6ft +) </lable>
                    <input checked={tallClub} onChange={(e)=>setTallClub(!tallClub)} name="tallClub" type="checkbox"/>
                </p>
                <p>
                    <lable>Favorite Stack</lable>
                    <select onchange={(e)=> setFavStack(e.target.value)} value= {favStack} >
                        <option default> Make your selection </option>
                        <option value="mern">Mern</option>
                        <option value="python"> Python</option>
                        <option value="java">JAVA</option>
                        <option value="all">All</option>
                    </select>
                </p>

                <input type ="submit" value ="Add Student" />

            </form>


            {
                studentList.List.map((student, index)=>(
                    <div>
                        <p>Name: {student.name}</p>
                        <p>Tall Club: {student.tallClub}</p>
                        {
                            tallClub? 
                            <p>You are tall</p>
                            : <p>Sorry you are short</p>
                        }
                        
                    </div>
                ))
            }

        </div>

    )



}

export default Form;