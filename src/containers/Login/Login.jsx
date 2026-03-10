import React, { useState } from "react";
import styles from "./styles.module.css";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import bg from '../../assets/images/bg.jpg'

export default function Login() {
    return (
        <div className="container">
            <div className="background">
                <img src={bg} alt="" className="bg" />
            </div>
            <Menu/>
            <div className="content">
                <form className="login-box" noValidate="" autoComplete="off">
                    <h2 className="title">Login</h2>
                    <section>
                        <div className="email">
                            <label className="title">Enter your email address</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="password">
                            <label className="title">Enter your password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div><button className="login">Log in</button></div>
                        <div className="box-footer">
                            <a href="/" className="register">Register</a>
                            <a href="/" className="forgot-password">Forgotten Password?</a>
                        </div>
                    </section>
                </form>
            </div>
            <Footer/>
        </div>
    );
}
