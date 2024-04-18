import React from "react";
import Counter from "../features/counter/Counter";

function Home() {
  return (
    <>
    <div className="row">
      <div className="countainer-fluid ms-5">
        <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Counter />
      </div>
    </div>
    </>
  );
}

export default Home;