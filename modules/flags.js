const rw = require("./rw.js");


function done(request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    rw.fileRead('./list.json', function(data) {
        const parsedData = JSON.parse(data);
        const selected = parsedData[select];
        if (parsedData.length != 0 && selected.Completed != "Yes") {
            selected.Completed = "Yes";
            rw.fileWrite('./list.json', JSON.stringify(parsedData), function(error) {
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
    });
}

function undone(request, response) {
    const select = parseInt(request.params.id, 10) - 1;
    rw.fileRead('./list.json', function(data) {
        const parsedData = JSON.parse(data);
        const selected = parsedData[select];
        if (parsedData.length != 0 && selected.Completed != "No") {
            selected.Completed = "No";
            rw.fileWrite('./list.json', JSON.stringify(parsedData), function(error) {
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
    });
}

module.exports = {
    done, undone
};