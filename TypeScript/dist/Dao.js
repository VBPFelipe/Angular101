"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        //lógica de inserção
        console.log('lógica de inserção');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica de atualição');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica de remoção');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica de seleção');
        return Object();
    };
    Dao.prototype.selcionarTodos = function () {
        console.log('lógica de getAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
