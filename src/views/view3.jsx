import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View4() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[2]);
  }, []);

  return (
    <div className="m-5">
      <div className="d-flex justify-content-center mb-2">
        <h1 className="mb-3 text-success-emphasis">Publica tu subasta</h1>
      </div>
      
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Empresa
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Tu empresa"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Producto
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Nombre de producto"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <select class="form-select mb-3" aria-label="Default select example">
        <option selected>Categoría</option>
        <option value="1">Alimentación</option>
        <option value="2">Textil</option>
        <option value="3">Construccion</option>
      </select>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Peso
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Peso del producto"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Cantidad
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Cantidad"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
     

      <div class="input-group">
        <span class="input-group-text">Descripción</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button type="button" class="btn btn-success mt-3">Publicar</button>
    </div>
  );
}

export default View4;
