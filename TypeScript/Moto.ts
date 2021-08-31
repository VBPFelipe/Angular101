import Veiculo from "./Veiculo";

class Moto extends Veiculo {

    constructor() {
        super()
    }

    public acelerar() : void {
        this.velocidade = this.velocidade + 20
    }
}

export default Moto