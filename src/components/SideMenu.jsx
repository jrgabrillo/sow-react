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
        <div className={`sidenav links ${showMenu ? "show" : ""}`} style={{ float: "left", background: "white", height: "100%", boxShadow: "#0000001a 10px 0px 20px 0px", overflow: "scroll" }}>
            <p style={{color:"#000", borderBottom: "1px solid blue", margin: "0px 20px", textAlign: "center", fontSize: "20px"}}>Menu</p>
            <div style={{display: "flex", flexDirection: "column", margin: "0px 20px"}}>
                <a href="#" className="link">Invoices</a>
                <a href="#" className="link">Customers</a>
                <a href="#" className="link">My Business</a>
                <a href="#" className="link">Invoice Journal</a>
                <a href="#" className="link">Price List</a>
                <a href="#" className="link">Multiple Invoicing</a>
                <a href="#" className="link">Unpaid Invoices</a>
                <a href="#" className="link">Offer</a>
                <a href="#" className="link">Inventory Control</a>
                <a href="#" className="link">Member Invoicing</a>
                <a href="#" className="link">Import/Export</a>
                <a href="#" className="link">Logout</a>

            </div>
        </div>
    );
}
