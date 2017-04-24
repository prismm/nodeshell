var commands = require('./commands.js');

process.stdout.write('prompt > ');

//commands interpreter
process.stdin.on('data', function(data) {
    var input = data.toString().trim().split(" ");
    var cmd = input[0];
    exports.args = input.slice(1).join(" ");
    commands[cmd](exports.args);
});