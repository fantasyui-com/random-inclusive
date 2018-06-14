#!/usr/bin/env node

let [node, location, low=0, high=100 ] = process.argv;
const program = require('./index.js');
console.log( program(low, high) );
