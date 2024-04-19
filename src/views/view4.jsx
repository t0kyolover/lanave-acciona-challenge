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
    <div className="d-flex justify-content-center">
      <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">7</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">0</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">4</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">3</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">10</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">7</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subasta</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">94</span>
  </li>
</ul>
    </div>
  );
}

export default View4;
