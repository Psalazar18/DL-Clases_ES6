import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

var n1 = new Cliente('Alex')

var monto1 = new Impuestos('1000', '200')

console.log(`El impuesto anual que debe pagar ${n1.nombre()} segun el monto total de ventas de ${monto1.monto_total_venta()} y las deducciones anuales de ${monto1.deducciones()}, es de ${monto1.CalcularImpuesto()}`);