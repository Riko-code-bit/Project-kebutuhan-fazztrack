const chai = require('chai');
chai.use(require('chai-json-schema'));


const expect = require('chai').expect;

const chaiJsonSchema = require('chai-json-schema');
// chai.use(require('chai-json-schema'));
//mocha function
const apiUnderTest = require('../api-nya/tugas-apinya');
const testcase = require('../case-test/tugas-tc.js').testcase;
const dataCreateUser1 = require('../data/tugas-data.js');
const jsonData = require('../file-json/tugas-payload.json');
const schemaResponse = require('../schema/tugas-schema.js');

describe(testcase.description, async () => {
  let idUser = '';

  before('Hit Endpoint create user', async () => {
    // data tampungan dari data file lokal
    let data = dataCreateUser1.dataCreateUser();

    //To do create user
    const response = await apiUnderTest.createUser(data);
  console.log(response.body);
  idUser = response.body.id;
  });

  after('Remove semua data', async () => {
   // hooks remove smua data 
const response = await apiUnderTest.deleteData()
    
  })



  it(testcase.positive.case1, async () => {
 
  // let response = await apiUnderTest.createUser(data)

  // dimake sure apakah id yg dibuat id before ada
  response = await apiUnderTest.getUserDetail(idUser); 

      // tampungan data response body
  let data1 = response.body
  console.log(data1)

   expect(response.status).to.eql(200); // assertion code
   console.log(response.status);
  //  expect(response.body.id).to.equal(data1.id); // assertion id
  expect(response.body).to.have.property(`id`, `${idUser}`); // assertion id

   for(let index = 0; index < response.body.length; index++){
    expect(response.body[index]).to.be.jsonSchema(schemaResponse.getIdSchema1)
  }
   
  });



  it(testcase.negative.case1, async () => {

    // let data = jsonData;
    // let response = await apiUnderTest.createUser(data);
    response = await apiUnderTest.getUserDetail('098907079898'); //user memasukkan id yg slaah
    console.log(response.status)


    expect(response.status).to.eql(404);
    expect(response.body).to.have.property('errorCode', 'ER-01');
    expect(response.body).to.have.property('message', 'user not found');
    console.log(response.body);
    
  });

});
