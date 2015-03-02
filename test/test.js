var assert = require('assert');
var readChunk = require('read-chunk');
var isFlv = require('..');

function check(filename) {
  return isFlv(readChunk.sync(filename, 0, 4));
}

it('should return true when passing an flv', function() {
  assert(check('test/fixture.flv'));
});

it('should return false when not passing an flv', function() {
  assert(!check('test/fixture.avi'));
});
