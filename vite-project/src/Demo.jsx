import { useState } from "react";

function Counter(){

   let [counter , setCounter] = useState(5)

  // let counter = 5;
  const addValue = () => {
    // console.log('Hy I am Working',Math.random());
    if(counter ==  20) 
    setCounter(counter = 20);
    else 
    setCounter(counter+1);
}

const removeValue = () => {
  if(counter <= 0 ) 
 setCounter(counter = 0);
  else
  setCounter(counter - 1);
}
  return(
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <br/>
    <button
    onClick={removeValue}
    >Remove value{counter}</button>
    </>
    
  )
}
 export default Counter;

