"use strict";
function addNum(n1, n2) {
    return n1 + n2;
}
function printReuslt(num) {
    console.log("Result :", num);
}
printReuslt(addNum(25, 30));
var combinedValues;
combinedValues = addNum;
// combinedValues = printReuslt;
console.log(combinedValues(8, 8));
