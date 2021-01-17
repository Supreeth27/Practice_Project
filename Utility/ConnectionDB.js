var Connection = require('../Models/connection');

var getConnections = function () {
    let connections = [];
    for (let i = 0; i < connectionData.length; i++) {
        let connection = new Connection(connectionData[i].connectionId,
            connectionData[i].name,
            connectionData[i].topic,
            connectionData[i].detail,
            connectionData[i].location,
            connectionData[i].host,
            connectionData[i].date,
            connectionData[i].startTime,
            connectionData[i].endTime,
            connectionData[i].image);
            
        connections.push(connection);
    } 
    return connections;
};



var connectionData = [
    {
        "connectionId": 1,
        "name": "ITSC 1213 - Working with NetBeans",
        "topic":"Study",
        "detail":"I'm new to NetBeans and Would love to connect with others to explore the IDE and learn the ins and outs.",
        "location":"Woodward Hall 2nd Floor lounge area",
        "host": "Norm Niner",
        "date": "Thursday, August 29, 2019",
        "startTime": "5:30pm",
        "endTime": "6:30pm",
        "image":"netbeans.png"
    },

    {
        "connectionId": 2,
        "name": "ITSC 1212 - Creating Flowcharts",
        "topic":"Study",
        "detail":"I'm new to Flowcharts and Would love to connect with others to explore and learn how to design" +
            " flowcharts for complex process.",
        "location":"Woodward Hall 1nd Floor lounge area",
        "host": "Norm Niner",
        "date": "Sunday, September 29 2019",
        "startTime": "5:30pm",
        "endTime": "6:30pm",
        "image":"flowchart.png"
    },
    {
        "connectionId": 3,
        "name": "ITIS 6167 - VM Setup",
        "topic":"Study",
        "detail":"I'm new to Virtual Machine and Would love to connect with others to explore and learn how to set" +
            " up VM.",
        "location":"Woodward Hall 3rd Floor Meeting room",
        "host": "Noora Niner",
        "date": "Tuesday, October 29 2019",
        "startTime": "2:30pm",
        "endTime": "3:30pm",
        "image":"vm.png"
    },

    {
        "connectionId": 4,
        "name": "Let's play tennis",
        "topic":"Sports",
        "detail":"Group to play tennis",
        "location":"Halton-Wagner Tennis Complex",
        "host": "Mina Miner",
        "date": "Saturday, October 05 2019",
        "startTime": "7:30am",
        "endTime": "9:30am",
        "image":"tennis.jpeg"
    },

    {
        "connectionId": 5,
        "name": "Basketball anyone?",
        "topic":"Sports",
        "detail":"Group to play football on weekends",
        "location":"Halton-Wagner Complex",
        "host": "Noora Niner",
        "date": "Saturday, October 05 2019",
        "startTime": "7:00pm",
        "endTime": "9:30pm",
        "image":"basketball.jpeg"
    },

    {
        "connectionId": 6,
        "name": "Disk golf at Reedy Creek park",
        "topic":"Sports",
        "detail":"Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of" +
            " holes on a course in as few strokes as possible. This is a group to play Golf at Reedy Creek park",
        "location":"Reedy Creek park",
        "host": "Yasmine Musk",
        "date": "Saturday, October 11 2019",
        "startTime": "10:00am",
        "endTime": "01:30pm",
        "image":"discGolf.jpeg"
    }
];

module.exports = {
    getConnections: getConnections,
};