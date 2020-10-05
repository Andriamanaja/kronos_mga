import { Injectable } from '@angular/core';
import { ClientInterface } from 'src/app/model/screen/clients.screen';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements Resolve<ClientInterface[]> {

  constructor(private dbm: Database_manager) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>{
    this.dbm.setDb();
    console.log("nandalo resolver")
    return this.dbm.get_res_partner();
  }
}
