
function sayHi(){
    console.log("function says Hi !!!");

}
sayHi();

function add(a,b){
    console.log("The addition of given no is: ",a+b)

}
add(2,3)

function mul(a,b){
    return a*b;
}
let product = mul(2,3);
console.log(product)

//func in first citizen in js

let a = function sub(x,y){
    return x-y;
}
console.log(a(10,2));

//iife

(function(){
    console.log("i am iife");
})();

//iifee with parameter

(function(a,b){
    console.log(a/b);
})(10,2);





