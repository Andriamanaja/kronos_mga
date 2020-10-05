import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MessageService } from 'primeng/api';
var NewFicheVisitePage = /** @class */ (function () {
    function NewFicheVisitePage(messageService, geolocation, router, fb, dbm) {
        this.messageService = messageService;
        this.geolocation = geolocation;
        this.router = router;
        this.fb = fb;
        this.dbm = dbm;
        this.partner_id = [];
    }
    NewFicheVisitePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbm.get_res_partner_data_for_visite().then(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.partner_id = data;
                return [2 /*return*/];
            });
        }); });
        this.dbm.select_res_user_active().then(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.login = data.login;
                this.id = data.id;
                return [2 /*return*/];
            });
        }); });
    };
    NewFicheVisitePage.prototype.ngOnInit = function () {
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
        this.itemsActions = [
            { id: 1, label: '' },
        ];
        this.fg = this.fb.group({
            partner_id: ['', Validators.required],
            pos_initial: 0,
            provider_latitude: 0,
            provider_longitude: 0,
            region_id: "",
            secteur_id: "",
            agence_id: "",
            zone_id: ""
        });
    };
    NewFicheVisitePage.prototype.demarrer_visite = function () {
        if (this.fg.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: "Point de vente", key: 'invalid' });
        }
        else {
            this.getMyLocation();
            console.log('value\n' + JSON.stringify(this.fg.value));
        }
    };
    NewFicheVisitePage.prototype.abort_nouveau_fiche_visite = function () {
        this.router.navigate(['fiche-visite']);
    };
    NewFicheVisitePage.prototype.save_nouveau_fiche_visite = function () {
    };
    NewFicheVisitePage.prototype.getMyLocation = function () {
        var options = {
            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    NewFicheVisitePage = tslib_1.__decorate([
        Component({
            selector: 'app-new-fiche-visite',
            templateUrl: './new-fiche-visite.page.html',
            styleUrls: ['./new-fiche-visite.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService, Geolocation, Router, FormBuilder, Database_manager])
    ], NewFicheVisitePage);
    return NewFicheVisitePage;
}());
export { NewFicheVisitePage };
//# sourceMappingURL=new-fiche-visite.page.js.map