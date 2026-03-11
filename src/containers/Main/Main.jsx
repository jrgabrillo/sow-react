import React, { useState } from "react";
import Menu from "../../components/DashboardMenu";
import SideNav from "../../components/SideMenu";

export default function Main() {
    return (
        <>
            <Menu />
            <SideNav />
            <div className="container" style={{background: "#fff", height: "100%", color: "#000", padding: "10px 10px 10px 150px"}}>
                contents here
            </div>
        </>
    );
}
