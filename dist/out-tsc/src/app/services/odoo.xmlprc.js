/* import { Injectable } from '@angular/core';

import * as Odoo from 'odoo-xmlrpc' ;

@Injectable()
export class odoo_xml_prc {
    config = {
        url : "https://imperial-tobacco.ingenosya.eu/" ,
        db : 'it' ,
        username : 'admin' ,
        password : 'admin'
    }

    message : string = ""

    constructor() {
        
    }

    charger () {
        var odoo = new Odoo(this.config) ;
        odoo.connect(function(err) {
            if(err) {
                this.message += JSON.stringify(err) ;
                return err
            }
            else {
                this.message += "tafa eh..." ;
            }
        }) ;

        this.connection(function(err){
            this.message += "err avy any " + JSON.stringify(err)
        })
    }


    connection(callback) {
      //  var urlparts = url.parse(this.config.url);
        var host = this.config.url ;
        var port = this.config.port ;
        var db = this.config.db;
        var username = this.config.username;
        var password = this.config.password;
        var secure = true;

        var uid = 0;
        var clientOptions = {
            host: host,
            port: port,
        }
        var client;

        var params = [];
        params.push(db);
        params.push(username);
        params.push(password);
        params.push({});
        client.methodCall('authenticate', params, function(error, value) {
            if(error){
                console.log('HOLA MUNDO ERROR DE MIERDA' + error);
              return callback(error, null)
            }
            uid = value;
            return callback(null)
        });
 
    }

}   */ 
//# sourceMappingURL=odoo.xmlprc.js.map