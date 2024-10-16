import React, { useState, useRef, useEffect ,useMemo } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState(1);
  // const [totalSum, setTotalSum] = useState(0);

  const inputRef = useRef(null);

  function handleClick() {
    // inputRef.current.focus();
    setCounter(counter + 1);
  }

  let count = useMemo(()=>{
    let count = 0;
    for (let i = 1; i <= inputVal; i++) {
      count += i;
    }
    return count;
  },[inputVal])

  // useEffect(() => {
  //   let sum = 0;
  //   for (let i = 1; i <= inputVal; i++) {
  //     sum += i;
  //   }
  //   setTotalSum(sum);
  // }, [inputVal]);

  function inputfn(e) {
    const value = parseInt(e.target.value, 10) || 0;
    setInputVal(value);
  }

  return (
    <>
      <div className='m-3'>
        <input
          ref={inputRef}
          type="number"
          onChange={inputfn}
          className='border-2 border-black'
        />
      </div>
      <p className='px-3'>
        Sum of n = {inputVal} is {totalSum}
      </p>
      <button
        className='my-0 m-3 border-2 border-black'
        onClick={handleClick}
      >
        Focus the input ({counter})
      </button>
    </>
  );
}

export default App;
