import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from "./counterSlice.js";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button className="me-2" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div className="d-flex flex-row mt-3 align-items-center">
        <label htmlFor="incrementNumber">Or increment by</label>
        <div className="ms-1">
          <input
            className="rounded w-25"
            type="number"
            id="incrementNumber"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </div>
      </div>
      <button
        className="mt-3"
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        Increment by amount
      </button>
    </>
  );
}
