const DB = require('./db.js');

module.exports = {
  addEntry: (entryObj, callback) => {
    const query = `INSERT INTO entries(entry, found, created) VALUES('${entryObj.entry}', ${entryObj.found}, ${entryObj.created})`;
    DB
      .query(query)
      .then(() => {
        callback(null, true);
      })
      .catch(() => {
        callback(true);
      });
  },
  getEntries: (callback) => {
    const query = 'SELECT * FROM entries SORT BY created desc limit 10;';
    DB
      // .connect()
      .query(query)
      .then((res) => callback(null, res))
      .catch(() => callback(false));
  },
};

// entry
// found
// created
