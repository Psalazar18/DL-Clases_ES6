"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_total_venta, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_total_venta = function () {
      return monto_total_venta;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuestos, [{
    key: "CalcularImpuesto",
    value: function CalcularImpuesto() {
      return parseInt(this._monto_total_venta()) - parseInt(this._deducciones()) * 0.21;
    }
  }, {
    key: "monto_total_venta",
    get: function get() {
      return this._monto_total_venta;
    },
    set: function set(nuevo_monto) {
      this._monto_total_venta = function () {
        return nuevo_monto;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nueva_deduccion) {
      this._deducciones = function () {
        return nueva_deduccion;
      };
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;