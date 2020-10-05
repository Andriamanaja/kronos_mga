(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~menu-menu-module~new-sync-new-sync-module~synchro-synchro-module"],{

/***/ "./src/app/head/head.component.html":
/*!******************************************!*\
  !*** ./src/app/head/head.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu_icon\">\n <div  *ngIf = \"color_icon\">\n    <p-menu (click)=\"go_sync()\" #menu_2 [popup]=\"true\" [model]=\"items_sync\"></p-menu>\n    <a (click)=\"menu_2.toggle($event)\"> \n        <i *ngIf = \"color_icon == '#21b799' \" class=\"fas fa-sync\" style=\"color : #21b799 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n        <i *ngIf = \"color_icon == '#e6db10' \" class=\"fas fa-sync\" style=\"color : #e6db10 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n        <i *ngIf = \"color_icon == '#b72121' \" class=\"fas fa-sync\" style=\"color : #b72121 ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n        <i *ngIf = \"color_icon == 'transparent' \" class=\"fas fa-sync\" style=\"color : transparent ;font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\" ></i>\n    </a>\n  </div>\n\n  <div>\n    <p-menu (click)=\"Deconnexion()\" #menu [popup]=\"true\" [model]=\"itemes\"></p-menu>\n    <a (click)=\"menu.toggle($event)\"> <i class=\"fas fa-bars\" style=\" color: white; font-size: 20px ; font-size: 20px ; vertical-align: -webkit-baseline-middle\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/head/head.component.scss":
/*!******************************************!*\
  !*** ./src/app/head/head.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWQvaGVhZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _model_helper_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/helper/auth */ "./src/app/model/helper/auth.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var HeadComponent = /** @class */ (function () {
    function HeadComponent(dbm, storage, router) {
        this.dbm = dbm;
        this.storage = storage;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.msgs = [];
        this.color_icon = null;
    }
    HeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(15000);
        //source.subscribe(val => {
        this.dbm.verify_data().then(function (data) {
            if (_this.color_icon == null) {
                _this.color_icon = data.color;
                _this.itemes = [
                    { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
                ];
                _this.items_sync = [
                    { label: data.non_synced },
                ];
                var x = { severity: data.severity, detail: data.non_synced };
                _this.msgs.push(x);
                _this.storage.set("msg_data", _this.msgs);
            }
        });
        //});
    };
    HeadComponent.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu'], null);
    };
    HeadComponent.prototype.Deconnexion = function () {
        var _this = this;
        _model_helper_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].access = true;
        this.storage.get('data_p2')
            .then(function (data2) {
            _this.data_cmp = JSON.parse(data2);
            _this.dbm.Updata_active_Login(_this.data_cmp.id);
            _this.storage.remove("data_p2");
        });
        this.router.navigate(['home'], this.navigationExtras);
    };
    HeadComponent.prototype.go_sync = function () {
        this.router.navigate(['synchro'], this.navigationExtras);
    };
    HeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.scss */ "./src/app/head/head.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/head/head.module.ts":
/*!*************************************!*\
  !*** ./src/app/head/head.module.ts ***!
  \*************************************/
/*! exports provided: HeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadModule", function() { return HeadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var HeadModule = /** @class */ (function () {
    function HeadModule() {
    }
    HeadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                primeng_menu__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
            ],
            declarations: [_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"]],
            exports: [_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HeadModule);
    return HeadModule;
}());



/***/ }),

/***/ "./src/app/services/odoo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/odoo.service.ts ***!
  \******************************************/
