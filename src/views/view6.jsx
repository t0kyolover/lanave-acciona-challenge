import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View6() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[1]);
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <h1 className="mx-3 text-warning">Industrias</h1>
      <div className="card text-info m-3" style={{ maxWidth: "25rem" }}>
        <img
          src="https://www.serigaur.com/sites/default/files/industria-textil.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay opacity-75 bg-light d-flex justify-content-center align-items-center">
          <h1 className="card-title">Textíl</h1>
        </div>
      </div>
      <div className="card text-success m-3" style={{ maxWidth: "25rem" }}>
        <img
          src="https://avantek.es/wp-content/uploads/2020/07/industria-4.0-alimentaci%C3%B3n1-775x512.png"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay opacity-75 bg-light d-flex justify-content-center align-items-center">
          <h1 className="card-title">Alimentación</h1>
        </div>
      </div>
      <div className="card text-danger m-3" style={{ maxWidth: "25rem" }}>
        <img
          src="https://altertecnia.com/wp-content/uploads/productividad-en-el-sector-de-la-construccin.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay opacity-75 bg-light d-flex justify-content-center align-items-center">
          <h1 className="card-title">Construcción</h1>
        </div>
      </div>
    </div>
  );
}

export default View6;
