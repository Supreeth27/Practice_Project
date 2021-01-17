// connection object
class Connection{


    constructor(connectionId, connectionName, connectionTopic, detail, location, host, date, startTime, endTime, image){
        this._connectionId = connectionId;
        this._connectionName = connectionName;
        this._connectionTopic = connectionTopic;
        this._detail = detail;
        this._location = location;
        this._host = host;
        this._date = date;
        this._startTime = startTime;
        this._endTime = endTime;
        this._image = image;
    }


    get connectionId() {
        return this._connectionId;
    }

    set connectionId(value) {
        this._connectionId = value;
    }

    get connectionName() {
        return this._connectionName;
    }

    set connectionName(value) {
        this._connectionName = value;
    }

    get connectionTopic() {
        return this._connectionTopic;
    }

    set connectionTopic(value) {
        this._connectionTopic = value;
    }

    get detail() {
        return this._detail;
    }

    set detail(value) {
        this._detail = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
    get host() {
        return this._host;
    }

    set host(value) {
        this._host = value;
    }

    get startTime() {
        return this._startTime;
    }

    set startTime(value) {
        this._startTime = value;
    }

    get endTime() {
        return this._endTime;
    }

    set endTime(value) {
        this._endTime = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }
    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
}

module.exports = Connection;
