import React, { useState } from "react";

import logo from '../assets/images/diamond.png'

export default function Menu() {
    return (
        <div className="menu">
            <div className="nav">
                <div className="logo">
                    <a href="/"><img src={logo} /></a>
                </div>
                <div className="links">
                    <a href="/" className="link">Home</a>
                    <a href="/" className="link">Order</a>
                    <a href="/" className="link">Our Customers</a>
                    <a href="/" className="link">About Us</a>
                    <a href="/" className="link">Contact Us</a>
                    <a href="/" className="link">Language</a>
                </div>
            </div>
        </div>
    );
}
