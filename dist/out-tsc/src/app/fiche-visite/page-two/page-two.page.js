import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
var PageTwoPage = /** @class */ (function () {
    function PageTwoPage(alertController, router, activatedRoute, dbm, storage) {
        this.alertController = alertController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dbm = dbm;
        this.storage = storage;
        this.edit = false;
    }
<<<<<<< HEAD
    PageTwoPage.prototype.ionViewWillEnter = function () {
    };
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageTwoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.dt = data['data'];
            _this.data_from_route = JSON.parse(data['data']);
            _this.dbm.get_stock_visit_sheet_by_id_p2(_this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id).then(function (data) {
                _this.data_from_db = data;
            });
            _this.dbm.get_stock_visit_sheet_by_id_p2(_this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id).then(function (data) {
                _this.data_cmp = data;
                _this.storage.set('data_p2', JSON.stringify(data));
            });
        });
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        // this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cols = [
            { field: 'product_id', header: 'product_id', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'manufacturer_name', header: 'Fabricant', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'product_name', header: 'Produit', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'last_visit_stock_avg', header: 'Stock initial moyen des 4 dernières visites', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'available_stock', header: 'Relevé stock initial', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' },
            { field: 'last_visit_stock', header: 'Stock initial dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'last_placement', header: 'Placement dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'placement', header: 'Placement', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' }
        ];
    };
    PageTwoPage.prototype.enable_edit = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
    };
<<<<<<< HEAD
    PageTwoPage.prototype.page_one = function () {
        this.router.navigate(['page-one']);
=======
    PageTwoPage.prototype.sauvegarder = function () {
        for (var i = 0; i < this.data_from_db.length; i++) {
            this.dbm.update_get_data_p2(this.data_from_db[i].available_stock, this.data_from_db[i].placement, this.data_from_db[i].product_id, this.data_from_route.visit_sheet_id);
        }
        this.enable_edit();
    };
    PageTwoPage.prototype.annuler = function () {
        var _this = this;
        this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(function (data) {
            _this.data_from_db = data;
        });
        this.enable_edit();
    };
    PageTwoPage.prototype.cancel = function () {
        this.enable_edit();
    };
    PageTwoPage.prototype.save = function () {
        this.enable_edit();
    };
    PageTwoPage.prototype.modify = function () {
        this.enable_edit();
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    };
    PageTwoPage.prototype.page_three = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data_rtrn, data_rtrn2, i, navigation_extra;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                data_rtrn = [];
                data_rtrn2 = [];
                for (i = 0; i < this.data_from_db.length; i++) {
                    if (this.data_from_db[i].available_stock != this.data_cmp[i].available_stock || this.data_from_db[i].placement != this.data_cmp[i].placement) {
                        data_rtrn.push(this.data_from_db[i].product_id);
                    }
                    else {
                        data_rtrn2.push(this.data_from_db[i].product_id);
                    }
                }
                navigation_extra = {
                    queryParams: {
                        data: this.dt,
                        data_for_three: data_rtrn
                    }
                };
                this.storage.get('data_p2').then(function (data_p2) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var alert_1;
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(data_p2 == JSON.stringify(this.data_from_db))) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.alertController.create({
                                        message: 'Êtes vous sûre de vouloir continuer sans rien modifier ?',
                                        buttons: [
                                            {
                                                text: 'Non',
                                                role: 'cancel',
                                                cssClass: 'secondary',
                                                handler: function (blah) {
                                                    console.log('Confirm Cancel: blah');
                                                }
                                            }, {
                                                text: 'Oui',
                                                handler: function () {
                                                    _this.router.navigate(['page-three'], navigation_extra);
                                                }
                                            }
                                        ]
                                    })];
                            case 1:
                                alert_1 = _a.sent();
                                return [4 /*yield*/, alert_1.present()];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                this.router.navigate(['page-three'], navigation_extra);
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
<<<<<<< HEAD
                }); });
=======
                }); })
                    .catch(function (e) { return alert(e.message); });
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                return [2 /*return*/];
            });
        });
    };
    PageTwoPage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    PageTwoPage = tslib_1.__decorate([
        Component({
            selector: 'app-page-two',
            templateUrl: './page-two.page.html',
            styleUrls: ['./page-two.page.scss'],
        }),
<<<<<<< HEAD
        tslib_1.__metadata("design:paramtypes", [AlertController, Router, ActivatedRoute, Database_manager, Storage])
=======
        tslib_1.__metadata("design:paramtypes", [AlertController,
            Router,
            ActivatedRoute,
            Database_manager,
            Storage])
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    ], PageTwoPage);
    return PageTwoPage;
}());
export { PageTwoPage };
//# sourceMappingURL=page-two.page.js.map