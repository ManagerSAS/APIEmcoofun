"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("express"),
    Router = _require.Router;

var cors = require('cors');

var router = Router();

var mailconfig = require('../../config/mailer');

var _ = require('underscore');

router.post('/auxilios-funerarios', cors(), /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, typeRequest, date, SedeHomenaje, LugarHomenaje, NombreFallecido, NombreAfiliado, ApellidosAfiliado, CedulaAfiliado, CelularAfiliado, DireccionAfiliado, EmailAfiliado, EmpresaAfiliado, bodyEmail, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, typeRequest = _req$body.typeRequest, date = _req$body.date, SedeHomenaje = _req$body.SedeHomenaje, LugarHomenaje = _req$body.LugarHomenaje, NombreFallecido = _req$body.NombreFallecido, NombreAfiliado = _req$body.NombreAfiliado, ApellidosAfiliado = _req$body.ApellidosAfiliado, CedulaAfiliado = _req$body.CedulaAfiliado, CelularAfiliado = _req$body.CelularAfiliado, DireccionAfiliado = _req$body.DireccionAfiliado, EmailAfiliado = _req$body.EmailAfiliado, EmpresaAfiliado = _req$body.EmpresaAfiliado;
            bodyEmail = "\n        <div style=\"pading-left:50px; pading-right:50px;\">\n        <table width=\"600px\">\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 10px;\" colspan=\"2\">\n                    <img src=\"https://i.postimg.cc/bw0zKrQw/logo.png\" alt=\"\" height=\"50px\">\n                </td>\n            </tr>\n            <tr style=\"background-color: #119064f5;\">\n                <td style=\"padding-top: 15px; text-align: center;\" colspan=\"2\">\n                    <p style=\"color: white; font-family: Arial;\">\n                        <b>Auxilios</b>\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Tipo de tramite:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ".concat(typeRequest, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Fecha prestaci\xF3n del homanje:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(date, "\n                    </p>\n                </td>\n            </tr>\n            <tr style=\"background-color: #bbbbbb14;\">\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Sede donde se presto el homenaje:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(SedeHomenaje, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Lugar de destino final o inhumaci\xF3n:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(LugarHomenaje, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Nombre del fallecido:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(NombreFallecido, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Nombre afiliado solicitante:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(NombreAfiliado, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Apellidos afiliado solicitante:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(ApellidosAfiliado, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Cedula del afiliado o solicitante:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(CedulaAfiliado, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Celular del afiliado o solicitante:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(CelularAfiliado, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Direccion del afiliado o solicitante:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(DireccionAfiliado, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Email del afiliado o solicitante:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(EmailAfiliado, "\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        <b>Empresa o fondo por el cual esta afiliado:</b>\n                    </p>\n                </td>\n                <td style=\"padding: 5px;\">\n                    <p style=\"font-family: Arial;\">\n                        ").concat(EmpresaAfiliado, "\n                    </p>\n                </td>\n            </tr>\n        </table> \n    ");
            _context.next = 4;
            return mailconfig.sendMail({
              from: '"Solicitu de auxilios" <no-reply@gmail.com>',
              to: "agerenciavillavicencio@losolivos.co",
              // to: "juanmanuel273816381@gmail.com",
              subject: "Auxilios funerario✔",
              html: bodyEmail // attachments: [
              //     {
              //         filename: 'Archivo adjunto.jpg',
              //         path: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1633445241/xipwpaqn8ta3go9ilsui.jpg'
              //     }
              // ]

            })["catch"](console.error);

          case 4:
            response = _context.sent;

            if (response) {
              res.status(200).send({
                message: "Mensaje enviado correctamente"
              });
            }

          case 6:
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