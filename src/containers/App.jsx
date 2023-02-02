import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import AltaProducto from '../pages/AltaProducto';

function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/AltaProducto' element={<AltaProducto/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;