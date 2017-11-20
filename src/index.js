import './style.css'
import numeral from 'numeral'

let val = numeral(1000).format('$0.0,00');
console.log(`The value to be paid is ${val} to this coures`);
