import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import{ useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Style.css'

const Register = () => {
    const [userData,setUserData] = useState();
    const router = useNavigate();
    useEffect(()=>{
        console.log(userData,"userData updated!");
        if(userData){
            const toStoreUserData = JSON.stringify(userData);
            localStorage.setItem("userData",toStoreUserData);
            toast.success("submit");
            console.log("userData",toStoreUserData);
        }
    },[userData]);
    useEffect(()=>{
        const localStorageData= JSON.parse(localStorage.getItem("isUserLoggedIn"));
        if(localStorageData){
            router('/');
        }
    },[]);
    function submitHandle(e){
        e.preventDefault();
        setUserData({name:"Revati",email:"revatijadhav88@gmail.com",password:"123"});
    }
  return (
    <div id='Register1'>
        <h1>Register</h1>
        <form onSubmit={submitHandle}>
            <label>--Name--</label><br></br>
            <input type='text' placeholder="Enter your Name"/><br></br>
            <label>--Email--</label><br></br>
            <input type='email' placeholder='Enter your Email'/><br></br>
            <label>--Password--</label><br></br>
            <input type='password' placeholder='Enter your Password'/><br></br><br></br>
            <input type ='submit'/><br></br>
        </form><br></br>
        <a href='./Login'>Already User?</a>
    </div>
  )
}

export default Register;

