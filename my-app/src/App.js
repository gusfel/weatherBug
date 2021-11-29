import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import WeatherBlock from './weatherBlock';
import EnterInfo from './enterInfo';
import './App.css';
// test test
const App = () => {
  const [wData, setwData] = useState([]);
  const [error, setError] = useState(false);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/recent')
      .then(res => {
        setRecent(res.data)
      })
  }, []);

  const compileData = (arr) => {
    const formatted = arr.map((day) => (
      <WeatherBlock
        key={day.info.dt}
        date={day.date}
        info={day.info}
      />
    ));
    return formatted;
  };

  const getData = (str) => {
    axios.get(`http://localhost:3001/weather?loc=${str}`)
      .then((res) => {
        if (res.data === 'err') {
          setError(true);
          setwData([]);
        } else {
          setwData(res.data);
          setError(false);
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EnterInfo getData={getData} />
        {error
          ? 'notfound'
          : <></>}
        <br />
        {wData.length
          ? compileData(wData)
          : 'waiting...'}
      </header>
    </div>
  );
};

export default App;
