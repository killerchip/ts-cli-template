"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var parseArguments = function (program) {
    if (program === void 0) { program = commander_1.default; }
    program
        .description('A starter template for TS based CLI creation.')
        .name('ts-cli-template')
        .usage('<source-file> [options] arguments')
        .option('-o <option>', 'sample option');
    program.parse(process.argv);
    return { options: program.opts(), args: program.args };
};
exports.default = parseArguments;
