// functional programming,, callback

// callback function
// function siPalingCoding(input) {
//     return console.log(input)}

// function sum(a, b) {
//     const result = a + b;
//     return console.log(result)}
    
// function sum2(a, b, callback) {
//     const result = a + b
//     callback(result)}

// sum2(1, 2, siPalingCoding)

//chai assertions
const expect = require('chai');

//mocha function
const apiUnderTest = require('./api_regre');
describe('ini adalah test suite dari https://reqres.in/api/users',   async () => {
    it('(GET) ini adalah testcase dari regresnya', async () => {
        const response = await apiUnderTest.getUser();
        // console.log(response.status);   
        // console.log(response.body);  

        assertion
        const data = response.body.data

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].first_name);
            expect(data[i].first_name).to.not
        }
    });
});