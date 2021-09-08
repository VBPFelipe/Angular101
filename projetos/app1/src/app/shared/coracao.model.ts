export class Coracao {
    constructor(
        private _cheio : boolean,
        private _urlCoracaoCheio : string = '/assets/coracao_cheio.png',
        private _urlCoracaoVazio : string = '/assets/coracao_vazio.png'
    ) { }

    public exibeCoracao() : string {
        if(this._cheio) {
            return this._urlCoracaoCheio
        } else {
            return this._urlCoracaoVazio
        }
    }

    public get cheio() : boolean {
        return this._cheio
    }

    public set cheio(cheio : boolean){
        this._cheio = cheio
    }

    public get urlcoracaoCheio() : string {
        return this._urlCoracaoCheio
    }

    public get urlcoracaoVazio() : string {
        return this._urlCoracaoVazio
    }
}