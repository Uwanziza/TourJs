import React from "react";
import Home from "../view/Home";
import './header.css';
import logo from '../Assets/images.jpg'
const Header=()=>{
    return(
<div class='header-container'>
    <div class='Logo'>
        <img src={logo}/>
        </div>
        <div class='topnav'>
            <a href='/tour'>Tour</a>
            <a href='*'>Contact</a>
            <a href='*'>AboutUs</a>
            <a href='/CreateAccount'>Create Account</a>
            <a href='/Home'>Home</a>

        </div>
</div>
    )
}
export default Header;