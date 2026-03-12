import React, { useState, useEffect } from "react";

import Menu from "../../components/DashboardMenu";
import SideNav from "../../components/SideMenu";
import Table from "../../components/Table";

import printing from '../../assets/images/printing.png'
import search from '../../assets/images/search.png'
import add from '../../assets/images/add.png'

import Handsontable from 'handsontable';
import { HotTable, HotColumn } from '@handsontable/react-wrapper';

import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';

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

    useEffect(() => {
        console.log("test")

    }, [priceList])

    return (
        <>
            <Menu />
            <SideNav />
            <div className="container" style={{ background: "#fff", height: "100%", color: "#000", padding: "0px 0px 0px 210px" }}>
                <div style={{ padding: "20px 50px", display: "flex", justifyContent: "space-between" }}>
                    <div className="filters" style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "flex-end" }}><input type="text" placeholder="Search Article No." /><img style={{ width: "25px" }} src={search} alt="" /></div>
                        <div style={{ display: "flex", alignItems: "flex-end" }}><input type="text" placeholder="Search Product" /><img style={{ width: "25px" }} src={search} alt="" /></div>
                    </div>
                    <div className="actions" style={{ display: "flex", flexDirection: "row" }}>
                        <input type="button" value="New Product" />
                        <input type="button" value="Print List" />
                        <input type="button" disabled value="Advanced Mode" />
                    </div>
                </div>
                <div style={{ padding: "0px 50px", display: "flex", justifyContent: "space-between"  }}>
                    <Table data={priceList} callback={(data) => {console.log(data)}}/>
                </div>
            </div>
        </>
    );
}
