const createError = require('http-errors');
const express = require('express');
var session = require('express-session');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('about');
});
router.get('/contact', function (req, res) {
    res.render('contact');
});
router.get('/*', function(req, res) {
    res.render('index');
});
module.exports = router;