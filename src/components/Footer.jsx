import React, { useState } from "react";

export default function Footer() {
    return (
        <div className="footer" style={{bottom: "0px", width: "90%", margin: "0 auto", padding: "10px 0px"}}>
            <div className="section" style={{display: "flex", justifyContent: "space-between"}}>
                <div className="logo">
                    <div className="left">123 Fakturera</div>
                </div>
                <div className="links">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Order</a>
                    <a href="#" className="link">Contact Us</a>
                </div>
            </div>
            <div className="copy-right" style={{width: "100%"}}><p style={{textAlign: "center"}}>© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </p></div>
        </div>
    );
}
