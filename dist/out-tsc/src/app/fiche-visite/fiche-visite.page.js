import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
var FicheVisitePage = /** @class */ (function () {
    function FicheVisitePage(activated_route, dbm, router) {
=======
import { Storage } from '@ionic/storage';
var FicheVisitePage = /** @class */ (function () {
    function FicheVisitePage(storage, activated_route, dbm, router) {
        this.storage = storage;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        this.activated_route = activated_route;
        this.dbm = dbm;
        this.router = router;
        this.data_fv = [];
    }
    FicheVisitePage.prototype.ngOnInit = function () {
        var _this = this;
        this.col_fv = [
<<<<<<< HEAD
            { field: 'visit_sheet_id', header: '', display: 'none' },
=======
            { field: 'visit_sheet_id', header: 'id', display: 'table-cell' },
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            { field: 'user_id', header: 'Commercial', display: 'table-cell' },
            { field: 'partner_id', header: 'Point de vente', display: 'table-cell' },
            { field: 'visit_sheet_begin_date_time', header: '', display: 'none' },
            { field: 'visit_sheet_end_date_time', header: '', display: 'none' },
            { field: 'tournee_begin', header: 'Debut de visite', display: 'table-cell' },
            { field: 'tournee_end', header: 'Fin de visite', display: 'table-cell' },
            { field: 'provider_longitude', header: 'Longitude', display: 'none' },
            { field: 'provider_latitude', header: 'Latitude', display: 'none' },
            { field: 'state', header: 'Statut', display: 'table-cell' },
        ];
        this.activated_route.queryParams.subscribe(function (data) {
            if (data['id_tournee'] == undefined) {
                _this.dbm.get_all_fiche_visite().then(function (data) {
<<<<<<< HEAD
                    console.log("get_all_fiche_visite => " + data);
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    _this.data_fv = data;
                });
            }
            else {
<<<<<<< HEAD
                _this.dbm.get_all_fiche_visite_by_id_tournee(data['id_tournee']).then(function (data) {
                    console.log("get_all_fiche_visite_by_id_tournee => " + data);
                    _this.data_fv = data;
                });
=======
                _this.dbm.select_res_user_active()
                    .then(function (user) {
                    _this.dbm.get_all_fiche_visite_by_id_tournee(data.id_tournee, user.id)
                        .then(function (data) {
                        _this.data_fv = data;
                    })
                        .catch(function (e) { return alert(e.message); });
                })
                    .catch(function (e) { return alert(e.message); });
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            }
        });
    };
    FicheVisitePage.prototype.open_nouveau_fiche_visite = function () {
        this.router.navigate(['new-fiche-visite']);
    };
    FicheVisitePage.prototype.onRowClicked = function (rowData) {
        var navigation_extra = {
            queryParams: {
                data: JSON.stringify(rowData)
            }
        };
        this.router.navigate(['page-one'], navigation_extra);
    };
    FicheVisitePage = tslib_1.__decorate([
        Component({
            selector: 'app-fiche-visite',
            templateUrl: './fiche-visite.page.html',
            styleUrls: ['./fiche-visite.page.scss'],
        }),
<<<<<<< HEAD
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Database_manager, Router])
=======
        tslib_1.__metadata("design:paramtypes", [Storage, ActivatedRoute, Database_manager, Router])
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    ], FicheVisitePage);
    return FicheVisitePage;
}());
export { FicheVisitePage };
//# sourceMappingURL=fiche-visite.page.js.map