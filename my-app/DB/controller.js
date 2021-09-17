const DB = require('./db.js');

const addEntry = (entryObj, callback) => {
  const query = `INSERT INTO entries(entry, found, created) VALUES(${entryObj.entry}, ${entryObj.found}, ${entryObj.created});`;
  DB
    .query(query)
    .then(() => callback(null, true))
    .catch(() => callback(false));
};

const getEntries = (callback) => {
  const query = 'SELECT * FROM entries SORT BY created desc limit 10;';
  DB
    .query(query)
    .then((res) => callback(null, res))
    .catch(() => callback(false));
};
// entry
// found
// created
