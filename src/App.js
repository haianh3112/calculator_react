/* eslint-disable no-eval */
import './calculator.css';
import React,{useState} from 'react';

function App() {
  const [result,setResult]=useState("");

  const myFunction = (e) => {
    setResult(result.concat(e.target.name))
  }
  const clear=()=>{
    setResult("");
  }
  const del=()=>{
    setResult(result.slice(0,-1));
  }
  const calculation=()=>{
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error")
    }
  }
   return (
  <div className="container">
    <div className="calculator">
    <input type="text" placeholder="0" value={result} />
    <button className="btn btn-primary" id="clear" onClick={clear}>AC</button>
            <button className="btn btn-primary" onClick={del}>DEL</button>
            <button name="%" className="btn btn-primary" onClick={myFunction}>%</button>
            <button name="+"  className="btn btn-primary" onClick={myFunction}>+</button>
            <button name="1"  onClick={myFunction}>1</button>
            <button name="2"  onClick={myFunction}>2</button>
            <button name="3" onClick={myFunction}>3</button>
            <button name="-"  className="btn btn-primary" onClick={myFunction} >-</button>
            <button name="4"  onClick={myFunction}>4</button>
            <button name="5"  onClick={myFunction}>5</button>
            <button name="6" onClick={myFunction}>6</button>
            <button name="*"  className="btn btn-primary" onClick={myFunction}>*</button>
            <button name="7" onClick={myFunction}>7</button>
            <button name="8"  onClick={myFunction}>8</button>
            <button name="9"  onClick={myFunction}>9</button>
            <button name="/"  className="btn btn-primary" onClick={myFunction}>/</button>
            <button name="0"  onClick={myFunction}>0</button>
            <button name="."  className="btn btn-primary" onClick={myFunction}>.</button>
            <button className="result btn btn-primary" onClick={calculation}>=</button>
    </div>
  </div>
  );
}

export default App;
