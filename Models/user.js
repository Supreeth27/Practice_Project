class User{

    constructor(userId, firstName, lastName, emailAddress, address1, city, state, zip, country) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._emailAddress = emailAddress;
        this._address1 = address1;
        this._city = city;
        this._state = state;
        this._zip = zip;
        this._country = country;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get emailAddress() {
        return this._emailAddress;
    }

    set emailAddress(value) {
        this._emailAddress = value;
    }

    get address1() {
        return this._address1;
    }

    set address1(value) {
        this._address1 = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}

module.exports = User;
