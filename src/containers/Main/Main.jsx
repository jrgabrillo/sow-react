import React, { useState } from "react";
import Menu from "../../components/DashboardMenu";
import SideNav from "../../components/SideMenu";

import printing from '../../assets/images/printing.png'
import search from '../../assets/images/search.png'
import add from '../../assets/images/add.png'

export default function Main() {
    return (
        <>
            <Menu />
            <SideNav />
            <div className="container" style={{ background: "#fff", height: "100%", color: "#000", padding: "0px 0px 0px 210px" }}>
                <div style={{ padding: "20px 50px", display: "flex", justifyContent: "space-between" }}>
                    <div className="filters" style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{display: "flex", alignItems: "flex-end"}}><input type="text" placeholder="Search Article No." /><img style={{width: "25px"}} src={search} alt="" /></div>
                        <div style={{display: "flex", alignItems: "flex-end"}}><input type="text" placeholder="Search Product" /><img style={{width: "25px"}} src={search} alt="" /></div>
                    </div>
                    <div className="actions" style={{ display: "flex", flexDirection: "row" }}>
                        <button>New Product</button>
                        <button>Print List</button>
                        <button>Advanced Mode</button>
                    </div>
                </div>
                <div style={{ padding: "0px 50px" }}>table</div>
            </div>
        </>
    );
}
