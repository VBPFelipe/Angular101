import { Component } from "@angular/core";

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    /*styles: [` .exemplo { 
                    color: red
                } `
            ]*/
    styleUrls: ['./topo.component.css' //, 
                // './topo2.component.css'
                ]
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'

    
}