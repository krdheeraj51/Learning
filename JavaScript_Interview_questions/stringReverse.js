/**
 * Reverse String in javaScript
 */

/**    How to reverese a string ? */

const revereseString = (str) => {
    const arr = str.split("");
    arr.reverse();
    str=arr.join("");
    console.log(str);

}
revereseString("apple");


/* Second approach */

(function(str){
    let reveresed="";
    for(let character of str){
        console.log("character ::",character);
        reveresed=character+ reveresed;
    }
    console.log({reveresed_value :reveresed})

})("Greetings");



