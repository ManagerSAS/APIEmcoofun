"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var mysqlConnection = require('../config/mysql');

var jwt = require('jsonwebtoken');

router.post('/login', function (req, res) {
  var _req$body = req.body,
      correo = _req$body.correo,
      clave = _req$body.clave;
  mysqlConnection.query("SELECT * FROM usuarios WHERE usuario = '".concat(correo, "'  AND clave = md5('").concat(clave, "')"), function (err, rows, fields) {
    if (!err) {
      if (rows.length == 0) {
        res.status(200).json({
          token: null,
          message: 'Datos invalidos'
        });
      } else {
        var _rows$id = rows.id,
            id = _rows$id === void 0 ? rows[0].id_usuario : _rows$id,
            _rows$usuario = rows.usuario,
            usuario = _rows$usuario === void 0 ? rows[0].usuario : _rows$usuario;
        var opt = {
          expiresIn: '1h'
        };
        var tokensecret = process.env.TOKEN;
        var token = jwt.sign({
          id: id,
          usuario: usuario
        }, tokensecret, opt);
        res.status(200).json({
          token: token
        });
      }
    } else {
      res.status(200).json({
        error: true,
        message: 'Datos invalidos'
      });
    }
  });
});
module.exports = router;