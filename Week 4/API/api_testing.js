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
const expect = require('chai').expect;
//mocha function
const apiUnderTest = require('./api_regre');
describe('ini adalah test suite dari https://reqres.in/api/users',   async () => {
    it('(GET) testcase NAME tidak boleh kosong', async () => {
        const response = await apiUnderTest.getUser();
        // console.log(response.status);   
        // console.log(response.body);  

       // assertion
        const data = response.body.data

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].first_name);
            expect(data[i].first_name).to.not.equal(null); //expect  kosong
        }
        });

        //assertion post dari ngirim data
        it('(POST) Test apakah endpoint create user berfungsi membuat data user yang sesuai dengan inputnya', async () => {
            const data =
                {
                    "name": 'riko',
                    "job": 'engineer'
                };

            let response = await apiUnderTest.createUser(data);
            // console.log(response.status);
            // console.log(response.body);
    
            // assertion
            expect(response.body.name).to.equal('riko'); // sama aja dengan input 
            expect(response.body.job).to.equal(data.job); // tapi dibedain ama variable
    
        //     // coba cek ah ketika fungsi get,.. apakah datanya ada ga ada 
            response = await apiUnderTest.getSingleUser('7');
            
            expect(response.body.data.first_name).to.equal('Michael');
        });
   

    });
