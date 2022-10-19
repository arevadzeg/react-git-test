import logo from './logo.svg';
import './App.css';
// import { useEffect, useState, useMemo, useCallback } from 'react';

function App() {

  // const [food, setFood] = useState(2)

  // useEffect(() => {
  //   setFood(2)
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KOTELTI
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          GIO <h1>2</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
