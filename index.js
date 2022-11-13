#!/usr/bin/env node
var arguments = process.argv.slice(2);
var Compiler = require('gscript-compiler').Compiler;
var packageInfo = require('./package.json');
var filePath = arguments[1];
if (arguments[0] !== "run" && arguments[0] !== "--version") {
    console.log('The only valid command is run and --version. e.g gs run ./file.gs = gs --version');
}
else if (arguments[0] === "run") {
    var compiler = new Compiler(filePath);
    compiler.run();
}
else if (arguments[0] === "--version") {
    console.log("CLI tool running on version ".concat(packageInfo.version));
}
