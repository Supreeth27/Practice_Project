const createError = require('http-errors');
const express = require('express');
var session = require('express-session');
const router = express.Router();
var connectionDB = require('../utility/connectionDB');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/connections', async function(req, res, next) {
    let connections = [];
    // get the topics from ConnectionDb
    let topics = getTopics();
    console.log(topics)
    // getting all connections from db and creating Connection data object 
    connections = connectionDB.getConnections();
  
    let data = {
      "topics": topics,
      "connections": connections,
    };
    console.log(connections)
    res.render('connections', { data: data});
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

var topics = [];
let getTopics = function() {
    // get the category of each connection
    var data = connectionDB.getConnections();
    data.forEach(function (connection) {
        if(!topics.includes(connection.connectionTopic)){
            topics.push(connection.connectionTopic);
        }   
    });
    return topics;
};
module.exports = router;