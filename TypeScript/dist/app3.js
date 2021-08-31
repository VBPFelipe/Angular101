"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var carro = new Carro_1.default('Voyage', 4);
var moto = new Moto_1.default();
console.log(carro);
console.log(moto);
moto.acelerar();
carro.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
