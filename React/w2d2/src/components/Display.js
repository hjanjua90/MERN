import React, {useState} from 'react'

const Display = (props) => {

    //Because our state is lifted (i.e. set up in a common parent), any change to
        //state that occurs in the form is available to be displayed here!
    const {studentList, setStudentList} = props;


    const deleteStudentById=(idFromBelow)=>{
        setStudentList (studentList.filter((student, index)=>student.id !== idFromBelow))
    };

    return (
        <div> 
            <h1>Display All Students!!!</h1>

            {
                studentList.map((student, index) => {
                    return (
                        <div key={index}>
                            <p>{student.name}</p>
                            <p>{student.favStack}</p>

                            {
                                student.tallClub ?
                                    <p>Welcome to the tall club!!!</p>
                                    : <p>Sorry shortie!!!</p>
                            }
                            <button onClick={()=>deleteStudentById(student.id)}>
                                Delete
                            </button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Display;