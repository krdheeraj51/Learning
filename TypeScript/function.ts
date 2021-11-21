function addNum(n1: number, n2: number) {

    return n1 + n2;
}

function printReuslt(num: number) {
    console.log("Result :", num);
}

printReuslt(addNum(25, 30));

let combinedValues: (a:number,b:number) => number;
combinedValues = addNum;
// combinedValues = printReuslt;
console.log(combinedValues(8,8));
