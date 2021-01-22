const app = require('express')();

app.use(require('body-parser').json());

app.use('/', (req, res, next) => {
  console.log('works');
});

module.exports = app;