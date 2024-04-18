import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Home from "./views/home";
import Navbar from "./components/navbar";

import "./index.css";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  </Provider>
);