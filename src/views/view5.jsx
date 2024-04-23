import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View5() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[1]);
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <h1 className="mx-3 text-info-emphasis">Partners</h1>
      <div className="card text-white m-4 col-3">
        <img
          src="https://due.com/wp-content/uploads/2017/02/Business-Partner.jpg"
          className="card-img"
          alt="..."
        />
      </div>
      <div className="card text-white m-4 col-3">
        <img
          src="https://due.com/wp-content/uploads/2017/02/Business-Partner.jpg"
          className="card-img"
          alt="..."
        />
      </div>
      <div className="card text-white m-4 col-3">
        <img
          src="https://due.com/wp-content/uploads/2017/02/Business-Partner.jpg"
          className="card-img"
          alt="..."
        />
      </div>
      <div className="card text-white m-4 col-3">
        <img
          src="https://due.com/wp-content/uploads/2017/02/Business-Partner.jpg"
          className="card-img"
          alt="..."
        />
      </div>
      <div className="card text-white m-4 col-3">
        <img
          src="https://due.com/wp-content/uploads/2017/02/Business-Partner.jpg"
          className="card-img"
          alt="..."
        />
      </div>
    </div>
  );
}

export default View5;
