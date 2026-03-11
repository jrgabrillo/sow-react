import React, { useState } from "react";
import Menu from "../../components/Menu";

export default function Main() {
    return (
        <div className="container">
            <Menu/>
            <div className="content"></div>
            <div className="footer"></div>
        </div>
    );
}
