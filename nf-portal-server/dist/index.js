'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _queryForData = require('./queryForData');

var _queryForData2 = _interopRequireDefault(_queryForData);

function _interopRequireDefault(obj) {
 return obj && obj.__esModule ? obj : {default: obj};}

var app = (0, _express2.default)();

var writeAllDataFile = function writeAllDataFile() {
  let tables = ['syn16859580', 'syn16858699', 'syn16858331', 'syn16857542', 'syn16787123', 'syn16859448'];
  let query = function query(table) {
    return 'SELECT * FROM ' + table;
  };

  tables.map(function(table) {
    (0, _queryForData2.default)(table, query(table)).then(function(data) {
      _fs2.default.writeFile('./public/' + table + '.json', data, function(err) {
        if (err) throw err;
        console.log('The file has been saved!');
        // process.exit()
      });
    });
  });
};

app.all('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

writeAllDataFile();

app.use(_express2.default.static(__dirname + '/public'));

app.listen(3030, function() {
  return console.log('Example app listening on port 3030!');
});
