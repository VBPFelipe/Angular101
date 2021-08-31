import Carro from "./Carro"
import { ConcessionariaInterface } from "./ConcessionariaInterface"

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco() : string {
        return this.endereco
    }
    
    public mostrarListaDeCarros() : any {
        return this.listaDeCarros
    }

    public fornecerHorairosDeFuncionamento() : string {
        return 'De Segunda a Sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00'
    }
}