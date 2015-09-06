# is-flv [![Build Status](https://secure.travis-ci.org/arthurvr/is-flv.png?branch=master)](https://travis-ci.org/arthurvr/is-flv)

> Check if a Buffer/Uint8Array is an FLV video


## Install

```
$ npm install --save is-flv
```


## Usage

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isFlv = require('is-flv');
var buffer = readChunk.sync('video.flv', 0, 4);

isFlv(buffer);
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
