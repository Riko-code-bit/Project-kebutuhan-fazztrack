const httppLib = require('supertest');
const serverApi = httppLib('http://localhost:1234/v1');

function createUser(data) {
    return serverApi
    .post('/users')
    .send(data);
}

function getUserDetail(dataID) {
    return serverApi
    .get(`/users/${dataID}`)
    .send(dataID);
}

function deleteData() {
    return serverApi
        .delete('/users/removeAll');
};

module.exports = {getUserDetail, createUser, deleteData};