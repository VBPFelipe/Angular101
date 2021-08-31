import Concessionaria from './Concessionaria'
import {DaoInterface } from './DaoInterface'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela : string = 'tb_concessionaria'

    inserir(object: Concessionaria) : boolean {
        //lógica de inserção
        console.log('lógica de inserção')
        return true
    }

    atualizar(object: Concessionaria) : boolean {
        console.log('lógica de atualição')

        return true
    }

    remover(id: number) : Concessionaria {
        console.log('lógica de remoção')

        return new Concessionaria('',[])
    }

    selecionar(id: number) : Concessionaria {
        console.log('lógica de seleção')

        return new Concessionaria('',[])
    }

    selcionarTodos() : [Concessionaria] {
        console.log('lógica de getAll')
        return [new Concessionaria('',[])]
    }
}