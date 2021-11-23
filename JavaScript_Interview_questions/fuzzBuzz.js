/**fizzbuzz problem */

/**
 * Write a program to print to the screen numbers 1 to n.
 * For multiples of 3 print fizz. 
 * for multiples of 5 print buzz.
 * for muliples of both print fizzbuzz.
 */

((num)=>{
    for(let i =0;i<=num;i++){
        if(i%3===0){
            console.log('fuzz');
            i++;
        }
        if(i%5===0){
            console.log('buzz');
            i++;
        }
        if(i%3===0 && i%5===0){
            console.log('fuzzbuzz');
            i++;
        }
        if(i>num)break;
        else{
            console.log(i);
        }

    }  

})(15);