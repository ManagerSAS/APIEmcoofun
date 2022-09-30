"use strict";

var _require = require('express'),
    Router = _require.Router;

var cors = require('cors');

var router = Router();

var mysqlConnection = require('../../config/mysql');

var autorizarUsuario = require('../../auth/auth');

router.post('/homenajes', cors(), function (req, res) {
  // const response
  var data = req.body;
  var query = "INSERT INTO homenajes( nombre_titular, direccion, barrio, municipio, telefono, email, nombre_homenaje, n_documento, afiliado, lugar_fallecimiento, documentos, exequias, otro, iglesia, hora_exequias, retablo, direccion_entrega, destino_final, parentescos, aprobado, fecha_registro) VALUES('".concat(data.nombre_titular, "', '").concat(data.direccion, "', '").concat(data.barrio, "', '").concat(data.municipio, "', '").concat(data.telefono, "', '").concat(data.email, "', '").concat(data.nombre_homenaje, "', '").concat(data.n_documento, "', '").concat(data.afiliado, "', '").concat(data.lugar_fallecimiento, "','").concat(data.documentos, "', '").concat(data.exequias, "', '").concat(data.otro, "', '").concat(data.iglesia, "', '").concat(data.hora_exequias, "', '").concat(data.retablo, "', '").concat(data.direccion_entrega, "', '").concat(data.destino_final, "', '").concat(data.parentescos, "', '0', '").concat(data.fecha_registro, "')");
  mysqlConnection.query(query, function (err, rows, fields) {
    if (!err) {
      res.status(200).json({
        error: false,
        query: 'Query correctly executed.',
        message: 'Data correctly saved'
      });
    } else {
      throw err;
    }
  });
});
router.put('/homenajes/:id', cors(), autorizarUsuario, function (req, res) {
  var id = req.params.id;
  var data = req.body;
  var query = "UPDATE homenajes SET nombre_titular = '".concat(data.nombre_titular, "', direccion = '").concat(data.direccion, "', barrio = '").concat(data.barrio, "' , municipio = '").concat(data.municipio, "', telefono = '").concat(data.telefono, "', email = '").concat(data.email, "', nombre_homenaje = '").concat(data.nombre_homenaje, "', n_documento = '").concat(data.n_documento, "', lugar_fallecimiento = '").concat(data.lugar_fallecimiento, "', hora_exequias = '").concat(data.hora_exequias, "', iglesia = '").concat(data.iglesia, "', aprobado = '1' WHERE id = ").concat(id);
  mysqlConnection.query(query, function (err, rows, fields) {
    if (!err) {
      res.status(200).json({
        error: false,
        query: 'Query correctly executed.',
        message: 'Data correctly updated'
      });
    } else {
      throw err;
    }
  });
});
module.exports = router;