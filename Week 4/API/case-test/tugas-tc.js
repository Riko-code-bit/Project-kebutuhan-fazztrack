const testcase = {
    description: 'API automation test untuk endpoint GET /v1/users/{id}',
    positive: {
        case1 : 'ID-01 - User menggunakan data user id yang valid.',
        // case2 : 'ID-02 -  User gagal mendapatkan data ketika data id yang diinputkan invalid.',
    
},
    negative: {
        case1 : 'ID-02 -  User gagal mendapatkan data ketika data id yang diinputkan invalid.',}
}
module.exports = {
    testcase
}