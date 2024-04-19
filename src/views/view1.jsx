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
    <div className="d-flex justify-content-center">
      <div class="card m-3" style={{width: "18rem;"}}>
        <img src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2017/07/subasta-inversa.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Ejemplo de subasta</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Pujar
          </a>
        </div>
      </div>
      <div class="card m-3" style={{width: "18rem;"}}>
        <img src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2017/07/subasta-inversa.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Ejemplo de subasta</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Pujar
          </a>
        </div>
      </div>
      <div class="card m-3" style={{width: "18rem;"}}>
        <img src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2017/07/subasta-inversa.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Ejemplo de subasta</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Pujar
          </a>
        </div>
      </div>
    </div>
  );
}

export default View1;
