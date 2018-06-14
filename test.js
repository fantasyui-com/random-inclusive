

const pct = function(value, upper, precision=2){

  let pct = (100.0 * value / upper) / 100;

  pct = pct.toPrecision(precision);

  return parseFloat( pct )

}


const assert = require('assert');
const program = require('./index.js');



const rangeMin = 2;
const rangeMax = 4;
const totalExp = (rangeMax-rangeMin)+1;

const numberOfTests = 54545;

const hitCounter = {};

for(let x = 0; x<numberOfTests; x++){
  const randomNumber = program(rangeMin, rangeMax);
  if(!hitCounter[randomNumber]) hitCounter[randomNumber] = 0;
  hitCounter[randomNumber]++;
}

const sum = function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
};
const high = function(accumulator, currentValue, currentIndex, array) {
   if(currentValue>accumulator) accumulator = currentValue;
   return accumulator
};
const low = function(accumulator, currentValue, currentIndex, array) {
   if(currentValue<accumulator) accumulator = currentValue;
   return accumulator
};

console.log('Number of Tests:', numberOfTests)
console.log( Object.values(hitCounter) )

// Test presence of correct number of numbers
assert.equal(Object.values(hitCounter).length, totalExp)

const mean = numberOfTests/totalExp;
const deviationsFromMean = Object.values(hitCounter).map(i=>i-( mean )).map(i=>Math.ceil(i))
const highestDeviation = deviationsFromMean.reduce(high);
const lowestDeviation = deviationsFromMean.reduce(low);
const sumOfRandom = Object.values(hitCounter).reduce(sum);
const span = (lowestDeviation+Math.abs(lowestDeviation))+(highestDeviation+Math.abs(lowestDeviation))
const sp = pct(span, sumOfRandom)*100;

// console.log('Deviations From Mean', deviationsFromMean);
// console.log('Highest: %d', highestDeviation)
// console.log('Lowest: %d', lowestDeviation)
// console.log('Hilo Span: %d', span)
console.log('Span Percent, should be low, beneath 1.0: %d', sp)
