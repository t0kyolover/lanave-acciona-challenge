import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-3">
      <div className="col-md-4 d-flex">
        <a href="/" className="mb-3 mb-md-0 text-muted text-decoration-none">
          <img
            src="src/assets/Acciona_symbol.png"
            style={{ maxWidth: "10%" }}
            className="img-fluid"
            alt="Logo"
          />
        </a>
      </div>
      <span className="col-md-2 col-sm-1 mb-3 mb-md-0 text-muted text-center" style={{fontSize: "x-small"}}>
        © 2024 Company, Inc
      </span>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-muted" href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
