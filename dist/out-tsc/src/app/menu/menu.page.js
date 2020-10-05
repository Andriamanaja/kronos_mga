import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Database_manager } from '../model/DAO/database_manager.model';
var MenuPage = /** @class */ (function () {
    function MenuPage(router, storage, dbm) {
        this.router = router;
        this.storage = storage;
        this.dbm = dbm;
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menus = [
            { name: "Discuter", icone: "assets/image/discuter.png" },
            { name: "Fiches client", icone: "assets/image/client.png" },
            { name: "Tournées", icone: "assets/image/tournes.png" },
            { name: "Synchronisation", icone: "assets/image/parametrage.png" },
            { name: "Fiche de visite", icone: "assets/image/visite.png" }
        ];
        this.storage.get("last").then(function (last) {
            _this.root = last;
        });
    };
    MenuPage.prototype.open_menu = function (menu) {
        switch (menu) {
            case "Discuter":
                this.open_discussion();
                break;
            case "Fiches client":
                this.open_fiches_client();
                break;
            case "Tournées":
                this.open_tournees();
                break;
            case "Synchronisation":
                this.open_synchro();
                break;
            case "Fiche de visite":
                this.open_fiches_visite();
                break;
            default: break;
        }
    };
    MenuPage.prototype.open_fiches_client = function () {
        //this.dbm.select_basic_data("i_t_region") ;
        this.router.navigate(['fiches-client']);
    };
    MenuPage.prototype.open_discussion = function () {
        this.router.navigate(['discussion']);
    };
    MenuPage.prototype.open_tournees = function () {
        this.router.navigate(['liste-tournee']);
    };
    MenuPage.prototype.open_synchro = function () {
        this.router.navigate(['synchro']);
    };
    MenuPage.prototype.open_fiches_visite = function () {
        this.router.navigate(['fiche-visite']);
    };
    MenuPage.prototype.navigate_back = function () {
        if (this.root) {
            this.router.navigate([this.root]);
        }
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, Storage, Database_manager])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map