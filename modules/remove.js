const fs = require("fs");


function removeItem(request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    fs.readFile('./list.json', 'utf8', function(error, data) {
        if (error) {
            console.error(error);
        }
        else {
            const parsedData = JSON.parse(data);
            if (parsedData[select]) {
                if (parsedData.length != 0) {
                    parsedData.splice(select, 1);
                    for (var i = 0; i < parsedData.length; i++) {
                        var num = parsedData[i].Id = i + 1;
                        var str = num.toString();
                        parsedData[i].Id = str;
                    }
                    fs.writeFile('./list.json', JSON.stringify(parsedData), 'utf8', function(error) {
                        if (error) {
                            console.error(error);
                        }
                        response.json({
                            result: 'The task has been deleted'
                        });
                    });
                }
                else {
                    response.json({
                        error: 'The list is empty'
                    });
                }
            }
            else {
                response.json({
                    error: 'The selected task does not exist'
                });
            }
        }
    });
}

module.exports = {
    removeItem
};