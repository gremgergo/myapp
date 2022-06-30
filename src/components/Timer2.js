// rfc ->

import React, { useEffect, useState } from 'react' // useState az egy 'hook', ezeket hasznaljuk a reactben | mindig legkulso szintjen hivhato meg.

export default function Timer2() {
    function incrementTimer() {
        setTime(
            time+1
        )
    };

    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('new interval set')

        const intervalId = setInterval(() => {

            incrementTimer()
        }, 1000)

        return () => {

            clearInterval(intervalId)
        }
 
    });
    

    return (
        <> 
            <div>
                {time}
            </div>
            <button onClick={ incrementTimer }>click me</button>
            {/* <button onClick={() => { incrementTimer() }}>click me</button> */}
        </>
    );
}
