let cp = require("child_process");

//console.log(cp);//basically helps in using

//cp.execSync("calc");

console.log("output: "+cp.execSync("node test.js"));