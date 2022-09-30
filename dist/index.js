"use strict";

var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function (req, res) {
  res.send("Listening on port: ".concat(app.get('port')));
});