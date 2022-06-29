// rfc ->

import React, { useState } from 'react' // useState az egy 'hook', ezeket hasznaljuk a reactben | mindig legkulso szintjen hivhato meg.

export default function Timer2() {
    function incrementTimer() {
        setTime(
            time+1
        )
    };

    const [time, setTime] = useState(0);

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
