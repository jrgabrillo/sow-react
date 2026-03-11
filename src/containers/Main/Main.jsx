import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

import Menu from "../../components/DashboardMenu";
import SideNav from "../../components/SideMenu";

import printing from '../../assets/images/printing.png'
import search from '../../assets/images/search.png'
import add from '../../assets/images/add.png'

var data = [
    {
        id: "2",
        name: "product1",
        price: 100
    }
]


export default function Main() {
    const [priceList, setPriceList] = useState(data);

    useEffect( () => {
        console.log("test")
        let table = new DataTable('#price-list', {
            columns: [
                { title: "ID", data: "id" },
                { title: "Name", data: "name" },
                { title: "Price", data: "price" }
              ],
            data: priceList,
            paging: false,
            searching: false
        });

        return () => {
            table.destroy(); // cleanup when component rerenders
          };
    }, [priceList] )

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
                        <button>New Product</button>
                        <button>Print List</button>
                        <button>Advanced Mode</button>
                    </div>
                </div>
                <div style={{ padding: "0px 50px" }}>
                    <table  className="display" id="price-list">
                    </table>
                </div>
            </div>
        </>
    );
}
