/** Reverse an Integer*/

/**
 * Steps ::
 * 1. Convert to a string
 * 2. Turn into array
 * 3. Apply reverse method of js
 * 4. back to string
 * 5. back to int
 * 
 */


const reverseInt =(n)=>{
    if(n < 0)
    return -1 * (parseInt(n.toString().split('').reverse().join('')));
    return parseInt(n.toString().split('').reverse().join(''));


}

console.log({
    tesetCases: reverseInt(500),
    tesetCases2: reverseInt(51),
    tesetCases3: reverseInt(-900),
});