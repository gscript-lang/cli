#!/usr/bin/env node
const arguments = process.argv.slice(2);
const { Compiler } = require('gscript-compiler');
const packageInfo = require('./package.json');

const filePath = arguments[1];

if(arguments[0] !== "run" && arguments[0] !== "--version") {
    console.log('The only valid command is run and --version. e.g gs run ./file.gs = gs --version')
} else if(arguments[0] === "run") {
    const compiler = new Compiler(filePath);
    compiler.run();
} else if(arguments[0] === "--version") {
    console.log(`CLI tool running on version ${packageInfo.version}`);
}
