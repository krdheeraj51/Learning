"use strict";
function combine(input1, input2, resultConversionType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversionType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(26, 30, 'as-number');
console.log(combinedAges);
var combinedAgesAsString = combine('26', '30', 'as-number');
console.log(combinedAgesAsString);
var combinedNames = combine('Maxima', 'Allen', 'as-text');
console.log(combinedNames);
