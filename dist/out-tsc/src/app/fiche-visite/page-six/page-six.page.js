import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
<<<<<<< HEAD
var PageSixPage = /** @class */ (function () {
    function PageSixPage(router, activatedRoute, storage) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
=======
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
var PageSixPage = /** @class */ (function () {
    function PageSixPage(router, activatedRoute, storage, dbm) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.dbm = dbm;
        this.modifiable = true;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    }
    PageSixPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.dt = data['data'];
            _this.data_from_route = JSON.parse(data['data']);
<<<<<<< HEAD
=======
            //get next visit goal where visit_sheet_id = 
            _this.dbm.get_next_visit_goal(_this.data_from_route.visit_sheet_id).then(function (data) {
                if (data) {
                    _this.visit_goal = data.next_visit_goal;
                    _this.modifiable = false;
                }
            })
                .catch(function (e) { return alert(e.message); });
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        });
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        // this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
<<<<<<< HEAD
=======
    PageSixPage.prototype.modif_next_visit_goal = function () {
        this.modifiable = true;
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageSixPage.prototype.page_seven = function () {
        var navigation_extra = {
            queryParams: {
                data: this.dt
            }
        };
        this.router.navigate(['page-seven'], navigation_extra);
    };
<<<<<<< HEAD
=======
    PageSixPage.prototype.save_next_visit_goal = function () {
        var _this = this;
        var visit_sheet_id = this.data_from_route.visit_sheet_id;
        this.dbm.save_next_visit_goal(visit_sheet_id, this.visit_goal);
        //get next visit goal where visit_sheet_id = 
        this.dbm.get_next_visit_goal(this.data_from_route.visit_sheet_id)
            .then(function (value) {
            if (value) {
                _this.visit_goal = value.next_visit_goal;
                _this.modifiable = false;
            }
        })
            .catch(function (e) {
            _this.visit_goal = null;
            alert(e.message);
        });
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageSixPage.prototype.page_five = function () {
        this.router.navigate(['page_five']);
    };
    PageSixPage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    PageSixPage = tslib_1.__decorate([
        Component({
            selector: 'app-page-six',
            templateUrl: './page-six.page.html',
            styleUrls: ['./page-six.page.scss'],
        }),
<<<<<<< HEAD
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, Storage])
=======
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, Storage, Database_manager])
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    ], PageSixPage);
    return PageSixPage;
}());
export { PageSixPage };
//# sourceMappingURL=page-six.page.js.map