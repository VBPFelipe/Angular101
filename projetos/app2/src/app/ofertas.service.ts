import { Imagem } from "./shared/imagem.model"
import { Oferta } from "./shared/oferta.model"

export class OfertasService {

    private _ofertas: Array<Oferta> = [
        new Oferta(
            1, "restaurante", "Super Burger", 
            "Rodízio de Mini-hambúrger com opção de entrada.", 
            "Original Burger", 29.90, true,
            [
                new Imagem("/assets/ofertas/1/img1.jpg"), 
                new Imagem("/assets/ofertas/1/img2.jpg"), 
                new Imagem("/assets/ofertas/1/img3.jpg"), 
                new Imagem("/assets/ofertas/1/img4.jpg")
            ]
        ), 
        new Oferta(
            2, "restaurante", "Cozinha Mexicana",
            "Almoço ou Jantar com Rodízio Mexicano delicioso.", 
            "Mexicana", 32.90, true, 
            [
                new Imagem("/assets/ofertas/2/img1.jpg"), 
                new Imagem("/assets/ofertas/2/img2.jpg"), 
                new Imagem("/assets/ofertas/2/img3.jpg"), 
                new Imagem("/assets/ofertas/2/img4.jpg") 
            ]
        ),
        new Oferta(
            4, "diversao", "Estância das águas", 
            "Diversão garantida com piscinas, trilhas e muito mais.", 
            "Estância das águas", 31.90, true, 
            [
                new Imagem("/assets/ofertas/3/img1.jpg"), 
                new Imagem("/assets/ofertas/3/img2.jpg"), 
                new Imagem("/assets/ofertas/3/img3.jpg"), 
                new Imagem("/assets/ofertas/3/img4.jpg"), 
                new Imagem("/assets/ofertas/3/img5.jpg"), 
                new Imagem("/assets/ofertas/3/img6.jpg") 
            ]
        )
    ]

    public get ofertas(): Array<Oferta> {
        return this._ofertas
    }

    public getOfertas(): Promise<Array<Oferta>> {
        return new Promise((resolve, reject) => {
            // algum tipo de processamento que ao finalizar chama 
            // a função resolve, ou a reject
            console.log("passou pela promise")
            let deu_certo = false
            if(deu_certo)
                resolve( this.ofertas )
            else
                reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
        })
    }
}