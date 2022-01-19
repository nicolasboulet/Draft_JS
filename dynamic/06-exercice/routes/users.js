const path = require('path');

const express = require('express');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res) => {
  const usersLists = adminData.users;
  console.log(usersLists)
  res.render('users', {
    pageTitle: 'Add Users',
    path: '/',
    users: usersLists
  });

});

module.exports = router;