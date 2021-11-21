var button = document.querySelector("button");
var input1 = document.querySelectorById("num1");
var input2 = document.querySelectorById("num2");

function add(num1,num2){
    console.log("num1 ::",num1)
    return num1+num2;
}
button.addEventListener("click",function(){
    console.log(add(input1.value+input2.value))
})