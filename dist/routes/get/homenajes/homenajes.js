"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var autorizarUsuario = require('../../../auth/auth');

var mysqlConnection = require('../../../config/mysql');

router.get('/homenajes', autorizarUsuario, function (req, res) {
  mysqlConnection.query('SELECT * FROM homenajes ORDER BY aprobado ASC', function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      throw err;
    }
  });
});
module.exports = router;