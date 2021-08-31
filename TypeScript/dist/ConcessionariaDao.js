"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        //lógica de inserção
        console.log('lógica de inserção');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('lógica de atualição');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('lógica de remoção');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('lógica de seleção');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selcionarTodos = function () {
        console.log('lógica de getAll');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
