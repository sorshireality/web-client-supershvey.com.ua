import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import Menu from "../components/Admin/Menu";
import Content from "../components/Admin/Content";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Admin() {

    return (
        <div className="container">
            123
            <Menu/>
            <Content/>
        </div>
    );
}

export default Admin;

if (document.getElementById('root')) {
    if (document.getElementById('root')) {
        ReactDOM.render(
            <BrowserRouter>
                <Admin/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    }
}
