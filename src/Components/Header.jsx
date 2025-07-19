import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

const Header =()=>{
    return(
        <>
        <div id="parent"  >
    <header>
        <div style="width: 40%">
            <img src="logo2.png" width="150"/>
        </div>

        <div id="header-second">
            <link to="/index">Home</link>
            <link to="/About">About</link>
            <link to="/Classes">Classes</link>
            <link to="/Work">Art Work</link>
            <link to="/Contact">Contact</link>
         
            <img src="/search-logo.png" width="30"/>
            <img src="/menu-logo.png" width="30"/>
        </div>
        
    </header>
    </div>
    </>

    );
};
export default Headee;