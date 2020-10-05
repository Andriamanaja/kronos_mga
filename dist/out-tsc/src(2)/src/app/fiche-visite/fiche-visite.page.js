import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router } from '@angular/router';
var FicheVisitePage = /** @class */ (function () {
    function FicheVisitePage(dbm, router) {
        this.dbm = dbm;
        this.router = router;
        this.data_fv = [];
    }
    FicheVisitePage.prototype.ngOnInit = function () {
        var _this = this;
        this.col_fv = [
            { field: 'user_id', header: 'Commercial', display: 'table-cell' },
            { field: 'partner_id', header: 'Point de vente', display: 'table-cell' },
            { field: 'begin_datetime', header: 'Debut de visite', display: 'table-cell' },
            { field: 'end_datetime', header: 'Fin de visite', display: 'table-cell' },
            { field: 'state', header: 'Statut', display: 'table-cell' },
        ];
        this.dbm.get_all_fiche_visite().then(function (data) {
            _this.data_fv = data;
        });
    };
    FicheVisitePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.get_all_fiche_visite().then(function (data) {
            _this.data_fv = data;
        });
    };
    FicheVisitePage.prototype.open_nouveau_fiche_visite = function () {
        this.router.navigate(['new-fiche-visite']);
    };
    FicheVisitePage.prototype.onRowClicked = function (rowData) {
        this.router.navigate(['page-one']);
    };
    FicheVisitePage = tslib_1.__decorate([
        Component({
            selector: 'app-fiche-visite',
            templateUrl: './fiche-visite.page.html',
            styleUrls: ['./fiche-visite.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Database_manager, Router])
    ], FicheVisitePage);
    return FicheVisitePage;
}());
export { FicheVisitePage };
//# sourceMappingURL=fiche-visite.page.js.map