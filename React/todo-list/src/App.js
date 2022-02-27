import './App.css';
import React, {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';


function App() {

  const [todoList, setTodoList] = useState([]);



  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <Display todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
