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
    // getting all connections from db and creating Connection data object 
    connections = connectionDB.getConnections();
  
    let data = {
      "topics": topics,
      "connections": connections,
    };
    res.render('connections', { data: data});
});

router.get('/connection/:connectionId', async function(req, res, next) {
    let connectionId = req.params.connectionId;
    let connection;
    // validate data
    if (validateConnectionId(connectionId)){
      try{
        // getting specific connection from DB
        connection = connectionDB.getConnection(connectionId);

        let data = {
          "connection": connection,
        };
  
        res.render('connection', { data: data});
      } catch (e) {
        res.redirect('/connections');
      }
    } else{
      res.redirect('/connections');
    }
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

function validateConnectionId(connectionId) {

    if (connectionId !== undefined) {
      if (Number.isInteger(Number.parseInt(connectionId))) {
        return true;
      } else{
        return false;
      }
    } else{
      return false;
    }
}

module.exports = router;