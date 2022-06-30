import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        
        
        console.log('constructor called')
        
    };
    
    componentDidMount() {
        console.log('componen created')
        
        setInterval(() => {
            this.incrementTimer()
        }, 1000)
    };

    componentDidUpdate() { // olyan logikat kell irni amit akkor szeretnenk lefutattni ha megvaltozik a componens allapota
        console.log('something changed')
    };

    componentWillUnmount() {
        console.log('csinalunk valamit tenylegesen')
    };

    incrementTimer() {
        this.setState({
            time: this.state.time+1
        })
    };

    render() { // ezt hivja meg a react 
        return(
            <> 
                <div className={(this.state.time >= 5) ? 'blue' : ''}>
                    {this.state.time}
                </div>
                <button onClick={() => { this.incrementTimer() }}>click me</button>
            </>
        ) 
    };
}

export default Timer

// <> ezzel tehetem meg hogy tobb html elemet irjak le egymas ala mert amugy csak egyet lehetne 