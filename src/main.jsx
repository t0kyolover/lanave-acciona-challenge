import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Footer from "./components/footer";
import Home from "./views/home";
import View1 from "./views/view1";
import View2 from "./views/view2";

import injectContext from "./store/appContext";

import "./index.css";
import "./styles/navbar2.css";

const Main = () => (
  <React.StrictMode>
    <Router>
      <Navbar2 />
      {/*<Navbar />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view1" element={<View1 />} />
        <Route path="/view2" element={<View2 />} />
        <Route element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

const MainWithContext = injectContext(Main);

createRoot(document.getElementById("root")).render(<MainWithContext />);
