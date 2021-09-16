import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [wData, setwData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/weather')
      .then(res => {
        setwData(res.data)
        // for (const obj of res.data) {
        //   setData(() => [...data, obj]
        //   )
          // console.log(obj)
        // }
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {wData.length
        // ? Object.keys(wData[0][0])
        ? `${wData[0].info.weather[0].description}`
        : 'hi'}
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
