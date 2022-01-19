const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

router.get('/add-users', (req, res, next) => {
  res.render('add-users', {
    pageTitle: 'Add users',
    path: '/admin/add-users',
    formsCSS: true,
    usersCSS: true,
    activeAddUsers: true
  });
});

router.post('/add-users', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;