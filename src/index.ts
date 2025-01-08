#!/usr/bin/env node

import { program } from 'commander';

program
    .option('--first')
    .option('-s, --separator <char>')
    .argument('<string>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));