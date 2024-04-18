import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom";

import Home from "./views/home";
import Navbar from "./components/navbar";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);