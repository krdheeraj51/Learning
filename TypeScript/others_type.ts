let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Dheeraj';
if (typeof userInput === 'string') {

    userName = userInput;
}


function generateErrorCode(message: string, code: number): never {
    throw {
        message: message,
        code: code
    }

}

generateErrorCode('An Error Occured!', 500);
