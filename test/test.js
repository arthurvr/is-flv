import test from 'ava';
import readChunk from 'read-chunk';
import isFlv from '..';

function check(filename) {
	return isFlv(readChunk.sync(filename, 0, 4));
}

test('should return true when passing an flv', t => {
	t.true(check('test/fixture.flv'));
	t.end();
});

test('should return false when not passing an flv', t => {
	t.false(check('test/fixture.avi'));
	t.end();
});
