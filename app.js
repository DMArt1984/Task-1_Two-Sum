'use strict';

console.log('Hello world');

// wait key...
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));