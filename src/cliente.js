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
}