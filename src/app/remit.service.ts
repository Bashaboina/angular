import { Remit } from './remit';
import { REMITS } from './mock.remit';
import { Injectable } from "@angular/core";

@Injectable()
export class RemitService {
    getRemitServices(): Promise<Remit[]> {
        return Promise.resolve(REMITS);
    }
    
    getRemit(id: number): Promise<Remit> {
        return this.getRemitServices()
        .then(remits => remits.find(remit => remit.id === id));
    }
}