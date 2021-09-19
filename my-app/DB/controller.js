const DB = require('./db.js');

module.exports = {
  addEntry: (entryObj, callback) => {
    const query = `INSERT INTO entries(entry, found, created) VALUES('${entryObj.entry}', ${entryObj.found}, '${entryObj.created}')`;
    DB
      .query(query)
      .then(() => {
        callback(null, true);
      })
      .catch((err) => {
        callback(true);
      });
  },
  getEntries: (callback) => {
    const query = 'SELECT * FROM entries ORDER BY id desc limit 10;';
    DB
      .query(query)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },
};
