/**
 * @authors       qzhongyou
 * @date          2017-10-16 16:49:58
 * @description   foxtrel cli
 */

'use strict';
//process.env.NODE_PATH = __dirname + '/../node_modules/'


var argv = require('minimist')(process.argv.slice(2));

var foxtrel = module.exports = require('foxtrel-kernel');


foxtrel.cli = {};

foxtrel.cli.name = "foxtrel";

foxtrel.cli.colors = require('colors');

foxtrel.cli.info = fis.util.readJSON(__dirname + '/package.json');

//help
foxtrel.cli.help = function () {

}

//版本
foxtrel.cli.version = function () {
    var content = [
        '',
        ' version: ' + foxtrel.cli.info.version,
        ''
    ].join('\n');

    console.log(content);
}

//运行
var comName = [].slice.call(argv._)[0];

fis.cli.run = function () {
    //help
    if (argv['help'] || argv['h']) {
        foxtrel.cli.help();
    } else if (argv['version'] || argv['v']) {
        foxtrel.cli.version();
    } else if (!comName) {
        foxtrel.cli.help();
    } else {
        var command = foxtrel.require('command', comName);
        var program = require("commander");
        command.register(
            program.command(command.name || comName)
                .usage(cmd.usage)
                .description(cmd.desc)
        );
        program.parse(process.argv);
    };
}

