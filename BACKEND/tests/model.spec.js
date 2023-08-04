const chai = require('chai');
const expect = chai.expect;


var Item = require('../models/todo.model');



describe('Testing Todo model', () => {
    let testTodo;
  
    beforeEach(() => {
      testTodo = {
        name: 'sample item'
      };
    });
  
    it('it should throw an error due to missing fields', (done) => {
      let item = new Item();
  
      item.validate((err) => {
        expect(err.errors.name).to.exist;

        done();
      });
    });
  
    it('it should create the item successfully with correct parameters', (done) => {
      let item = new Item({
        ...testTodo
      });
  
      item.validate((err) => {
        if (err) {
          const unexpectedFailureError = new Error('⚠️ Unexpected failure!');
          done(unexpectedFailureError);
        } else {
          expect(item.name).to.equal('sample item');
          done();
        }
      });
    });
  });