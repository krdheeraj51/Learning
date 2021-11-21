"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Dheeraj';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateErrorCode(message, code) {
    throw {
        message: message,
        code: code
    };
}
generateErrorCode('An Error Occured!', 500);
