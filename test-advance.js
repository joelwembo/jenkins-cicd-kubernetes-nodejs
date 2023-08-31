
// Requiring module
var mocha = require('mocha')
const assert = require('assert');
var describe = mocha.describe

// We can group similar tests inside a describe block
describe("Simple Calculations 2", () => {
before(() => {
	console.log( "This part executes once before all tests" );
});

after(() => {
	console.log( "This part executes once after all tests" );
});
	
// We can add nested blocks for different tests
describe( "Test1", () => {
	beforeEach(() => {
	console.log( "executes before every test" );
	});
	
	it("Is returning 5 when adding 10 + 60", () => {
	assert.equal(10 + 60, 70);
	});

	it("Is returning 6 when multiplying 2 * 3", () => {
	assert.equal(2*3, 6);
	});
});
});
