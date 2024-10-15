import { useState } from "react";

function Name(){

    let [value,setValue] = useState();
  
    const namechange = () => {
      setValue(Math.random());
    }
    return(
      <>
      <button onClick={namechange}>click me to change the name</button>
      <p>my name is {value}</p>
      </>
    )
   }
  
   export default Name;