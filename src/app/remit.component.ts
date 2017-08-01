import { Component,OnInit } from '@angular/core';
import { Remit } from './remit';
import { RemitService } from './remit.service';

@Component({
 selector:'remit-component',
 templateUrl:'./remit.component.html',
 providers:[ RemitService ],
 styleUrls:['./remit.component.css']
})
export class RemitComponent implements OnInit{

    private remits: Remit[];
    
    constructor(private _remitService:RemitService) {

    }

    ngOnInit() {
       this._remitService.getRemitServices().then(
        remits => this.remits = remits);
    }
}