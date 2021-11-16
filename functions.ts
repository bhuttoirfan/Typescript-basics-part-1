// Lambda or Arrow Function
var foo = (x) => x+10;

console.log("Number + 10 is equal to: " + foo(17));

var logType = (x) => {
    if(typeof x == "number"){
        console.log(x + " is number.");
    }else if(typeof x == "string") {
        console.log(x + " is string.")
    }
}

logType(30);
logType("Irfan");

var num = new Number(10);
console.log("num is: "+num)
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
