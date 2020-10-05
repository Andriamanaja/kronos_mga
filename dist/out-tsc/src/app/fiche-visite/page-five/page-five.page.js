import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
var PageFivePage = /** @class */ (function () {
    function PageFivePage(dbm, router, activatedRoute) {
        this.dbm = dbm;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.edit = false;
    }
    PageFivePage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.dt = data['data'];
            _this.data_from_route = JSON.parse(data['data']);
            _this.dbm.get_data_for_p5(_this.data_from_route.visit_sheet_id).then(function (data) {
                _this.data_from_db = data;
<<<<<<< HEAD
                console.log(JSON.stringify(_this.data_from_db));
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            });
        });
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        this.cols = [
            { field: 'produit_id', header: '', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'product_name', header: 'Article', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
            { field: 'quantity', header: 'Quantité étalée / remise', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' },
            { field: 'manufacturer_id', header: '', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
        ];
    };
    PageFivePage.prototype.page_four = function () {
        this.router.navigate(['page-four']);
    };
    PageFivePage.prototype.page_six = function () {
        var navigation_extra = {
            queryParams: {
                data: this.dt
            }
        };
        this.router.navigate(['page-six'], navigation_extra);
    };
    PageFivePage.prototype.enable_edit = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
    };
<<<<<<< HEAD
=======
    PageFivePage.prototype.save = function () {
        var _this = this;
        this.dbm.update_pv_line_quantity_product(this.data_from_db, this.data_from_route.visit_sheet_id);
        this.dbm.get_data_for_p5(this.data_from_route.visit_sheet_id).then(function (data) {
            _this.data_from_db = data;
        });
        this.enable_edit();
    };
    PageFivePage.prototype.cancel = function () {
        var _this = this;
        this.dbm.get_data_for_p5(this.data_from_route.visit_sheet_id).then(function (data) {
            _this.data_from_db = data;
        });
        this.enable_edit();
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageFivePage = tslib_1.__decorate([
        Component({
            selector: 'app-page-five',
            templateUrl: './page-five.page.html',
            styleUrls: ['./page-five.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Database_manager, Router, ActivatedRoute])
    ], PageFivePage);
    return PageFivePage;
}());
export { PageFivePage };
//# sourceMappingURL=page-five.page.js.map