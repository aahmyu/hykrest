const rw = require("./rw.js");


function removeItem(request, response) {
    rw.fileRead('./list.json', function(data) {
        hadndleData(data, request, response);
    });
}

function hadndleData(data, request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    const parsedData = JSON.parse(data);
    if (parsedData[select]) {
        if (parsedData.length != 0) {
            parsedData.splice(select, 1);
            for (var i = 0; i < parsedData.length; i++) {
                var num = parsedData[i].Id = i + 1;
                var str = num.toString();
                parsedData[i].Id = str;
            }
            rw.fileWrite('./list.json', JSON.stringify(parsedData), function() {
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

module.exports = {
    removeItem
};