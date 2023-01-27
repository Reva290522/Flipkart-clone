import React from "react";
import Header from './Header'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () =>{
    const[name,setName] = useState();
    const[product,setProduct]= useState();
    const router = useNavigate();
    useEffect(()=>{
        var userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData,"userData here");
        if(userData){
            setName(userData.name);
            setProduct(userData.products);
        }else{
            router('/login');
        }
    },[])
    async function getData(){
        const {data}= await axios.get("https://fakestoreapi.com/products");
        console.log(data,"data here")
    }
    return(
        <div>
            <Header/>
            <div id="HomeMain">
                <div>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png? 
                     q=100"/>
                    <a id="second"href="./Product">Grocery</a>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png? 
                    q=100"/>
                    <a href="./Product">Mobiles</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png? 
                    q=100"/>
                    <a href="./Product">Fashion</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png? 
                    q=100"/>
                    <a href="./Product">Electronics</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg? 
                    q=100"/>
                    <a href="./Product">Home</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?
                    q=100"/>
                    <a href="./Product">Appliances</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?
                    q=100"/>
                    <a href="./Product">Travel</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png? 
                     q=100"/>
                     <a href="./Product">Top Offers</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png? 
                     q=100"/>
                     <a id="second" href="./Product">Beauty & Toys</a>
                </div>
                <div>
                    <img id="first"src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"/>
                     <a id="second" href="./Product">Two Wheelers</a>
                </div>
            </div>
            <div id="body">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c1849242edab16a3.jpg?q=50"/>
            </div>
            <div id="view">
                <div>
                <h2>Best of electronics</h2>
                <button>view all</button>
                </div>
                <div>
                    <img className="end"src="https://rukminim1.flixcart.com/image/400/400/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70"/>
                    <h4>Top mirrorless camera</h4>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/image/400/400/ke4kjgw0/printer/f/x/7/brother-dcp-b7500d-original-imafuvbyfgt5p9fr.jpeg?q=70"/>
                    <h4>Printers</h4>
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/image/400/400/xif0q/monitor/r/9/b/va2215-h-full-hd-21-5-va2215-h-viewsonic-original-imaghevavzjwxfhm.jpeg?q=70"/>
                    <h4>Moniter</h4>
                </div>
            </div>
            {/* <button onClick={route{/Product}}><button></button> */}
        </div>
    )
}
export default Home;