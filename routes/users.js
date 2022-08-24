const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', {title: '用户信息'})
});

module.exports = router;
