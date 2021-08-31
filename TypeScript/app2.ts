import { qualquer_coisa } from './Carro'
import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

let carroA = new Carro('Cerato', 4)
let carroB = new Carro('Kombi', 3)
let carroC = new Carro('Voyage', 4)

/* --- Montar a lista de carros da concessionária --- */
let listaDeCarros : Array<Carro> = [carroA, carroB, carroC]
// let listaDeCarros : Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Roverto Freire', listaDeCarros)
console.log(concessionaria.mostrarListaDeCarros())

let cliente = new Pessoa('Felipe', 'Voyage')
console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    console.log(carro)

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(carro)
    }
})

console.log('Tenho o: ',cliente.dizerCarroQueTem())