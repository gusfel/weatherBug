const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const key = require('../keys.js')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/weather', (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=san francisco&appid=${key}&units=imperial`;
  axios.get(url)
    .then(response => {
      const data = response.data.list
      const final = [];
      for (const info of data) {
        if (info.dt_txt.slice(11, 13) === '12') {
          const day = info.dt_txt.slice(0, 10)
          final.push({
            date : day,
            info,
          })
        }
      }
      res.send(final)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})