# concise-buffer
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Semantic Versioning 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen?style=flat-square)](https://semver.org/spec/v2.0.0.html)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![License](https://img.shields.io/github/license/Anadian/concise-buffer)](https://github.com/Anadian/concise-buffer/LICENSE)
[![CI](https://github.com/Anadian/concise-buffer/workflows/ci/badge.svg)](https://github.com/Anadian/concise-buffer/actions?query=workflow%3Aci)
[![Coverage Status](https://coveralls.io/repos/github/Anadian/concise-buffer/badge.svg?branch=master)](https://coveralls.io/github/Anadian/concise-buffer?branch=master)

> Concisely serialise the beginning and end of a Node buffer for logging.
# Table of Contents
- [Background](#Background)
- [Install](#Install)
- [Usage](#Usage)
- [API](#API)
- [Contributing](#Contributing)
- [License](#License)
# Background
I created this module simply because I was tired of Node Buffer's default serialisation producing massive garish noise in my logs. This module is incredibly simple: right now, it defines a single exported function, `getStringFromBuffer`, which turns an entire buffer into a nicely readable and consistent format `Buffer:[ <some_bytes> ... <some_bytes> ]`; how many bytes it includes can be specified and defaults to 16. If the number of bytes requested is greater than half the length of the buffer: it will simply serialise the whole buffer in hexadecimal.
# Install
To use it as a dependency in another package run:
```sh
npm install --save concise-buffer
```
To install it globally run:
```sh
npm install --global concise-buffer
```
# Usage
Example:
```js
const ConciseBuffer = require('concise-buffer');

const some_buffer = Buffer.from( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] ); //In real use cases, the buffer will propbably be a lot longer than this but you get the idea.

var concise_string = ConciseBuffer.getStringFromBuffer( some_buffer, 4 ); //You can optionally specify how many bytes from the beginning and end of the buffer you want; the default is 16.

console.log( concise_string ); //Will print: `Buffer:[ 00010203 ... 0c0d0e0f ]`
```
# API
# Contributing
Changes are tracked in [CHANGELOG.md](CHANGELOG.md).
# License
MIT ©2021 Anadian

SEE LICENSE IN [LICENSE](LICENSE)

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)This project's documentation is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
