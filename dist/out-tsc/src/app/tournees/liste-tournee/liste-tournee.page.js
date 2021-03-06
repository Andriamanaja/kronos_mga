import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
var ListeTourneePage = /** @class */ (function () {
    function ListeTourneePage(dbm, router, storage) {
        this.dbm = dbm;
        this.router = router;
        this.storage = storage;
    }
    ListeTourneePage.prototype.ngOnInit = function () {
<<<<<<< HEAD
=======
        var _this = this;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        this.cols = [
            { field: 'id', header: 'id', display: 'none' },
            { field: 'name', header: 'Nom', display: 'table-cell' },
            { field: 'state', header: 'Etat', display: 'table-cell' },
            { field: 'start_date', header: 'start_date', display: 'none' },
            { field: 'end_date', header: 'start_date', display: 'none' },
        ];
<<<<<<< HEAD
    };
    ListeTourneePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.select_basic_data("i_t_tournee").then(function (data) { return _this.data = data; });
=======
        this.dbm.select_res_user_active().then(function (data) {
            _this.user_id = data.id;
            _this.dbm.get_all_tournees_by_user(_this.user_id)
                .then(function (data) {
                if (data) {
                    _this.data = data;
                }
            })
                .catch(function (e) { return alert(e.message); });
        });
    };
    ListeTourneePage.prototype.ionViewWillEnter = function () {
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    };
    ListeTourneePage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu']);
    };
    ListeTourneePage.prototype.open_nouveau_client = function () {
        this.router.navigate(['new-client']);
    };
    ListeTourneePage.prototype.onRowSelect = function (event) {
        console.log(JSON.stringify(this.selected));
    };
    ListeTourneePage.prototype.onRowUnselect = function (event) {
        console.log(JSON.stringify(this.selected));
    };
    ListeTourneePage.prototype.onRowClicked = function (rowData) {
        var navigationExtras = {
            queryParams: {
                "id": rowData.id,
                "name": rowData.name,
                "status": rowData.state,
                "date_debut": rowData.start_date,
                "date_fin": rowData.end_date
            }
        };
        //this.data_router.storage = rowData.id ;
        this.router.navigate(['detail-tournee'], navigationExtras);
    };
    ListeTourneePage = tslib_1.__decorate([
        Component({
            selector: 'app-liste-tournee',
            templateUrl: './liste-tournee.page.html',
            styleUrls: ['./liste-tournee.page.scss'],
            styles: ["\n        \n    "
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Database_manager, Router, Storage])
    ], ListeTourneePage);
    return ListeTourneePage;
}());
export { ListeTourneePage };
//# sourceMappingURL=liste-tournee.page.js.map