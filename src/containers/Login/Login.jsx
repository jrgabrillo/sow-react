import React, { useState, useEffect } from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import bg from '../../assets/images/bg.jpg'
import eye from '../../assets/images/eye.png'

import styles from "./Login.style";

import Auth from '../../api/Auth';
const auth = new Auth();

export default function Login() {
    const [email, setEmail] = useState("rufo.gabrillo@gmail.com");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("password");
    const [passwordEye, setPasswordEye] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [loginMessage, setLoginMessage] = useState("Log In");

    useEffect(() => {
        // setEmail("");
        // setPassword("");

        auth.checkAuth();
    }, []);

    const togglePasswordEye = () => {
        setPasswordEye(prev => !prev);
    };

    const handleLogin = async () => {
        let proceed = true
        setLoginMessage('Loading...');

        if(!email){
            setEmailError("Email is required")
            proceed = false
        }

        if(!password){
            setPasswordError("Password is required")
            proceed = false
        }

        if(!proceed){
            setLoginError("Email or password is required")
        }

        let response = await auth.login(email, password);
        let { ok, user, token } = response;

        console.log(ok, response)

        if (ok) {
            // 1 hour token expiration
            document.cookie = `key=${token}; max-age=3600;`;
            sessionStorage.setItem('timein', Date.now());
            sessionStorage.setItem('user', JSON.stringify(user));

            window.location.assign("/dashboard/");
        }
        else {
            setLoginError('Login failed. Make sure username and/or password is correct. ');
        }
    }

    return (
        <div className="container">
            <div className="background">
                <img src={bg} alt="" className="bg" />
            </div>
            <Menu />
            <div className="content">
                <div style={styles.loginBox}>
                    <h2 style={styles.title}>Login</h2>
                    <section style={styles.section}>
                        <div style={{ paddingBottom: "1rem" }}>
                            <label className="title">Enter your email address</label>
                            <input style={styles.input} type="email" value={email} name="email" id="email" placeholder="Email address" onChange={ (e) => { setEmail(e.target.value);} }  />
                            <span className="error">{emailError}</span>
                        </div>
                        <div style={{ paddingBottom: "1rem" }}>
                            <label className="title">Enter your password</label>
                            <input style={styles.input} value={password} type={passwordEye ? "text" : "password"} name="password" id="password" placeholder="Password" onChange={ (e) => { setPassword(e.target.value);} } />
                            <img src={eye} style={{ width: "30px", float: "right", position: "relative", top: "-40px", right: "10px" }} onClick={togglePasswordEye} />
                            <span className="error">{passwordError}</span>
                        </div>
                        <div>
                            <button style={styles.button} onClick={() => { handleLogin() }}>Log in</button>
                            <div className="error center">{loginError}</div>
                        </div>
                        <div style={styles.boxFooter}>
                            <a href="#" className="link">Register</a>
                            <a href="#" className="link" style={{ textAlign: "right" }}>Forgotten password?</a>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
