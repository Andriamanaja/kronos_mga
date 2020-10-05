import { Injectable } from '@angular/core';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { res_users } from 'src/app/model/data/res_users.model';

@Injectable({
  providedIn: 'root'
})
export class ResUsersService implements Resolve<res_users[]> {

  constructor(private dbm : Database_manager) { }

  resolve(route : ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<res_users[]>{
    return this.dbm.select_basic_data("res_users");
  }
}
