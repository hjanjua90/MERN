import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:big" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>

    </BrowserRouter>

  );
}

export default App;
