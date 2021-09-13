import { Imagem } from "./imagem.model"

export class Oferta {
    private _id!: number
    private _categoria!: string
    private _titulo!: string
    private _descricao_oferta!: string
    private _anunciante!: string
    private _valor!: number
    private _destaque!: boolean
    private _imagens!: Array<Imagem>

    constructor(id: number, categoria: string, titulo: string, descricao_oferta: string, 
                anunciante: string, valor: number, destaque: boolean, imagens: Array<Imagem>) { 

        this._id = id
        this._categoria = categoria
        this._titulo = titulo
        this._descricao_oferta = descricao_oferta
        this._anunciante = anunciante
        this._valor = valor
        this._destaque = destaque
        this._imagens = imagens
        
    }

    public get id(): number {
        return this._id
    }

    public set id(id: number) {
        this._id = id
    }

    public get categoria(): string{
        return this._categoria
    }

    public set categoria(categoria: string){
        this._categoria = categoria
    }

    public get titulo(): string{
        return this._titulo
    }

    public set titulo(titulo: string){
        this._titulo = titulo
    }

    public get descricao_oferta(): string{
        return this._descricao_oferta
    }

    public set descricao_oferta(descricao_oferta: string){
        this._descricao_oferta = descricao_oferta
    }

    public get anunciante(): string{
        return this._anunciante
    }

    public set anunciante(anunciante: string){
        this._anunciante = anunciante
    }

    public get valor(): number {
        return this._valor
    }

    public set valor(valor: number) {
        this._valor = valor
    }

    public get destaque(): boolean {
        return this._destaque
    }

    public set destaque(destaque: boolean) {
        this._destaque = destaque
    }

    public get imagens(): Array<Imagem> {
        return this._imagens
    }

    public set imagens(imagens: Array<Imagem>) {
        this._imagens = imagens
    }

    public inserir_nova_imagem(imagem: Imagem) {
        this.imagens.push(imagem)
    }

    public imagens_to_string() : string{
        return this._imagens.toString()
    }

}