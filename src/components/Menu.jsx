import React, { useState } from "react";

import logo from '../assets/images/diamond.png'
import sweden from '../assets/images/sweden-flag.png'
import brit from '../assets/images/brit-flag.png'

export default function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    // event for the humberger icon to toggle the menu
    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    // event for the language selection 
    const toggleLanguage = () => {
        console.log(showLanguage)
        setShowLanguage(prev => !prev);
    };

    // language menu
    const LanguageSelection = () => {
        return (
            <div className="selection">
                <a href="#" className="link">Svenska <img src={sweden} alt="" className="flag" /></a>
                <a href="#" className="link">English <img src={brit} alt="" className="flag" /></a>
            </div>
        )
    }

    return (
        <div className="menu">
            <div style={{display: "flex", justifyContent: "space-between", width: "75%", margin: "0 auto", padding: "2.5rem 0rem"}}>
                <div className="logo" onClick={toggleMenu}>
                    <a href="/"><img src={logo}  style={{height: "2rem"}} /></a>
                    <a href="#" className="icon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="navigation-svg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                        </svg>
                    </a>
                </div>
                <div className={`links ${showMenu ? "show" : ""}`} style={{display: "flex"}}>
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Order</a>
                    <a href="#" className="link">Our Customers</a>
                    <a href="#" className="link">About Us</a>
                    <a href="#" className="link">Contact Us</a>
                    <div className="sub-menu" onClick={toggleLanguage}>
                        <a href="#" className="link drop-down" style={{ color: "white", padding: "0px" }}>
                            English <img src={brit} alt="" className="flag" />
                        </a>
                        {showLanguage && <LanguageSelection />}
                    </div>
                </div>
                <div className="sub-menu mobile" onClick={toggleLanguage}>
                    <a href="#" className="link drop-down" style={{ color: "white", padding: "0px" }}>
                        English <img src={brit} alt="" className="flag" />
                    </a>
                    {showLanguage && <LanguageSelection />}
                </div>
            </div>
        </div>
    );
}
