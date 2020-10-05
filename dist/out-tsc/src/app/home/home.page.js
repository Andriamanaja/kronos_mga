import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { Database_manager } from '../model/DAO/database_manager.model';
import { ToastController } from '@ionic/angular';
import { Ng6OdooRPCService } from 'angular6-odoo-jsonrpc';
import { TestService } from '../model/service/test.service';
var test = /** @class */ (function () {
    function test() {
    }
    return test;
}());
export { test };
var HomePage = /** @class */ (function () {
    function HomePage(formbuilder, messageService, router, dbm, toast, odooRPC, service) {
        this.formbuilder = formbuilder;
        this.messageService = messageService;
        this.router = router;
        this.dbm = dbm;
        this.toast = toast;
        this.odooRPC = odooRPC;
        this.service = service;
        this.msgs = [];
        this.region = [];
        this.userFormGroup = this.formbuilder.group({
            "login": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbm.select_basic_data("i_t_region").then(function (data) {
            _this.region = data;
            if (_this.region.length == 0) {
                _this.dbm.init_table_data();
            }
        });
    };
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then(function (result) {
            console.log(result);
            switch (result) {
                case 0: {
                    _this.makeToast("Mot de passe incorrect !");
                    break;
                }
                case 1: {
                    _this.router.navigate(['menu']);
                    break;
                }
                case -1: {
                    _this.makeToast("Login incorrect !");
                    break;
                }
            }
        });
        /*if(this.userFormGroup.get('login').value == "test" && this.userFormGroup.get('password').value == "test123") {
            this.router.navigate(['menu']) ;
        }

        else {
            this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then (result => {
                console.log(result);
                switch(result) {
                    case 0 : {
                                this.makeToast("Mot de passe incorrect !") ;
                                break;
                            }
                    case 1 : {
                                this.router.navigate(['menu']) ;
                                break;
                            }
                    case -1 : {
                               this.makeToast("Login incorrect !") ;
                                break ;
                            }
                }
            })
        } */
    };
    HomePage.prototype.makeToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var x;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        x = _a.sent();
                        x.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.direct = function () {
        this.router.navigate(['detail-tournee']);
    };
    /*test_odoo(){

        this.odooRPC.init({
            odoo_server: 'http://192.168.200.131:8074',
            http_auth: 'admin:admin',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'X-Requested-With': 'XMLHttpRequest',
                'content-type': 'application/json;charset=utf-8',
                'cache-control': 'no-cache, no-store, must-revalidate, max-age=0'
            },
        });
        this.odooRPC.login('imperial_tobacco', 'admin', 'admin').then(res => {
            console.log(JSON.stringify(res));
            console.log(res);
            console.log('login success');}).catch( err => {
            console.error('login failed', err);
        });
    }*/
    HomePage.prototype.test_odoo = function () {
        this.odooRPC.init({
            odoo_server: 'https://imperial-tobacco.ingenosya.eu',
            http_auth: "admin:Admin123",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        this.odooRPC.login('it', 'admin', 'Admin123').then(function (res) {
            console.log('login success');
        }).catch(function (err) {
            console.error('login failed', err);
        });
    };
    HomePage.prototype.test_1_odoo = function () {
        this.router.navigate(['map']);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
            providers: [MessageService]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            MessageService,
            Router,
            Database_manager,
            ToastController,
            Ng6OdooRPCService,
            TestService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map