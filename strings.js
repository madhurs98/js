let str = "this is a string"
console.log(str);

let lengthofstring= str.length
console.log(lengthofstring)

//slice(start,end)
let slicedArr=str.slice(3); //only starting
console.log(slicedArr);

let slicedArr2=str.slice(5,8)
console.log(slicedArr2);

let slicedArr3=str.slice(5,15)
console.log(slicedArr3);
//repalce(value to be replaced,value to be replaced with)
let replacedstr =str.replace("a","am");
console.log(replacedstr);

//to upper case

let UpperCase=str.toUpperCase()
console.log(UpperCase)

//lower case
let LowerCase=str.toLowerCase()
console.log(LowerCase);

//concetenation
let first="hello"
let second=" madhur"

let concatenate=first.concat( second);
console.log(concatenate);

//trim
let text =  "             hello pepcoders"
console.log("length of text :",text.length);
console.log("text before trim: ",text)
let trimmedtext= text.trim();
console.log("length of trimmed text : ",trimmedtext.length);
console.log("trimmedtext:",trimmedtext);




