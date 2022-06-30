import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { useState } from 'react';
import Timer2 from './components/Timer2';

function App() {
  const [showTimer, setShowTimer] = useState(true)


  // a fenti sor kifejtve:
  /* const state = useState(true)
  console.log(state)
  const showTimer = state[0]
  const setShowTimer = state[1] */

  if(3 < 5 && 10 < 20) {}

  return (
    <div className="App">
      <header className="App-header">
        <Timer2 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
