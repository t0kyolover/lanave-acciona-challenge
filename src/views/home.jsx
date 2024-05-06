import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function Home() {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");

  useEffect(() => {
    actions.loadSomeData();
    setTitle(store.titles[0]);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <img src="src/assets/imagen tierra.png" alt="" />
    </div>
  );
}

export default Home;
