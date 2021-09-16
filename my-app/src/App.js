import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import WeatherBlock from './weatherBlock.js'
import './App.css';

const App = () => {
  const [wData, setwData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/weather')
      .then(res => {
        setwData(res.data)
      })
  }, [])

  const compileData = (arr) => {
    const formatted = arr.map(day => {
      return <WeatherBlock
        date={day.date}
        info={day.info}
        />
    })
    return formatted
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {wData.length
        ? compileData(wData)
        : 'loading'}
        <p>
          Edit <code>src/App.js</code> and save to reload.sdfbsdfg
        </p>
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
