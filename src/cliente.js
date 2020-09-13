export default class Cliente{
	constructor(nombre){
		this._nombre = () => nombre;
	}
	get nombre(){
       return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = () => nuevo_nombre; 
    }
    CalcularImpuesto(){
    	return (parseInt(this._monto_bruto_anual()) - parseInt(this._deducciones()) * 21%);
   }
}

var n1 = new Cliente('Alex')
console.log(n1.cliente());
console.log("test");