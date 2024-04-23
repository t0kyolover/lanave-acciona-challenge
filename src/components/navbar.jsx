import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand">
            <img
              src="src/assets/Acciona_logo.svg"
              className="img-fluid"
              style={{ maxHeight: "30px" }}
            />
          </Link>
          <Link to="/view1">
            <button className="btn">Residuos</button>
          </Link>
          <Link to="/view2">
            <button className="btn">Desmantelamiento</button>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Qué puedo hacer?
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/view3">
                      Publicar subasta
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view4">
                      Pujar en directo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view5">
                      Conocer partners
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/view6">
                      Conocer industrias
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
