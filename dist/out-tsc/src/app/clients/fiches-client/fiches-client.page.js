import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/model/data/data.model';
var FichesClientPage = /** @class */ (function () {
    function FichesClientPage(data_router, dbm, router, storage, http) {
        this.data_router = data_router;
        this.dbm = dbm;
        this.router = router;
        this.storage = storage;
        this.http = http;
    }
    FichesClientPage.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'id', header: 'id', display: 'none' },
            { field: 'name', header: 'Code client', display: 'table-cell' },
            { field: 'region_id', header: 'Région', display: 'table-cell' },
            { field: 'agence_id', header: 'Agence', display: 'table-cell' },
            { field: 'zone_id', header: 'Zone', display: 'table-cell' },
            { field: 'secteur_id', header: 'Secteur', display: 'table-cell' },
            { field: 'ville_id', header: 'Ville', display: 'table-cell' },
            { field: 'nom_agent_commercial_id', header: 'Agents Commerciaux', display: 'table-cell' },
            { field: 'nom_pos', header: 'Nom du POS', display: 'table-cell' },
            { field: 'nom_gerant', header: 'Nom du Gérant', display: 'table-cell' },
            { field: 'adresse', header: 'Adresse', display: 'table-cell' },
            { field: 'state_id', header: 'Etat', display: 'table-cell' }
        ];
    };
    FichesClientPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.get_res_partner().then(function (data) { return _this.data = data; });
    };
    FichesClientPage.prototype.open_menu = function () {
        this.storage.set("last", "fiches-client");
        this.router.navigate(['menu']);
    };
    FichesClientPage.prototype.open_nouveau_client = function () {
        this.router.navigate(['new-client']);
    };
    FichesClientPage.prototype.onRowSelect = function (event) {
        console.log(JSON.stringify(this.selected));
    };
    FichesClientPage.prototype.onRowUnselect = function (event) {
        console.log(JSON.stringify(this.selected));
    };
    FichesClientPage.prototype.onRowClicked = function (rowData) {
        var navigationExtras = {
            queryParams: {
                "id": rowData.id
            }
        };
        this.data_router.storage = rowData.id;
        this.router.navigate(['detail-fiche-client'], navigationExtras);
    };
    FichesClientPage = tslib_1.__decorate([
        Component({
            selector: 'app-fiches-client',
            templateUrl: './fiches-client.page.html',
            styleUrls: ['./fiches-client.page.scss'],
            styles: ["\n      .id : {\n        display : none ;\n      };\n  "]
        }),
        tslib_1.__metadata("design:paramtypes", [Data, Database_manager, Router, Storage, HttpClient])
    ], FichesClientPage);
    return FichesClientPage;
}());
export { FichesClientPage };
//# sourceMappingURL=fiches-client.page.js.map