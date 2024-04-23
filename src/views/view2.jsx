import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View2() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[1]);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="mx-3 text-danger-emphasis">Desmontar</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://lh5.googleusercontent.com/proxy/DeagP536p2BPoPpqlNVxijGXjS7VBs-gTKnAMBWVY9mT_AzhFytOF5ab1ond1-y2yhOxPtNIX_m2C7YRf0tpw31-vXyln5xzKYld64Fu_WeZ11G4SeSDLZUDEReqibjFO3TgGjJTO470qg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div>
                <h5 className="card-title text-warning-emphasis">
                  Desmantelamiento
                </h5>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Detalles
              </a>
            </div>
            <p className="card-text mt-2" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div>
        <div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://lh5.googleusercontent.com/proxy/DeagP536p2BPoPpqlNVxijGXjS7VBs-gTKnAMBWVY9mT_AzhFytOF5ab1ond1-y2yhOxPtNIX_m2C7YRf0tpw31-vXyln5xzKYld64Fu_WeZ11G4SeSDLZUDEReqibjFO3TgGjJTO470qg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div>
                <h5 className="card-title text-warning-emphasis">
                  Desmantelamiento
                </h5>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Detalles
              </a>
            </div>
            <p className="card-text mt-2" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div>
        <div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://lh5.googleusercontent.com/proxy/DeagP536p2BPoPpqlNVxijGXjS7VBs-gTKnAMBWVY9mT_AzhFytOF5ab1ond1-y2yhOxPtNIX_m2C7YRf0tpw31-vXyln5xzKYld64Fu_WeZ11G4SeSDLZUDEReqibjFO3TgGjJTO470qg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div>
                <h5 className="card-title text-warning-emphasis">
                  Desmantelamiento
                </h5>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Detalles
              </a>
            </div>
            <p className="card-text mt-2" style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, ultricies
              pretium enim libero nunc maecenas, aptent litora penatibus sociis
              primis cum cubilia, aliquam luctus pellentes.
            </p>
          </div>
        </div>
        <div className="card m-3 col-2" style={{ width: "18rem;" }}>
          <img
            src="https://lh5.googleusercontent.com/proxy/DeagP536p2BPoPpqlNVxijGXjS7VBs-gTKnAMBWVY9mT_AzhFytOF5ab1ond1-y2yhOxPtNIX_m2C7YRf0tpw31-vXyln5xzKYld64Fu_WeZ11G4SeSDLZUDEReqibjFO3TgGjJTO470qg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ms-2">
            <div className="d-flex flex-row align-items-center">
              <div>
                <h5 className="card-title text-warning-emphasis">
                  Desmantelamiento
                </h5>
              </div>
              <a href="#" class="btn btn-success ms-3">
                Detalles
              </a>
            </div>
            <p className="card-text mt-2" style={{ fontSize: "small" }}>
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

export default View2;
