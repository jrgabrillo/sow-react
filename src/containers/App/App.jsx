import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
