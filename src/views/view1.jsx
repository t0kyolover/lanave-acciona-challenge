import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View1() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[1]);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="mx-3 text-warning-emphasis">Residuos</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://www.ceupe.com/images/easyblog_articles/3109/b2ap3_amp_industria-alimentaria.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div className="mb-2">
                <h5 className="card-title text-warning">Producto 1</h5>
                <p className="card-text text-info-emphasis" style={{ fontSize: "small" }}>Alimentación</p>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Más información
              </a>
            </div>
            <p className="card-text" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div>
        <div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://www.serigaur.com/sites/default/files/industria-textil.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div className="mb-2">
                <h5 className="card-title text-warning">Producto 2</h5>
                <p className="card-text text-info-emphasis" style={{ fontSize: "small" }}>Textíl</p>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Más información
              </a>
            </div>
            <p className="card-text" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div><div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://altertecnia.com/wp-content/uploads/productividad-en-el-sector-de-la-construccin.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div className="mb-2">
                <h5 className="card-title text-warning">Producto 3</h5>
                <p className="card-text text-info-emphasis" style={{ fontSize: "small" }}>Construcción</p>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Más información
              </a>
            </div>
            <p className="card-text" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div><div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://www.ceupe.com/images/easyblog_articles/3109/b2ap3_amp_industria-alimentaria.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div className="mb-2">
                <h5 className="card-title text-warning">Producto 4</h5>
                <p className="card-text text-info-emphasis" style={{ fontSize: "small" }}>Alimentación</p>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Más información
              </a>
            </div>
            <p className="card-text" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View1;
