'use strict';
var test = require('ava');
var readChunk = require('read-chunk');
var isFlv = require('..');

function check(filename) {
	return isFlv(readChunk.sync(filename, 0, 4));
}

test('should return true when passing an flv', function (t) {
	t.true(check('test/fixture.flv'));
});

test('should return false when not passing an flv', function (t) {
	t.false(check('test/fixture.avi'));
});
