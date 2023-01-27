import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CartHeader from './CartHeader';
import './Wishlist.css'

const Wishlist = () => {
    const[wishlistProducts,setWishlistProducts] = useState();

    useEffect(()=>{
        const proFromLocalStorageForWishlist =JSON.parse(localStorage.getItem("wishlistProducts"));
        setWishlistProducts(proFromLocalStorageForWishlist);
    },[])
  return (

    <div>
        <CartHeader/>
        <h1 id='head'>wishlist page</h1>
        {wishlistProducts && wishlistProducts.map((e,i)=>(
            <div id='main' key={i}>
                <img id='img'src={e.image}/>
                <p >{e.title}</p>
                <p>{e.price}</p>
                </div>
        ))}
    </div>
  )
}

export default Wishlist