import React from 'react';
import Flipkart from './Flipkart.png';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const CartHeader = () => {
    const router = useNavigate();

  return (
    <div id='headerMain1'>
        <div>
             <img id="logo1"src={Flipkart} alt="logo"/></div>
            
            <input id='search1'type='text'placeholder="Search for Products and Brands "/>

            <button id='Back1'onClick={()=>router("/Product")}>Back</button>

        
            <button id="log1">Login</button>
        
    </div>
  )
}

export default CartHeader