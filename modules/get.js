const fs = require("fs");


function listItem(request, response) {
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            if (data.length != 0) {
                const parsedData = JSON.parse(data);
                response.json(parsedData);
            }
            else {
                response.json({
                    error: "The list is empty"
                });
            }
        }
    });
}

function getItem(request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            const parsedData = JSON.parse(data);
            if (parsedData[select]) {
                response.json(parsedData[select]);
            }
            else {
                response.json({
                    error: 'The selected task does not exist'
                });
            }

        }
    });
}

function listDone(request, response) {
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            var doneArr = [];
            if (data.length != 0) {
                const parsedData = JSON.parse(data);
                for (var i = 0; i < parsedData.length; i++) {
                    if (parsedData[i].Completed == "Yes") {
                        doneArr.push(parsedData[i]);
                    }
                }
                if (doneArr.length != 0) {
                    response.json(doneArr);
                }
                else {
                    response.json({
                        error: "No tasks are completed yet"
                    });
                }

            }
            else {
                response.json({
                    error: "The list is empty"
                });
            }
        }
    });
}

function listUnD(request, response) {
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            var unD = [];
            if (data.length != 0) {
                const parsedData = JSON.parse(data);
                for (var i = 0; i < parsedData.length; i++) {
                    if (parsedData[i].Completed == "No") {
                        unD.push(parsedData[i]);
                    }
                }
                if (unD.length != 0) {
                    response.json(unD);
                }
                else {
                    response.json({
                        error: "All tasks are completed"
                    });
                }

            }
            else {
                response.json({
                    error: "The list is empty"
                });
            }
        }
    });
}

module.exports = {
    listItem, getItem, listDone, listUnD
};