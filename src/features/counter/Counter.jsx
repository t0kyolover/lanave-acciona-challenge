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
        <div className="d-flex flex-row mt-3">
          <h4 className="text-danger">{count}</h4>
          <button style={{height: "30px"}} className="mx-2 p-2 d-flex align-items-center" onClick={() => dispatch(increment())}>
            <i class="fa-solid fa-plus"></i>
          </button>
          <button style={{height: "30px"}} className="p-2 d-flex align-items-center"  onClick={() => dispatch(decrement())}>
            <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
      <div className="d-flex flex-row mt-3 align-items-center">
        <label htmlFor="incrementNumber">Increment by</label>
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
        Increment by {incrementAmount}
      </button>
    </>
  );
}
