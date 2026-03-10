import React, { useState } from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="section">
                <div className="logo">
                    <div className="left">123 Fakturera</div>
                </div>
                <div className="links">
                    <a href="/" className="link">Home</a>
                    <a href="/" className="link">Order</a>
                    <a href="/" className="link">Contact Us</a>
                </div>
            </div>
            <div className="copy-right"><p>© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </p></div>
        </div>
    );
}
