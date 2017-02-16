
const path = require("path");
let fs = require("fs");

const pathToFile = process.argv[2];
const ext = "." + process.argv[3];



fs.readdir(pathToFile, function (err, data) {
    if (err) {
        return callback(err);
    }
    var filtered = data.filter((file) => path.extname(file) === ext);
    var joined = filtered.join("\n");
    console.log(joined);
});