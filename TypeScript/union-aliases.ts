

function combine(input1: number | string, input2: number | string, resultConversionType: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversionType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;



}

const combinedAges = combine(26, 30, 'as-number');

console.log(combinedAges);

const combinedAgesAsString = combine('26', '30', 'as-number');

console.log(combinedAgesAsString);

const combinedNames = combine('Maxima', 'Allen', 'as-text');

console.log(combinedNames);

