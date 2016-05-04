const rw = require("./rw.js");


function addItem(request, response) {
    rw.fileRead('./list.json', function(data) {
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
                rw.fileWrite('./list.json', JSON.stringify(parsedData), function(error) {
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
                rw.fileWrite('./list.json', JSON.stringify(item), function(error) {
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
    });
}


module.exports = {
    addItem
};