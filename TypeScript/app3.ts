import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from "./Concessionaria"

let carro = new Carro('Voyage', 4)

let moto = new Moto()

let concessionaria = new Concessionaria('', [])

console.log(carro)
console.log(moto)

carro.acelerar()
moto.acelerar()
carro.acelerar()
moto.acelerar()

console.log(carro)
console.log(moto)

console.log(concessionaria.fornecerHorairosDeFuncionamento())