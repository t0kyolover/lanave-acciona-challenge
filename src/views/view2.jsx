import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View2 () {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[2]);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      
      <div class="card m-3" style={{width: "18rem;"}}>
        <img src="https://media.istockphoto.com/id/1209088835/es/foto/vista-posterior-de-los-compradores-levantando-la-mano-a-subastadurante-durante-la-subasta.jpg?s=1024x1024&w=is&k=20&c=YSTmoGL7aMq3K3oaHQZEi267hbinoJpaC9LazjwHqSI=" class="card-img-top" alt="..." />
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
        <img src="https://media.istockphoto.com/id/1209088835/es/foto/vista-posterior-de-los-compradores-levantando-la-mano-a-subastadurante-durante-la-subasta.jpg?s=1024x1024&w=is&k=20&c=YSTmoGL7aMq3K3oaHQZEi267hbinoJpaC9LazjwHqSI=" class="card-img-top" alt="..." />
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
        <img src="https://media.istockphoto.com/id/1209088835/es/foto/vista-posterior-de-los-compradores-levantando-la-mano-a-subastadurante-durante-la-subasta.jpg?s=1024x1024&w=is&k=20&c=YSTmoGL7aMq3K3oaHQZEi267hbinoJpaC9LazjwHqSI=" class="card-img-top" alt="..." />
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

export default View2;