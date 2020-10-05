import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
var PageThreePage = /** @class */ (function () {
    function PageThreePage(router, activatedRoute, storage, dbm) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.dbm = dbm;
        this.edit = false;
        this.arr_product_id = [];
        this.data_from_db = [];
    }
    PageThreePage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.dt = data['data'];
            _this.data_from_route = JSON.parse(data['data']);
            _this.arr_product_id = data['data_for_three'];
            for (var i = 0; i < _this.arr_product_id.length; i++) {
                _this.dbm.get_data_for_p3(_this.arr_product_id[i], _this.data_from_route.visit_sheet_id, _this.data_from_route.res_partner_id)
                    .then(function (data) {
                    _this.data_from_db.push(data);
<<<<<<< HEAD
                });
            }
            console.log(_this.data_from_db);
=======
                    console.log("valiny" + data);
                });
            }
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        });
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        // this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cols = [
            { field: 'manufacturer_name', header: 'Fabricant', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'product_name', header: 'Produit', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'current_price_2', header: 'Prix relevé lors de la dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'current_price', header: 'Relevé prix', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' },
        ];
    };
    PageThreePage.prototype.page_two = function () {
        this.router.navigate(['page-two']);
    };
    PageThreePage.prototype.page_four = function () {
        var navigation_extra = {
            queryParams: {
                data: this.dt
            }
        };
        this.router.navigate(['page-four'], navigation_extra);
    };
    PageThreePage.prototype.enable_edit = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
    };
<<<<<<< HEAD
=======
    PageThreePage.prototype.save = function () {
        var _this = this;
        this.dbm.update_current_price(parseInt(this.data_from_route.res_partner_id), this.data_from_db);
        for (var i = 0; i < this.arr_product_id.length; i++) {
            this.dbm.get_data_for_p3(this.arr_product_id[i], this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
                .then(function (data) {
                _this.data_from_db = [];
                _this.data_from_db.push(data);
            });
        }
        this.enable_edit();
    };
    PageThreePage.prototype.cancel = function () {
        var _this = this;
        for (var i = 0; i < this.arr_product_id.length; i++) {
            this.dbm.get_data_for_p3(this.arr_product_id[i], this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
                .then(function (data) {
                _this.data_from_db = [];
                _this.data_from_db.push(data);
                alert('Opération annulée!!');
            });
        }
        this.enable_edit();
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageThreePage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    PageThreePage = tslib_1.__decorate([
        Component({
            selector: 'app-page-three',
            templateUrl: './page-three.page.html',
            styleUrls: ['./page-three.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, Storage, Database_manager])
    ], PageThreePage);
    return PageThreePage;
}());
export { PageThreePage };
//# sourceMappingURL=page-three.page.js.map