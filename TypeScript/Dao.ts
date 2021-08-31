import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela : string = ''

    inserir(object: T) : boolean {
        //lógica de inserção
        console.log('lógica de inserção')
        return true
    }

    atualizar(object: T) : boolean {
        console.log('lógica de atualição')

        return true
    }

    remover(id: number) : T {
        console.log('lógica de remoção')

        return Object()
    }

    selecionar(id: number) : T {
        console.log('lógica de seleção')

        return Object()
    }

    selcionarTodos() : [T] {
        console.log('lógica de getAll')
        return [Object()]
    }
}