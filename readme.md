# is-flv [![Build Status](https://travis-ci.org/arthurvr/is-flv.svg?branch=master)](https://travis-ci.org/arthurvr/is-flv)

> Check if a Buffer/Uint8Array is an FLV video


## Install

```
$ npm install --save is-flv
```


## Usage

```js
const readChunk = require('read-chunk'); // npm install read-chunk
const isFlv = require('is-flv');
const buffer = readChunk.sync('video.flv', 0, 4);

isFlv(buffer);
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
