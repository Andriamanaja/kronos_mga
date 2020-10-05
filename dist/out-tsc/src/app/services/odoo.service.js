import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Database_manager } from '../model/DAO/database_manager.model';
var data_sync = /** @class */ (function () {
    function data_sync() {
    }
    return data_sync;
}());
var OdooService = /** @class */ (function () {
    function OdooService(http, dbm) {
        this.http = http;
        this.dbm = dbm;
    }
    OdooService.prototype.synchronise = function (user) {
        var _this = this;
        this.dbm.get_all_table_for_sync().then(function (table_for_sync) {
            var big_data = {
                data: [],
                user_id: {
                    database: "",
                    username: "",
                    password: "",
                }
            };
            console.log(Reflect.ownKeys(big_data));
            var data = new Array();
            for (var i = 0; i < table_for_sync.length; i++) {
                _this.dbm.get_all_data_for_sync(table_for_sync[i]).then(function (data_for_sync) {
                    data.push(data_for_sync);
                });
            }
            big_data.data = data;
            big_data.user_id.database = user.database;
            big_data.user_id.username = user.username;
            big_data.user_id.password = user.password;
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };
            console.log(big_data);
            /*
            this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(big_data), httpOptions ).subscribe(data => {
              console.log(data) ;
            }) */
        })
            .catch(function (e) { return alert(e.message); })
            .then(function () {
        });
    };
    OdooService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Database_manager])
    ], OdooService);
    return OdooService;
}());
export { OdooService };
//# sourceMappingURL=odoo.service.js.map