import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder } from '@angular/forms';
var DetailTourneePage = /** @class */ (function () {
    function DetailTourneePage(fb, geolocation, dbm, router, route) {
        this.fb = fb;
        this.geolocation = geolocation;
        this.dbm = dbm;
        this.router = router;
        this.route = route;
        this.data_pv = [];
        this.data_pvs = [];
        this.data_p = [];
        this.data_pn = [];
        this.name = "";
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.selected = [];
        this.screen = {};
        this.edit = false;
        this.display4 = false;
    }
    DetailTourneePage.prototype.ngOnInit = function () {
        this.visites = [
            { name: "oui", code: "oui" },
            { name: "non", code: "non" },
        ];
        this.cols_pv = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell' },
            { field: 'visite', header: 'Visité', display: 'table-cell' },
            { field: 'id', header: 'id', display: 'none' },
            { field: 'name', header: 'name', display: 'none' },
            { field: 'start_date', header: 'start_date', display: 'none' },
            { field: 'end_date', header: 'end_date', display: 'none' },
            { field: 'sequence', header: '', display: 'none' }
        ];
        this.cols_pvs = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell' },
            { field: 'visite', header: 'Visité', display: 'table-cell' },
            { field: 'id', header: 'id', display: 'none' },
            { field: 'name', header: 'name', display: 'none' },
            { field: 'start_date', header: 'start_date', display: 'none' },
            { field: 'end_date', header: 'end_date', display: 'none' },
            { field: 'sequence', header: '', display: 'none' }
        ];
        this.cols_p = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell' },
            { field: 'visite', header: 'Visité', display: 'table-cell' },
            { field: 'id', header: 'id', display: 'none' },
            { field: 'name', header: 'name', display: 'none' },
            { field: 'start_date', header: 'start_date', display: 'none' },
            { field: 'end_date', header: 'end_date', display: 'none' },
            { field: 'sequence', header: '', display: 'none' }
        ];
        this.cols_pn = [
            { field: 'res_partner_id', header: 'res_partner_id', display: 'none' },
            { field: 'res_partner_name', header: 'Code client', display: 'table-cell' },
            { field: 'visite', header: 'Visité', display: 'none' },
            { field: 'id', header: 'id', display: 'none' },
            { field: 'name', header: 'name', display: 'none' },
            { field: 'start_date', header: 'start_date', display: 'none' },
            { field: 'end_date', header: 'end_date', display: 'none' },
            { field: 'sequence', header: '', display: 'none' }
        ];
        this.tournees_fg = this.fb.group({
            sequence: [''],
            name: [''],
            visite: ['']
        });
    };
    DetailTourneePage.prototype.checkstatus = function (status, k) {
        switch (status) {
            case "Nouveau": {
                this.items = [
                    { id: 1, label: 'NOUVEAU' },
                    { id: 2, label: 'DÉMARRÉ' },
                    { id: 3, label: 'CLÔTURÉ' },
                ];
                this.itemsActions = [
                    { id: 1, label: 'DÉMARRER LA TOURNÉE' },
                    { id: 2, label: 'CLÔTURER LA TOURNÉE' },
                ];
                break;
            }
            case "Démarré": {
                this.items = [
                    { id: 2, label: 'DÉMARRER' },
                    { id: 3, label: 'CLÔTURER' },
                ];
                this.itemsActions = [
                    { id: 2, label: 'CLÔTURER LA TOURNÉE' },
                ];
                if (k != 0) {
                    this.display2 = true;
                }
                break;
            }
            case "Clôturé": {
                this.items = [
                    { id: 3, label: 'CLOTURER' },
                ];
                this.itemsActions = [
                    { id: 0, label: '' },
                ];
                if (k != 0) {
                    this.data_pn = this.data_p.filter(function (item) {
                        return item.visite == "non";
                    });
                    this.display3 = true;
                }
                break;
            }
            default: {
            }
        }
    };
    DetailTourneePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (params) {
            _this.checkstatus(params['status'], 0);
            _this.from_liste = params;
            _this.name = params["name"];
            _this.id_tournee = params['id'];
            _this.dbm.get_tournee_by_user("i_t_pos_additional", _this.id_tournee).then(function (data_i_t_pos_additional) {
                _this.data_pvs = data_i_t_pos_additional;
                console.log("i_t_pos_additional => " + JSON.stringify(data_i_t_pos_additional));
                _this.dbm.get_tournee_by_user("i_t_pos_initial", _this.id_tournee).then(function (data_i_t_pos_initial) {
                    console.log("i_t_pos_initial => " + JSON.stringify(data_i_t_pos_initial));
                    _this.data_pv = data_i_t_pos_initial;
                    if (_this.data_pv && _this.data_pvs) {
                        _this.data_p = _this.data_pvs.concat(_this.data_pv);
                    }
                    else if (_this.data_pv && !_this.data_pvs) {
                        _this.data_p = _this.data_pv;
                    }
                    else {
                        _this.data_p = _this.data_pvs;
                    }
                });
            });
        });
    };
    DetailTourneePage.prototype.onRowClicked = function (rowData) {
        this.screen = rowData;
        if (this.edit == false) {
            this.display = true;
        }
        else {
            this.display4 = true;
        }
    };
    DetailTourneePage.prototype.itemsActionsChange = function (event) {
        var named = event.label.split(' ');
        named = named[0].charAt(0).toUpperCase() + named[0].slice(1).toLowerCase();
        this.checkstatus(named, 1);
    };
    DetailTourneePage.prototype.valider_tournee = function () {
        var _this = this;
        this.display2 = false;
        this.router.queryParams.subscribe(function (params) {
            _this.dbm.update_tournee_by_id(params['id'], "Démarré");
        });
    };
    DetailTourneePage.prototype.abort_tournee = function () {
        if (this.edit == false) {
            this.route.navigate(['liste-tournee']);
        }
        else {
            this.edit = false;
            this.ionViewWillEnter();
        }
    };
    DetailTourneePage.prototype.cloturer_tournee = function () {
        var _this = this;
        this.display3 = false;
        this.router.queryParams.subscribe(function (params) {
            _this.dbm.update_tournee_by_id(params['id'], "Clôturé");
        });
    };
    DetailTourneePage.prototype.getMyLocation = function () {
        var options = {
            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
        };
        console.log("mande");
        this.geolocation.getCurrentPosition(options).then(function (resp) {
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    DetailTourneePage.prototype.edit_tournee = function () {
        this.edit = true;
    };
    DetailTourneePage.prototype.save_tournee = function () {
    };
    DetailTourneePage.prototype.visite_change = function (visite) {
        for (var i = 0; i < this.data_p.length; i++) {
            if (this.data_p[i].res_partner_name == this.screen.res_partner_name) {
                this.data_p[i].visite = visite;
                break;
            }
        }
        //  this.screen.visite = visite ;
    };
    DetailTourneePage.prototype.go_fiche_visite = function () {
        var navigation_extra = {
            queryParams: {
                id_tournee: this.id_tournee
            }
        };
        this.route.navigate(['fiche-visite'], navigation_extra);
    };
    DetailTourneePage.prototype.open_menu = function () {
        this.route.navigate(['liste-tournee']);
    };
    DetailTourneePage = tslib_1.__decorate([
        Component({
            selector: 'app-detail-tournee',
            templateUrl: './detail-tournee.page.html',
            styleUrls: ['./detail-tournee.page.scss'],
            styles: ["\n  .non {\n            \n    color: green !important;\n}\n\n.oui {\n    \n    color: red !important;\n}\n\n  "]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Geolocation, Database_manager, ActivatedRoute, Router])
    ], DetailTourneePage);
    return DetailTourneePage;
}());
export { DetailTourneePage };
/*var androany = new Date () ;
var dd = String(androany.getDate()).padStart(2, '0');
var mm = String(androany.getMonth() + 1).padStart(2, '0');
var yyyy = androany.getFullYear();
var hh = androany.getHours() ;
var MM = androany.getMinutes() ;
var ss = androany.getSeconds() ;
var daty_andoany_string = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss;

androany = new Date (daty_andoany_string);

this.data_pv = data.filter(function (item) {
  return new Date (item.start_date) <= androany ;
}) ;
this.data_pvs = data.filter(function(item){
  return new Date (item.start_date) > androany ;
}) ;
this.data_p = data ;
});

this.router.queryParams.subscribe(params => {
this.name = params["name"] ;*/
/*deleteWithButton(rowData) {
for(var i = 0; i < this.data_p.length ; i++ ) {
if(this.data_p[i].res_partner_name == rowData.res_partner_name) {
this.data_p[i].visite = 'non' ;
this.dbm.update_visite_res_patrner_by_id(rowData.res_partner_id, "non") ;
break;
}
}
rowData.visite = "non" ;
}

addWithButton(rowData) {
for(var i = 0; i < this.data_p.length ; i++ ) {
if(this.data_p[i].res_partner_name == rowData.res_partner_name) {
this.data_p[i].visite = 'oui' ;
this.dbm.update_visite_res_patrner_by_id(rowData.res_partner_id, "oui") ;
break;
}
}
rowData.visite = "oui" ;
}*/
//# sourceMappingURL=detail-tournee.page.js.map