import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { toast } from "react-hot-toast";

const Product = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        async function gettingData() {
            const { data } = await axios.get("https://fakestoreapi.com/products");
            console.log(data, "data here");
            setMovies(data);
        }
        gettingData();
    }, [])

    function addToCart(e){
        console.log(e)
        var proFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts"))||[];
        proFromLocalStorage.push(e)
        localStorage.setItem("cartProducts",JSON.stringify(proFromLocalStorage));
        toast.success("product added");
    }

    function addToWishlist(e){
        console.log(e)
        const proFromLocalStorageForWishlist =JSON.parse(localStorage.getItem("wishlistProducts"))||[];
        proFromLocalStorageForWishlist.push(e)
        localStorage.setItem("wishlistProducts",JSON.stringify(proFromLocalStorageForWishlist));
        toast.success("product added to wishlist");
    }
    return (
        
        <div>
            <Header/>
            <h1>Products</h1>
            <div id="mainDiv">
                <div id="leftDiv">Filter</div>
                <div id="rightDiv">
                    {movies && movies.map((e, i) => (
                        <div key={i} id="topDiv">
                            <div id="pro">
                                <img src={e.image} />
                            </div>
                                <div id="stuff">
                                <p>Title:{e.title}</p>
                                <p>Price:{e.price}</p>
                                <button onClick={()=>addToCart(e)}>Add to Cart</button>
                                <button onClick={()=>addToWishlist(e)}>Add to Wishlist</button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Product;