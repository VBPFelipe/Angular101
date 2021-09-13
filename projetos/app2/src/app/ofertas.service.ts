import { Imagem } from "./shared/imagem.model"
import { Oferta } from "./shared/oferta.model"

export class OfertasService {

    private ofertas: Array<Oferta> = [
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

    public getOfertas(): Array<Oferta> {
        return this.ofertas
    }
}