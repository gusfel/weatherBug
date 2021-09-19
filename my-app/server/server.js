const express = require('express');
const axios = require('axios');
const controller = require('../DB/controller.js');

const app = express();
const port = 3001;
const key = require('../keys.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/weather', (req, res) => {
  const { loc } = req.query;
  const today = new Date();
  const entryObj = {
    entry: loc,
    created: today,
  };
  let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${loc},us&units=imperial&appid=${key}`;
  if (isNaN(loc)) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&units=imperial&appid=${key}`;
  }
  axios.get(url)
    .then((response) => {
      entryObj.found = true;
      controller.addEntry(entryObj, (err, succ) => {
        if (err) {
          throw err;
        } else {
          const data = response.data.list;
          const newFinal = data.filter((info) => info.dt_txt.slice(11, 13) === '21').map((info) => {
            const day = info.dt_txt.slice(0, 10);
            return {
              date: day,
              info,
            };
          });
          res.send(newFinal);
        }
      });
    })
    .catch(() => {
      entryObj.found = false;
      controller.addEntry(entryObj, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.send('err');
        }
      });
    });
});

app.get('/recent', (req, res) => {
  controller.getEntries((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
