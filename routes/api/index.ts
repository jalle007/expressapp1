import express = require('express');
var calc = require('./javascripts/calc.js');

export function api(req: express.Request, res: express.Response) {
  res.render('api', { title: 'API', year: new Date().getFullYear(), message: 'Your API here' });
};

export function sum(req: express.Request, res: express.Response) {
  var x = req.param('arr');
  res.send(calc.sum(x));
};

export function avg(req: express.Request, res: express.Response) {
  res.send("avg API");
};