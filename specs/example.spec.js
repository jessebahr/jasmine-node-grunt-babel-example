//not the es6 syntax. Thanks, babel!

import testme from '../src/testme.js';

describe('my test', () => {
	it('tests', () => {
		expect(testme).toBe('this is the test!');
	});
});
