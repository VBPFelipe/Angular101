import Pessoa from './Pessoa'
import {DaoInterface } from './DaoInterface'

export class PessoaDao implements DaoInterface {
    nomeTabela : string = 'tb_pessoa'

    inserir(object: Pessoa) : boolean {
        //lógica de inserção
        console.log('lógica de inserção')
        return true
    }

    atualizar(object: Pessoa) : boolean {
        console.log('lógica de atualição')

        return true
    }

    remover(id: number) : Pessoa {
        console.log('lógica de remoção')

        return new Pessoa('', '')
    }

    selecionar(id: number) : Pessoa {
        console.log('lógica de seleção')

        return new Pessoa('', '')
    }

    selcionarTodos() : [Pessoa] {
        console.log('lógica de getAll')
        return [new Pessoa('','')]
    }
}