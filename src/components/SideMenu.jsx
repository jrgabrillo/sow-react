import React, { useState } from "react";

import invoices from '../assets/images/invoices.png'
import customers from '../assets/images/customers.png'
import my_business from '../assets/images/my_business.png'
import invoice_journal from '../assets/images/invoice_journal.png'
import price_list from '../assets/images/price_list.png'
import multiple_invoicing from '../assets/images/multiple_invoicing.png'
import unpaid_invoices from '../assets/images/unpaid_invoices.png'
import offer from '../assets/images/offer.png'
import inventory_control from '../assets/images/inventory_control.png'
import member_invoicing from '../assets/images/member_invoicing.png'
import import_export from '../assets/images/import.png'
import logout from '../assets/images/logout.png'
import sweden from '../assets/images/sweden-flag.png'
import brit from '../assets/images/brit-flag.png'

export default function DashboardMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    // event for the humberger icon to toggle the menu
    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    // event for the language selection 
    const toggleLanguage = () => {
        console.log(showLanguage)
        setShowLanguage(prev => !prev);
    };

    // language menu
    const LanguageSelection = () => {
        return (
            <div className="selection">
                <a href="#" className="link"> Svenska <img src={sweden} alt="" className="flag" /></a>
                <a href="#" className="link"> English <img src={brit} alt="" className="flag" /></a>
            </div>
        )
    }

    return (
        <div className={`sidenav links ${showMenu ? "show" : ""}`} style={{ float: "left", background: "white", height: "100%", boxShadow: "#0000001a 10px 0px 20px 0px", overflow: "scroll" }}>
            <p style={{color:"#000", borderBottom: "1px solid blue", margin: "10px 20px", textAlign: "center", fontSize: "20px"}}>Menu</p>
            <div style={{display: "flex", flexDirection: "column", margin: "0px 20px 20px 20px"}}>
                <a href="#" className="link"><span className="indicator"></span> <img src={invoices} className="icon" />Invoices</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={customers} className="icon" />Customers</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={my_business} className="icon" />My Business</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={invoice_journal} className="icon" />Invoice Journal</a>
                <a href="#" className="link"><span className="indicator active"></span> <img src={price_list} className="icon" />Price List</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={multiple_invoicing} className="icon" />Multiple Invoicing</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={unpaid_invoices} className="icon" />Unpaid Invoices</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={offer} className="icon" />Offer</a>
                <a href="#" className="link disabled"><span className="indicator"></span> <img src={inventory_control} className="icon" />Inventory Control</a>
                <a href="#" className="link disabled"><span className="indicator"></span> <img src={member_invoicing} className="icon" />Member Invoicing</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={import_export} className="icon" />Import/Export</a>
                <a href="#" className="link"><span className="indicator"></span> <img src={logout} className="icon" />Logout</a>

            </div>
        </div>
    );
}
