const rw = require("./rw.js");


function clearList(request, response) {
    rw.fileWrite('./list.json', '', function(error) {
        if (error) {
            console.error(error);
        }
        response.json({
            result: 'The list has been cleared'
        });
    });
}

module.exports = {
    clearList
};