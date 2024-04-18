import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar2.css";

function Navbar2() {
  return (
    <>
      <header>
        {/*<!-- Navbar -->*/}
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
                <button className="btn">To another page</button>
              </Link>
              <Link to="/view2">
                <button className="btn">Yet another page</button>
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
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
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

        {/*<!-- Background image -->*/}
        <div
          id="intro"
          className="bg-image p-5 text-start bg-image"
          style={{
            background:
              "url('https://mediacdn.acciona.com/media/ntrgaui5/puente-de-walterdale-acciona.jpg') no-repeat",
            backgroundSize: "cover",
            height: "75vh",
          }}
        >
          <div className="mask h-100">
            <div className="d-flex flex-column justify-content-center align-items-start h-100 w-100">
              <div className="text-white">
                <h1 className="mb-3">UNA COMPAÑÍA CON UN PROPÓSITO</h1>
                <h4 className="mb-3">
                  En ACCIONA creemos que existe una manera diferente de hacer
                  negocios
                </h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Background image -->*/}
      </header>
    </>
  );
}

export default Navbar2;
