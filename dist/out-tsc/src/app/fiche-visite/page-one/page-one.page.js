import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var PageOnePage = /** @class */ (function () {
    function PageOnePage(geolocation, storage, dbm, router, activeroute) {
        this.geolocation = geolocation;
        this.storage = storage;
        this.dbm = dbm;
        this.router = router;
        this.activeroute = activeroute;
        this.name = "";
        this.duree = 0;
        this.checked = false;
        this.id = 0;
        this.data = "";
<<<<<<< HEAD
=======
        this.edit = false;
        this.location = {
            latitude: 0,
            longitude: 0
        };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    }
    PageOnePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dbm.select_res_user_active().then(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.name = data.login;
                this.id = data.id;
                return [2 /*return*/];
            });
        }); });
        this.activeroute.queryParams.subscribe(function (qp) {
            _this.data = qp['data'];
            _this.res_partner_name = JSON.parse(qp['data']);
            console.log('data => ' + qp['data']);
        });
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
    };
<<<<<<< HEAD
    PageOnePage.prototype.page_two = function () {
=======
    PageOnePage.prototype.modify = function () {
        this.enable_edit();
    };
    PageOnePage.prototype.create = function () {
        this.enable_edit();
    };
    PageOnePage.prototype.save = function () {
        /* this.dbm.update_coordinates_res_partner(this.location,this.res_partner_name.res_partner_id)
           .then(()=>{
             this.coord = this.location ;
           })
           .catch(e => alert(e.message))*/
        this.enable_edit();
    };
    PageOnePage.prototype.cancel = function () {
        this.enable_edit();
    };
    PageOnePage.prototype.page_two = function () {
        var _this = this;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        var navigation_extra = {
            queryParams: {
                data: this.data
            }
        };
<<<<<<< HEAD
        this.router.navigate(['page-two'], navigation_extra);
=======
        this.storage.set("user_id", this.id)
            .then(function () {
            _this.router.navigate(['page-two'], navigation_extra);
        })
            .catch(function (e) { return alert(e.message); });
    };
    PageOnePage.prototype.enable_edit = function () {
        if (this.edit == false) {
            this.edit = true;
        }
        else {
            this.edit = false;
        }
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    };
    PageOnePage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
    PageOnePage.prototype.page_fiche_visite = function () {
        this.router.navigate(['fiche-visite']);
    };
    PageOnePage.prototype.demarrer_visite = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
<<<<<<< HEAD
=======
                        this.dbm.start_visit(this.res_partner_name.visit_sheet_id);
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        options = {
                            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options).then(function (resp) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var geodist, p1, p2;
                                return tslib_1.__generator(this, function (_a) {
                                    console.log(this.res_partner_name.provider_latitude + "    " + this.res_partner_name.provider_longitude);
                                    geodist = require('geodist');
                                    p1 = { lat: resp.coords.latitude, lon: resp.coords.longitude };
                                    p2 = { lat: this.res_partner_name.provider_latitude, lon: this.res_partner_name.provider_longitude };
                                    this.dist = geodist(p1, p2, { exact: true, unit: 'm' });
                                    this.coord = resp.coords;
                                    this.res_partner_name.state = "opened";
                                    return [2 /*return*/];
                                });
                            }); }).catch(function (error) {
                                console.log('Error getting location', error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageOnePage = tslib_1.__decorate([
        Component({
            selector: 'app-page-one',
            templateUrl: './page-one.page.html',
            styleUrls: ['./page-one.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation, Storage, Database_manager, Router, ActivatedRoute])
    ], PageOnePage);
    return PageOnePage;
}());
export { PageOnePage };
<<<<<<< HEAD
/*this.activeroute.queryParams.subscribe(qp => {
    this.res_partner_name = qp['res_partner_name'] ;
    console.log( qp['visit_sheet_id'] );
    this.dbm.select_basic_data_with_id( "visit_sheet" , qp['visit_sheet_id']).then( async data => {
      console.log(JSON.stringify(data) );
    }) ;
  }) ; */
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
//# sourceMappingURL=page-one.page.js.map