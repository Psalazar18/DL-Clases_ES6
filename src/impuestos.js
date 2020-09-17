export default class Impuestos{
	constructor(monto_total_venta, deducciones){
		this._monto_total_venta = () => monto_total_venta;
		this._deducciones = () => deducciones;
	}
	get monto_total_venta(){
    return this._monto_total_venta;
  }
  set monto_total_venta(nuevo_monto){
    this._monto_total_venta = () => nuevo_monto; 
  }
  get deducciones(){
    return this._deducciones;
  }
  set deducciones(nueva_deduccion){
    this._deducciones = () => nueva_deduccion; 
  }
  CalcularImpuesto(){
    return (parseInt(this._monto_total_venta()) - parseInt(this._deducciones()) * 0.21);
  }
}