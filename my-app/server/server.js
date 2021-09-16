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
  const loc = req.query.loc
  let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${loc},us&units=imperial&appid=${key}`;
  if (isNaN(loc)) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&units=imperial&appid=${key}`
  }
  axios.get(url)
    .then(response => {
      const data = response.data.list
      const final = [];
      for (const info of data) {
        // const convDate = new Date(info.dt_txt)
        // const pstDate = new Date(info.dt_txt).toString()
        // console.log( pstDate)
        if (info.dt_txt.slice(11, 13) === '21') {
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
      res.send([])
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})