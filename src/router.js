const express = require('express');
const router = express.Router();
const usersRouter = require('./routes/users')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = {
  usersRouter,
  router,
};
