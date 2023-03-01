const testcase = {
    description: 'Testcase endpoints create user dari sweager',
    positive: {
        case1 : 'ID-01 - Test Input valid',
        case2 : 'ID-02 - Test apakah endpoint create user berfungsi membuat data user dengan data yang berasal dari file ekstensi .json'
    },
    negative: {
        case1 : 'ID-03 -  Test apakah endpoint create user berfungsi membuat data user dengan hobi kosong',
        case2 : 'ID-04 - Test apakah endpoint create user berfungsi membuat data user dengan hobi ada isinya tp angka'
    }
}
module.exports = {
    testcase
}