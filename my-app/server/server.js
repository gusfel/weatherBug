const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const key = require('../keys.js')


app.get('/weather', (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=san francisco&appid=${key}&units=imperial`;
  axios.get(url)
    .then(res => {
      console.log(res.data.list.length)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})