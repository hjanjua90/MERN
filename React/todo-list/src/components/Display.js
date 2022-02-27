import React, {useState} from 'react';


const Display = (props)=>{

    const {todoList, setTodoList} = props;
    const deleteButton = (idFromBelow) =>{
        setTodoList(todoList.filter((todo, index)=> todo.id !== idFromBelow));
    }
    const completed = (todo)=>{
        todo.markedDelete = !todo.markedDelete;
        setTodoList([...todoList]);
    }

    const styled = (markedDelete)=>{
        if(markedDelete === true){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }


    return(
        <div>
            {
                todoList.map((todo, index)=>(
                    <div key ={index}> 
                        <p className={styled(todo.markedDelete)}>{todo.todoText}
                        <input onClick={()=>completed(todo)} type="checkbox" />
                        <button onClick={()=>deleteButton(todo.id)}>Delete</button>
                        </p>
                    </div>
            ))
            }

        </div>
    )
}

export default Display;