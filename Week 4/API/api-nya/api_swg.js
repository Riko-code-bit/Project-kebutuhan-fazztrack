const httppLib = require('supertest');
const serverApi = httppLib('http://localhost:1234/v1');

function createUser(data) {
    return serverApi
    .post('/users')
    .send(data);
}

module.exports = {createUser};