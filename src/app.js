const routes = require('./app/routes'); 

const app = require('express')();

app.use(require('body-parser').json());

app.use(routes);

module.exports = app;