const fs = require("fs");


function fileWrite(fileName, data, callback) {
    fs.writeFile(fileName, data, 'utf8', function(error) {
        if (error) {
            console.error(error);
        }
        callback();
    });
}

function fileRead(fileName, callback) {
    fs.readFile(fileName, 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            callback(data);
        }
    });
}

function append(fileName, item, result) {
    fs.appendFile(fileName, item, 'utf8', function(error) {
        if (error) {
            console.error(error);
        }
        else {
            result;
        }
    });
}

module.exports = {
    fileRead,
    append,
    fileWrite
};