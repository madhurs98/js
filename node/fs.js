let fs = require("fs");
const { fileURLToPath } = require("url");
//console.log(fs)


//read a file
let content = fs.readFileSync('file.txt'); //stored


//console.log(content+"");

//write a file
fs.writeFileSync('file.txt',"hello from file"); //overwrite in existing file
fs.writeFileSync('file2.txt',"i am file2")//create a new file them write

//update a file
fs.appendFileSync('file.txt', "how are you");

// delete a file
fs.unlinkSync('file2.txt');
