import './App.css';
import Main from './view/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOne from './components/DisplayOne';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/product/:id" element={<DisplayOne/>}/>
          <Route path="/product/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
