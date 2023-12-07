import React from "react";
import "./style.css";

// function Counter(props){
//   const title = props.title;
//   const initValue = props.initValue;

function Counter({ title, initValue }) {
  // const countState = React.useState(initValue);
  // const count = countState[0];
  // const setCount = countState[1];
  const [count, setCount] = React.useState(initValue);

  // function up(){
  //   setCount(count+1);
  // }

  // const up = ()=>{
  //   setCount(count+1);
  // }

  const up = () => setCount(count + 1);

  const down = () => setCount(count - 1);

  return (
    <div>
      <h1>{title}</h1>
      <p>
        <button onClick={up}>+</button>
        <button onClick={down}>-</button>
        {count}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter title="counter" initValue={10} />
    </div>
  );
}
