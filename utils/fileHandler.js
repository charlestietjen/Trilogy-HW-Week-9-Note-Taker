const fs = require('fs');
const { error, success } = require('./logFuncs');

write = function(fPath, fData) {
    fs.writeFile(fPath, fData, err => {
        if (err) {
            console.log(error(err));
            return false;
        }
        console.log(success(fPath + " written successfully."));
        return true;
    });
};

module.exports = { write };