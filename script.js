//Get User Input
//-->Select Parser
//Parse Input
//Execute Input
//Return Data
//Repeat

const inputParser = require("./parsers/insert");

const result = inputParser('INSERT {"a":1} INTO test');
console.log(result);
