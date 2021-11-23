/**
 * sum(1)(2)(3)(4)..( n)() | Amazon UI/Frontend Javascript Interview Question
 */

let sum = (a) => {
    return (b)=>{
        if(b){
            return sum(a+b);

        }return a;
    }  
}

console.log(sum(1)(2)(3)(4)())