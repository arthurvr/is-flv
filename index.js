'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 0x46 && buf[1] === 0x4c && buf[2] === 0x56 && buf[3] === 0x01;
};
