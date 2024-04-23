import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View4() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[1]);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-primary-emphasis">Pujando ahora</h1>
      </div>
      <div className="row m-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div style={{maxWidth: "25rem"}}>
              <h2>
                Subasta 1{" "}
                <span class="badge rounded-pill text-bg-success">55</span>
              </h2>
              <i class="fa-solid fa-dollar-sign text-danger"> 4568</i>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div style={{maxWidth: "25rem"}}>
              <h2>
                Subasta 2{" "}
                <span class="badge rounded-pill text-bg-success">63</span>
              </h2>
              <i class="fa-solid fa-dollar-sign text-danger"> 9895</i>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div style={{maxWidth: "25rem"}}>
              <h2>
                Subasta 3{" "}
                <span class="badge rounded-pill text-bg-success">75</span>
              </h2>
              <i class="fa-solid fa-dollar-sign text-danger"> 4562</i>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div style={{maxWidth: "25rem"}}>
              <h2>
                Subasta 4{" "}
                <span class="badge rounded-pill text-bg-success">45</span>
              </h2>
              <i class="fa-solid fa-dollar-sign text-danger"> 8956</i>
            </div>
          </div>
        </div>
      </div><div className="row m-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div style={{maxWidth: "25rem"}}>
              <h2>
                Subasta 5{" "}
                <span class="badge rounded-pill text-bg-success">56</span>
              </h2>
              <i class="fa-solid fa-dollar-sign text-danger"> 2335</i>
            </div>
          </div>
        </div>
      </div><div className="row m-3">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <div style={{maxWidth: "25rem"}}>
              <h2>
                Subasta 6{" "}
                <span class="badge rounded-pill text-bg-success">89</span>
              </h2>
              <i class="fa-solid fa-dollar-sign text-danger"> 4684</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View4;
