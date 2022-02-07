//file system
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

// read a directory
let folderContent = fs.readdirSync (__dirname);
console.log(folderContent);

//create a directory

//fs.mkdirSync('new_module');

//delete
//fs.rmdirSync('new_module')
 // check if exists or not 
let isExists = fs.existsSync('module2');
console.log(isExists);

//copy a filoe 
//fs.copyfileSync(path of file to be copied,path of destination
let dest = \Users\madhurshrivastava\OneDrive\Desktop\jp dev\module2\js
let fileName = 'file.txt'
let destPath = path.join(dest,fileName);

fs.copyFileSync('C:\Users\madhur shrivastava\OneDrive\Desktop\jp dev\module2\node\file.txt',C:\Users\madhur shrivastava\OneDrive\Desktop\jp dev\module2\js)