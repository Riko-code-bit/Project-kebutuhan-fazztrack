//chai assertions
const expect = require('chai').expect;
//mocha function
const apiUnderTest = require('../api-nya/api_swg');
const testcase = require('../case-test/tc-api-swg').testcase;
const jsonData = require('../file-json/payload-swg.json');





describe(testcase.description,   async () => {
    it(testcase.positive.case1, async () => {

      const response = await apiUnderTest.createUser(data);


        console.log(response.status);   
        console.log(response.body);})
});

    it(testcase.positive.case2, async() => {
      const data = jsonData;
      
      console.log(data)
      const response = await apiUnderTest.createUser(data);
      console.log(response.body);

      //assertion
      expect(response.body.age).to.equal(data.age);
      expect(response.body.name).to.equal(data.name);




    });

    it(testcase.negative.case1, async() => {


    });
