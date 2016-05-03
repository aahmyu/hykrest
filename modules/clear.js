const fs = require("fs");


function clearList(request, response) {
    fs.writeFile('./list.json', '', 'utf8', function(error) {
        if (error) {
            console.error(error);
        }
        response.json({
            result: 'ok'
        });
    });
}

module.exports = {
  clearList  
};