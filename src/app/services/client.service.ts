import { Ng6OdooRPCService } from 'angular6-odoo-jsonrpc';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ClientService {
    constructor(private odooRPC: Ng6OdooRPCService) {

    }
  
    ngOnInit() {
        this.odooRPC.init({
            odoo_server: '192.168.200.50:8069',
        });
        this.odooRPC.login('itg_online', 'admin', 'tsiory').then(res => {
            console.log('login success');}).catch( err => {
            console.error('login failed', err);
        });

    }
}