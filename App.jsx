import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./pages/Home.jsx";
import Developer from "./pages/Developer.jsx";
import ControlPanel from "./pages/ControlPanel.jsx";
import AppBar from "./components/AppBar/AppBar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TabBar from "./components/TabBar/TabBar.jsx";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";

function App(){
    return (
        <div className="App">
            <Routes>
                <Route path= "/" element= {<Home/>} />
                <Route path= "/developer" element= {<Developer/>} />
                <Route path= "/control-panel" element= {<ControlPanel/>}/>
                <Route path= "/login" element= {<Login/>}/>
                <Route path= "/profile" element= {<Profile/>}/>
            </Routes>
        </div>
        /*<div className="App">
            <Routes>
                <Route path= "/" element= {<Home/>}/>
            </Routes>
        </div>*/
    );
}
export default App;