module.exports = function(min, max) {
  min = parseInt(min);
  max = parseInt(max);

  let result = 0;

  // Min and Max are an interface to this function, a DSL, a concept,
  // we need the number they describe, that is the number between min and max,
  // we will multiply this number by a fraction and then push it back up to restore min.
  const wholeNumber = (max - min + 1);

  // This is the fraction that will "damage" or erode the number between min and max.
  const randomFraction = Math.random();

  //  Here we damage/erode the whole by the fraction generated with Math.random();
  // When we multiply something by 2 we double it.
  // When we multiply something by 1 we get the same number.
  // But when we multiply something by less than one, or a fraction of one, we get that much less than the same number.
  // We only get a fraction of that number.
  const erodedWhole = Math.floor(wholeNumber * randomFraction);

  // Here we restore the range, we take the whole and push it up the integer scale.
  // We calculated the wholeNumber by taking the max (ex: 10) and substracting the min (ex: 2) and got 8,
  // we reset that MIN CONCEPT back down to ZERO, we did this to be able to perform that fun fraction multiplication,
  // now that we have exploited fraction multiplication for our needs, we put min back in.
  // We were unable to erode by fraction with the concept of min max, it is not compatible with Math.random(),
  // THus we took min/max and made it compatible by creating a single number out of the two, that single number
  // is compatible with fraction multiplication.
  // Now that we are done with fraction multilication, we restore our original min/max concept,
  // in this case concept resteration is just pushing the eroded whole, upwards by min.
  // Here we respect the user's wish of not going below min.
  const pushedUpErodedWhole = erodedWhole + min;

  return pushedUpErodedWhole;
}
