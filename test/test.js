var dumpstr = require('..');
var datestr = +new Date();
dumpstr.dump("mongodb://localhost/test", "test-" + datestr, function (err, res) {
  console.log(arguments);
});