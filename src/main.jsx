import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import Navbar from "./components/navbar";
import Home from "./views/home";
import View1 from "./views/view1";
import View2 from "./views/view2";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view1" element={<View1 />} />
        <Route path="/view2" element={<View2 />} />
        <Route element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
