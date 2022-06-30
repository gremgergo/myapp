// rfc ->

import React, { useEffect, useState } from 'react' // useState az egy 'hook', ezeket hasznaljuk a reactben | mindig a komponens legkulso szintjen hivhato meg.

export default function Timer2() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('new interval set')

        const intervalId = setInterval(() => {
            setTime(t => t+1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);
    

    return (
        <> 
            <div>
                {time}
            </div>
            <button onClick={ () => setTime(time+1) }>click me</button>
            {/* <button onClick={() => { incrementTimer() }}>click me</button> */}
        </>
    );
}
