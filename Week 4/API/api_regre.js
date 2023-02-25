const httpLib = require('supertest');
const serverAPI = httpLib('https://reqres.in/api/');

function getUser() {
    return serverAPI
    .get('users?page=2')
    .set('Authorization', 1234);
}

function createUser(data) {
    return serverAPI
    .post('users')
    .set('Authorization','1234')
    .send(data);
}

function getSingUser(userId) {
    return serverAPI
    .get(`users/${userId}.`)
    .set('Authorization', 1234);
}
module.exports = {
    getUser,
    createUser,
    getSingUser
};
