const Connection = require('./connection');

class UserConnection {
    
    constructor(connection, rsvp) {
        if (connection instanceof Connection){
            this._connection = connection; // this should be of Connection object
        } else{
            throw new Error('connection should be a Connection Object');
        }
        this._rsvp = rsvp;
    }

    get connection() {
        return this._connection;
    }

    set connection(value) {
        if (value instanceof Connection){
            this._connection = value; // this should be of Connection object
        } else{
            throw new Error('connection should be a Connection Object');
        }
    }

    get rsvp() {
        return this._rsvp;
    }

    set rsvp(value) {
        this._rsvp = value;
    }
}

module.exports = UserConnection;
