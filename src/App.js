import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home'  
import Product from './components/Product'
import Cart from './components/Cart';
import Wishlist from './components/Wishlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path = '/register' element={<Register/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/product' element = {<Product/>}/>
      <Route path ='/Cart' element = {<Cart/>}/>
      <Route path ='/Wishlist'element = {<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
