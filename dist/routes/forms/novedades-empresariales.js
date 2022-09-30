"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("express"),
    Router = _require.Router;

var cors = require('cors');

var router = Router();

var mailconfig = require('../../config/mailer');

var _ = require('underscore');

router.post('/novedades-empresariales', cors(), /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, company, email, listNovelty, nameFuncionary, workCenter, bodyEmail, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, company = _req$body.company, email = _req$body.email, listNovelty = _req$body.listNovelty, nameFuncionary = _req$body.nameFuncionary, workCenter = _req$body.workCenter;
            bodyEmail = "\n        <div style=\"pading-left:50px; pading-right:50px;\">\n        <table width=\"600px\">\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 10px;\" colspan=\"2\">\n                    <img src=\"https://i.postimg.cc/bw0zKrQw/logo.png\" alt=\"\" height=\"50px\">\n                </td>\n            </tr>\n            <tr style=\"background-color: #119064f5;\">\n                <td style=\"padding-top: 15px; text-align: center;\" colspan=\"2\">\n                    <p style=\"color: white; font-family: Arial;\">\n                        <b>Datos de la novedad</b>\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Correo electr\xF3nico:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ".concat(email, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Nombre empresa:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(company, "\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Mes a partir de cuando aplica la novedad:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(nameFuncionary, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Centro de trabajo (opcional):</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(workCenter, "\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #119064f5;\">\n                <td style=\"padding-top: 15px; text-align: center;\" colspan=\"2\">\n                    <p style=\"color: white; font-family: Arial;\">\n                        <b>Listado novedades: </b>\n                    </p>\n                </td>\n            </tr>      \n    ");

            _.each(listNovelty, function (value, key) {
              bodyEmail += "\n            <tr style=\"background-color: #119064f5;\">\n                <td style=\"padding-top: 15px; text-align: center;\" colspan=\"2\">\n                    <p style=\"color: white; font-family: Arial;\">\n                        <b>Novedad: ".concat(key + 1, " </b>\n                    </p>\n                </td>\n            </tr>  \n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Tipo novedad:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(value.novelty, "\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Nombre completo: </b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(value.name, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Documento:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(value.typeId, " - ").concat(value.id, " \n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Documento:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(value.typeId, " - ").concat(value.id, " \n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Fecha nacimiento:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(value.date, "\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Mes a partir cuando aplica: </b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(value.month, "\n                    </p>\n                </td>\n            </tr>\n        ");
            });

            bodyEmail += "</table>";
            _context.next = 6;
            return mailconfig.sendMail({
              from: '"Novedad empresarial:" <no-reply@gmail.com>',
              //to: "radicadorvillavicencio@losolivos.co",
              to: "sastoquejose1602@gmail.com",
              subject: "Novedades Empresariales y Afiliaciones ✔",
              html: bodyEmail // attachments: files

            })["catch"](console.error);

          case 6:
            response = _context.sent;

            if (response) {
              res.status(200).send({
                message: "Mensaje enviado correctamente"
              });
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;