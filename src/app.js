require('dotenv').config();
const { Pool } = require('pg');


async function test() {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
  });
  const res = await pool.query('SELECT NOW()');
  console.log(res);
}

test();

const app = require('express')();

app.use(require('body-parser').json());

app.use('/', (req, res, next) => {
  console.log('works');
});

module.exports = app;