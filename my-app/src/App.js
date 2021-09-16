import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import WeatherBlock from './weatherBlock.js'
import EnterInfo from './enterInfo.js'
import './App.css';

const App = () => {
  const [wData, setwData] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:3001/weather')
    //   .then(res => {
    //     setwData(res.data)
    //   })
  }, [])

  const compileData = (arr) => {
    const formatted = arr.map(day => {
      return <WeatherBlock
        key={day.info.dt}
        date={day.date}
        info={day.info}
        />
    })
    return formatted
  }

  const getData = (str) => {
    axios.get(`http://localhost:3001/weather?loc=${str}`)
    .then(res => {
      setwData(res.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EnterInfo getData={getData}/>
        {wData.length
        ? compileData(wData)
        : 'waiting...'}
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
