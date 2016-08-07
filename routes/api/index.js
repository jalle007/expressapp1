//"use strict";


var calc = require('./calc.js');

function api(req, res) {
  res.render('api', { title: 'API', year: new Date().getFullYear(), message: calc.Sum(1) });
    //res.render('api', { title: 'API', year: new Date().getFullYear(), message: 'Your API here' });
}
exports.api = api;
;
function sum(req, res) {
    //var x = req.param('arr');
  //  res.write('calc.sum(x)');
   
}
exports.sum = sum;
;
function avg(req, res) {
    res.send("avg API");
}
exports.avg = avg;
;
//# sourceMappingURL=index.js.map