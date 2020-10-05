import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { stringify } from 'querystring';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
var NewClientPage = /** @class */ (function () {
    function NewClientPage(photoViewer, messageService, toast, dbm, form_builder, router, camera, geolocation, alert) {
        this.photoViewer = photoViewer;
        this.messageService = messageService;
        this.toast = toast;
        this.dbm = dbm;
        this.form_builder = form_builder;
        this.router = router;
        this.camera = camera;
        this.geolocation = geolocation;
        this.alert = alert;
        this.i_t_activation_autorisee = [];
        this.i_t_cible_activation = [];
        this.i_t_cible_installation_presentoirs = [];
        this.i_t_activite_pos = [];
        this.i_t_agence = [];
        this.i_t_agence_filtered = [];
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
        this.i_t_zone_filtered = [];
        this.i_t_secteur_filtered = [];
        this.i_t_canal = [];
        this.i_t_canal_filtered = [];
        this.invalid_fields = [];
        this.canal = "";
        this.id_contrat = 0;
        this.active = 0;
        this.window = window;
    }
    NewClientPage.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'PROSPECT' },
            { label: 'VALIDÉE PAR SUPERVISEUR' },
            { label: 'VALIDÉE PAR ADMINISTRATEUR' },
        ];
        this.itemsActions = [
            { label: 'VALIDÉE PAR SUPERVISEUR' },
            { label: 'VALIDÉE PAR ADMINISTRATEUR' },
        ];
        this.dbm.select_basic_data("i_t_region").then(function (data) {
            _this.i_t_region = data;
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
        this.dbm.select_basic_data("i_t_activite_pos").then(function (data) {
            _this.i_t_activite_pos = data;
        });
        this.dbm.select_basic_data("i_t_agence").then(function (data) {
            _this.i_t_agence = data;
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
        this.dbm.select_basic_data("i_t_zone").then(function (data) {
            _this.i_t_zone = data;
        });
        /* this.dbm.select_basic_data("i_t_fournisseur_secondaire").then(data => {
           this.i_t_fournisseur_secondaire = data ;
         }) ; */
        this.dbm.get_name_id_data("res_partner").then(function (data) {
            _this.i_t_fournisseur_principale = data;
            _this.i_t_fournisseur_secondaire = data;
        });
        /*this.dbm.get_name_id_data("i_t_fournisseur_secondaire").then(data => {
          this.i_t_fournisseur_principale = data ;
          this.i_t_fournisseur_secondaire = data ;
        }) ; */
        this.dbm.select_basic_data("i_t_source_approvisionnement").then(function (data) {
            _this.i_t_source_approvisionnement = data;
        });
        this.dbm.select_basic_data("i_t_canal").then(function (data) {
            _this.i_t_canal = data;
        });
        this.dbm.select_res_user_active().then(function (data) {
            _this.active_user = data;
            _this.signature = data.signature;
        });
        this.fiche_client = this.form_builder.group({
            name: [''],
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
            latitude: ['', Validators.required],
            longitude: ['', Validators.required],
            type_client_id: ['', Validators.required],
            activite_pos_id: ['', Validators.required],
            enseigne_appartenance_id: ['', Validators.required],
            classification1_id: ['', Validators.required],
            classification2_id: ['', Validators.required],
            couverture_commerciale_id: ['', Validators.required],
            frequence_visite_id: [''],
            user_id: ['', Validators.required],
            canal_id: ['', Validators.required],
            active: [''],
            photo: [''],
            cible_installation_presentoirs_id: ['', Validators.required],
            permanent_POSM1_id: ['', Validators.required],
            permanent_POSM2_id: ['', Validators.required],
            permanent_POSM3_id: ['', Validators.required],
            permanent_POSM4_id: ['', Validators.required],
            permanent_POSM5_id: ['', Validators.required],
            contrat_id: ['', Validators.required],
            date_debut_contrat: ['', Validators.required],
            date_fin_contrat: ['', Validators.required],
            cooperation_itg_id: ['', Validators.required],
            activation_autorisee_id: ['', Validators.required],
            preference_animateur_id: ['', Validators.required],
            frequence_approvisionnement_id: ['', Validators.required],
            source_approvisionnement_id: ['', Validators.required],
            fournisseur_principal_id: ['', Validators.required],
            fournisseur_secondaire_id: ['', Validators.required],
            visite: [''],
            commentaire: [''],
        });
        this.fiche_client.controls['active'].setValue(this.active);
        /* this.dbm.select_max_basic_data("i_t_contat").then(data => {
           console.log(data);
            this.fiche_client.controls['contrat_id'].setValue(data.max) ;
          }) ; */
    };
    NewClientPage.prototype.takePicture = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cameraOptions, imagePath;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 10,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetHeight: 70,
                            targetWidth: 100
                        };
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 1:
                        imagePath = _a.sent();
                        console.log(imagePath); //this.win.Ionic.WebView.convertFileSrc(imageSrc);
                        return [2 /*return*/, this.window.Ionic.WebView.convertFileSrc(imagePath)];
                }
            });
        });
    };
    NewClientPage.prototype.showImageFromCamera = function () {
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
    NewClientPage.prototype.getMyLocation = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            _this.fiche_client.get('longitude').setValue(resp.coords.longitude);
            _this.fiche_client.get('latitude').setValue(resp.coords.latitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    NewClientPage.prototype.open_fiche_client = function () {
        this.router.navigate(['fiches-client']);
    };
    NewClientPage.prototype.make_alert = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var x;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: message,
                            header: "test",
                        })];
                    case 1:
                        x = _a.sent();
                        x.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewClientPage.prototype.make_toast = function (message) {
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
    NewClientPage.prototype.save_new_client = function () {
        var _this = this;
        this.fiche_client.controls['contrat_id'].setValue(this.i_t_contrat[this.i_t_contrat.length - 1].id + 1);
        this.fiche_client.controls['user_id'].setValue(this.active_user.id);
        if (this.fiche_client.invalid) {
            var invalid = '';
            for (var name_1 in this.fiche_client.controls) {
                if (this.fiche_client.controls[name_1].invalid) {
                    var named = name_1.charAt(0).toUpperCase() + name_1.slice(1);
                    named = named.replace(/_|(id)/gi, function (a) { return ' '; });
                    invalid = '\n' + invalid + ' - ' + named + '\n';
                }
            }
            this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: invalid, key: 'invalid' });
        }
        else {
            this.fiche_client.controls['photo'].setValue(this.filePath);
            this.fiche_client.controls['name'].setValue("/");
            this.fiche_client.controls['visite'].setValue("Non");
            var q1 = "insert into res_partner ";
            var q2 = "";
            var q3 = "";
            var keys = Object.keys(this.fiche_client.value);
            var values = Object.values(this.fiche_client.value);
            for (var i = 0; i < keys.length - 1; i++) {
                if (values[i] == "" || values[i] == null || values[i] == undefined) {
                    values[i] = "NULL";
                }
                if (keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat") {
                    i++;
                }
                else {
                    q2 += keys[i] + " ,";
                    if (typeof (values[i]) == "string") {
                        q3 += "\"" + values[i] + "\" ,";
                    }
                    else {
                        q3 += "'" + values[i] + "' ,";
                    }
                }
            }
            var query = q1 + " ( " + q2 + keys[keys.length - 1] + " ) values (" + q3 + " \" " + values[values.length - 1] + " \" )";
            var query2_1 = "insert into i_t_contrat (date_debut_contrat, date_fin_contrat) values ('" + this.fiche_client.get('date_debut_contrat').value + "' ,'" + this.fiche_client.get('date_debut_contrat').value + "' )";
            console.log('query \n' + query);
            this.dbm.insert_res_data(query).then(function () {
                _this.dbm.insert_res_data(query2_1).then(function () {
                    _this.make_toast("Insertion avec succès");
                    _this.router.navigate(['fiches-client']);
                }).catch(function (e) {
                    console.log('tsy mety \n ', stringify(e));
                });
            }).catch(function (e) {
                console.log('tsy mety res \n ', JSON.stringify(e));
            });
        }
    };
    NewClientPage.prototype.abort_new_client = function () {
    };
    NewClientPage.prototype.edit_image = function () {
    };
    NewClientPage.prototype.delete_image = function () {
    };
    NewClientPage.prototype.regionChange = function (event) {
        this.i_t_agence_filtered = this.i_t_agence.filter(function (agence_filtered) {
            return agence_filtered.region_id == event;
        });
        console.log('1 : ' + JSON.stringify(this.i_t_agence));
    };
    NewClientPage.prototype.agenceChange = function (event) {
        this.i_t_zone_filtered = this.i_t_zone.filter(function (zone_filtered) {
            return zone_filtered.agence_id == event;
        });
        console.log('1 : ' + JSON.stringify(this.i_t_agence));
    };
    NewClientPage.prototype.zoneChange = function (event) {
        this.i_t_secteur_filtered = this.i_t_secteur.filter(function (secteur_filtered) {
            return secteur_filtered.zone_id == event;
        });
        console.log('1 : ' + JSON.stringify(this.i_t_agence));
    };
    NewClientPage.prototype.activite_pos_Change = function (event) {
        this.fiche_client.controls['canal_id'].setValue(event);
        this.i_t_canal_filtered = this.i_t_canal.filter(function (canal_filtered) {
            return canal_filtered.id == event;
        });
        this.canal = this.i_t_canal_filtered[0].name;
        console.log('1 : ' + JSON.stringify(this.i_t_canal_filtered));
    };
    NewClientPage.prototype.ConvertStatut = function (status) {
        this.active = status;
        this.fiche_client.controls['active'].setValue(status);
        if (status == 0) {
            this.make_toast("Client active...");
        }
        else {
            this.make_toast("Client inactive...");
        }
    };
    NewClientPage.prototype.open_menu = function () {
        this.router.navigate(['fiches-client']);
    };
    NewClientPage.prototype.open_full_screen = function () {
        console.log("mandeha");
        this.photoViewer.show(this.filePath);
    };
    NewClientPage = tslib_1.__decorate([
        Component({
            selector: 'app-new-client',
            templateUrl: './new-client.page.html',
            styleUrls: ['./new-client.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoViewer, MessageService, ToastController, Database_manager, FormBuilder, Router, Camera, Geolocation, AlertController])
    ], NewClientPage);
    return NewClientPage;
}());
export { NewClientPage };
//# sourceMappingURL=new-client.page.js.map