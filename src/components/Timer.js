import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        
        setInterval(() => {
            this.incrementTimer()
        }, 1000)
    }


    incrementTimer() {
        this.setState({
            time: this.state.time+1
        })
    }

    render() { // ezt hivja meg a react 
        console.log('render done')
        return(
            <> 
                <div>
                    {this.state.time}
                </div>
                <button onClick={() => {this.incrementTimer()}}>click me</button>
            </>
        ) 
    }
}

export default Timer

// <> ezzel tehetem meg hogy tobb html elemet irjak le egymas ala mert amugy csak egyet lehetne 