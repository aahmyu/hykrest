const fs = require("fs");


function done(request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            const parsedData = JSON.parse(data);
            const selected = parsedData[select];
            if (parsedData.length != 0 && selected.Completed != "Yes") {
                selected.Completed = "Yes";
                fs.writeFile('./list.json', JSON.stringify(parsedData), 'utf8', function(error) {
                    if (error) {
                        console.error(error);
                    }
                });
                response.json({
                    result: "The task has been marked as completed"
                });
            }
            else {
                response.json({
                    error: "The task has been completed already"
                });
            }
        }
    });

}

function undone(request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            const parsedData = JSON.parse(data);
            const selected = parsedData[select];
            if (parsedData.length != 0 && selected.Completed != "No") {
                selected.Completed = "No";
                fs.writeFile('./list.json', JSON.stringify(parsedData), 'utf8', function(error) {
                    if (error) {
                        console.error(error);
                    }
                });
                response.json({
                    result: "The task has been unmarked"
                });
            }
            else {
                response.json({
                    error: "The task has not been completed yet"
                });
            }
        }
    });

}

module.exports = {
    done, undone
};