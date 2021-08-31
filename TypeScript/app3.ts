import Carro from "./Carro";
import Moto from "./Moto";

let carro = new Carro('Voyage', 4)

let moto = new Moto()

console.log(carro)
console.log(moto)

moto.acelerar()
carro.acelerar()
moto.acelerar()

console.log(carro)
console.log(moto)