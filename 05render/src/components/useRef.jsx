import React, { useState, useRef, useEffect } from 'react';

function StopWatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    function startTimer() {
        if (!intervalRef.current) { // Prevent multiple intervals
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    function resetTimer() {
        setTime(0);
        stopTimer(); // Also stop the timer when reset
    }

    // Cleanup the interval when the component unmounts
    useEffect(() => {
        return () => stopTimer();
    }, []);

    return (
        <>
            <h1 className='m-4'>Time passed: {time}</h1>
            <div> 
                <button onClick={startTimer} className='bg-gray-200 rounded mx-2 px-2'>
                    Start
                </button>
                <button onClick={stopTimer} className='bg-gray-200 rounded mx-1 px-2'>
                    Stop
                </button>
                <button onClick={resetTimer} className='bg-gray-200 rounded mx-1 px-2'>
                    Reset
                </button>
            </div>
        </>
    );
}

export default StopWatch;
