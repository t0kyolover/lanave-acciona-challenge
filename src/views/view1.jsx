import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function View1 () {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[1]);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      
      <h1>{title}</h1>
    
    </div>
  );
}

export default View1;