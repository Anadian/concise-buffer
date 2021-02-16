#!/usr/local/bin/node
'use strict';
/**
# [main.test.js](source/main.test.js)
> The test file for `main.js`.

Internal module name: `ConciseBufferTest`

Author: Anadian

Code license: MIT
```
	Copyright 2020 Anadian
	Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following 
conditions:
	The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
Documentation License: [![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
> The source-code comments and documentation are written in [GitHub Flavored Markdown](https://github.github.com/gfm/).

> The type notation used in this documentation is based off of the [Google Closure type system](https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System).

> The status and feature lifecycle keywords used in this documentation are based off of my own standard [defined here](https://github.com/Anadian/FeatureLifeCycleStateStandard).
*/

//#Dependencies
	//##Internal
	const ConciseBuffer = require('./main.js');
	//##Standard
	const FileSystem = require('fs');
	//##External
	const AVA = require('ava');
//#Constants
//##Errors

//#Global Variables
/* istanbul ignore next */

//#Functions
AVA.before( function( t ){
	const random_buffer_1024 = FileSystem.readFileSync( 'test/random_1024.dat' );
	t.context.random_buffer_1024 = random_buffer_1024;
} );
AVA('setLogger:DisableLogging', function( t ){
	ConciseBuffer.setLogger( null );
	t.pass();
} );
AVA('getStringFromBuffer:Error:InvalidParam:input_buffer', function( t ){
	t.throws( ConciseBuffer.getStringFromBuffer.bind( null ), {
		instanceOf: TypeError,
		code: 'ERR_INVALID_ARG_TYPE'
	} );
	t.pass();
} );
AVA('getStringFromBuffer:Error:InvalidParam:number_of_bytes', function( t ){
	t.throws( ConciseBuffer.getStringFromBuffer.bind( t.context.random_buffer_1024, 'a string false' ), {
		instanceOf: TypeError,
		code: 'ERR_INVALID_ARG_TYPE'
	} );
	t.pass();
} );
AVA('getStringFromBuffer:Error:InvalidParam:options', function( t ){
	t.throws( ConciseBuffer.getStringFromBuffer.bind( t.context.random_buffer_1024, 8, 'a string false' ), {
		instanceOf: TypeError,
		code: 'ERR_INVALID_ARG_TYPE'
	} );
	t.pass();
} );
AVA('getStringFromBuffer:Success:DefaultLength', function( t ){
	t.is( ConciseBuffer.getStringFromBuffer( t.context.random_buffer_1024 ), 'Buffer:[ 8ae6d80ca5743723b87cf92945e24395 ... 8a9a710d39587d5d15b3756b35483ed8 ]' );
} );
AVA('getStringFromBuffer:Success:CustomLength', function( t ){
	t.is( ConciseBuffer.getStringFromBuffer( t.context.random_buffer_1024, 8 ), 'Buffer:[ 8ae6d80ca5743723 ... 15b3756b35483ed8 ]' );
} );
AVA('getStringFromBuffer:Success:SmallerBufferLengthThanNumberOfBytes', function( t ){
	const random_buffer_16 = t.context.random_buffer_1024.slice( 0, 16 );
	t.is( ConciseBuffer.getStringFromBuffer( random_buffer_16, 32 ), 'Buffer:[ 8ae6d80ca5743723b87cf92945e24395 ]' );
} );




//#Exports and Execution
if(require.main === module){
} else{
}
