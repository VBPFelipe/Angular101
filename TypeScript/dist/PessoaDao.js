"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        //lógica de inserção
        console.log('lógica de inserção');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica de atualição');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica de remoção');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica de seleção');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selcionarTodos = function () {
        console.log('lógica de getAll');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
