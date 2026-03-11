import React, { useState } from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import bg from '../../assets/images/bg.jpg'
import eye from '../../assets/images/eye.png'

import styles from "./Login.style";

export default function Login() {

    return (
        <div className="container">
            <div className="background">
                <img src={bg} alt="" className="bg" />
            </div>
            <Menu/>
            <div className="content">
                <form style={styles.loginBox} noValidate="" autoComplete="off">
                    <h2 style={styles.title}>Login</h2>
                    <section style={styles.section}>
                        <div style={{paddingBottom: "1rem"}}>
                            <label className="title">Enter your email address</label>
                            <input style={styles.input} type="email" name="email" id="email" placeholder="Email address"/>
                        </div>
                        <div style={{paddingBottom: "1rem"}}>
                            <label className="title">Enter your password</label>
                            <input style={styles.input}  type="password" name="password" id="password" placeholder="Password" />
                            <img src={eye} style={{width: "30px", float: "right", position: "relative", top: "-40px", right: "10px"}} />
                        </div>
                        <div><button style={styles.button}>Log in</button></div>
                        <div style={styles.boxFooter}>
                            <a href="#" className="link">Register</a>
                            <a href="#" className="link" style={{textAlign: "right"}}>Forgotten password?</a>
                        </div>
                    </section>
                </form>
            </div>
            <Footer/>
        </div>
    );
}
