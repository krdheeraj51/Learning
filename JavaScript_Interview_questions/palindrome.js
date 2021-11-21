/**
 * A palindrome is a word, sentence, verse, or even number that reads the same backward or forward. 
 * It derives from Greek roots that literally mean “running back” (palin is “again, back,” and dromos, “running.”) 
 * The word appears to have been created in English based on these roots in the early 1600s.
 */

/** Find  palindrome */

// checkPalindrome("abba") = true
//checkPalindrome("abcdefg")= false

/**
 * Algorithm
 * -------------------------------------
 * 1. reverse a string
 * 2. check with original if they are same 
 */



// const checkPalindrome = (str) => {
//     const isPalindrome = str.split('').reverse().join('');
//     console.log(isPalindrome === str)

// }

// checkPalindrome('abbba');
// checkPalindrome('abcdefg');

/** Second approach  */


(function (str) {
    let reveresed = '';
    for (let character of str) {
         reveresed = character + reveresed;
    }
    console.log(str === reveresed);

})('david');