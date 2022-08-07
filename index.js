#!usr/bin/env node
const arguments = process.argv.slice(2);
const { Compiler } = require('gscript-compiler');

const filePath = arguments[1];

if(!arguments[0] === "run") {
    return console.log('The only valid command is run. e.g gs run ./file.gs')
} else {
    const compiler = new Compiler(filePath);
    compiler.run();
}

