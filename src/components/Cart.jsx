import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CartHeader from './CartHeader';
import './Header.css'

const Cart = () => {
    const [cartProducts,setCartProducts] = useState();
    const router = useNavigate();

    useEffect(()=>{
        const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"));
        if( cartProFromStorage){
            setCartProducts(cartProFromStorage);
        }else{
            toast.error("No products found");
        }
    },[]);

    useEffect(()=>{
        const isUserLoggedIn= JSON.parse(localStorage.getItem("userData"));
        if(!isUserLoggedIn){
            router("/Login");
        }
    },[])
    function deleteProduct(e){
        const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"));
        var newArray = [];
        for(var i=0; i< cartProFromStorage.length; i++){
            if(e.image !== cartProFromStorage[i].image){
                newArray.push(cartProFromStorage[i]);
            }
        }
        localStorage.setItem("cartProducts",JSON.stringify(newArray));
        setCartProducts(newArray);
        toast.success("product deleted")
    }
  return (
    <div>
        <CartHeader/>
        <div id='top'>
            <div id='right'><a href='./'>Flipkart</a></div>
            <div id='left'><a href='./Product'>Grocery</a></div>
        </div>
        {cartProducts && cartProducts.map((e,i)=>(
            <div id='add' key={i}>
                <img src={e.image} alt='img'/>
                <button id='delete'onClick={()=> deleteProduct(e)}>Delete</button>
                <button id='buy'>Buy Now</button>
                </div>
        ))}
        </div>
  )
}

export default Cart;