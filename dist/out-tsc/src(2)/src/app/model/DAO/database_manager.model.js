import * as tslib_1 from "tslib";
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { request_res_partner, request_res_users, request_i_t_activation_autorisee, request_i_t_activite_pos, request_i_t_agence, request_i_t_cible_activation, request_i_t_cible_installation_presentoirs, request_i_t_classification1, request_i_t_classification2, request_i_t_contrat, request_i_t_cooperation_itg, request_i_t_couverture_commerciale, request_i_t_emplacement, request_i_t_enseigne_appartenance, request_i_t_client_grossiste, request_i_t_frequence_approvisionnement, request_i_t_frequence_visite, request_i_t_permanent_posm, request_i_t_preference_animateur, request_i_t_proximite, request_i_t_region, request_i_t_secteur, request_i_t_source_approvisionnement, request_i_t_statut_client, request_i_t_type_client, request_i_t_type_quartier, request_i_t_ville, request_i_t_zone, request_i_t_fournisseur_principale, request_i_t_fournisseur_secondaire, request_i_t_canal, request_i_t_tournee, request_visit_sheet, request_stock_line, request_itg_manufacturer, request_itg_product, request_price_line, request_res_currency, request_pos_audit_line, request_pos_audit_answer, request_pos_audit_criteria, request_plv_line } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
var Database_manager = /** @class */ (function () {
    function Database_manager(sqlite, http) {
        this.sqlite = sqlite;
        this.http = http;
    }
    Database_manager.prototype.init_database = function () {
        return this.sqlite.create({
            name: "imp_tob.db",
            location: 'default'
        });
    };
    Database_manager.prototype.init_all_table = function () {
        this.init_database().then(function (db) {
            db.executeSql(request_res_partner, [])
                .then(function () { return console.log("tafa le db request_res_partner"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_res_users, [])
                .then(function () { return console.log("tafa le db request_res_users"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_activation_autorisee, [])
                .then(function () { return console.log("tafa le db request_i_t_activation_autorisee"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_activite_pos, [])
                .then(function () { return console.log("tafa le db request_i_t_activite_pos"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_agence, [])
                .then(function () { return console.log("tafa le db request_i_t_agence"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_cible_activation, [])
                .then(function () { return console.log("tafa le db request_i_t_cible_activation"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_cible_installation_presentoirs, [])
                .then(function () { return console.log("tafa le db request_i_t_cible_installation_presentoirs"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_classification1, [])
                .then(function () { return console.log("tafa le db request_i_t_classification1"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_classification2, [])
                .then(function () { return console.log("tafa le db request_i_t_classification2"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_contrat, [])
                .then(function () { return console.log("tafa le db request_i_t_contrat"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_cooperation_itg, [])
                .then(function () { return console.log("tafa le db request_i_t_cooperation_itg"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_couverture_commerciale, [])
                .then(function () { return console.log("tafa le db request_i_t_couverture_commerciale"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_emplacement, [])
                .then(function () { return console.log("tafa le db request_i_t_emplacement"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_enseigne_appartenance, [])
                .then(function () { return console.log("tafa le db request_i_t_enseigne_appartenance"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_client_grossiste, [])
                .then(function () { return console.log("tafa le db request_i_t_client_grossiste"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_fournisseur_principale, [])
                .then(function () { return console.log("tafa le db request_i_t_fournisseur_principale"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_fournisseur_secondaire, [])
                .then(function () { return console.log("tafa le db request_i_t_fournisseur_secondaire"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_frequence_approvisionnement, [])
                .then(function () { return console.log("tafa le db request_i_t_frequence_approvisionnement"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_frequence_visite, [])
                .then(function () { return console.log("tafa le db request_i_t_frequence_visite"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_permanent_posm, [])
                .then(function () { return console.log("tafa le db request_i_t_permanent_posm"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_preference_animateur, [])
                .then(function () { return console.log("tafa le db request_i_t_preference_animateur"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_proximite, [])
                .then(function () { return console.log("tafa le db request_i_t_proximite"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_region, [])
                .then(function () { return console.log("tafa le db request_i_t_region"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_secteur, [])
                .then(function () { return console.log("tafa le db request_i_t_secteur"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_source_approvisionnement, [])
                .then(function () { return console.log("tafa le db request_i_t_source_approvisionnement"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_statut_client, [])
                .then(function () { return console.log("tafa le db request_i_t_statut_client"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_type_client, [])
                .then(function () { return console.log("tafa le db request_i_t_type_client"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_type_quartier, [])
                .then(function () { return console.log("tafa le db request_i_t_type_quartier"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_ville, [])
                .then(function () { return console.log("tafa le db request_i_t_ville"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_zone, [])
                .then(function () { return console.log("tafa le db request_i_t_zone"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_canal, [])
                .then(function () { return console.log("tafa le db request_i_t_canal"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_tournee, [])
                .then(function () { return console.log("tafa le db request_i_t_tournee"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_visit_sheet, [])
                .then(function () { return console.log("tafa le db request_visit_sheet"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_stock_line, [])
                .then(function () { return console.log("tafa le db request_stock_line"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_manufacturer, [])
                .then(function () { return console.log("tafa le db request_itg_manufacturer"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_product, [])
                .then(function () { return console.log("tafa le db request_itg_product"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_price_line, [])
                .then(function () { return console.log("tafa le db request_price_line"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_res_currency, [])
                .then(function () { return console.log("tafa le db request_res_currency"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_pos_audit_line, [])
                .then(function () { return console.log("tafa le db request_pos_audit_line"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_pos_audit_answer, [])
                .then(function () { return console.log("tafa le db request_pos_audit_answer"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_pos_audit_criteria, [])
                .then(function () { return console.log("tafa le db request_pos_audit_criteria"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_plv_line, [])
                .then(function () { return console.log("tafa le db request_plv_line"); })
                .catch(function (e) { return console.log(e); });
        });
    };
    Database_manager.prototype.init_table_data = function () {
        var _this = this;
        this.init_database().then(function (db) {
            _this.http.get("../../assets/json/activation_autorisee.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_activation_autorisee", data[i]);
                }
            });
            _this.http.get("../../assets/json/activite_pos.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_activite_pos (create_uid, name, canal_id, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].canal_id,
                        data[i].write_uid,
                    ]).then(function () {
                        console.log('insert i_t_activite_pos with succes \n');
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_activite_pos \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/agence.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_agence (create_uid, code, name, write_uid, region_id) values (?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].code,
                        data[i].name,
                        data[i].write_uid,
                        data[i].region_id,
                    ]).then(function () {
                        console.log('insert i_t_agence with succes \n');
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_agence \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/cible_activation.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_cible_activation", data[i]);
                }
            });
            _this.http.get("../../assets/json/cible_installation_presentoire.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_cible_installation_presentoirs", data[i]);
                }
            });
            _this.http.get("../../assets/json/classification1.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_classification1", data[i]);
                }
            });
            _this.http.get("../../assets/json/classification2.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_classification2", data[i]);
                }
            });
            _this.http.get("../../assets/json/contrat.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var sql_insert = "insert into i_t_contrat (create_uid, name,write_uid, date_debut_contrat, date_fin_contrat) values (?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].date_debut_contrat,
                            data[i].date_fin_contrat,
                        ]).then(function () {
                            console.log('insert i_t_contrat with succes \n');
                        })
                            .catch(function (e) {
                            console.log('Error on insert i_t_contrat \n' + JSON.stringify(e));
                        });
                    }
                }
            });
            _this.http.get("../../assets/json/cooperation_itg.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_cooperation_itg", data[i]);
                }
            });
            _this.http.get("../../assets/json/couverture_commerciale.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_couverture_commerciale", data[i]);
                }
            });
            _this.http.get("../../assets/json/emplacement.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_emplacement", data[i]);
                }
            });
            _this.http.get("../../assets/json/enseigne_appartenance.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_enseigne_appartenance", data[i]);
                }
            });
            _this.http.get("../../assets/json/fournisseur_principale.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_fournisseur_principale", data[i]);
                }
            });
            _this.http.get("../../assets/json/fournisseur_secondaire.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_fournisseur_secondaire", data[i]);
                }
            });
            _this.http.get("../../assets/json/frequence_approvisionnement.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_frequence_approvisionnement", data[i]);
                }
            });
            _this.http.get("../../assets/json/frequence_visite.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_frequence_visite", data[i]);
                }
            });
            _this.http.get("../../assets/json/permanent_posm.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_permanent_posm", data[i]);
                }
            });
            _this.http.get("../../assets/json/preference_animateur.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_preference_animateur", data[i]);
                }
            });
            _this.http.get("../../assets/json/proximite.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_proximite", data[i]);
                }
            });
            _this.http.get("../../assets/json/canal.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_canal", data[i]);
                }
            });
            //MANDE
            _this.http.get("../../assets/json/region.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_region (create_uid, code, name, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].code,
                        data[i].name,
                        data[i].write_uid,
                    ]).then(function () {
                        console.log('insert i_t_region with succes \n');
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_region \n' + JSON.stringify(e));
                    });
                }
            });
            //MANDE
            _this.http.get("../../assets/json/secteur.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_secteur (create_uid, name, write_uid, zone_id) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].zone_id
                    ]).then(function () {
                        console.log('insert i_t_secteur with succes \n');
                    }).catch(function (e) {
                        console.log('Error on insert i_t_secteur \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/source_approvisionnement.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_source_approvisionnement", data[i]);
                }
            });
            _this.http.get("../../assets/json/type_client.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_type_client (create_uid, name, write_uid, code) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].code
                    ]).then(function () { console.log('insert i_t_type_client with succes \n'); })
                        .catch(function (e) { console.log('Error on insert i_t_type_client \n' + JSON.stringify(e)); });
                }
            });
            _this.http.get("../../assets/json/type_quartier.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_type_quartier", data[i]);
                }
            });
            _this.http.get("../../assets/json/ville.test.json").subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.insert_basic_data("i_t_ville", data[i]);
                }
            });
            _this.http.get("../../assets/json/zone.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_zone (create_uid, name, write_uid, agence_id) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].agence_id
                    ]).then(function () {
                        console.log('insert i_t_zone with succes \n');
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/tournee.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_tournee (create_uid, name, write_uid, commercial_id, start_date, end_date, date, state) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].commercial_id,
                        data[i].start_date,
                        data[i].end_date,
                        data[i].date,
                        data[i].state
                    ]).then(function () {
                        console.log('insert i_t_zone with succes \n');
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/res_partner.test.json").subscribe(function (data) {
                var sql_insert = "insert into res_partner (canal_id, name , company_id , comment , website , color , active 	, street , supplier 	, city , display_name , zip ,title , country_id , commercial_company_name , parent_id , company_name , employee 	, ref , email , is_company 	, function , lang , fax , street2 , barcode , phone , daty, tz , write_uid , customer , create_uid , credit_limit , user_id , mobile , type , partner_share , vat , state_id , commercial_partner_id , date_localization, partner_latitude,partner_longitude, notify_email  , message_last_post  , opt_out 	, message_bounce ,signup_type , signup_expiration  , signup_token , team_id , calendar_last_notif_ack  , type_quartier_id , source_approvisionnement_id , cible_installation_presentoirs_id , numero_telephone2 , numero_telephone3 ,numero_telephone1 ,couverture_commerciale_id , classification2_id , nom_gerant , frequence_approvisionnement_id , enseigne_appartenance_id ,agence_id , activite_pos_id , fournisseur_principal_id , contrat_id , fournisseur_secondaire_id ,  nom_agent_commercial_id , cible_activation_id , state , statut_client_id , permanent_POSM5_id , point_de_vente 	, repere , emplacement_id , cooperation_itg_id ,  proximite_id , frequence_visite_id , permanent_POSM3_id , permanent_POSM1_id , adresse , preference_animateur_id , provider_latitude, zone_id , latitude  , commentaire , longitude , message_warning , permanent_POSM4_id , region_id , nom_pos ,   quartier ,  ville_id , type_client_id , utilisateur_associe_id , permanent_POSM2_id ,   secteur_id , provider_longitude,     code_client , activation_autorisee_id , is_today 	,         classification1_id ,     a_visiter_moved0 ,  visite ,    a_visite 	, a_visiter) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].canal_id,
                        data[i].name,
                        data[i].company_id,
                        data[i].comment,
                        data[i].website,
                        data[i].color,
                        data[i].active,
                        data[i].street,
                        data[i].supplier,
                        data[i].city,
                        data[i].display_name,
                        data[i].zip,
                        data[i].title,
                        data[i].country_id,
                        data[i].commercial_company_name,
                        data[i].parent_id,
                        data[i].company_name,
                        data[i].employee,
                        data[i].ref,
                        data[i].email,
                        data[i].is_company,
                        data[i].fonction,
                        data[i].lang,
                        data[i].fax,
                        data[i].street2,
                        data[i].barcode,
                        data[i].phone,
                        data[i].daty,
                        data[i].tz,
                        data[i].write_uid,
                        data[i].customer,
                        data[i].create_uid,
                        data[i].credit_limit,
                        data[i].user_id,
                        data[i].mobile,
                        data[i].type,
                        data[i].partner_share,
                        data[i].vat,
                        data[i].state_id,
                        data[i].commercial_partner_id,
                        data[i].Date_localization,
                        data[i].partner_latitude,
                        data[i].partner_longitude,
                        data[i].notify_email,
                        data[i].message_last_post,
                        data[i].opt_out,
                        data[i].message_bounce,
                        data[i].signup_type,
                        data[i].signup_expiration,
                        data[i].signup_token,
                        data[i].team_id,
                        data[i].calendar_last_notif_ack,
                        data[i].type_quartier_id,
                        data[i].source_approvisionnement_id,
                        data[i].cible_installation_presentoirs_id,
                        data[i].numero_telephone2,
                        data[i].numero_telephone3,
                        data[i].numero_telephone1,
                        data[i].couverture_commerciale_id,
                        data[i].classification2_id,
                        data[i].nom_gerant,
                        data[i].frequence_approvisionnement_id,
                        data[i].enseigne_appartenance_id,
                        data[i].agence_id,
                        data[i].activite_pos_id,
                        data[i].fournisseur_principal_id,
                        data[i].contrat_id,
                        data[i].fournisseur_secondaire_id,
                        data[i].nom_agent_commercial_id,
                        data[i].cible_activation_id,
                        data[i].state,
                        data[i].statut_client_id,
                        data[i].permanent_POSM5_id,
                        data[i].point_de_vente,
                        data[i].repere,
                        data[i].emplacement_id,
                        data[i].cooperation_itg_id,
                        data[i].proximite_id,
                        data[i].frequence_visite_id,
                        data[i].permanent_POSM3_id,
                        data[i].permanent_POSM1_id,
                        data[i].adresse,
                        data[i].preference_animateur_id,
                        data[i].provider_latitude,
                        data[i].zone_id,
                        data[i].latitude,
                        data[i].commentaire,
                        data[i].longitude,
                        data[i].message_warning,
                        data[i].permanent_POSM4_id,
                        data[i].region_id,
                        data[i].nom_pos,
                        data[i].quartier,
                        data[i].ville_id,
                        data[i].type_client_id,
                        data[i].utilisateur_associe_id,
                        data[i].permanent_POSM2_id,
                        data[i].secteur_id,
                        data[i].provider_longitude,
                        data[i].code_client,
                        data[i].activation_autorisee_id,
                        data[i].is_today,
                        data[i].classification1_id,
                        data[i].a_visiter_moved0,
                        data[i].visite,
                        data[i].a_visite,
                        data[i].a_visiter
                    ]).then(function () {
                        console.log('insert res_partner with succes \n');
                    })
                        .catch(function (e) {
                        console.log('Error on insert res_partner \n' + JSON.stringify(e));
                    });
                }
                _this.http.get("../../assets/json/res_user.test.json").subscribe(function (data) {
                    var sql_insert = "insert into res_users (active, login, password, company_id, partner_id, share, write_uid, create_uid, action_id, signature, password_crypt, alias_id, sale_team_id, target_sales_done, target_sales_won) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].active,
                            data[i].login,
                            data[i].password,
                            data[i].company_id,
                            data[i].partner_id,
                            data[i].share,
                            data[i].write_uid,
                            data[i].create_uid,
                            data[i].action_id,
                            data[i].signature,
                            data[i].password_crypt,
                            data[i].alias_id,
                            data[i].sale_team,
                            data[i].target_sales_done,
                            data[i].target_sales_won,
                        ]).then(function () {
                            console.log('insert res_user with succes \n');
                        })
                            .catch(function (e) {
                            console.log('Error on insert res_user \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/visit_sheet.test.json").subscribe(function (data) {
                    var sql_insert = "insert into visit_sheet (create_uid, name, write_uid, page_number_total, show_btn_end_visit, visit_duration, partner_id, user_id, state, provider_longitude, begin_datetime, next_visit_goal, provider_latitude, end_datetime, hide_btn_next_next_page, tour_id, visit_duration_str, pos_initial, region_id, secteur_id, agence_id, zone_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].page_number_total,
                            data[i].show_btn_end_visit,
                            data[i].visit_duration,
                            data[i].partner_id,
                            data[i].user_id,
                            data[i].state,
                            data[i].provider_longitude,
                            data[i].begin_datetime,
                            data[i].next_visit_goal,
                            data[i].provider_latitude,
                            data[i].end_datetime,
                            data[i].hide_btn_next_next_page,
                            data[i].tour_id,
                            data[i].visit_duration_str,
                            data[i].pos_initial,
                            data[i].region_id,
                            data[i].secteur_id,
                            data[i].agence_id,
                            data[i].zone_id,
                        ]).then(function () {
                            console.log('insert visit_sheet with succes \n');
                        })
                            .catch(function (e) {
                            console.log('Error on insert visit_sheet \n' + JSON.stringify(e));
                        });
                    }
                });
            });
        });
    };
    Database_manager.prototype.insert_basic_data = function (nom_table, data) {
        var sql_insert = "insert into " + nom_table + " (create_uid, name, write_uid) values (?, ?, ?) ";
        this.init_database().then(function (db) {
            db.executeSql(sql_insert, [
                data.create_uid,
                data.name,
                data.write_uid,
            ]);
        }).then(function () {
            console.log('insert ' + nom_table + ' with succes \n');
        })
            .catch(function (e) {
            console.log('Error on insert ' + nom_table + ' \n' + JSON.stringify(e));
        }).catch(function (e) {
            console.log('Error on connexion ' + nom_table + ' \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.insert_res_data = function (sql) {
        return this.init_database().then(function (db) {
            return db.executeSql(sql, []);
        }).then(function () {
            console.log('insert res with succes \n');
        }).catch(function (e) {
            console.log('Error on insert res \n' + JSON.stringify(e));
        }).catch(function (e) {
            console.log('Error on connexion res \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.update_res_data = function (sql) {
        return this.init_database().then(function (db) {
            return db.executeSql(sql, []);
        }).then(function () {
            console.log('update res with succes \n');
        }).catch(function (e) {
            console.log('Error on update res \n' + JSON.stringify(e));
        }).catch(function (e) {
            console.log('Error on connexion res \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.get_res_partner = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner inner join i_t_region on res_partner.region_id = i_t_region.id inner join i_t_agence on res_partner.agence_id = i_t_agence.id inner join i_t_zone on res_partner.zone_id = i_t_zone.id inner join i_t_secteur on res_partner.secteur_id = i_t_secteur.id inner join res_users on res_partner.user_id = res_users.id";
            var data_return = [];
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log(data);
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    console.log(JSON.stringify(data_return));
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.select_basic_data = function (nom_table) {
        return this.init_database().then(function (db) {
            var sql_select = "select * from " + nom_table + " ";
            var data_return = [];
            return db.executeSql(sql_select, []).then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
            }).catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.select_max_basic_data = function (nom_table) {
        return this.init_database().then(function (db) {
            var sql_select = "select MAX(id) + 1 as max from " + nom_table + " ";
            return db.executeSql(sql_select, []).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.checkLogin = function (log, pass) {
        return this.init_database().then(function (db) {
            var sql_select = "select * from res_users where login = ? ";
            return db.executeSql(sql_select, [log]).then(function (data) {
                console.log(data);
                if (data.rows.length > 0) {
                    if (data.rows.item(0).password == pass) {
                        return db.executeSql("update res_users set active = 1 where login = ? ", [log]).then(function () {
                            return 1;
                        }).catch(function (e) {
                            console.log('Error on update \n' + stringify(e));
                        });
                    }
                    else
                        return 0;
                }
                else
                    return -1;
            }).catch(function (e) {
                console.log('Error on select \n' + stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + stringify(e));
        });
    };
    Database_manager.prototype.select_res_user_active = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select * from res_users where active = 1 ";
            var data_return;
            return db.executeSql(sql_select, []).then(function (data) {
                if (data.rows.length > 0) {
                    data_return = data.rows.item(0);
                    return data_return;
                }
            }).catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.get_res_partner_data = function (id) {
        console.log("1");
        return this.init_database().then(function (db) {
            console.log("2");
            var sql_select = "select res_partner.photo, res_partner.name, i_t_region.name as region, i_t_agence.name as agence, i_t_zone.name as zone, res_users.signature as signature, i_t_secteur.name as secteur, res_partner.nom_pos, res_partner.nom_gerant, res_partner.adresse, res_partner.repere, res_partner.quartier, i_t_ville.name as ville, res_partner.numero_telephone1, res_partner.numero_telephone2, res_partner.numero_telephone3, i_t_emplacement.name as emplacement, i_t_proximite.name as proximite, i_t_type_quartier.name as type_quartier, res_partner.latitude, res_partner.longitude, i_t_type_client.name as type_client, i_t_activite_pos.name as activite_pos, i_t_enseigne_appartenance.name as enseigne_appartenance, i_t_classification1.name as classification1, i_t_classification2.name as classification2, i_t_couverture_commerciale.name as couverture_commerciale , i_t_frequence_visite.name as frequence_visite, i_t_cible_installation_presentoirs.name as cible_installation_presentoirs, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM1_id) as permanent_POSM1_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM2_id) as permanent_POSM2_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM3_id) as permanent_POSM3_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM4_id) as permanent_POSM4_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM5_id) as permanent_POSM5_id, i_t_contrat.name as contrat, i_t_contrat.date_debut_contrat as date_debut_contrat , i_t_contrat.date_fin_contrat as date_fin_contrat, i_t_cooperation_itg.name as cooperation_itg, i_t_activation_autorisee.name as activation_autorisee, i_t_preference_animateur.name as preference_animateur, i_t_canal.name as canal_id ,i_t_frequence_approvisionnement.name as frequence_approvisionnement, i_t_source_approvisionnement.name as source_approvisionnement, i_t_fournisseur_principale.name as fournisseur_principale, i_t_fournisseur_secondaire.name as fournisseur_secondaire, res_partner.commentaire from res_partner  inner join i_t_region on res_partner.region_id = i_t_region.id inner join i_t_agence on res_partner.agence_id = i_t_agence.id inner join i_t_zone on res_partner.zone_id = i_t_zone.id inner join i_t_secteur on res_partner.secteur_id = i_t_secteur.id inner join i_t_ville on res_partner.ville_id = i_t_ville.id inner join i_t_emplacement on res_partner.emplacement_id = i_t_emplacement.id inner join i_t_proximite on res_partner.proximite_id = i_t_proximite.id inner join i_t_type_quartier on res_partner.type_quartier_id = i_t_type_quartier.id inner join i_t_type_client on res_partner.type_client_id = i_t_type_client.id inner join i_t_activite_pos on res_partner.activite_pos_id = i_t_activite_pos.id inner join i_t_enseigne_appartenance on res_partner.enseigne_appartenance_id = i_t_enseigne_appartenance.id inner join i_t_classification1 on res_partner.classification1_id = i_t_classification1.id inner join i_t_classification2 on res_partner.classification2_id = i_t_classification2.id inner join i_t_couverture_commerciale on res_partner.couverture_commerciale_id = i_t_couverture_commerciale.id inner join i_t_frequence_visite on res_partner.frequence_visite_id = i_t_frequence_visite.id inner join i_t_cible_installation_presentoirs on res_partner.cible_installation_presentoirs_id = i_t_cible_installation_presentoirs.id inner join i_t_permanent_posm on res_partner.permanent_POSM1_id = i_t_permanent_posm.id inner join i_t_contrat on res_partner.contrat_id = i_t_contrat.id inner join i_t_cooperation_itg on res_partner.cooperation_itg_id = i_t_cooperation_itg.id inner join i_t_activation_autorisee on res_partner.activation_autorisee_id = i_t_activation_autorisee.id inner join i_t_preference_animateur on res_partner.preference_animateur_id = i_t_preference_animateur.id inner join i_t_frequence_approvisionnement on res_partner.frequence_approvisionnement_id = i_t_frequence_approvisionnement.id inner join i_t_source_approvisionnement on res_partner.source_approvisionnement_id = i_t_source_approvisionnement.id inner join i_t_fournisseur_principale on res_partner.fournisseur_principal_id = i_t_fournisseur_principale.id inner join i_t_fournisseur_secondaire on res_partner.fournisseur_secondaire_id = i_t_fournisseur_secondaire.id inner join res_users on res_partner.user_id = res_users.id inner join i_t_canal on res_partner.canal_id = i_t_canal.id where res_partner.id = " + id;
            var data_return;
            return db.executeSql(sql_select, []).then(function (data) {
                console.log("3");
                if (data.rows.length > 0) {
                    console.log("4");
                    data_return = data.rows.item(0);
                    console.log('data : \n' + JSON.stringify(data_return));
                    return data_return;
                }
                else {
                    console.log("5");
                }
            }).catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.get_res_partner_data_for_visite = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select res_partner.id, res_partner.name, res_partner.region_id, res_partner.secteur_id, res_partner.agence_id, res_partner.zone_id from res_partner";
            var data_return = [];
            return db.executeSql(sql_select, []).then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
                else {
                    console.log("5");
                }
            }).catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.select_basic_data_with_id = function (nom_table, id) {
        return this.init_database().then(function (db) {
            var sql_select = "select * from " + nom_table + " where id = ?";
            return db.executeSql(sql_select, [id]).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.update_status_res_partner = function (id, status) {
        return this.init_database().then(function (db) {
            var sql_select = "update res_partner set active = ? where id = ?";
            return db.executeSql(sql_select, [status, id]).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(function (e) {
                console.log('Error on update \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    //TOURNEES
    Database_manager.prototype.get_tournee_by_user = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select res_partner.id as res_partner_id, res_partner.name as res_partner_name, res_partner.visite, i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date from res_partner inner join i_t_tournee on res_partner.user_id = i_t_tournee.commercial_id ";
            var data_return = [];
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log(data);
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    console.log(JSON.stringify(data_return));
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.update_tournee_by_id = function (id, status) {
        return this.init_database().then(function (db) {
            var query = "update i_t_tournee set state = ? where id = ?";
            return db.executeSql(query, [status, id]).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(function (e) {
                console.log('Error on update \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.update_visite_res_patrner_by_id = function (id, etat) {
        return this.init_database().then(function (db) {
            var query = "update res_partner set visite = ? where id = ?";
            return db.executeSql(query, [etat, id]).then(function (data) {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(function (e) {
                console.log('Error on update \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.get_active_user = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select res_users.login, res_users.id from res_users where res_users.active = 1";
            var data_return = [];
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log(data);
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.get_all_fiche_visite = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet";
            var data_return = [];
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log(data);
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.save_position = function (id, position) {
        return this.init_database().then(function (db) {
            var query = "update visit_sheet set provider_latitude = ?, provider_longitude where id = ?";
            return db.executeSql(query, [position.latitude, position.longitude, id]).then(function () {
                console.log('update res with succes \n');
            }).catch(function (e) {
                console.log('Error on update res \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.insert_data_visit_sheet = function (data, etat) {
        return this.init_database().then(function (db) {
            var query = "insert into visit_sheet (partner_id, pos_initial, provider_latitude, provider_longitude, region_id, secteur_id, agence_id, zone_id, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
            return db.executeSql(query, [
                data.partner_id,
                data.pos_initial,
                data.provider_latitude,
                data.provider_longitude,
                data.region_id,
                data.secteur_id,
                data.agence_id,
                data.zone_id,
                etat,
            ]).then(function () {
                console.log('insert res with succes \n');
            }).catch(function (e) {
                console.log('Error on update res \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [SQLite, HttpClient])
    ], Database_manager);
    return Database_manager;
}());
export { Database_manager };
//# sourceMappingURL=database_manager.model.js.map