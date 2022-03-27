import React from 'react';
import ReactDOM from 'react-dom';
import Admin from "./pages/Admin";
import Storefront from "./pages/Storefront";
import {Route, Routes, BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/" element={<Storefront/>}/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
