import * as tslib_1 from "tslib";
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { request_res_partner, request_res_users, request_i_t_activation_autorisee, request_i_t_activite_pos, request_i_t_agence, request_i_t_cible_activation, request_i_t_cible_installation_presentoirs, request_i_t_classification1, request_i_t_classification2, request_i_t_contrat, request_i_t_cooperation_itg, request_i_t_couverture_commerciale, request_i_t_emplacement, request_i_t_enseigne_appartenance, request_i_t_client_grossiste, request_i_t_frequence_approvisionnement, request_i_t_frequence_visite, request_i_t_permanent_posm, request_i_t_preference_animateur, request_i_t_proximite, request_i_t_region, request_i_t_secteur, request_i_t_source_approvisionnement, request_i_t_statut_client, request_i_t_type_client, request_i_t_type_quartier, request_i_t_ville, request_i_t_zone, request_i_t_fournisseur_principale, request_i_t_fournisseur_secondaire, request_i_t_canal, request_i_t_tournee, request_visit_sheet, request_stock_line, request_itg_manufacturer, request_itg_product, request_price_line, request_res_currency, request_pos_audit_line, request_pos_audit_answer, request_pos_audit_criteria, request_plv_line, request_i_t_pos_additional, request_i_t_pos_initial, request_itg_product_type, request_itg_survey, request_itg_survey_label, request_itg_survey_question } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
var Database_manager = /** @class */ (function () {
    function Database_manager(sqlite, http) {
        this.sqlite = sqlite;
=======
import { request_res_partner, request_data_for_sync, request_res_users, request_i_t_activation_autorisee, request_i_t_activite_pos, request_i_t_agence, request_i_t_cible_activation, request_i_t_cible_installation_presentoirs, request_i_t_classification1, request_i_t_classification2, request_i_t_contrat, request_i_t_cooperation_itg, request_i_t_couverture_commerciale, request_i_t_emplacement, request_i_t_enseigne_appartenance, request_i_t_client_grossiste, request_i_t_frequence_approvisionnement, request_i_t_frequence_visite, request_i_t_permanent_posm, request_i_t_preference_animateur, request_i_t_proximite, request_i_t_region, request_i_t_secteur, request_i_t_source_approvisionnement, request_i_t_statut_client, request_i_t_type_client, request_i_t_type_quartier, request_i_t_ville, request_i_t_zone, request_i_t_fournisseur_principale, request_i_t_fournisseur_secondaire, request_i_t_canal, request_i_t_tournee, request_visit_sheet, request_stock_line, request_itg_manufacturer, request_itg_product, request_price_line, request_res_currency, request_pos_audit_line, request_pos_audit_answer, request_pos_audit_criteria, request_plv_line, request_i_t_pos_additional, request_i_t_pos_initial, request_itg_product_type, request_itg_survey, request_itg_survey_label, request_itg_survey_question, four_last_view } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Storage } from '@ionic/storage';
var Database_manager = /** @class */ (function () {
    function Database_manager(sqlite, storage, http) {
        this.sqlite = sqlite;
        this.storage = storage;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        this.http = http;
    }
    Database_manager.prototype.init_database = function () {
        return this.sqlite.create({
            name: "imp_tob.db",
            location: 'default'
        });
    };
    Database_manager.prototype.init_all_table = function () {
        var _this = this;
        this.init_database().then(function (db) {
            db.executeSql(request_res_partner, [])
<<<<<<< HEAD
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
            db.executeSql(request_i_t_pos_additional, [])
                .then(function () { return console.log("tafa le db request_i_t_pos_additional"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_pos_initial, [])
                .then(function () { return console.log("tafa le db request_i_t_pos_initial"); })
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
            db.executeSql(request_itg_product_type, [])
                .then(function () { return console.log("tafa le db request_itg_product_type"); })
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
            db.executeSql(request_itg_survey, [])
                .then(function () { return console.log("tafa le db request_itg_survey"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_survey_question, [])
                .then(function () { return console.log("tafa le db request_itg_survey_question"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_survey_label, [])
                .then(function () { return console.log("tafa le db request_itg_survey_label"); })
=======
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_res_users, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_activation_autorisee, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_activite_pos, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_agence, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_cible_activation, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_data_for_sync, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_cible_installation_presentoirs, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_classification1, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_classification2, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_contrat, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_cooperation_itg, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_couverture_commerciale, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_emplacement, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_enseigne_appartenance, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_client_grossiste, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(four_last_view, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_fournisseur_principale, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_fournisseur_secondaire, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_frequence_approvisionnement, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_frequence_visite, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_permanent_posm, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_preference_animateur, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_proximite, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_region, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_secteur, [])
                .then(function () { })
                .catch(function (e) { return alert(e.message); });
            db.executeSql(request_i_t_source_approvisionnement, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_statut_client, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_type_client, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_type_quartier, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_ville, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_zone, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_canal, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_tournee, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_pos_additional, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_i_t_pos_initial, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_visit_sheet, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_stock_line, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_manufacturer, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_product, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_product_type, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_price_line, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_res_currency, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_pos_audit_line, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_pos_audit_answer, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_pos_audit_criteria, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_plv_line, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_survey, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_survey_question, [])
                .then(function () { })
                .catch(function (e) { return console.log(e); });
            db.executeSql(request_itg_survey_label, [])
                .then(function () { })
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                .catch(function (e) { return console.log(e); });
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
<<<<<<< HEAD
                        console.log('insert res_user with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert res_user \n' + JSON.stringify(e));
                    });
                }
            });
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
<<<<<<< HEAD
=======
            _this.http.get("../../assets/json/data_for_sync.test.json").subscribe(function (data) {
                var sql_insert = "insert into data_for_sync (id, table_name, table_id, type, action_type, is_synced, x_odoo_id) values (?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].table_name,
                        data[i].table_id,
                        data[i].type,
                        data[i].action_type,
                        data[i].is_synced,
                        data[i].x_odoo_id
                    ]).then(function () {
                    })
                        .catch(function (e) {
                        console.log('Error on insert data_for_sync \n' + JSON.stringify(e));
                    });
                }
            });
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            _this.http.get("../../assets/json/activite_pos.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_activite_pos (create_uid, name, canal_id, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].canal_id,
                        data[i].write_uid,
                    ]).then(function () {
<<<<<<< HEAD
                        console.log('insert i_t_activite_pos with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
                        console.log('insert i_t_agence with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
                            console.log('insert i_t_contrat with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
                        console.log('insert i_t_region with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_region \n' + JSON.stringify(e));
                    });
                }
            });
            //MANDE
            _this.http.get("../../assets/json/itg_product_type.test.json").subscribe(function (data) {
                var sql_insert = "insert into itg_product_type (create_uid, name, write_uid, code) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].code,
                    ]).then(function () {
<<<<<<< HEAD
                        console.log('insert itg_product_type with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    }).catch(function (e) {
                        console.log('Error on insert itg_product_type \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/itg_product.test.json").subscribe(function (data) {
                var sql_insert = "insert into itg_product (id, create_uid, name, write_uid, begin_date, end_date, retailer_unit_sale_price, retailer_pqt_sale_price, grs_cost_price, tax_status_id, dmg_sale_price, brand_id, dmg_cost_price, active, grs_sale_price, manufacturer_id, ref, product_type_code, product_type) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].begin_date,
                        data[i].end_date,
                        data[i].retailer_unit_sale_price,
                        data[i].retailer_pqt_sale_price,
                        data[i].grs_cost_price,
                        data[i].tax_status_id,
                        data[i].dmg_sale_price,
                        data[i].brand_id,
                        data[i].dmg_cost_price,
                        data[i].active,
                        data[i].grs_sale_price,
                        data[i].manufacturer_id,
                        data[i].ref,
                        data[i].product_type_code,
                        data[i].product_type
                    ]).then(function () {
<<<<<<< HEAD
                        console.log('insert itg_product with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    }).catch(function (e) {
                        console.log('Error on insert itg_product \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/secteur.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_secteur (create_uid, name, write_uid, zone_id, seller_id, promoteur_id) values (?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
<<<<<<< HEAD
                    db.executeSql(sql_insert, [
=======
                    var params = [
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].zone_id,
                        data[i].seller_id,
                        data[i].promoteur_id
<<<<<<< HEAD
                    ]).then(function () {
                        console.log('insert i_t_secteur with succes \n');
                    }).catch(function (e) {
                        console.log('Error on insert i_t_secteur \n' + JSON.stringify(e));
=======
                    ];
                    db.executeSql(sql_insert, params).then(function () {
                    }).catch(function (e) {
                        alert(e.message);
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
                        console.log('insert i_t_zone with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/tournee.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_tournee (id, create_uid, name, write_uid, commercial_id, start_date, end_date, date, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].commercial_id,
                        data[i].start_date,
                        data[i].end_date,
                        data[i].date,
                        data[i].state
                    ]).then(function () {
<<<<<<< HEAD
                        console.log('insert i_t_zone with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/pos_initial.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_pos_initial (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].sequence,
                        data[i].visite,
                        data[i].tour_id,
                        data[i].partner_id
                    ]).then(function () {
<<<<<<< HEAD
                        console.log('insert i_t_pos_initial with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_pos_initial \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/pos_additional.test.json").subscribe(function (data) {
                var sql_insert = "insert into i_t_pos_additional (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].sequence,
                        data[i].visite,
                        data[i].tour_id,
                        data[i].partner_id
                    ]).then(function () {
<<<<<<< HEAD
                        console.log('insert i_t_pos_additional with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert i_t_pos_additional \n' + JSON.stringify(e));
                    });
                }
            });
            _this.http.get("../../assets/json/res_partner.test.json").subscribe(function (data) {
                var sql_insert = "insert into res_partner (id, canal_id, name , company_id , comment , website , color , active 	, street , supplier 	, city , display_name , zip ,title , country_id , commercial_company_name , parent_id , company_name , employee 	, ref , email , is_company 	, function , lang , fax , street2 , barcode , phone , daty, tz , write_uid , customer , create_uid , credit_limit , user_id , mobile , type , partner_share , vat , state_id , commercial_partner_id , date_localization, partner_latitude,partner_longitude, notify_email  , message_last_post  , opt_out 	, message_bounce ,signup_type , signup_expiration  , signup_token , team_id , calendar_last_notif_ack  , type_quartier_id , source_approvisionnement_id , cible_installation_presentoirs_id , numero_telephone2 , numero_telephone3 ,numero_telephone1 ,couverture_commerciale_id , classification2_id , nom_gerant , frequence_approvisionnement_id , enseigne_appartenance_id ,agence_id , activite_pos_id , fournisseur_principal_id , contrat_id , fournisseur_secondaire_id ,  nom_agent_commercial_id , cible_activation_id , state , statut_client_id , permanent_POSM5_id , point_de_vente 	, repere , emplacement_id , cooperation_itg_id ,  proximite_id , frequence_visite_id , permanent_POSM3_id , permanent_POSM1_id , adresse , preference_animateur_id , provider_latitude, zone_id , latitude  , commentaire , longitude , message_warning , permanent_POSM4_id , region_id , nom_pos ,   quartier ,  ville_id , type_client_id , utilisateur_associe_id , permanent_POSM2_id ,   secteur_id , provider_longitude,     code_client , activation_autorisee_id , is_today 	,         classification1_id ,     a_visiter_moved0 ,  visite ,    a_visite 	, a_visiter) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
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
<<<<<<< HEAD
                        console.log('insert res_partner with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                    })
                        .catch(function (e) {
                        console.log('Error on insert res_partner \n' + JSON.stringify(e));
                    });
                }
                _this.http.get("../../assets/json/stock_line.test.json").subscribe(function (data) {
                    var sql_insert = "insert into stock_line (id, create_uid, write_uid, placement, product_id, visit_sheet_id, available_stock, manufacturer_id, last_visit_stock) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].write_uid,
                            data[i].placement,
                            data[i].product_id,
                            data[i].visit_sheet_id,
                            data[i].available_stock,
                            data[i].manufacturer_id,
                            data[i].last_visit_stock
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert stock_line with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert stock_line \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/itg_manufacturer.test.json").subscribe(function (data) {
                    var sql_insert = "insert into itg_manufacturer (id, create_uid, name, write_uid, sequence) values (?, ?, ?, ?, ?)";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].sequence
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert itg_manufacturer with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert itg_manufacturer \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/price_line.test.json").subscribe(function (data) {
                    var sql_insert = "insert into price_line (id, create_uid, name, write_uid, product_id, current_price, visit_sheet_id, manufacturer_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].product_id,
                            data[i].current_price,
                            data[i].visit_sheet_id,
                            data[i].manufacturer_id
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert price_line with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert price_line \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/visit_sheet.test.json").subscribe(function (data) {
                    var sql_insert = "insert into visit_sheet (id, create_uid, name, write_uid, page_number_total, show_btn_end_visit, visit_duration, partner_id, user_id, state, provider_longitude, begin_datetime, next_visit_goal, provider_latitude, end_datetime, hide_btn_next_next_page, tour_id, visit_duration_str, pos_initial, region_id, secteur_id, agence_id, zone_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
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
<<<<<<< HEAD
                            console.log('insert visit_sheet with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert visit_sheet \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/pos_audit_criteria.test.json").subscribe(function (data) {
                    var sql_insert = "insert into pos_audit_criteria (id, create_uid, name, write_uid, create_date, write_date, active) values (?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].active,
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert pos_audit_criteria with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert pos_audit_criteria \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/pos_audit_answer.test.json").subscribe(function (data) {
                    var sql_insert = "insert into pos_audit_answer (id, create_uid, name, write_uid, create_date, write_date, criteria_id) values (?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].criteria_id,
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert pos_audit_answer with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert pos_audit_answer \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/pos_audit_line.test.json").subscribe(function (data) {
                    var sql_insert = "insert into pos_audit_line (id, create_uid, name, write_uid, create_date, write_date, visit_begin_moved0, audit_criteria_id, note, visit_sheet_id, visit_end_moved0, visit_begin, visit_end) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].visit_begin_moved0,
                            data[i].audit_criteria_id,
                            data[i].note,
                            data[i].visit_sheet_id,
                            data[i].visit_end_moved0,
                            data[i].visit_begin,
                            data[i].visit_end,
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert pos_audit_line with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert pos_audit_line \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/plv_line.test.json").subscribe(function (data) {
                    var sql_insert = "insert into plv_line (id, create_uid, product_id, visit_sheet_id, manufacturer_id, quantity, create_date, name, write_uid, write_date) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].product_id,
                            data[i].visit_sheet_id,
                            data[i].manufacturer_id,
                            data[i].quantity,
                            data[i].create_date,
                            data[i].name,
                            data[i].write_uid,
                            data[i].write_date,
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert plv_line with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert plv_line \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/itg_survey.test.json").subscribe(function (data) {
                    var sql_insert = "insert into itg_survey (id, create_uid, name, write_uid, write_date, create_date, view_id, state, field_default_value) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].write_date,
                            data[i].create_date,
                            data[i].view_id,
                            data[i].state,
                            data[i].field_default_value
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert itg_survey with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert itg_survey \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/itg_survey_question.test.json").subscribe(function (data) {
                    var sql_insert = "insert into itg_survey_question (id, create_uid, name, type, write_uid, write_date, create_date, page_id, mandatory, sequence, survey_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].type,
                            data[i].write_uid,
                            data[i].write_date,
                            data[i].create_date,
                            data[i].page_id,
                            data[i].mandatory,
                            data[i].sequence,
                            data[i].survey_id,
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert itg_survey_question with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert itg_survey_question \n' + JSON.stringify(e));
                        });
                    }
                });
                _this.http.get("../../assets/json/itg_survey_label.test.json").subscribe(function (data) {
                    var sql_insert = "insert into itg_survey_label (id, create_uid, name, quizz_mark, write_uid, write_date, create_date, question_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].quizz_mark,
                            data[i].write_uid,
                            data[i].write_date,
                            data[i].create_date,
                            data[i].question_id,
                        ]).then(function () {
<<<<<<< HEAD
                            console.log('insert itg_survey_label with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        })
                            .catch(function (e) {
                            console.log('Error on insert itg_survey_label \n' + JSON.stringify(e));
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
<<<<<<< HEAD
            console.log('insert ' + nom_table + ' with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
            console.log('insert res with succes \n');
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
            var sql_select = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join res_users on res_partner.user_id = res_users.id";
            var sql2 = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, i_t_ville.name as ville_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join res_users on res_partner.user_id = res_users.id";
            var data_return = [];
            return db.executeSql(sql2, [])
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
    Database_manager.prototype.get_name_id_data = function (table) {
        return this.init_database().then(function (db) {
            var sql2 = "select " + table + " .id, " + table + ".name as name from " + table + " ;";
            var data_return = [];
            return db.executeSql(sql2, [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    console.log(JSON.stringify(data_return));
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on get_name_id_data \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion get_name_id_data \n' + JSON.stringify(e));
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
<<<<<<< HEAD
                console.log(data);
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
=======
    Database_manager.prototype.getDatetimeNow = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time;
    };
    Database_manager.prototype.update_coordinates_res_partner = function (location, res_partner_id) {
        var _this = this;
        return this.init_database()
            .then(function (db) {
            var query = " update res_partner set date_localization = ? ,partner_latitude = ? , partner_longitude = ? where id = ? ";
            db.executeSql(query, [_this.getDatetimeNow(), location.latitude, location.longitude, res_partner_id])
                .then(function () { return alert('data updated'); })
                .catch(function (e) { return alert(e.message); });
        });
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
            var sql_select = "select res_partner.photo, res_partner.name, i_t_region.name as region, i_t_agence.name as agence, i_t_zone.name as zone, res_users.signature as signature, i_t_secteur.name as secteur, res_partner.nom_pos, res_partner.nom_gerant, res_partner.adresse, res_partner.repere, res_partner.quartier, i_t_ville.name as ville, res_partner.numero_telephone1, res_partner.numero_telephone2, res_partner.numero_telephone3, i_t_emplacement.name as emplacement, i_t_proximite.name as proximite, i_t_type_quartier.name as type_quartier, res_partner.latitude, res_partner.longitude, i_t_type_client.name as type_client, i_t_activite_pos.name as activite_pos, i_t_enseigne_appartenance.name as enseigne_appartenance, i_t_classification1.name as classification1, i_t_classification2.name as classification2, i_t_couverture_commerciale.name as couverture_commerciale , i_t_frequence_visite.name as frequence_visite, i_t_cible_installation_presentoirs.name as cible_installation_presentoirs,(select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM1_id) as permanent_POSM1_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM2_id) as permanent_POSM2_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM3_id) as permanent_POSM3_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM4_id) as permanent_POSM4_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM5_id) as permanent_POSM5_id, i_t_contrat.name as contrat, i_t_contrat.date_debut_contrat as date_debut_contrat , i_t_contrat.date_fin_contrat as date_fin_contrat, i_t_cooperation_itg.name as cooperation_itg, i_t_activation_autorisee.name as activation_autorisee, i_t_preference_animateur.name as preference_animateur, i_t_canal.name as canal_id , i_t_frequence_approvisionnement.name as frequence_approvisionnement, i_t_source_approvisionnement.name as source_approvisionnement, x.name as fournisseur_principale, y.name as fournisseur_secondaire, res_partner.commentaire from res_partner left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_emplacement on res_partner.emplacement_id = i_t_emplacement.id left join i_t_proximite on res_partner.proximite_id = i_t_proximite.id left join i_t_type_quartier on res_partner.type_quartier_id = i_t_type_quartier.id left join i_t_type_client on res_partner.type_client_id = i_t_type_client.id left join i_t_activite_pos on res_partner.activite_pos_id = i_t_activite_pos.id left join i_t_enseigne_appartenance on res_partner.enseigne_appartenance_id = i_t_enseigne_appartenance.id left join i_t_classification1 on res_partner.classification1_id = i_t_classification1.id left join i_t_classification2 on res_partner.classification2_id = i_t_classification2.id left join i_t_couverture_commerciale on res_partner.couverture_commerciale_id = i_t_couverture_commerciale.id left join i_t_frequence_visite on res_partner.frequence_visite_id = i_t_frequence_visite.id left join i_t_cible_installation_presentoirs on res_partner.cible_installation_presentoirs_id = i_t_cible_installation_presentoirs.id left join i_t_permanent_posm on res_partner.permanent_POSM1_id = i_t_permanent_posm.id left join i_t_contrat on res_partner.contrat_id = i_t_contrat.id left join i_t_cooperation_itg on res_partner.cooperation_itg_id = i_t_cooperation_itg.id left join i_t_activation_autorisee on res_partner.activation_autorisee_id = i_t_activation_autorisee.id left join i_t_preference_animateur on res_partner.preference_animateur_id = i_t_preference_animateur.id left join i_t_frequence_approvisionnement on res_partner.frequence_approvisionnement_id = i_t_frequence_approvisionnement.id left join i_t_source_approvisionnement on res_partner.source_approvisionnement_id = i_t_source_approvisionnement.id left join i_t_fournisseur_principale on res_partner.fournisseur_principal_id = i_t_fournisseur_principale.id left join i_t_fournisseur_secondaire on res_partner.fournisseur_secondaire_id = i_t_fournisseur_secondaire.id left join res_users on res_partner.user_id = res_users.id left join i_t_canal on res_partner.canal_id = i_t_canal.id left join res_partner as x on res_partner.fournisseur_principal_id = x.id left join res_partner as y on res_partner.fournisseur_secondaire_id = y.id where res_partner.id = " + id;
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
    Database_manager.prototype.get_all_tournee = function (state) {
        return this.init_database().then(function (db) {
            var sql_select = "select * from i_t_tournee where state != ? ";
            var data_return = [];
            return db.executeSql(sql_select, [state]).then(function (data) {
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
    Database_manager.prototype.get_tournee_by_user = function (table, tour_id) {
        return this.init_database().then(function (db) {
            var query = "select res_partner.id as res_partner_id, res_partner.name as res_partner_name, " + table + ".visite, " + table + ".sequence , i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date from " + table + " left join res_partner on " + table + ".partner_id = res_partner.id left join i_t_tournee on " + table + ".tour_id = i_t_tournee.id where i_t_tournee.id = ?";
            //let sql_select : string = "select res_partner.id as res_partner_id, res_partner.name as res_partner_name, res_partner.visite, i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date from res_partner left join i_t_tournee on res_partner.user_id = i_t_tournee.commercial_id "
            var data_return = [];
            return db.executeSql(query, [tour_id])
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
<<<<<<< HEAD
            var sql_select = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet";
=======
            //let sql_select : string = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet" ;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            var sql = "select visit_sheet.id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state , visit_sheet.provider_latitude, visit_sheet.provider_longitude from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé'";
            var data_return = [];
            return db.executeSql(sql, [])
                .then(function (data) {
<<<<<<< HEAD
                console.log(data);
=======
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
    Database_manager.prototype.get_all_fiche_visite_by_id_tournee = function (id_tournee) {
        return this.init_database().then(function (db) {
            var sql_select = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet";
            var sql = "select visit_sheet.id as visit_sheet_id, visit_sheet.provider_latitude, visit_sheet.provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé' and i_t_tournee.id = ? ";
            var data_return = [];
            return db.executeSql(sql, [id_tournee])
                .then(function (data) {
                console.log(data);
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
=======
    Database_manager.prototype.set_visit_duration_end_datetime = function (visit_sheet_id, duration, end_datetime) {
        return this.init_database()
            .then(function (db) {
            var query = " update visit_sheet set visit_duration = ? , end_datetime = ? where id = ? ";
            var params = [visit_sheet_id, duration, end_datetime];
            return db.executeSql(query, params)
                .then(function (response) {
                alert("Votre visite a durée " + duration + " seconds et se termine à " + end_datetime + " ! ");
            })
                .catch(function (e) { return alert(e.message); });
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.get_visit_begin_datetime = function (id) {
        return this.init_database().then(function (db) {
            var query = " select begin_datetime from visit_sheet where id = ?";
            return db.executeSql(query, [id])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        return data.rows.item(i);
                    }
                }
            })
                .catch(function (e) { return alert(e.message); });
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.start_visit = function (visit_sheet_id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var db_1, query, params, e_2_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.init_database()];
                    case 1:
                        db_1 = _a.sent();
                        query = " update visit_sheet set begin_datetime = ? where id = ? ";
                        params = [this.getDatetimeNow(), visit_sheet_id];
                        db_1.executeSql(query, params)
                            .then(function (response) {
                            db_1.executeSql("select begin_datetime from visit_sheet where id = ?", [visit_sheet_id])
                                .then(function (data) {
                                for (var i = 0; i < data.rows.length; i++) {
                                }
                            })
                                .catch(function (e) { return alert(e.message); });
                        })
                            .catch(function (e_1) { return alert(e_1.message); });
                        return [3 /*break*/, 3];
                    case 2:
                        e_2_1 = _a.sent();
                        return [2 /*return*/, alert(e_2_1.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Database_manager.prototype.get_all_table_for_sync = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select * from data_for_sync where is_synced = 0";
            var data_return = [];
            return db.executeSql(sql_select, [])
                .then(function (data_step_1) {
                if (data_step_1.rows.length > 0) {
                    for (var i = 0; i < data_step_1.rows.length; i++) {
                        data_return.push(data_step_1.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.get_all_data_for_sync = function (table_data) {
        return this.init_database().then(function (db) {
            var data_return = [];
            var sql = "select " + table_data.table_name + ".*, data_for_sync.x_odoo_id, data_for_sync.table_name from data_for_sync inner join " + table_data.table_name + " on data_for_sync.table_id = " + table_data.table_name + ".id ";
            return db.executeSql(sql, [])
                .then(function (data_step_1) {
                if (data_step_1.rows.length > 0) {
                    for (var i = 0; i < data_step_1.rows.length; i++) {
                        data_return.push(data_step_1.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.get_all_fiche_visite_by_id_tournee = function (id_tournee, user_id) {
        return this.init_database().then(function (db) {
            var sql = "select res_users.login as user_id,i_t_tournee.state,visit_sheet.state,tour_id,visit_sheet.id as visit_sheet_id,res_partner.name as partner_id ,visit_sheet.partner_id as res_partner_id,begin_datetime as visit_sheet_begin_date_time,end_datetime as visit_sheet_end_date_time,start_date as tournee_begin,end_date as tournee_end,visit_sheet.state,res_partner.provider_longitude,res_partner.provider_latitude from visit_sheet join res_users on res_users.id = visit_sheet.user_id join i_t_tournee on i_t_tournee.id = visit_sheet.tour_id join res_partner on visit_sheet.partner_id = res_partner.id where visit_sheet.user_id = ? and tour_id = ? and i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé' group by visit_sheet.id,visit_sheet.user_id,tour_id";
            //let sql : string = "select visit_sheet.id as visit_sheet_id, visit_sheet.provider_latitude, visit_sheet.provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé' and i_t_tournee.id = ? " ;
            var data_return = [];
            var params = [user_id, id_tournee];
            return db.executeSql(sql, params)
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).state === 'closed')
                            data.rows.item(i).state = 'fermé';
                        else
                            data.rows.item(i).state = 'ouvert';
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
<<<<<<< HEAD
=======
    Database_manager.prototype.get_audit_data_p4 = function (visit_sheet_id) {
        return this.init_database().then(function (db) {
            var sql_select = "select  pos_audit_criteria.id, pos_audit_criteria.name, group_concat(pos_audit_answer.id,'|') as answer_id, pos_audit_criteria.active, group_concat(pos_audit_answer.name,'|') as answer_name, (select name from pos_audit_answer where id = visit_begin)as visit_begin, (select name from pos_audit_answer where id = visit_end) as visit_end  from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id join pos_audit_line on pos_audit_line.audit_criteria_id = pos_audit_criteria.id where visit_sheet_id = ? group by pos_audit_criteria.name order by pos_audit_criteria.id";
            var data_return = [];
            console.log("sql_select==>" + sql_select);
            return db.executeSql(sql_select, [visit_sheet_id])
                .then(function (data) {
                console.log('get_n_latest_visit_sheet_id ==> ' + JSON.stringify(data));
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e));
            });
        });
        //select pos_audit_criteria.id, pos_audit_criteria.name, GROUP_CONCAT(pos_audit_answer.id, '|') as answer_id, GROUP_CONCAT(pos_audit_answer.name, '|') as answer_name from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.name order by pos_audit_criteria.id
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
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
    Database_manager.prototype.get_res_partner_pos_init_supp = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet";
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
<<<<<<< HEAD
    Database_manager.prototype.get_stock_visit_sheet_by_id_p2 = function (visit_sheet_id, partner_id) {
        return this.init_database().then(function (db) {
            var sql_select = " select t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,ifnull(sum(available_stock),0) as available_stock,ifnull(sum(last_visit_stock),0) as last_visit_stock,ifnull(sum(placement),0) as placement, (select sum(placement) from stock_line as t1 where t1.product_id = t2.product_id and visit_sheet_id in(select id from visit_sheet where id in (select id from visit_sheet where partner_id = " + partner_id + " and id < " + visit_sheet_id + " order by id desc limit 1 ) and partner_id = " + partner_id + " )) as last_placement , (select avg(last_visit_stock) as last_visit_stock_avg from stock_line as t3 where t3.product_id=t2.product_id and visit_sheet_id in (select id from visit_sheet where partner_id = " + partner_id + " order by id Desc limit 4) group by t3.product_id,t3.manufacturer_id) as last_visit_stock_avg from stock_line as t2 join itg_product on itg_product.id= t2.product_id join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id where visit_sheet_id = " + visit_sheet_id + " group by t2.product_id,t2.manufacturer_id";
            var data_return = [];
            console.log("sql_select==>" + sql_select);
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log('get_stock_visit_sheet_by_id_p2 ==> ' + JSON.stringify(data));
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_stock_visit_sheet_by_id_p2 \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.get_audit_data_p4 = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select pos_audit_criteria.id, pos_audit_criteria.name, GROUP_CONCAT(pos_audit_answer.id, '|') as answer_id, pos_audit_criteria.active, GROUP_CONCAT(pos_audit_answer.name, '|') as answer_name from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.name order by pos_audit_criteria.id";
            var data_return = [];
            console.log("sql_select==>" + sql_select);
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log('get_n_latest_visit_sheet_id ==> ' + JSON.stringify(data));
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
=======
    Database_manager.prototype.update_current_price = function (partner_id, data_table) {
        this.init_database()
            .then(function (db) {
            var query = "update price_line set current_price = ? where price_line.id in (select price_line.id from price_line inner join  visit_sheet on price_line.visit_sheet_id = visit_sheet.id where visit_sheet.partner_id = ? and price_line.visit_sheet_id = ? and price_line.product_id = ?)";
            var size = data_table.length, i = 0;
            for (i = 0; i < size; i++) {
                db.executeSql(query, [data_table[i].current_price, partner_id, data_table[i].visit_sheet_id, data_table[i].product_id])
                    .then()
                    .catch(function (e) { return alert(e.message); });
            }
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.update_get_data_p2 = function (available_stock, placement, product_id, visit_sheet_id) {
        return this.init_database().then(function (db) {
            var sql_select = "UPDATE stock_line set available_stock = " + available_stock + ", placement = " + placement + " WHERE product_id= " + product_id + " AND visit_sheet_id=" + visit_sheet_id + "";
            console.log("sql_select==>" + sql_select);
            return db.executeSql(sql_select, []).then(function () {
                console.log("vita");
            }).catch(function (e) {
                console.log('Error on update \n' + JSON.stringify(e));
            });
        }).catch(function (e) {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    };
    Database_manager.prototype.save_next_visit_goal = function (visit_sheet_id, goal) {
        this.init_database()
            .then(function (db) {
            var query = "update visit_sheet set next_visit_goal = ? where id = ? ";
            db.executeSql(query, [goal, visit_sheet_id]).then(function (data) {
                alert('Data affected');
            })
                .catch(function (e) { return alert(e.message); });
        })
            .catch(function (e) { return alert(e); });
    };
    Database_manager.prototype.get_next_visit_goal = function (visit_sheet_id) {
        return this.init_database()
            .then(function (db) {
            var query = "select next_visit_goal from visit_sheet where id = ? ";
            return db.executeSql(query, [visit_sheet_id])
                .then(function (value) {
                return value.rows.item(0);
            })
                .catch(function (e) { return alert(e.message); });
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.get_stock_visit_sheet_by_id_p2 = function (visit_sheet_id, partner_id) {
        return this.init_database().then(function (db) {
            var sql_select = " select t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,sum(available_stock) as available_stock,sum(last_visit_stock) as last_visit_stock,sum(placement) as placement, (select sum(placement) from stock_line as t1 where t1.product_id = t2.product_id and visit_sheet_id in(select id from visit_sheet where id in (select id from visit_sheet where partner_id = ? and id < ? order by id desc limit 1 ) and partner_id = ? )) as last_placement , (select avg(last_visit_stock) as last_visit_stock_avg from stock_line as t3 where t3.product_id=t2.product_id and visit_sheet_id in (select id from visit_sheet where partner_id = ? order by id Desc limit 4) group by t3.product_id,t3.manufacturer_id) as last_visit_stock_avg from stock_line as t2 join itg_product on itg_product.id= t2.product_id join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id where visit_sheet_id = ? group by t2.product_id,t2.manufacturer_id";
            var data_return = [];
            return db.executeSql(sql_select, [partner_id, visit_sheet_id, partner_id, partner_id, visit_sheet_id])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).available_stock === 0)
                            data.rows.item(i).available_stock = null;
                        if (data.rows.item(i).last_visit_stock === 0)
                            data.rows.item(i).last_visit_stock = null;
                        if (data.rows.item(i).placement === 0)
                            data.rows.item(i).placement = null;
                        if (data.rows.item(i).last_placement === 0)
                            data.rows.item(i).last_placement = null;
                        if (data.rows.item(i).last_visit_stock_avg === 0)
                            data.rows.item(i).last_visit_stock_avg = null;
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
<<<<<<< HEAD
                console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e));
            });
        });
        //select pos_audit_criteria.id, pos_audit_criteria.name, GROUP_CONCAT(pos_audit_answer.id, '|') as answer_id, GROUP_CONCAT(pos_audit_answer.name, '|') as answer_name from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.name order by pos_audit_criteria.id
=======
                alert(e.message);
            });
        });
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    };
    Database_manager.prototype.get_n_last_partner_visit_sheet_id = function (partner_id, visit_sheet_id, n) {
        return this.init_database().then(function (db) {
            var sql_select = "select visit_sheet.id from visit_sheet where visit_sheet.partner_id = ? and visit_sheet.id != ? order by visit_sheet.id DESC limit ? ";
            var data_return = [partner_id, visit_sheet_id, n];
            console.log("sql_select==>" + sql_select);
            return db.executeSql(sql_select, [])
                .then(function (data) {
                console.log('get_n_latest_visit_sheet_id ==> ' + JSON.stringify(data));
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e));
            });
        });
    };
<<<<<<< HEAD
    Database_manager.prototype.get_data_for_p5 = function (visit_sheet_id) {
        return this.init_database().then(function (db) {
            var sql_select = "select itg_product.id as produit_id, itg_product.name as product_name, IFNULL(plv_line.quantity, 0) as quantity, plv_line.* from plv_line inner join itg_product on plv_line.product_id = itg_product.id where plv_line.visit_sheet_id = ?";
=======
    Database_manager.prototype.update_response = function (visit_sheet_id, data) {
        return this.init_database()
            .then(function (db) {
            var params = [];
            var i = 0, size = data.length;
            for (i = 0; i < size; i++) {
                var query = "update pos_audit_line  ";
                if (data[i].response_begin && !data[i].response_end) {
                    query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                    params = [data[i].id, data[i].response_begin, data[i].id, visit_sheet_id];
                }
                else if (data[i].response_end && !data[i].response_begin) {
                    query += " set visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                    params = [data[i].id, data[i].response_end, data[i].id, visit_sheet_id];
                }
                else if (data[i].response_end && data[i].response_begin) {
                    query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                    params = [data[i].id, data[i].response_begin, data[i].id, data[i].response_end, data[i].id, visit_sheet_id];
                }
                else {
                    continue;
                }
                query += " where audit_criteria_id = ?  and visit_sheet_id = ? ";
                db.executeSql(query, params)
                    .then(function () {
                })
                    .catch(function (e) {
                    alert(e.message);
                });
            }
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.update_pv_line_quantity_product = function (data, visit_sheet_id) {
        return this.init_database()
            .then(function (db) {
            var query = "update plv_line set quantity = ? where product_id = ? and id = ? and visit_sheet_id = ? ";
            var size = data.length, i = 0;
            for (i = 0; i < size; i++) {
                db.executeSql(query, [data[i].quantity, data[i].produit_id, data[i].id, visit_sheet_id])
                    .then()
                    .catch(function (e) { return alert(e.message); });
            }
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.get_data_for_p5 = function (visit_sheet_id) {
        return this.init_database().then(function (db) {
            var sql_select = "select itg_product.id as produit_id, itg_product.name as product_name, plv_line.quantity as quantity, plv_line.* from plv_line inner join itg_product on plv_line.product_id = itg_product.id where plv_line.visit_sheet_id = ?";
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            var data_return = [];
            return db.executeSql(sql_select, [visit_sheet_id])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
                .catch(function (e) {
                console.log('Error on select get_data_for_p5 \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.get_data_for_p3 = function (product_id, visit_sheet_id, partner_id) {
        return this.init_database().then(function (db) {
            var data_return = [];
            var sql_select = "select price_line.*, (select price_line.current_price from price_line where price_line.visit_sheet_id = " + visit_sheet_id + ") as current_price_2, itg_product.name as product_name, itg_manufacturer.name as manufacturer_name from price_line inner join itg_manufacturer on price_line.manufacturer_id = itg_manufacturer.id inner join itg_product on price_line.product_id = itg_product.id inner join visit_sheet on price_line.visit_sheet_id = visit_sheet.id where visit_sheet.partner_id = " + partner_id + " and price_line.visit_sheet_id < " + visit_sheet_id + " and price_line.product_id = " + product_id + " order by price_line.visit_sheet_id DESC limit 1";
            console.log(sql_select);
            return db.executeSql(sql_select, [])
                .then(function (data) {
                if (data.rows.length > 0) {
<<<<<<< HEAD
                    return data.rows.item(0);
                }
=======
                    if (data.rows.item(0).current_price === 0)
                        data.rows.item(0).current_price = null;
                    if (data.rows.item(0).current_price_2 === 0)
                        data.rows.item().current_price_2 = null;
                    return data.rows.item(0);
                }
                console.log(data.rows.item(0));
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
            }).catch(function (e) {
                console.log('Error on select get_data_for_p3 \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.get_data_for_p7 = function (user_id, itg_survey_id) {
        return this.init_database().then(function (db) {
            var data_return = [];
            var sql_select = "select distinct itg_survey_question.name, itg_survey_question.id as question_id,itg_survey.id as itg_survey_id,itg_survey_question.type, group_concat(itg_survey_label.id, '|') as response_id, group_concat(itg_survey_label.name, '|') as options from itg_survey left join itg_survey_question on itg_survey.id = itg_survey_question.survey_id left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id inner join res_users on itg_survey.create_uid = res_users.id where itg_survey.create_uid = ? and itg_survey.id = ? group by itg_survey_question.id, itg_survey_question.name, itg_survey.id";
            console.log(sql_select);
            return db.executeSql(sql_select, [user_id, itg_survey_id])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        switch (data.rows.item(i).type) {
                            case "free_text": {
                                try {
                                    data.rows.item(i).type = "textarea";
                                }
                                catch (e) {
                                    console.log("textarea ==>", e);
                                }
                                break;
                            }
                            case "numerical_box": {
                                try {
                                    data.rows.item(i).type = "number";
                                }
                                catch (e) {
                                    console.log("numerical_box ==>", e);
                                }
                                break;
                            }
                            case "datetime": {
                                try {
                                    data.rows.item(i).type = "datetime";
                                }
                                catch (e) {
                                    console.log("datetime ==>", e);
                                }
                                break;
                            }
                            case "simple_choice": {
                                var md = { value: Number, label: String };
                                var key = { key: String };
                                var type = { type: String };
                                var templateOptions = {
                                    label: String,
                                    multiple: Boolean,
                                    options: [
                                        { value: Number, label: String }
                                    ]
                                };
                                var dt_response, dt_response_id, md_data = [];
                                try {
                                    dt_response = data.rows.item(i).options.split('|');
                                    dt_response_id = data.rows.item(i).response_id.split('|');
                                    for (var a = 0; a < dt_response.length; a++) {
                                        md = { value: dt_response_id[a], label: dt_response[a] };
                                        md_data.push(md);
                                    }
                                    data.rows.item(i).options = md_data;
                                }
                                catch (e) {
                                    console.log('simple_choice ==>', e);
                                }
                                break;
                            }
                            case "multiple_choice": {
                                var md = { value: Number, label: String };
                                var key = { key: String };
                                var dt_response, dt_response_id, md_data = [];
                                try {
                                    dt_response = data.rows.item(i).options.split('|');
                                    dt_response_id = data.rows.item(i).response_id.split('|');
                                    for (var a = 0; a < dt_response.length; a++) {
                                        md = { value: dt_response_id[a], label: dt_response[a] };
                                        md_data.push(md);
                                    }
                                    data.rows.item(i).options = md_data;
                                }
                                catch (e) {
                                    console.log('multiple_choice ==> ', e);
                                }
                                break;
                            }
                            case "textbox": {
                                try {
                                    data.rows.item(i).type = "input";
                                }
                                catch (e) {
                                    console.log('textbox ==>', e);
                                }
                                break;
                            }
                            default: {
                                console.log('default ==>', data.rows.item(i).type);
                                break;
                            }
                        }
                        data_return.push(data.rows.item(i));
                    }
                    console.log(data_return);
                    return data_return;
                }
            }).catch(function (e) {
                console.log('Error on select get_data_for_p7 \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager.prototype.insert_new_data_for_sync = function (table) {
        var _this = this;
        return this.init_database().then(function (db) {
            _this.select_max_basic_data(table).then(function (max) {
                var query = "insert into data_for_sync (table_name, table_id, is_synced) values (?, ?, ?) ";
                return db.executeSql(query, [
                    table,
                    max - 1,
                    0
                ]).then(function () {
                    console.log('insert insert_new_data_for_sync with succes \n');
                }).catch(function (e) {
                    console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                });
            });
        });
    };
    Database_manager.prototype.update_data_for_sync = function (table, table_id) {
        var _this = this;
        return this.init_database().then(function (db) {
            _this.select_max_basic_data(table).then(function (max) {
                var query = "update data_for_sync set is_synced = 1 where table_name = ? and table_id = ?) ";
                return db.executeSql(query, [
                    table,
                    table_id
                ]).then(function () {
                    console.log('insert insert_new_data_for_sync with succes \n');
                }).catch(function (e) {
                    console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                });
            });
        });
    };
<<<<<<< HEAD
    Database_manager.prototype.get_all_data_for_sync = function () {
        return this.init_database().then(function (db) {
            var sql_select = "select * from data_for_sync where is_synced != 0";
            var data_return = [];
            return db.executeSql(sql_select, [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var loader = new InstanceLoader(window);
                        var instance = loader.getInstance(data.rows.item(i).table_name);
                        instance.constructor();
=======
    Database_manager.prototype.get_all_tournees_by_user = function (user_id) {
        return this.init_database().then(function (db) {
            var sql_select = " select user_id,i_t_tournee.id,i_t_tournee.name,i_t_tournee.state,i_t_tournee.start_date,i_t_tournee.end_date from i_t_tournee join visit_sheet on visit_sheet.tour_id = i_t_tournee.id join res_users on res_users.id = visit_sheet.user_id where user_id = ? group by user_id,i_t_tournee.id";
            var data_return = [];
            return db.executeSql(sql_select, [user_id]).then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(function (e) { return alert(e.message); });
        }).catch(function (e) { return alert(e.message); });
    };
    Database_manager.prototype.get_user_by_secteur = function (secteur_id) {
        return this.init_database()
            .then(function (db) {
            var data_return = [];
            var query = "select * from res_users where id in(select distinct(user_id) as user_id from res_partner where secteur_id = ?)";
            //let query = " select user_id from res_partner where secteur_id = ?  "
            return db.executeSql(query, [secteur_id])
                .then(function (data) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
<<<<<<< HEAD
                .catch(function (e) {
                console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
            });
        });
    };
    Database_manager = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [SQLite, HttpClient])
=======
                .catch(function (error) { return alert(error.message); });
        })
            .catch(function (e) { return alert(e.message); });
    };
    Database_manager = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [SQLite, Storage, HttpClient])
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    ], Database_manager);
    return Database_manager;
}());
export { Database_manager };
//# sourceMappingURL=database_manager.model.js.map