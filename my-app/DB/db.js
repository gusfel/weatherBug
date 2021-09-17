const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'weather',
  password: 'postgres',
  port: 3211,
});
client.connect();

module.exports = client;
