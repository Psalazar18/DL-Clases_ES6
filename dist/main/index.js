"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var n1 = new _cliente["default"]('Alex');
var monto1 = new _impuestos["default"]('1000', '200');
console.log("El impuesto anual que debe pagar ".concat(n1.nombre(), " segun el monto total de ventas de ").concat(monto1.monto_total_venta(), " y las deducciones anuales de ").concat(monto1.deducciones(), ", es de ").concat(monto1.CalcularImpuesto()));