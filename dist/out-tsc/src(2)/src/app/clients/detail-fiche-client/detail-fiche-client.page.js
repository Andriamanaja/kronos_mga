import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Data } from 'src/app/model/data/data.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { Camera } from '@ionic-native/camera/ngx';
var DetailFicheClientPage = /** @class */ (function () {
    function DetailFicheClientPage(camera, messageService, toast, load, data_router, geolocation, storage, dbm, form_builder, router, activatedRoute) {
        this.camera = camera;
        this.messageService = messageService;
        this.toast = toast;
        this.load = load;
        this.data_router = data_router;
        this.geolocation = geolocation;
        this.storage = storage;
        this.dbm = dbm;
        this.form_builder = form_builder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.edit = false;
        this.client_detail = {};
        this.i_t_activation_autorisee = [];
        this.i_t_cible_activation = [];
        this.i_t_cible_installation_presentoirs = [];
        this.i_t_activite_pos = [];
        this.i_t_agence = [];
        this.i_t_classification1 = [];
        this.i_t_classification2 = [];
        this.i_t_contrat = [];
        this.i_t_cooperation_itg = [];
        this.i_t_couverture_commerciale = [];
        this.i_t_emplacement = [];
        this.i_t_enseigne_appartenance = [];
        this.i_t_frequence_approvisionnement = [];
        this.i_t_frequence_visite = [];
        this.i_t_permanent_posm = [];
        this.i_t_preference_animateur = [];
        this.i_t_proximite = [];
        this.i_t_secteur = [];
        this.i_t_type_client = [];
        this.i_t_type_quartier = [];
        this.i_t_ville = [];
        this.i_t_zone = [];
        this.i_t_fournisseur_secondaire = [];
        this.i_t_fournisseur_principale = [];
        this.i_t_region = [];
        this.res_user = {};
        this.data_cli = {};
        this.i_t_agence_filtered = [];
        this.i_t_zone_filtered = [];
        this.i_t_secteur_filtered = [];
        this.i_t_canal = [];
        this.i_t_canal_filtered = [];
        this.canal = "";
        this.filePath = "";
        this.window = window;
    }
    DetailFicheClientPage.prototype.ngOnInit = function () {
    };
    DetailFicheClientPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.items = [
            { id: 1, label: 'PROSPECT' },
            { id: 2, label: 'VALIDÉE PAR SUPERVISEUR' },
            { id: 3, label: 'VALIDÉE PAR ADMINISTRATEUR' },
        ];
        this.itemsActions = [
            { id: 1, label: 'PROSPECT' },
            { id: 2, label: 'VALIDÉE PAR SUPERVISEUR' },
            { id: 3, label: 'VALIDÉE PAR ADMINISTRATEUR' },
        ];
        this.activatedRoute.queryParams.subscribe(function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.dbm.get_res_partner_data(params["id"]).then(function (data) {
                    _this.client_detail = data;
                });
                this.dbm.select_basic_data_with_id("res_partner", params["id"]).then(function (data_res_partner) {
                    _this.data_cli = data_res_partner;
                });
                this.dbm.select_basic_data("i_t_region").then(function (data) {
                    _this.i_t_region = data;
                });
                this.dbm.select_basic_data("i_t_agence").then(function (data) {
                    _this.i_t_agence = data;
                });
                this.dbm.select_basic_data("i_t_zone").then(function (data) {
                    _this.i_t_zone = data;
                });
                this.dbm.select_basic_data("i_t_activite_pos").then(function (data) {
                    _this.i_t_activite_pos = data;
                });
                this.dbm.select_basic_data("i_t_activation_autorisee").then(function (data) {
                    _this.i_t_activation_autorisee = data;
                });
                this.dbm.select_basic_data("i_t_cible_activation").then(function (data) {
                    _this.i_t_cible_activation = data;
                });
                this.dbm.select_basic_data("i_t_cible_installation_presentoirs").then(function (data) {
                    _this.i_t_cible_installation_presentoirs = data;
                });
                this.dbm.select_basic_data("i_t_classification1").then(function (data) {
                    _this.i_t_classification1 = data;
                });
                this.dbm.select_basic_data("i_t_classification2").then(function (data) {
                    _this.i_t_classification2 = data;
                });
                this.dbm.select_basic_data("i_t_contrat").then(function (data) {
                    _this.i_t_contrat = data;
                });
                this.dbm.select_basic_data("i_t_cooperation_itg").then(function (data) {
                    _this.i_t_cooperation_itg = data;
                });
                this.dbm.select_basic_data("i_t_couverture_commerciale").then(function (data) {
                    _this.i_t_couverture_commerciale = data;
                });
                this.dbm.select_basic_data("i_t_emplacement").then(function (data) {
                    _this.i_t_emplacement = data;
                });
                this.dbm.select_basic_data("i_t_enseigne_appartenance").then(function (data) {
                    _this.i_t_enseigne_appartenance = data;
                });
                this.dbm.select_basic_data("i_t_frequence_approvisionnement").then(function (data) {
                    _this.i_t_frequence_approvisionnement = data;
                });
                this.dbm.select_basic_data("i_t_frequence_visite").then(function (data) {
                    _this.i_t_frequence_visite = data;
                });
                this.dbm.select_basic_data("i_t_permanent_posm").then(function (data) {
                    _this.i_t_permanent_posm = data;
                });
                this.dbm.select_basic_data("i_t_preference_animateur").then(function (data) {
                    _this.i_t_preference_animateur = data;
                });
                this.dbm.select_basic_data("i_t_proximite").then(function (data) {
                    _this.i_t_proximite = data;
                });
                this.dbm.select_basic_data("i_t_secteur").then(function (data) {
                    _this.i_t_secteur = data;
                });
                this.dbm.select_basic_data("i_t_type_client").then(function (data) {
                    _this.i_t_type_client = data;
                });
                this.dbm.select_basic_data("i_t_type_quartier").then(function (data) {
                    _this.i_t_type_quartier = data;
                });
                this.dbm.select_basic_data("i_t_ville").then(function (data) {
                    _this.i_t_ville = data;
                });
                this.dbm.select_basic_data("i_t_fournisseur_secondaire").then(function (data) {
                    _this.i_t_fournisseur_secondaire = data;
                });
                this.dbm.select_basic_data("i_t_fournisseur_principale").then(function (data) {
                    _this.i_t_fournisseur_principale = data;
                });
                this.dbm.select_basic_data("i_t_source_approvisionnement").then(function (data) {
                    _this.i_t_source_approvisionnement = data;
                });
                this.dbm.select_basic_data("i_t_canal").then(function (data) {
                    _this.i_t_canal = data;
                    _this.canal = _this.i_t_canal[0].name;
                });
                this.dbm.select_res_user_active().then(function (data) {
                    _this.res_user = data;
                });
                this.fiche_client = this.form_builder.group({
                    region_id: ['', Validators.required],
                    agence_id: ['', Validators.required],
                    zone_id: ['', Validators.required],
                    secteur_id: [''],
                    nom_pos: ['', Validators.required],
                    nom_gerant: ['', Validators.required],
                    adresse: ['', Validators.required],
                    repere: ['', Validators.required],
                    quartier: ['', Validators.required],
                    ville_id: ['', Validators.required],
                    numero_telephone1: [''],
                    numero_telephone2: [''],
                    numero_telephone3: [''],
                    emplacement_id: ['', Validators.required],
                    proximite_id: ['', Validators.required],
                    type_quartier_id: ['', Validators.required],
                    latitude: [''],
                    longitude: [''],
                    type_client_id: ['', Validators.required],
                    activite_pos_id: ['', Validators.required],
                    enseigne_appartenance_id: ['', Validators.required],
                    classification1_id: ['', Validators.required],
                    classification2_id: ['', Validators.required],
                    couverture_commerciale_id: ['', Validators.required],
                    frequence_visite_id: [''],
                    canal_id: ['', Validators.required],
                    active: [''],
                    cible_installation_presentoirs_id: ['', Validators.required],
                    permanent_POSM1_id: ['', Validators.required],
                    permanent_POSM2_id: ['', Validators.required],
                    permanent_POSM3_id: ['', Validators.required],
                    permanent_POSM4_id: ['', Validators.required],
                    permanent_POSM5_id: ['', Validators.required],
                    contrat_id: ['', Validators.required],
                    date_debut_contrat: [this.client_detail.date_debut_contrat, Validators.required],
                    date_fin_contrat: [this.client_detail.date_fin_contrat, Validators.required],
                    cooperation_itg_id: ['', Validators.required],
                    activation_autorisee_id: ['', Validators.required],
                    preference_animateur_id: ['', Validators.required],
                    frequence_approvisionnement_id: ['', Validators.required],
                    source_approvisionnement_id: ['', Validators.required],
                    fournisseur_principal_id: ['', Validators.required],
                    fournisseur_secondaire_id: ['', Validators.required],
                    photo: [''],
                    commentaire: [''],
                });
                //this.fiche_client.controls['contrat_id'].setValue(this.data_cli.contrat_id) ;
                this.fiche_client.controls['date_debut_contrat'].patchValue(this.client_detail.date_debut_contrat);
                this.fiche_client.controls['date_fin_contrat'].patchValue(this.client_detail.date_fin_contrat);
                this.fiche_client.controls['canal_id'].disable();
                return [2 /*return*/];
            });
        }); });
    };
    DetailFicheClientPage.prototype.edit_fiche_client = function () {
        this.regionChange(this.data_cli.region_id);
        this.agenceChange(this.data_cli.agence_id);
        this.zoneChange(this.data_cli.zone_id);
        this.activite_pos_Change(this.data_cli.canal_id);
        this.edit = true;
    };
    DetailFicheClientPage.prototype.create_fiche_client = function () {
        this.router.navigate(['new-client']);
    };
    DetailFicheClientPage.prototype.save_edit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (_this.fiche_client.invalid) {
                var invalid = '';
                for (var name_1 in _this.fiche_client.controls) {
                    if (_this.fiche_client.controls[name_1].invalid) {
                        var named = name_1.charAt(0).toUpperCase() + name_1.slice(1);
                        named = named.replace(/_|(id)/gi, function (a) { return ' '; });
                        invalid = '\n' + invalid + ' - ' + named + '\n';
                    }
                }
                _this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: invalid, key: 'invalid' });
            }
            else {
                if (_this.filePath != "")
                    _this.fiche_client.controls['photo'].setValue(_this.filePath);
                if (_this.resp != undefined || _this.resp != null) {
                    _this.fiche_client.controls['latitude'].setValue(_this.resp.latitude);
                    _this.fiche_client.controls['longitude'].setValue(_this.resp.longitude);
                }
                if (_this.fiche_client.get('active').value == null) {
                    _this.fiche_client.controls['active'].setValue(_this.data_cli.active);
                }
                var q1 = "update res_partner set ";
                var q2 = "";
                var q3 = "";
                var keys = Object.keys(_this.fiche_client.value);
                var values = Object.values(_this.fiche_client.value);
                for (var i = 0; i < keys.length - 1; i++) {
                    if (values[i] == "" || values[i] == null || values[i] == undefined) {
                        values[i] = "NULL";
                    }
                    if (keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat") {
                        i++;
                    }
                    else {
                        q2 += keys[i] + " = ";
                        if (typeof (values[i]) == "string") {
                            q2 += "\"" + values[i] + "\" ,";
                        }
                        else {
                            q2 += "'" + values[i] + "' ,";
                        }
                    }
                }
                var query = q1 + q2 + keys[keys.length - 1] + " = \" " + values[values.length - 1] + " \" where id = " + params["id"];
                var query2_1 = "update i_t_contrat set date_debut_contrat = '" + _this.fiche_client.get('date_debut_contrat').value + "' , date_fin_contrat = '" + _this.fiche_client.get('date_debut_contrat').value + "' where id = " + _this.data_cli.contrat_id;
                _this.dbm.update_res_data(query).then(function () {
                    _this.dbm.update_res_data(query2_1).then(function () {
                        _this.make_toast("Mise à jour avec succès...");
                        _this.edit = false;
                        _this.ionViewWillEnter();
                    });
                });
            }
        });
    };
    DetailFicheClientPage.prototype.open_fiche_client = function () {
        this.router.navigate(['fiches-client']);
    };
    DetailFicheClientPage.prototype.getMyLocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            enableHighAccuracy: true,
                            timeout: 60000,
                            maximumAge: 0
                        };
                        return [4 /*yield*/, this.load.create({
                                duration: 6000
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.geolocation.getCurrentPosition(options).then(function (resp) {
                            // resp.coords.latitude
                            // resp.coords.longitude
                            _this.resp = resp.coords;
                            _this.fiche_client.controls['longitude'].setValue(resp.coords.longitude);
                            _this.fiche_client.controls['latitude'].setValue(resp.coords.latitude);
                            loading.dismiss();
                        }).catch(function (error) {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.abort_edit_client = function () {
        this.edit = false;
    };
    DetailFicheClientPage.prototype.ConvertStatut = function (status) {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.dbm.update_status_res_partner(params["id"], status).then(function () {
                _this.data_cli.active = status;
                if (status == 0) {
                    _this.make_toast("Client active...");
                }
                else {
                    _this.make_toast("Client inactive...");
                }
            });
        });
    };
    DetailFicheClientPage.prototype.make_toast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var x;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        x = _a.sent();
                        x.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.cancel = function (champ) {
        this.fiche_client.controls[champ].setValue(null);
        //console.log(this.fiche_client.get('champ').value) ;
    };
    DetailFicheClientPage.prototype.regionChange = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.i_t_agence.filter(function (agence_filtered) {
                                return agence_filtered.region_id == event;
                            })];
                    case 1:
                        _a.i_t_agence_filtered = _b.sent();
                        console.log('regionChange : ' + JSON.stringify(this.i_t_agence_filtered));
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.agenceChange = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.i_t_zone.filter(function (zone_filtered) {
                                return zone_filtered.agence_id == event;
                            })];
                    case 1:
                        _a.i_t_zone_filtered = _b.sent();
                        console.log('agenceChange : ' + JSON.stringify(this.i_t_zone_filtered));
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.zoneChange = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.i_t_secteur.filter(function (secteur_filtered) {
                                return secteur_filtered.zone_id == event;
                            })];
                    case 1:
                        _a.i_t_secteur_filtered = _b.sent();
                        console.log('zoneChange : ' + JSON.stringify(this.i_t_secteur_filtered));
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.activite_pos_Change = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.fiche_client.controls['canal_id'].setValue(event);
                        _a = this;
                        return [4 /*yield*/, this.i_t_canal.filter(function (canal_filtered) {
                                return canal_filtered.id == event;
                            })];
                    case 1:
                        _a.i_t_canal_filtered = _b.sent();
                        console.log('zoneChange : ' + JSON.stringify(this.i_t_canal_filtered));
                        this.canal = this.i_t_canal_filtered[0].name;
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.takePicture = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cameraOptions, imagePath;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetHeight: 70,
                            targetWidth: 100
                        };
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 1:
                        imagePath = _a.sent();
                        return [2 /*return*/, this.window.Ionic.WebView.convertFileSrc(imagePath)];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.showImageFromCamera = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.takePicture()];
                    case 1:
                        _a.filePath = _b.sent();
                        this.fiche_client.controls['photo'].setValue(this.filePath);
                        console.log("showImageFromCamera : " + this.fiche_client.get('photo').value);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DetailFicheClientPage.prototype.removeImage = function () {
        this.fiche_client.controls['photo'].setValue(null);
        console.log("remove_image : " + this.fiche_client.get('photo').value);
    };
    DetailFicheClientPage.prototype.itemsActionsChange = function (idaction) {
        console.log(idaction);
        this.items = this.itemsActions.filter(function (item) {
            return item.id > idaction;
        });
        console.log(this.items);
    };
    DetailFicheClientPage = tslib_1.__decorate([
        Component({
            selector: 'app-detail-fiche-client',
            templateUrl: './detail-fiche-client.page.html',
            styleUrls: ['./detail-fiche-client.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera, MessageService, ToastController, LoadingController, Data, Geolocation, Storage, Database_manager, FormBuilder, Router, ActivatedRoute])
    ], DetailFicheClientPage);
    return DetailFicheClientPage;
}());
export { DetailFicheClientPage };
//# sourceMappingURL=detail-fiche-client.page.js.map