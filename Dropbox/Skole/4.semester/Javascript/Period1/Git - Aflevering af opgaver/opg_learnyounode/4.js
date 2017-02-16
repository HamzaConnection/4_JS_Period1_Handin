var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function(err,data) {
  if (err){
    return err;
  }
  var lines = data.toString().split('\n').length-1;
  console.log(lines);
});