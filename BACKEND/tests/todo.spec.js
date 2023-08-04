const chai = require('chai');
const expect = chai.expect;
const { testValue } = require("../controllers/todo.controller");

describe('Test /todo', () => { // il s'agit ici du nom du middleware à tester
    // before('before', () => {
    //     console.log('Ran before all the test suites');
    //   });
    
    //   after('after', () => {
    //     console.log('Ran after all the test suites');
    //   });
    
    //   beforeEach('beforeEach', () => {
    //     console.log('Ran before EACH test suite');
    //   });
    
    //   afterEach('afterEach', () => {
    //     console.log('Ran after EACH test suite');
    //   });
    // UN MIDDLEWARE A PLUSIEURS ROUTES
    // le deuxième describe c'est pour spécifier chaque route du middleware
    describe('todo check on /syncTest', () => {
      it('todo should return 10', () => { // ici, c'est la description du test proprement dit
        const actualResult = testValue();
        expect(actualResult).to.equal(10);
      });
    });
  });