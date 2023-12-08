import React, { useState } from "react";
import Button from "@mui/material/Button";

import "./style.css";
function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(5);
  const up = () => {
    setCount(count + step);
  };
  const stepHandler = (evt) => {
    setStep(evt.target.value);
  };
  const root = {
    border: "5px solid red",
    padding: "10px",
  };
  return (
    <div style={root}>
      <h1>{title}</h1>
      <p>
        <input type="number" value={step} onChange={stepHandler} />
        <Button variant="contained" onClick={up}>
          +
        </Button>
        {count}
      </p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Counter title="카운터" initValue={10} />
    </div>
  );
}
