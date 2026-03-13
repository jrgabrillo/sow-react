import React, { useState } from "react";

import avatar from '../assets/images/avatar.png'
import sweden from '../assets/images/sweden-flag.png'
import brit from '../assets/images/brit-flag.png'

export default function DashboardMenu({ callback }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    // event for the humberger icon to toggle the menu
    const toggleMenu = () => {
        setShowMenu(prev => !prev);
        callback(showMenu)
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
            <div className="avatar" style={{ display: "flex", alignItems: "center" }}>
                <a href="#">
                    <img src={avatar} style={{ height: "4rem" }} />
                </a>
                <a href="#" style={{ margin: "0px" }}>
                    <p style={{ margin: "0px" }}>Juan Dela Cruz</p>
                    <p style={{ margin: "0px", fontSize: "12px" }}>Position</p>
                </a>
            </div>
            <a href="#" className="mobile-menu" onClick={toggleMenu}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="navigation-svg" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                </svg>
            </a>

            <div className="sub-menu" onClick={toggleLanguage}>
                <a href="#" className="link drop-down" style={{ color: "white", padding: "0px" }}>
                    English <img src={brit} alt="" className="flag" />
                </a>
                {showLanguage && <LanguageSelection />}
            </div>
        </div>
    );
}
