"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var carroA = new Carro_1.default('Cerato', 4);
var carroB = new Carro_1.default('Kombi', 3);
var carroC = new Carro_1.default('Voyage', 4);
/* --- Montar a lista de carros da concessionária --- */
var listaDeCarros = [carroA, carroB, carroC];
// let listaDeCarros : Carro[] = [carroA, carroB, carroC]
var concessionaria = new Concessionaria_1.default('Av. Roverto Freire', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
var cliente = new Pessoa_1.default('Felipe', 'Voyage');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(carro);
    }
});
console.log('Tenho o: ', cliente.dizerCarroQueTem());
