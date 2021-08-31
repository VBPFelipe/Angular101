"use strict";
var carroA = new Car('Cerato', 4);
var carroB = new Car('Kombi', 3);
var carroC = new Car('Voyage', 4);
/* --- Montar a lista de carros da concessionária --- */
var listaDeCarros = [carroA, carroB, carroC];
// let listaDeCarros : Carro[] = [carroA, carroB, carroC]
var concessionaria = new Concessionaria2('Av. Roverto Freire', listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
var cliente = new Pessoa('Felipe', 'Voyage');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (car) {
    console.log(car);
    if (car['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(car);
    }
});
console.log('Tenho o: ', cliente.dizerCarroQueTem());
