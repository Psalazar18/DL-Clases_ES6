export default class Impuestos{
	constructor(monto_bruto_anual, deducciones){
		this._monto_bruto_anual = () => monto_bruto_anual;
		this._deducciones = () => deducciones;
	}
	get monto_bruto_anual(){
       return this._monto_bruto_anual;
    }
    set monto_bruto_anual(nuevo_monto){
        this._monto_bruto_anual = () => nuevo_monto; 
    }
   	get deducciones(){
       return this._deducciones;
    }
    set deducciones(nueva_deduccion){
        this._deducciones = () => nueva_deduccion; 
    }
}

var monto1 = new Monto('1000')
var deduccion1 = new Deduccion('200')

console.log(monto1.monto_bruto_anual());
console.log(deduccion1.deducciones());