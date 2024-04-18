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
      
      <h1>{title}</h1>
    
    </div>
  );
}

export default View2;