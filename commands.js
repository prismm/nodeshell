var fs = require('fs');
var req = require('request');
//console.log(req.Request.toString());
var currDir = process.env.PWD;
var readDir = function(here) {
    fs.readdir('.', function(err, here) {
        if (err) throw err;
        here.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });
};
var promptStr = require('./bash.js');

exports.pwd = function(filename) {
    process.stdout.write(currDir);
    process.stdout.write('\nprompt > ');
}
exports.date = function(filename) {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
}
exports.ls = function(filename) {
    readDir(currDir);
}
exports.echo = function(filename) {
    process.stdout.write(promptStr.args);
    process.stdout.write('\nprompt > ');
}
exports.cat = function(filename) {
    fs.readFile(promptStr.args, (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
    });
}
exports.head = function(filename) {
    fs.readFile(promptStr.args, (err, data) => {
        var contentStr = data.toString();
        var holder = contentStr.split('\n');
        var head = holder.slice(0, 6).join('\n');
        if (err) throw err;
        process.stdout.write(head);
        process.stdout.write('\nprompt > ');
    });
}
exports.tail = function(filename) {
    fs.readFile(promptStr.args, (err, data) => {
        var contentStr = data.toString();
        var holder = contentStr.split('\n');
        var tail = holder.slice(-5).join('\n');
        if (err) throw err;
        process.stdout.write(tail);
        process.stdout.write('\nprompt > ');
    });
}
exports.sort = function(filename) {
    fs.readFile(promptStr.args, (err, data) => {
        var contentStr = data.toString();
        var holder = contentStr.split('\n').sort();
        var sorted = holder.join('\n');
        if (err) throw err;
        process.stdout.write(sorted);
        process.stdout.write('\nprompt > ');
    });
}
exports.curl = function(filename) {
    req(filename, function(error, response, body) {
        process.stdout.write(body);
    });
}