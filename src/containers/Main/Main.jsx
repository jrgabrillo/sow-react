import React, { useState } from "react";
import styles from "./styles.module.css";

import Menu from "../../components/Menu";

export default function Main() {
    console.log("loaded")
    return (
        <div className="container">
            <Menu/>
            <div className="content"></div>
            <div className="footer"></div>
        </div>
    );
}
