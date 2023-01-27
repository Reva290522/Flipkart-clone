import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => { 
    const [logInData,setlogInData] = useState();
    const router = useNavigate();
    console.log(logInData,"logInData here");

    useEffect(()=>{
        if(logInData){
            const registeredData = JSON.parse(localStorage.getItem("userData"));
            if(registeredData){
                if(registeredData.email===logInData.email && registeredData.password===logInData.password){
                    router('./');
                    localStorage.setItem("isUserLoggedIn","true")
                    toast.success("Login Successful");
                }else{
                    toast.error("Enter correct Data");
                }
            }else{
                toast.error("Register first")
            }
        }
    },[logInData]);
    useEffect(()=>{
        const localStorageData = JSON.parse(localStorage.getItem("isUserLoggedIn"));
        if(localStorageData){
            router('/');
        }
    },[])
    const submitHandle = (e)=>{
        e.preventDefault();
        setlogInData({email:"revatijadhav88@gmail.com",password:"123"});
    }
    return(
        <div id="Login1">
            <h1>Login </h1>
            <form onSubmit={submitHandle}>
                <label>--Email--</label><br></br>
                <input type='email' placeholder="Enter your Email"/><br></br>
                <label>--Password--</label><br></br>
                <input type='password' placeholder="Enter your Password"/><br></br><br></br>
                <input type='submit'/><br></br>
            </form><br></br>
            <a href='./Register'>Register</a>
        </div>
    )
}
export default Login;