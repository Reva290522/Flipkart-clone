import React from "react";
import Flipkart from './Flipkart.png';
import { useState } from "react";
import userContext from "./userContext";
import { useEffect } from "react";
import { toast } from "react-hot-toast";


const Header = ()=>{   
   const[userName,setUsername] = useState()
    useEffect(()=>{
        const dbUser = JSON.parse(localStorage.getItem("userData"));
        if(dbUser){
            setUsername(dbUser. name)
        }
    },[])

    function logOut(){
        localStorage.removeItem("userData");
        localStorage.removeItem("isUserLoggedIn");
        localStorage.removeItem("cartProducts");
        setUsername("");
        toast.success("logout successfull");
    }
    return(
        <div id='headerMain' >
            <div>
                <img id="logo"src={Flipkart} alt="logo"/></div>
            
                <input id='search'type='text'placeholder="Search for Products and Brands "/>
            
                <button id="log">Login</button>
            <div id="sell">Became a Seller</div>
            <div id="more">More
            <i class="fa-solid fa-chevron-down"></i>
                </div> 
            <div id="cart"><i class="fa-solid fa-cart-shopping"></i>
            <a href='./Cart'>cart</a>
            </div>
            <div id="Reav">{userName ? userName:"profile"}</div>
            <div id="out"style={{cursor:"pointer"}} onClick={logOut}>{userName ? "LogOut":""}</div>
        
        </div>
    )
}
export default Header;