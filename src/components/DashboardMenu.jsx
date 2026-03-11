import React, { useState } from "react";

import logo from '../assets/images/diamond.png'
import sweden from '../assets/images/sweden-flag.png'
import brit from '../assets/images/brit-flag.png'

export default function DashboardMenu() {
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
        <div className="menu" style={{ background: "#137ee4", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 auto", padding: "1rem 2rem" }}>
            <div style={{ display: "flex", alignItems: "center" }} onClick={toggleMenu}>
                <a href="#">
                    <img src={logo} style={{ height: "2rem" }} />
                </a>
                <a href="#">
                    <p style={{margin: "0px"}}>Juan Dela Cruz</p>
                    <p style={{margin: "0px", fontSize: "12px"}}>Position</p>
                </a>
            </div>
            <div className="sub-menu" onClick={toggleLanguage}>
                <a href="#" className="link drop-down" style={{ color: "white", padding: "0px" }}>
                    English <img src={brit} alt="" className="flag" />
                </a>
                {showLanguage && <LanguageSelection />}
            </div>
        </div>
    );
}
