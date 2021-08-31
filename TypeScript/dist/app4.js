"use strict";
// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
// let dao: ConcessionariaDao= new ConcessionariaDao()
// dao.inserir(concessionaria)
// let pessoaDao : PessoaDao = new PessoaDao()
// pessoaDao.atualizar(pessoa)
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
