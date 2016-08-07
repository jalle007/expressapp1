// calc.js
  function Sum(params) {
    return params.reduce(function(a, b) { return parseInt(a, 10) + parseInt(b, 10); });

    var res = 0;
    for (i = 0; i < params.length; i++) {
      res += parseInt(params[i], 10);
    }
    return res;
  }


  function Avg(params) {
    var a = Sum(params) / params.length;
    return a;
  }

  function standardDeviation(values) {
    var avg = average(values);

    var squareDiffs = values.map(function(value) {
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });

    var avgSquareDiff = average(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }

  function average(data) {
    var sum = data.reduce(function(sum, value) {
        return sum + value;
      },
      0);

    var avg = sum / data.length;
    return avg;
  }

  function lst2array(list) {
    var texts = [];
    for (var i = 0, n = list.options.length; i < n; i++) {
      texts.push(list.options[i].text);
    }

    return texts;
  }
 

module.exports.Sum = Sum;
module.exports.Avg = Avg;