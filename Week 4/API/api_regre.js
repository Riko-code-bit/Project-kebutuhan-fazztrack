const httpLib = require('supertest');
const serverAPI = httpLib('https://reqres.in/api/');

function getUser() {
    return serverAPI
    .get('users?page=2')
    .set('Authorization', 1234);
}

module.exports = {
    getUser
};
