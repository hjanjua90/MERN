import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';
import Header from './components/Header';

function App() {



    //we set up our state here (This is "listed state") because we want the useState hooks getter and/or setter to be
    //available to both Child components - Form and Display
    //The state lives here!
    const [studentList, setStudentList] = useState([]);

    return (
      <div className="App">
        <Header/>
        {/* We pass down our getter/setter methods using props
        We can destructure those keys from the props object in the child components
        and use the keys as a variable that has the value of the methods themselves! */}
        <Form 
        studentList={studentList}
        setStudentList={setStudentList}
        />
        {/* Any change that happens, via the setter, in the Form, is accessible here as well because we passed the getter down! */}
        <Display 
        studentList={studentList}
        setStudentList={setStudentList}
        />
      </div>
    );
  }

export default App;
