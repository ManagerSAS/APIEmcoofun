"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jwt = require('jsonwebtoken'); // const mysqlConnection = require('../config/mysql');


var autorizaUsuario = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var strToken, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            strToken = req.headers.authorization;

            if (strToken) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status().json({
              message: 'No se encontro el token'
            }));

          case 3:
            _context.prev = 3;
            token = strToken.split(" ")[1];
            jwt.verify(token, process.env.TOKEN);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.json({
              error: _context.t0
            }));

          case 11:
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 8]]);
  }));

  return function autorizaUsuario(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = autorizaUsuario;