const DB = require('./db.js');

module.exports = {
  addEntry: (entryObj, callback) => {
    const query = `INSERT INTO entries(entry, found, created) VALUES(${entryObj.entry}, ${entryObj.found}, '2016-06-22 19:10:25-07');`;
    console.log(query)
    DB
      .connect()
      .query(query)
      .then((res) => {
        console.log(res)
        callback(null, true)
      })
      .catch((err) => {
        console.log(err)
        callback(false)
      });
  },
  getEntries: (callback) => {
    const query = 'SELECT * FROM entries SORT BY created desc limit 10;';
    DB
      .connect()
      .query(query)
      .then((res) => callback(null, res))
      .catch(() => callback(false));
  },
};

// entry
// found
// created