/*! exports provided: OdooService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdooService", function() { return OdooService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/DAO/database_manager.model */ "./src/app/model/DAO/database_manager.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/helper/counter */ "./src/app/model/helper/counter.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var data_sync = /** @class */ (function () {
    function data_sync() {
    }
    return data_sync;
}());
var OdooService = /** @class */ (function () {
    function OdooService(router, toastController, storage, loader, http, dbm) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.loader = loader;
        this.http = http;
        this.dbm = dbm;
        this.counter = new _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"]();
        this.to_offline = [];
    }
    OdooService.prototype.get_all_backup_data = function (url, username, database, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, httpOptions;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.user_data = {
                            url: "http://192.168.200.44:3002",
                            username: username,
                            database: "mada13",
                            password: password,
                        };
                        console.log("50 => ", this.user_data);
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                            })
                        };
                        return [4 /*yield*/, this.http.put("http://192.168.200.44:3002" + "/sync/check_backup", this.user_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
                                console.log("res == > ", res);
                                if (!res) {
                                    console.log("tsy nisy tao e ! : " + JSON.stringify(res));
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                                }
                                return res;
                            })).toPromise().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var i;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (data.status == 500) {
                                        loading.dismiss().then(function () {
                                            _this.set_message("error", "Erreur serveur Odoo.");
                                            _this.createToast("Erreur serveur Odoo");
                                            _this.router.navigate(["menu"]);
                                        });
                                    }
                                    else if (data.status == 202) {
                                        loading.dismiss().then(function () {
                                            _this.set_message("warn", "Un autre processus est en cours sur le serveur.");
                                            _this.createToast("Un autre processus est en cours sur le serveur");
                                            _this.router.navigate(["menu"]);
                                        });
                                    }
                                    else {
                                        for (i = 0; i < data.response.from_offline.length; i++) {
                                            this.dbm.update_x_odoo_id(data.response.from_offline[i]);
                                            this.dbm.update_data_for_sync_2(data.response.from_offline[i].table, data.response.from_offline[i].id);
                                        }
                                        this.dbm.get_active_user()
                                            .then(function (user) {
                                            for (var i = 0; i < data.response.to_offline.length; i++) {
                                                //insert 
                                                _this.dbm.insert_kronos_back_data(data.response.to_offline[i].table, data.response.to_offline[i].id, user.id)
                                                    .catch(function (e) { return console.log(" insert back data odoo service exception : " + e.message); });
                                                _this.dbm.get_columns(data.response.to_offline[i], 1).catch(function (e) { return console.log("get column error : " + e.message); }).then(function () {
                                                });
                                            }
                                            _this.dbm.get_kronos_back_data()
                                                .then(function (data) {
                                                if (!data) {
                                                    data = [];
                                                }
                                                var to_send = {
                                                    vals: data,
                                                    user_id: _this.user_data
                                                };
                                                _this.http.post("http://192.168.200.44:3002" + "/sync/return", to_send, httpOptions).subscribe(
                                                //next
                                                function (_) {
                                                    _this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions).subscribe(function (final_result) {
                                                        if (final_result.status == 200) {
                                                            _this.dbm.delete('kronos_back_data').then(function () {
                                                                _this.set_message("success", "Mise à jour de la base de données avec succès.");
                                                                _this.dbm.remove_survey_partner_rel();
                                                                _this.dbm.remove_user_partner_rel();
                                                                _this.dbm.remove_posm_partner_rel();
                                                                _this.createToast("Mise à jour de la base de données avec succès.");
                                                                loading.dismiss();
                                                                console.log("data service : data deleted");
                                                            }).catch(function (e) { return console.log("odoo service deleted"); });
                                                        }
                                                        else {
                                                        }
                                                    }, (function (err) {
                                                        console.log("110 =>" + err);
                                                        loading.dismiss().then(function () {
                                                            _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                            _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                            loading.dismiss();
                                                            _this.router.navigate(["menu"]);
                                                        });
                                                    }));
                                                }, function (err) {
                                                    loading.dismiss().then(function () {
                                                        _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                        _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                        loading.dismiss();
                                                        //+++
                                                        _this.router.navigate(["menu"]);
                                                    });
                                                });
                                            });
                                        }).catch(function (err) {
                                            console.log("128 =>" + err);
                                            loading.dismiss().then(function () {
                                                _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                                _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                                loading.dismiss();
                                                //+++
                                                _this.router.navigate(["menu"]);
                                            });
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                console.log("142 =>" + JSON.stringify(error));
                                loading.dismiss().then(function () {
                                    _this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                    _this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                    loading.dismiss();
                                    //+++
                                    _this.router.navigate(["menu"]);
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OdooService.prototype.synchronise_as_admin = function (url, username, database, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var httpOptions;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.user_data = {
                    url: "http://192.168.200.44:3002",
                    username: username,
                    password: password,
                    database: "mada13"
                };
                console.log("144 => ", this.user_data);
                _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].presentLoading();
                httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    })
                };
                return [2 /*return*/, this.http.post("http://192.168.200.44:3002" + "/sync/firstConnection", this.user_data, httpOptions).subscribe(
                    //next
                    function (data) {
                        console.log("52", data);
                        if (data.status == 500) {
                            _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                _this.set_message("error", "Erreur du serveur , veuillez réessayer ultérieurement.");
                                _this.createToast("Erreur du serveur , veuillez réessayer ultérieurement...");
                                _this.router.navigate(['menu']);
                            });
                        }
                        else {
                            console.log("firstConnection => " + JSON.stringify(data));
                            for (var i = 0; i < data.response.length; i++) {
                                _this.dbm.verify_login(data.response[i])
                                    .then(function (data) {
                                }).catch(function (e) {
                                    _this.set_message("error", "Une erreur est survenue.");
                                    _this.createToast("Une erreur est survenue ");
                                    _this.router.navigate(['menu']);
                                });
                            }
                        }
                    }, 
                    //error
                    function (error) {
                        console.log(error);
                        _this.createToast("Erreur du serveur! Verifier les champs saisis ou réessayer ultérieurement...").then(function () {
                            _this.set_message("error", "Erreur du serveur! Verifier les champs saisis ou réessayer ultérieurement.");
                            _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                        });
                    })];
            });
        });
    };
    OdooService.prototype.setDataForSync = function (data) {
        return this.data_for_sync = data;
    };
    OdooService.prototype.destroy_data_for_sync = function () {
        this.data_for_sync = [];
        console.log("209 destroy data_for_sync => ", this.data_for_sync);
    };
    OdooService.prototype.synchronise_2 = function (url, username, database, password, data_to_send) {
        try {
            console.log("251 => ", JSON.stringify(data_to_send));
        }
        catch (e) {
            console.log(e);
        }
    };
    OdooService.prototype.synchronise = function (url, username, database, password, data_to_send) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var httpOptions, to_send_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].presentLoading();
                        this.user_data = {
                            url: "",
                            username: username,
                            password: password,
                            database: ""
                        };
                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                            })
                        };
                        to_send_1 = {
                            vals: data_to_send,
                            user_id: this.user_data
                        };
                        console.log("278 => ", JSON.stringify(data_to_send));
                        return [4 /*yield*/, this.http.post("http://192.168.200.44:3002" + "/sync/data", JSON.stringify(to_send_1), httpOptions)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
                                console.log("res == > ", res);
                                if (!res) {
                                    console.log("tsy nisy tao e ! : " + JSON.stringify(res));
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                                }
                                return res;
                            })).subscribe(
                            //next
                            function (data) {
                                if (data.status == 500) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                        _this.set_message("error", "Erreur serveur Odoo.");
                                        _this.createToast("Erreur serveur Odoo");
                                        _this.router.navigate(["menu"]).then(function () { return console.log("nav 1"); });
                                    });
                                }
                                else if (data.status == 202) {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                        _this.createToast("Un autre processus est en cours sur le serveur");
                                        _this.set_message("warn", "Un autre processus est en cours sur le serveur.");
                                        _this.router.navigate(["menu"]).then(function () { return console.log("nav 2"); });
                                        ;
                                    });
                                }
                                else {
                                    _this.dbm.get_active_user()
                                        .then(function (user) {
                                        console.log("318 => ", JSON.stringify(data.response));
                                        //this.dbm.remove_survey_partner_rel() ;
                                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].data_length = data.response.to_offline.length;
                                        for (var i = 0; i < data.response.to_offline.length; i++) {
                                            //insert 
                                            _this.dbm.insert_kronos_back_data(data.response.to_offline[i].table, data.response.to_offline[i].id, user.id)
                                                .catch(function (e) { return console.log(" insert back data odoo service exception : " + e.message); });
                                            _this.dbm.get_columns(data.response.to_offline[i], 0).catch(function (e) { return console.log("get column error : " + e.message); }).then(function () {
                                            });
                                        }
                                        for (var i = 0; i < data.response.from_offline.length; i++) {
                                            _this.dbm.update_x_odoo_id(data.response.from_offline[i]);
                                            //this.dbm.update_data_for_sync(data.response.from_offline[i]);
                                            _this.dbm.update_data_for_sync_2(data.response.from_offline[i].table, data.response.from_offline[i].id);
                                        }
                                        _this.dbm.get_kronos_back_data()
                                            .then(function (data) {
                                            if (!data) {
                                                data = [];
                                            }
                                            var to_send = {
                                                vals: data,
                                                user_id: _this.user_data
                                            };
                                            _this.http.post("http://192.168.200.44:3002" + "/sync/return", to_send, httpOptions).subscribe(
                                            //next
                                            function (_) {
                                                _this.destroy_data_for_sync();
                                                _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                                    _this.dbm.delete('kronos_back_data').then(function () {
                                                        console.log("data service : data deleted");
                                                        _this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions).subscribe(function (final_result) {
                                                            console.log("final_result => ", JSON.stringify(final_result));
                                                            _this.router.navigate(["menu"]).then(function () { return console.log("nav 3"); });
                                                            _this.createToast("Synchronisation effectuée avec succès!");
                                                            _this.set_message("success", "Synchronisation effectuée avec succès!");
                                                        });
                                                    }).catch(function (e) { return console.log("odoo service deleted"); });
                                                });
                                            }, function (err) {
                                                _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                                    _this.createToast("Une erreur est survenue ... ");
                                                    _this.set_message("error", "Une erreur est survenue.");
                                                    _this.router.navigate(["menu"]).then(function () { return console.log("nav 4"); });
                                                    ;
                                                });
                                                console.log("erreur an amle post return ", err.message);
                                            });
                                        }).catch(function (err) {
                                            console.log("142 =>" + err);
                                            _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                                _this.set_message("error", "Impossible de se connecter au serveur.");
                                                _this.createToast("Impossible de se connecter au serveur.");
                                                _this.router.navigate(["menu"]).then(function () { return console.log("nav 5"); });
                                                ;
                                            });
                                        });
                                    }).catch(function (err) {
                                        console.log("159 =>" + err);
                                        _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading().then(function () {
                                            _this.set_message("error", "Une erreur s'est produite lors de la synchronisation");
                                            _this.createToast("Une erreur s'est produite lors de la synchronisation");
                                            _this.router.navigate(["menu"]).then(function () { return console.log("nav 6"); });
                                            ;
                                        });
                                    });
                                }
                            }, function (error) {
                                console.log("179 ", error);
                                _this.createToast("Une erreur s'est produite lors de la synchronisation, verifier les champs saisis.").then(function () {
                                    _model_helper_counter__WEBPACK_IMPORTED_MODULE_6__["Counter"].disableLoading();
                                    _this.set_message("error", "Une erreur s'est produite lors de la synchronisation, verifier les champs saisis.");
                                    _this.router.navigate(["menu"]).then(function () { return console.log("nav 7"); });
                                    ;
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OdooService.prototype.createToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OdooService.prototype.set_message = function (type, message) {
        var mensaje = [{
                severity: type,
                detail: message
            }];
        this.storage.set("message", mensaje).then(function () {
            console.log("tafa le set message");
        });
    };
    OdooService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _model_DAO_database_manager_model__WEBPACK_IMPORTED_MODULE_3__["Database_manager"]])
    ], OdooService);
    return OdooService;
}());



/***/ })

}]);
//# sourceMappingURL=default~menu-menu-module~new-sync-new-sync-module~synchro-synchro-module.js.map