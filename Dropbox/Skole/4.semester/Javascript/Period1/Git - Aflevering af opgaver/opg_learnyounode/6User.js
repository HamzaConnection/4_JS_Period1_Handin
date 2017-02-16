let myDirSeacher = require("./6.js");

myDirSeacher(process.argv[2], process.argv[3], function(err, data){
    if(err){
        return callback(err);
    }
    console.log(data.join('\n'));
});