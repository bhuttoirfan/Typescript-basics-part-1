/*
// 1. Hello world and some statements
    let msg = "Hello World";

    console.log(msg);
    console.log("hello world")
    console.log("We are learning TypeScript")

// Types in typescript

var a :number = 100;
var str :string = "Hello,";
var bol :boolean;

console.log(a);
console.log(str);
console.log(bol);


var global_num = 12;

class Numbers {
    num_val = 100;
    static sval = 1;

    storeNum() {
        var Local_num = 12;

        return 200;
    }
}

console.log("Global number: " + global_num);
console.log("Class number: " + Numbers.sval);

var obj = new Numbers();

console.log(obj.num_val);

var x:number = obj.storeNum();

console.log("returned value:" + x);



var j:any;
var n:any = "a b c";

// j returns index number
for(j in n) {
    console.log(n[j]);
}

console.log("its:" + n[1]+"a")
*/
var lion = {
    name: "lioness",
    specy: "rare",
    disp: function () {
        return "Hello";
    }
};
console.log(lion.disp() + " " + lion.name + " whose specy is " + lion.specy);
var drummer = {};
drummer.age = 15;
drummer.instrument = "Flute";
console.log(drummer.instrument + drummer.age);
