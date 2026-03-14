import React, { useState, useEffect } from "react";

import Menu from "../../components/DashboardMenu";
import SideNav from "../../components/SideMenu";
import Table from "../../components/Table";

import printing from '../../assets/images/printing.png'
import search from '../../assets/images/search.png'
import add from '../../assets/images/add.png'
import toggle from '../../assets/images/toggle-button.png'

var data = [
    {
        article_no: "1",
        product: "product1",
        price: 100,
        in_price: 100,
        unit: 100,
        in_stock: 100,
        description: 100
    },
    {
        article_no: "2",
        product: "product2 product2pr oduct2prod uct2product2product 2product2product2",
        price: 100,
        in_price: 100,
        unit: 100,
        in_stock: 100,
        description: 100
    },
    {
        article_no: "3",
        product: "product3",
        price: 100,
        in_price: 100,
        unit: 100,
        in_stock: 100,
        description: 100
    }
]

export default function Main() {
    const [priceList, setPriceList] = useState(data);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        console.log("test")
    }, [showMenu])

    return (
        <>
            <Menu callback={(nav) => { setShowMenu(nav) }} />
            <SideNav show={showMenu} />
            <div className="container" style={{ background: "#fff", height: "100%", color: "#000", padding: "0px", overflow: "scroll" }}>
                <div className="filters-actions" style={{ padding: "20px 50px", display: "flex", justifyContent: "space-between" }}>
                    <div className="filters" style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "flex-end" }}><input type="text" placeholder="Search Article No." className="search-filter" /></div>
                        <div style={{ display: "flex", alignItems: "flex-end" }}><input type="text" placeholder="Search Product" className="search-filter" /></div>
                    </div>
                    <div className="actions" style={{ display: "flex", flexDirection: "row" }}>
                        <button>
                            <span>New Product</span>
                            <img src={add} alt="new product icon" width="25px" />
                        </button>
                        <button>
                            <span>Print List</span>
                            <img src={printing} alt="print icon" width="25px" />
                        </button>
                        <button disabled>
                            <span>Advanced Mode</span>
                            <img src={toggle} alt="print icon" width="25px" />
                        </button>
                    </div>
                </div>
                <div className="table" style={{ padding: "0px 50px 100px 50px", display: "flex", justifyContent: "space-between" }}>
                    <Table data={priceList} callback={(data) => { console.log(data) }} />
                </div>
            </div>
        </>
    );
}
