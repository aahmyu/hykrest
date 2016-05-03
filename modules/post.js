const fs = require("fs");

function addItem(request, response) {
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            if (request.body.Task) {
                if (data.length != 0) {
                    response.status(201).json({
                        result: "The task has been created"
                    });
                    const parsedData = JSON.parse(data);
                    var num = parsedData.length + 1;
                    var str = num.toString();
                    const items = {
                        Id: str,
                        Task: request.body.Task,
                        Completed: "No",
                        // Time: new Date().toUTCString().slice(1,3)
                    };
                    parsedData.push(items);
                    fs.writeFile('./list.json', JSON.stringify(parsedData), 'utf8', function(error) {
                        if (error) {
                            console.error(error);
                        }
                    });
                }
                else {
                    response.status(201).json({
                        result: "The task has been created"
                    });
                    const item = [{
                        Id: "1",
                        Task: request.body.Task,
                        Completed: "No",
                        // Time: new Date().toUTCString().slice(1,3)
                    }];
                    fs.writeFile('./list.json', JSON.stringify(item), 'utf8', function(error) {
                        if (error) {
                            console.error(error);
                        }
                    });
                }
            }
            else {
                response.status(400).json({
                    error: "Missing field: 'Task'"
                });
            }
        }
    });

}


module.exports = {
    addItem
};