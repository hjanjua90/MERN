import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route element={<Home/>} path ="/home"/>
        <Route element={<ParamsComponent/>} path="/:word"/>
        <Route element={<ParamsComponent/>} path="/:word/:color/:bgCol"/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
