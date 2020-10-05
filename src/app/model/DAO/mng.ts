import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { request_itg_partner_wholesaler, request_res_partner, request_data_for_sync, request_res_users, request_i_t_activation_autorisee, request_i_t_activite_pos, request_i_t_agence, request_i_t_cible_activation, request_i_t_cible_installation_presentoirs, request_i_t_classification1, request_i_t_classification2, request_i_t_contrat, request_i_t_cooperation_itg, request_i_t_couverture_commerciale, request_i_t_emplacement, request_i_t_enseigne_appartenance, request_i_t_client_grossiste, request_i_t_frequence_approvisionnement, request_i_t_frequence_visite, request_i_t_permanent_posm, request_i_t_preference_animateur, request_i_t_proximite, request_i_t_region, request_i_t_secteur, request_i_t_source_approvisionnement, request_i_t_statut_client, request_i_t_type_client, request_i_t_type_quartier, request_i_t_ville, request_i_t_zone, request_i_t_fournisseur_principale, request_i_t_fournisseur_secondaire, request_i_t_canal, request_i_t_tournee, request_visit_sheet, request_stock_line, request_itg_manufacturer, request_itg_product, request_price_line, request_res_currency, request_pos_audit_line, request_pos_audit_answer, request_pos_audit_criteria, request_plv_line, request_i_t_pos_additional, request_i_t_pos_initial, request_itg_product_type, request_itg_survey, request_itg_survey_label, request_itg_survey_question, four_last_view, request_permanent_posm_res_partner_rel, request_res_partner_res_users_rel, request_tax_status, request_kronos_back_data, request_visit_survey, edit_stock_line_add_visit_sheet_offline_id, edit_price_line_add_visit_sheet_offline_id, edit_plv_line_add_visit_sheet_offline_id, edit_pos_audit_line_add_visit_sheet_offline_id, edit_visit_survey_add_visit_sheet_offline_id } from 'src/environments/environment.prod';
import { base_data } from '../data/base_data.model';
import { HttpClient } from '@angular/common/http';import { i_t_activation_autorisee } from '../data/i_t_activation_autorisee.model';
import { i_t_cible_activation } from '../data/i_t_cible_activation.model';
import { i_t_cible_installation_presentoirs } from '../data/i_t_cible_installation_presentoirs.model';
import { i_t_activite_pos } from '../data/i_t_activite_pos.model';
import { i_t_agence } from '../data/i_t_agence.model';
import { i_t_classification1 } from '../data/i_t_classification1.model';
import { i_t_classification2 } from '../data/i_t_classification2.model';
import { i_t_contrat } from '../data/i_t_contrat.model';
import { i_t_cooperation_itg } from '../data/i_t_cooperation_itg.model';
import { i_t_couverture_commerciale } from '../data/i_t_couverture_commerciale.model';
import { i_t_emplacement } from '../data/i_t_emplacement.model';
import { i_t_enseigne_appartenance } from '../data/i_t_enseigne_appartenance.model';
import { i_t_frequence_approvisionnement } from '../data/i_t_frequence_approvisionnement.model';
import { i_t_frequence_visite } from '../data/i_t_frequence_visite.model';
import { i_t_permanent_posm } from '../data/i_t_permanent_posm.model';
import { i_t_preference_animateur } from '../data/it_preference_animateur.model';
import { i_t_proximite } from '../data/i_t_proximite.model';
import { i_t_region } from '../data/i_t_region.model';
import { i_t_secteur } from '../data/i_t_secteur.model';
import { i_t_source_approvisionnement } from '../data/i_t_source_approvisionnement.model';
import { i_t_type_client } from '../data/i_t_type_client.model';
import { i_t_type_quartier } from '../data/i_t_type_quartier.model';
import { i_t_ville } from '../data/i_t_ville.model';
import { i_t_zone } from '../data/i_t_zone.model';
import { i_t_fournisseur_secondaire } from '../data/i_t_fournisseur_secondaire.model';
import { i_t_fournisseur_principale } from '../data/i_t_fournisseur_principale.model';
import { res_users } from '../data/res_users.model';
import { stringify } from '@angular/compiler/src/util';
import { res_partner } from '../data/res_partner.model';
import { i_t_canal } from '../data/i_t_canal.model';
import { i_t_tournee } from '../data/i_t_tournee.model';
import { visit_sheet } from '../data/visit_sheet.model';
import { ThrowStmt } from '@angular/compiler';
import { i_t_pos_initial } from '../data/i_t_pos_initial.model';
import { i_t_pos_additional } from '../data/i_t_pos_additional.model';
import { promise } from 'protractor';
import { itg_product_type } from '../data/itg_product_type.model';
import { itg_product } from '../data/itg_product.model';
import { stock_line } from '../data/stock_line.model';
import { price_line } from '../data/price_line.model';
import { itg_manufacturer } from '../data/itg_manufacturer.model';
import { pos_audit_criteria } from '../data/pos_audit_criteria.model';
import { pos_audit_answer } from '../data/pos_audit_answer.model';
import { pos_audit_line } from '../data/pos_audit_line.model';
import { plv_line } from '../data/plv_line.model';
import { itg_survey } from '../data/itg_survey.model';
import { itg_survey_question } from '../data/itg_survey_questions.model';
import { itg_survey_label } from '../data/itg_survey_label.model';
//import * as pbkdf2_sha512 from 'pbkdf2-sha512';
import { Storage } from '@ionic/storage';

import { permanent_posm_res_partner_rel } from '../data/permanent_posm_res_partner_rel.model';
import { res_users_res_partner_rel } from '../data/res_users_res_partner_rel.model';
import { data_for_sync } from '../data/data_for_sync.model';
import { res_partner_source } from '../data/res_partner_source';
import { i_t_statut_client } from '../data/i_t_statut_client.model';
import { i_t_client_grossiste } from '../data/i_t_client_grossiste.model';
import { defineBase } from '@angular/core/src/render3';
import { Auth } from '../helper/auth';
import { ClientInterface } from '../screen/clients.screen';
import { Counter } from '../helper/counter';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { request_itg_survey_res_partner_rel, request_i_t_fonction_ac_itg_survey_rel, request_i_t_fonction_ac, edit_price_line } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AES256 } from '@ionic-native/aes-256/ngx';

@Injectable()
export class Database_manager {

    db: SQLiteObject;
    hasWriteAccess: boolean = false;

    constructor(private aes256 : AES256, private router: Router, public alertctrl: AlertController, private androidPermissions: AndroidPermissions, private b64tg: Base64ToGallery, private b64: Base64, private sqlite: SQLite, private storage: Storage, private http: HttpClient, private toastController: ToastController) {

    }

    public setDb(): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            this.db = db;
            console.log('Database initiated...')
        }).catch(e => console.log('setDb exception : ' + e.message));
    }

    public init_database(): Promise<SQLiteObject> {
        return this.sqlite.create({
            name: "imp_tob.db",
            location: 'default'
        })
    }





    init_all_table(): void {
        this.setDb()
            .then(() => {
                this.db.executeSql(request_res_partner, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_res_users, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_activation_autorisee, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_activite_pos, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_agence, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_cible_activation, [])
                    .then(() => { })
                    .catch(e => console.log(e));
                this.db.executeSql(request_data_for_sync, [])
                    .then(() => { })
                    .catch(e => console.log(e));
                this.db.executeSql(request_i_t_cible_installation_presentoirs, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_classification1, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_classification2, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_contrat, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_cooperation_itg, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_couverture_commerciale, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_emplacement, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_enseigne_appartenance, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_client_grossiste, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(four_last_view, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_fournisseur_principale, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_fournisseur_secondaire, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_frequence_approvisionnement, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_frequence_visite, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_permanent_posm, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_preference_animateur, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_proximite, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_region, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_secteur, [])
                    .then(() => { })
                    .catch(e => console.log(e.message));

                this.db.executeSql(request_i_t_source_approvisionnement, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_statut_client, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_type_client, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_type_quartier, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_ville, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_zone, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_canal, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_tournee, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_pos_additional, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_i_t_pos_initial, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_visit_sheet, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_stock_line, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_itg_manufacturer, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_itg_product, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_itg_product_type, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_price_line, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_res_currency, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_pos_audit_line, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_pos_audit_answer, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_pos_audit_criteria, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_plv_line, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_itg_survey, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_itg_survey_question, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_itg_survey_label, [])
                    .then(() => { })
                    .catch(e => console.log(e));

                this.db.executeSql(request_permanent_posm_res_partner_rel, [])
                    .catch(e => console.log(e));

                this.db.executeSql(request_res_partner_res_users_rel, [])
                    .catch(e => console.log(e));

                this.db.executeSql(request_tax_status, [])
                    .catch(e => console.log(e));

                this.db.executeSql(request_kronos_back_data, [])
                    .catch(e => console.log(e));

                this.db.executeSql(request_visit_survey, [])
                    .catch(e => console.log(e.message));

                this.db.executeSql(request_itg_partner_wholesaler, [])
                    .catch(e => console.log(e.message));

                this.db.executeSql(request_itg_survey_res_partner_rel, [])
                    .catch(e => console.log(e.message));

                this.db.executeSql(request_i_t_fonction_ac_itg_survey_rel, [])
                    .catch(e => console.log(e.message));

                this.db.executeSql(request_i_t_fonction_ac, [])
                    .catch(e => console.log(e.message));



            })
            .catch(e => {
                alert("Une erreur s'est produite lors de l'initialisation de la base de donnée!");
                console.log(e.message);

            })

        /* this.db.executeSql("select * from i_t_region", []).then(data => {
                      if (data.rows.length == 0) {
                          this.init_table_data();
                      }
              })*/

    }

    update_any_column() {
        this.db.executeSql(edit_stock_line_add_visit_sheet_offline_id, [])
        .catch(e => console.log(e.message));

        this.db.executeSql(edit_price_line_add_visit_sheet_offline_id, [])
        .catch(e => console.log(e.message));

        this.db.executeSql(edit_plv_line_add_visit_sheet_offline_id, [])
        .catch(e => console.log(e.message));

        this.db.executeSql(edit_pos_audit_line_add_visit_sheet_offline_id, [])
        .catch(e => console.log(e.message));

        this.db.executeSql(edit_visit_survey_add_visit_sheet_offline_id, [])
        .catch(e => console.log(e.message));

    }

    update_any_table(): Promise<any> {
        let data_return = [];
        let sql = "pragma table_info('price_line')";
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i))
                }
                return data_return
                /*for(var i = 0 ; i < data_return.length ; i++) {
                    if(data_return.name == "rod_current_price") {
                        is_updated = true ;
                        break ;
                    }
                }
                if(is_updated == false) {
                    this.db.executeSql(edit_price_line).then(()=> {
                        console.log("Vita ny update") ;
                    }).catch(e => {
                        console.log("363 dbm=> " , e)
                    }) ;
                }
                else {
                    console.log("Efa nisy tao k.") ;
                }*/
            }
        }).catch(e => {
            console.log("374 dbm=> ", e)
        })
    }


    init_table_data() {
        this.init_database().then((db: SQLiteObject) => {

            this.http.get("../../assets/json/res_user.test.json").subscribe((data: Array<res_users>) => {
                let sql_insert: string = "insert into res_users (id,name,login,password) values ( ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].name,
                        data[i].login,
                        data[i].password_crypt,
                    ]).then(() => {
                        console.log(JSON.stringify(data));

                    })
                        .catch(e => {
                            console.log('Error on insert res_user \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/activation_autorisee.test.json").subscribe((data: Array<i_t_activation_autorisee>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_activation_autorisee", data[i]);
                }
            });

            this.http.get("../../assets/json/data_for_sync.test.json").subscribe((data: Array<data_for_sync>) => {
                let sql_insert: string = "insert into data_for_sync (id, table_name, table_id, type, action_type, is_synced, x_odoo_id) values (?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].table_name,
                        data[i].table_id,
                        data[i].type,
                        data[i].action_type,
                        data[i].is_synced,
                        data[i].x_odoo_id
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert data_for_sync \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/activite_pos.test.json").subscribe((data: Array<i_t_activite_pos>) => {
                let sql_insert: string = "insert into i_t_activite_pos (create_uid, name, canal_id, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].canal_id,
                        data[i].write_uid,
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_activite_pos \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/agence.test.json").subscribe((data: Array<i_t_agence>) => {
                let sql_insert: string = "insert into i_t_agence (create_uid, code, name, write_uid, region_id) values (?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].code,
                        data[i].name,
                        data[i].write_uid,
                        data[i].region_id,
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_agence \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/cible_activation.test.json").subscribe((data: Array<i_t_cible_activation>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_cible_activation", data[i]);
                }
            });

            this.http.get("../../assets/json/cible_installation_presentoire.test.json").subscribe((data: Array<i_t_cible_installation_presentoirs>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_cible_installation_presentoirs", data[i]);
                }
            });

            this.http.get("../../assets/json/classification1.test.json").subscribe((data: Array<i_t_classification1>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_classification1", data[i]);
                }
            });

            this.http.get("../../assets/json/classification2.test.json").subscribe((data: Array<i_t_classification2>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_classification2", data[i]);
                }
            });

            this.http.get("../../assets/json/contrat.test.json").subscribe((data: Array<i_t_contrat>) => {
                for (var i = 0; i < data.length; i++) {
                    let sql_insert: string = "insert into i_t_contrat (create_uid, name,write_uid, date_debut_contrat, date_fin_contrat) values (?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].date_debut_contrat,
                            data[i].date_fin_contrat,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert i_t_contrat \n' + JSON.stringify(e));
                            })
                    }
                }
            });

            this.http.get("../../assets/json/cooperation_itg.test.json").subscribe((data: Array<i_t_cooperation_itg>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_cooperation_itg", data[i]);
                }
            });

            this.http.get("../../assets/json/couverture_commerciale.test.json").subscribe((data: Array<i_t_couverture_commerciale>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_couverture_commerciale", data[i]);
                }
            });

            this.http.get("../../assets/json/emplacement.test.json").subscribe((data: Array<i_t_emplacement>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_emplacement", data[i]);
                }
            });

            this.http.get("../../assets/json/enseigne_appartenance.test.json").subscribe((data: Array<i_t_enseigne_appartenance>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_enseigne_appartenance", data[i]);
                }
            });

            this.http.get("../../assets/json/fournisseur_principale.test.json").subscribe((data: Array<i_t_fournisseur_principale>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_fournisseur_principale", data[i]);
                }
            });

            this.http.get("../../assets/json/fournisseur_secondaire.test.json").subscribe((data: Array<i_t_fournisseur_secondaire>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_fournisseur_secondaire", data[i]);
                }
            });

            this.http.get("../../assets/json/frequence_approvisionnement.test.json").subscribe((data: Array<i_t_frequence_approvisionnement>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_frequence_approvisionnement", data[i]);
                }
            });

            this.http.get("../../assets/json/frequence_visite.test.json").subscribe((data: Array<i_t_frequence_visite>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_frequence_visite", data[i]);
                }
            });

            this.http.get("../../assets/json/permanent_posm.test.json").subscribe((data: Array<i_t_permanent_posm>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_permanent_posm", data[i]);
                }
            });

            this.http.get("../../assets/json/preference_animateur.test.json").subscribe((data: Array<i_t_preference_animateur>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_preference_animateur", data[i]);
                }
            });

            this.http.get("../../assets/json/proximite.test.json").subscribe((data: Array<i_t_proximite>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_proximite", data[i]);
                }
            });

            this.http.get("../../assets/json/canal.test.json").subscribe((data: Array<i_t_canal>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_canal", data[i]);
                }
            });


            //MANDE
            this.http.get("../../assets/json/region.test.json").subscribe((data: Array<i_t_region>) => {
                let sql_insert: string = "insert into i_t_region (create_uid, code, name, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].code,
                        data[i].name,
                        data[i].write_uid,
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_region \n' + JSON.stringify(e));
                        })
                }

            });
            //MANDE


            this.http.get("../../assets/json/itg_product_type.test.json").subscribe((data: Array<itg_product_type>) => {
                let sql_insert: string = "insert into itg_product_type (create_uid, name, write_uid, code) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].code,
                    ]).then(() => {

                    }).catch(e => {
                        console.log('Error on insert itg_product_type \n' + JSON.stringify(e));
                    })
                }
            });

            this.http.get("../../assets/json/itg_product.test.json").subscribe((data: Array<itg_product>) => {
                let sql_insert: string = "insert into itg_product (id, create_uid, name, write_uid, begin_date, end_date, retailer_unit_sale_price, retailer_pqt_sale_price, grs_cost_price, tax_status_id, dmg_sale_price, brand_id, dmg_cost_price, active, grs_sale_price, manufacturer_id, ref, product_type_code, product_type) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                    ]).then(() => {

                    }).catch(e => {
                        console.log('Error on insert itg_product \n' + JSON.stringify(e));
                    })
                }
            });


            this.http.get("../../assets/json/secteur.test.json").subscribe((data: Array<i_t_secteur>) => {
                let sql_insert: string = "insert into i_t_secteur (create_uid, name, write_uid, zone_id, seller_id, promoteur_id) values (?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    let params = [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].zone_id,
                        data[i].seller_id,
                        data[i].promoteur_id
                    ]
                    db.executeSql(sql_insert, params).then(() => {
                    }).catch(e => {
                        console.log(e.message)
                    })
                }
            });

            this.http.get("../../assets/json/source_approvisionnement.test.json").subscribe((data: Array<i_t_source_approvisionnement>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_source_approvisionnement", data[i]);
                }
            });

            this.http.get("../../assets/json/type_client.test.json").subscribe((data: Array<i_t_type_client>) => {
                let sql_insert: string = "insert into i_t_type_client (create_uid, name, write_uid, code) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].code
                    ]).then(() => { console.log('insert i_t_type_client with succes \n'); })
                        .catch(e => { console.log('Error on insert i_t_type_client \n' + JSON.stringify(e)); })
                }
            });

            this.http.get("../../assets/json/type_quartier.test.json").subscribe((data: Array<i_t_type_quartier>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_type_quartier", data[i]);
                }
            });

            this.http.get("../../assets/json/ville.test.json").subscribe((data: Array<i_t_ville>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_ville", data[i]);
                }
            });

            this.http.get("../../assets/json/zone.test.json").subscribe((data: Array<i_t_zone>) => {
                let sql_insert: string = "insert into i_t_zone (create_uid, name, write_uid, agence_id) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].agence_id
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/tournee.test.json").subscribe((data: Array<i_t_tournee>) => {
                let sql_insert: string = "insert into i_t_tournee (id, create_uid, name, write_uid, commercial_id, start_date, end_date, date, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/pos_initial.test.json").subscribe((data: Array<i_t_pos_initial>) => {
                let sql_insert: string = "insert into i_t_pos_initial (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
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
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_pos_initial \n' + JSON.stringify(e));
                        })
                }
            });


            this.http.get("../../assets/json/pos_additional.test.json").subscribe((data: Array<i_t_pos_additional>) => {
                let sql_insert: string = "insert into i_t_pos_additional (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
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
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_pos_additional \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/permanent_posm_res_partner_rel.test.json").subscribe((data: Array<permanent_posm_res_partner_rel>) => {
                let sql_insert: string = "insert into i_t_permanent_posm_res_partner_rel (partner_id, i_t_permanent_posm_id) values (?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].partner_id,
                        data[i].i_t_permanent_posm_id,
                    ]).then(() => {
                        console.log('insert permanent_posm_res_partner_rel with succes \n');
                    })
                        .catch(e => {
                            console.log('Error on insert permanent_posm_res_partner_rel \n' + JSON.stringify(e));
                        })
                }
            });





            this.http.get("../../assets/json/res_partner.test.json").subscribe((data: Array<res_partner>) => {
                let sql_insert: string = "insert into res_partner (id, canal_id, name , company_id , comment , website , color , active 	, street , supplier 	, city , display_name , zip ,title , country_id , commercial_company_name , parent_id , company_name , employee 	, ref , email , is_company 	, function , lang , fax , street2 , barcode , phone , daty, tz , write_uid , customer , create_uid , credit_limit , user_id , mobile , type , partner_share , vat , state_id , commercial_partner_id , date_localization, partner_latitude,partner_longitude, notify_email  , message_last_post  , opt_out 	, message_bounce ,signup_type , signup_expiration  , signup_token , team_id , calendar_last_notif_ack  , type_quartier_id , source_approvisionnement_id , cible_installation_presentoirs_id , numero_telephone2 , numero_telephone3 ,numero_telephone1 ,couverture_commerciale_id , classification2_id , nom_gerant , frequence_approvisionnement_id , enseigne_appartenance_id ,agence_id , activite_pos_id , fournisseur_principal_id , contrat_id , fournisseur_secondaire_id ,  nom_agent_commercial_id , cible_activation_id , state , statut_client_id , permanent_POSM5_id , point_de_vente 	, repere , emplacement_id , cooperation_itg_id ,  proximite_id , frequence_visite_id , permanent_POSM3_id , permanent_POSM1_id , adresse , preference_animateur_id , provider_latitude, zone_id , latitude  , commentaire , longitude , message_warning , permanent_POSM4_id , region_id , nom_pos ,   quartier ,  ville_id , type_client_id , utilisateur_associe_id , permanent_POSM2_id ,   secteur_id , provider_longitude,     code_client , activation_autorisee_id , is_today 	,         classification1_id ,     a_visiter_moved0 ,  visite ,    a_visite 	, a_visiter) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert res_partner \n' + JSON.stringify(e));
                        })
                }



                this.http.get("../../assets/json/stock_line.test.json").subscribe((data: Array<stock_line>) => {
                    let sql_insert: string = "insert into stock_line (id, create_uid, write_uid, placement, product_id, visit_sheet_id, available_stock, manufacturer_id, last_visit_stock) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert stock_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_manufacturer.test.json").subscribe((data: Array<itg_manufacturer>) => {
                    let sql_insert: string = "insert into itg_manufacturer (id, create_uid, name, write_uid, sequence) values (?, ?, ?, ?, ?)";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].sequence
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_manufacturer \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/price_line.test.json").subscribe((data: Array<price_line>) => {
                    let sql_insert: string = "insert into price_line (id, create_uid, name, write_uid, product_id, current_price, visit_sheet_id, manufacturer_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert price_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/visit_sheet.test.json").subscribe((data: Array<visit_sheet>) => {
                    let sql_insert: string = "insert into visit_sheet (id, create_uid, name, write_uid, page_number_total, show_btn_end_visit, visit_duration, partner_id, user_id, state, provider_longitude, begin_datetime, next_visit_goal, provider_latitude, end_datetime, hide_btn_next_next_page, tour_id, visit_duration_str, pos_initial, region_id, secteur_id, agence_id, zone_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert visit_sheet \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/pos_audit_criteria.test.json").subscribe((data: Array<pos_audit_criteria>) => {
                    let sql_insert: string = "insert into pos_audit_criteria (id, create_uid, name, write_uid, create_date, write_date, active) values (?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].active,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert pos_audit_criteria \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/pos_audit_answer.test.json").subscribe((data: Array<pos_audit_answer>) => {
                    let sql_insert: string = "insert into pos_audit_answer (id, create_uid, name, write_uid, create_date, write_date, criteria_id) values (?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].criteria_id,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert pos_audit_answer \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/pos_audit_line.test.json").subscribe((data: Array<pos_audit_line>) => {
                    let sql_insert: string = "insert into pos_audit_line (id, create_uid, name, write_uid, create_date, write_date, visit_begin_moved0, audit_criteria_id, note, visit_sheet_id, visit_end_moved0, visit_begin, visit_end) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert pos_audit_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/plv_line.test.json").subscribe((data: Array<plv_line>) => {
                    let sql_insert: string = "insert into plv_line (id, create_uid, product_id, visit_sheet_id, manufacturer_id, quantity, create_date, name, write_uid, write_date) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert plv_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_survey.test.json").subscribe((data: Array<itg_survey>) => {
                    let sql_insert: string = "insert into itg_survey (id, create_uid, name, write_uid, write_date, create_date, view_id, state, field_default_value) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_survey \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_survey_question.test.json").subscribe((data: Array<itg_survey_question>) => {
                    let sql_insert: string = "insert into itg_survey_question (id, create_uid, name, type, write_uid, write_date, create_date, page_id, mandatory, sequence, survey_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_survey_question \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_survey_label.test.json").subscribe((data: Array<itg_survey_label>) => {
                    let sql_insert: string = "insert into itg_survey_label (id, create_uid, name, quizz_mark, write_uid, write_date, create_date, question_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
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
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_survey_label \n' + JSON.stringify(e));
                            })
                    }
                });


            });

        })
    }
    insert_basic_data(nom_table: string, data: base_data) {
        let sql_insert: string = "insert into " + nom_table + " (create_uid, name, write_uid) values (?, ?, ?) ";
        return this.db.executeSql(sql_insert, [
            data.create_uid,
            data.name,
            data.write_uid,
        ])
            .catch(e => {
                console.log('Error on insert ' + nom_table + ' \n' + JSON.stringify(e));
            })
    }

    insert_res_data(sql: string): Promise<any> {
        console.log(sql);
        return this.db.executeSql(sql, [])
            .then(() => {

            }).
            catch(e => console.log("insert_res_data exception : " + e.message));
    }

    insert_data_for_sync(tablename: string, table_id: any, action_type: number) {
        let params = [tablename, action_type, 0];
        return this.db.executeSql("insert into data_for_sync(table_name,table_id,action_type,is_synced) values(?," + table_id + ",?,?)", params)
            .then(() => console.log("data inserted into data for sync 1161"))
            .catch(e => console.log("1162 : ", e.message));
    }

    update_res_data(sql: string): Promise<any> {
        return this.db.executeSql(sql, []).then(() => console.log('data updated')).catch(e => alert("update_res_data exception : " + e.message));
    }

    select_res_data(sql: string): Promise<any> {
        let data_return = [];
        return this.db.executeSql(sql, [])
            .then((data) => {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
                return data_return;
            }).catch(e => {
                console.log('Error on update res \n' + JSON.stringify(e));
            })
    }

    get_res_partner() {
        return this.init_database().then((db: SQLiteObject) => {
            let sql2 = "select res_partner.active, res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, i_t_ville.name as ville_id, res_partner.quartier, (select res_users.name from res_users where active = 1) as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state as state_id from res_partner left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id where i_t_secteur.seller_id = (select res_users.id from res_users where active = 1) or i_t_secteur.promoter_id = (select res_users.id from res_users where active = 1) order by res_partner.active ASC";
            let data_return = [];
            return db.executeSql(sql2, [])
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return
                    }
                }).catch(e => {
                    console.log('Error on select \n' + JSON.stringify(e));

                })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    }

    get_name_id_data(table: string): Promise<any> {
        let sql2 = "select " + table + " .id, " + table + ".name as name from " + table + " ;";
        let data_return = [];
        return this.db.executeSql(sql2, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on get_name_id_data \n' + JSON.stringify(e));
            })
    }

    
    get_name_id_fournisseur(event_from_view: string): Promise<any> {
        let sql2 = 'select itg_partner_wholesaler.id, ("[" || itg_partner_wholesaler.name || "]" || " " || itg_partner_wholesaler.nom_pos) as name from itg_partner_wholesaler ';
        let sql3 = 'select itg_partner_wholesaler.id,("[" || itg_partner_wholesaler.name || "]" || " " || itg_partner_wholesaler.nom_pos) as name from itg_partner_wholesaler where itg_partner_wholesaler.agence_id in ( select i_t_secteur.agence_id from i_t_secteur where i_t_secteur.promoter_id in (select res_users.id from res_users where res_users.active = 1) or i_t_secteur.seller_id in (select res_users.id from res_users where res_users.active = 1))';
        let sql_4 = 'select id, name from (select ( itg_partner_wholesaler.id) as id, ("[" || itg_partner_wholesaler.name || "] " || itg_partner_wholesaler.nom_pos) as name from itg_partner_wholesaler) as t1 where t1.name like "%' + event_from_view + '%" ';
        console.log(sql_4);
        let data_return = [];
        return this.db.executeSql(sql_4, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on get_name_id_data \n' + JSON.stringify(e));
            })
    }


    select_basic_data(nom_table: string): Promise<any> {

        let sql_select: string = "select * from " + nom_table + " ";
        let data_return = [];
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;

        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }

    select_basic_data_2(nom_table: string): Promise<any> {

        let sql_select: string = "select id, name from " + nom_table + " ";
        let data_return = [];
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;

        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }

    get_kronos_back_data(): Promise<any> {

        let sql_select: string = "select tablename,id,user_id from kronos_back_data ";
        let data_return = [];
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }

    select_max_basic_data(nom_table: string): Promise<any> {
        let sql_select: string = "select MAX(id) + 1 as max from " + nom_table + " ";
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                return data.rows.item(0);
            }
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        });
    }

    /*b64trimmed(buf) {
        return buf.toString('base64').replace(/=*$/, '').replace('+', '.');
    }

    b64decode(str) {
        // . in Base64?
        str = str.replace('.', '+');
        if (str.length % 4) {
            str += '='.repeat(4 - str.length % 4);
        }
        return new Buffer(str, 'base64');
    }

    verify_hash(password, stored_hash) {
        var scheme = stored_hash.split('$')[1];

        var rounds = stored_hash.split('$')[2];
        var salt = stored_hash.split('$')[3];

        // FIXME: Maybe throw an exception
        if (scheme !== 'pbkdf2-sha512') {
            return false;
        }

        var h = this.get_hash(password, this.b64decode(salt), rounds);
        console.log("hashage anle omenle client : " + h)
        return h === stored_hash;
    }
    get_hash(password, salt, rounds) {

        // FIXME: KeyLenBytes is hardcoded
        var h = this.b64trimmed(pbkdf2_sha512(password, salt, rounds, 64));
        var joined_hash = ['', 'pbkdf2-sha512', rounds, this.b64trimmed(salt), h].join('$');

        return joined_hash;
    } */
    //5.189.167.183:3010
    checkLogin(log: string, pass: string): Promise<any> {
        let sql_select: string = "select * from res_users  where login = ? ";
        return this.db.executeSql(sql_select, [log]).then((data) => {
            if (data.rows.length > 0) {
                if (pass == data.rows.item(0).password) {
                    return this.db.executeSql("update res_users set active = 1 where login = ? ", [log]).then(() => {
                        return 1;
                    }).catch(e => {
                        console.log('Error on update \n' + stringify(e));
                    })
                }
                else return 0;
            }
            else return -1;
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })

    }

    getDatetimeNow() {
        var today = new Date();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var year = today.getFullYear();
        var month = (today.getMonth() + 1);
        var day = today.getDate();
        if (month < 10) {
            var smonth = "0" + String(month);
        } else
            var smonth = String(month);
        if (day < 10) {
            var sday = "0" + String(day);
        } else
            var sday = String(day);

        var date = year + '-' + smonth + '-' + sday;
        return date + ' ' + time;
    }

    insert_res_users(data: any) {
        console.log("insert_res_users ==> " + JSON.stringify(data));
        let sql_insert: string = "insert into res_users (id, login, x_odoo_id, name, password_crypt, password) values (?, ?, ?, ?, ?, ?) ";
        return this.aes256.encrypt("imp_tob_mg", null, data.password_copy).then(new_pass => {
            return this.db.executeSql(sql_insert, [
                data.id,
                data.login,
                data.x_odoo_id,
                data.name,
                new_pass,
                data.password_copy
            ]).then(() => {
                console.log("tafa le insert ")
            })
                .catch(e => {
                    console.log('Error on insert res_user \n' + JSON.stringify(e));
                    this.update_res_user(data);
                })
        })
        
        //insert into res_users (active, login, password, company_id, partner_id, share, write_uid, create_uid, action_id, name, password_crypt, alias_id, sale_team_id, target_sales_done, target_sales_won) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    }

    update_coordinates_res_partner(location: any, res_partner_id: number) {
        let query = " update res_partner set date_localization = ? ,provider_latitude = ? , provider_longitude = ? where id = ? ";
        return this.db.executeSql(query, [this.getDatetimeNow(), location.latitude, location.longitude, res_partner_id])
            .then(() => {
                let sql: string = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                let params: Array<any> = ["res.partner", res_partner_id, 0, 0];
                this.db.executeSql(sql, params)
                    .then(() => console.log("res_partner inserted into data_for_sync"))
                    .catch(e => console.log("data for sync error res_partner update coord : ", e.message));
            })
            .catch((e) => console.log(e.message))
    }


    verify_login(user: any) {
        let query = "select * from res_users where id = ? ";
        return this.db.executeSql(query, [user.id])
            .then((data: any) => {
                if (data.rows.length > 0) {
                    this.update_res_user(user).then(() => {
                        Counter.disableLoading();
                    }).catch(e => {
                        Counter.disableLoading();
                        console.log("verify login error : " + e.message);
                    })
                }
                else {
                    this.insert_res_users(user).then(() => {
                        Counter.disableLoading();
                    })
                        .catch(e => {
                            Counter.disableLoading();
                            console.log("verify login error : " + e.message);
                        })
                }
            }).catch(e => {
                Counter.disableLoading();
                console.log("select * from res_users where id ==> " + e.message)
            });
    }
    update_res_user(user: any) {
        let query = " update res_users  set login = ? , password_crypt = ? , password = ? where id = ? ";
        return this.db.executeSql(query, [user.login, user.password_crypt, user.password_copy, user.id])
            .then(() => console.log("data updated"))
            .catch(e => console.log(e.message));
    }


    select_data_with_table_name(nom_table: string): Promise<any> {
        let sql_select: string = "select id as value, name as display from " + nom_table + " ";
        let data_return = [];
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;
        }).catch(e => {
            console.log('Error on select_data_with_table_name \n' + JSON.stringify(e));
        })
    }

    select_data_res_users(nom_table: string): Promise<any> {
        let sql_select: string = "select id as value, login as display from " + nom_table + " ";
        let data_return = [];
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;
        }).catch(e => {
            console.log('Error on select_data_with_table_name \n' + JSON.stringify(e));
        })
    }


    checkPermissions() {
        this.androidPermissions
            .checkPermission(this.androidPermissions
                .PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then((result) => {
                console.log('Has permission?', result.hasPermission);
                this.hasWriteAccess = result.hasPermission;
            }, (err) => {
                this.androidPermissions
                    .requestPermission(this.androidPermissions
                        .PERMISSION.WRITE_EXTERNAL_STORAGE);
            });
        if (!this.hasWriteAccess) {
            this.androidPermissions
                .requestPermissions([this.androidPermissions
                    .PERMISSION.WRITE_EXTERNAL_STORAGE]);
        }
    }


    get_res_partner_data(id: number): Promise<any> {
        let sql_selec: string = "select( select group_concat(i_t_permanent_posm.id, '|') as cnc_posm from i_t_permanent_posm where i_t_permanent_posm.id in( select i_t_permanent_posm_res_partner_rel.i_t_permanent_posm_id from i_t_permanent_posm_res_partner_rel where i_t_permanent_posm_res_partner_rel.partner_id = ?) ) as cnc_posm_id,( select group_concat(i_t_permanent_posm.name, '|') as cnc_posm from i_t_permanent_posm where i_t_permanent_posm.id in ( select i_t_permanent_posm_res_partner_rel.i_t_permanent_posm_id from i_t_permanent_posm_res_partner_rel where i_t_permanent_posm_res_partner_rel.partner_id = ? ) ) as cnc_posm,( select group_concat(res_users.id, '|') from res_users where res_users.id in ( select res_users_res_partner_rel.res_users_id from res_users_res_partner_rel where res_users_res_partner_rel.partner_id = ? ) ) as cnc_usr_id,( select group_concat(res_users.name, '|') from res_users where res_users.id in ( select res_users_res_partner_rel.res_users_id from res_users_res_partner_rel where res_users_res_partner_rel.partner_id = ? ) ) as cnc_login, res_partner.photo_uri, res_partner.photo, res_partner.state as state_id, res_partner.name, i_t_region.name as region, i_t_agence.name as agence, i_t_zone.name as zone,( select res_users.name from res_users where active = 1 ) as name, i_t_secteur.name as secteur, res_partner.nom_pos, res_partner.nom_gerant, res_partner.adresse, res_partner.repere, res_partner.quartier, i_t_ville.name as ville, res_partner.active, res_partner.numero_telephone1, res_partner.numero_telephone2, res_partner.numero_telephone3, i_t_emplacement.name as emplacement, i_t_proximite.name as proximite, i_t_type_quartier.name as type_quartier, res_partner.provider_latitude, res_partner.provider_longitude, i_t_type_client.name as type_client, i_t_activite_pos.name as activite_pos, i_t_enseigne_appartenance.name as enseigne_appartenance, i_t_classification1.name as classification1, i_t_classification2.name as classification2, i_t_couverture_commerciale.name as couverture_commerciale, i_t_frequence_visite.name as frequence_visite, i_t_cible_activation.name as cible_activation, i_t_cible_installation_presentoirs.name as cible_installation_presentoirs, i_t_contrat.name as contrat, i_t_contrat.date_debut_contrat as date_debut_contrat, i_t_contrat.date_fin_contrat as date_fin_contrat, i_t_cooperation_itg.name as cooperation_itg, i_t_activation_autorisee.name as activation_autorisee, i_t_preference_animateur.name as preference_animateur, i_t_canal.name as canal_id, i_t_frequence_approvisionnement.name as frequence_approvisionnement, z.name as source_approvisionnement, x.name as fournisseur_principale, y.name as fournisseur_secondaire, (\"[\" || whole1.name || \"] \" || whole1.nom_pos) as new_source_approvisionnement , (\"[\" || whole2.name || \"] \" || whole2.nom_pos) as new_fournisseur_principal , (\"[\" || whole3.name || \"] \" || whole3.nom_pos) as new_fournisseur_secondaire, res_partner.commentaire from res_partner left join itg_partner_wholesaler as whole1 on whole1.id = res_partner.new_source_approvisionnement_id left join itg_partner_wholesaler as whole2 on whole2.id = res_partner.new_fournisseur_principal_id left join itg_partner_wholesaler as whole3 on whole3.id = res_partner.new_fournisseur_secondaire_id left join i_t_cible_activation on res_partner.cible_activation_id = i_t_cible_activation.id left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_emplacement on res_partner.emplacement_id = i_t_emplacement.id left join i_t_proximite on res_partner.proximite_id = i_t_proximite.id left join i_t_type_quartier on res_partner.type_quartier_id = i_t_type_quartier.id left join i_t_type_client on res_partner.type_client_id = i_t_type_client.id left join i_t_activite_pos on res_partner.activite_pos_id = i_t_activite_pos.id left join i_t_enseigne_appartenance on res_partner.enseigne_appartenance_id = i_t_enseigne_appartenance.id left join i_t_classification1 on res_partner.classification1_id = i_t_classification1.id left join i_t_classification2 on res_partner.classification2_id = i_t_classification2.id left join i_t_couverture_commerciale on res_partner.couverture_commerciale_id = i_t_couverture_commerciale.id left join i_t_frequence_visite on res_partner.frequence_visite_id = i_t_frequence_visite.id left join i_t_cible_installation_presentoirs on res_partner.cible_installation_presentoirs_id = i_t_cible_installation_presentoirs.id left join i_t_contrat on res_partner.contrat_id = i_t_contrat.id left join i_t_cooperation_itg on res_partner.cooperation_itg_id = i_t_cooperation_itg.id left join i_t_activation_autorisee on res_partner.activation_autorisee_id = i_t_activation_autorisee.id left join i_t_preference_animateur on res_partner.preference_animateur_id = i_t_preference_animateur.id left join i_t_frequence_approvisionnement on res_partner.frequence_approvisionnement_id = i_t_frequence_approvisionnement.id left join i_t_fournisseur_principale on res_partner.fournisseur_principal_id = i_t_fournisseur_principale.id left join i_t_fournisseur_secondaire on res_partner.fournisseur_secondaire_id = i_t_fournisseur_secondaire.id left join i_t_canal on res_partner.canal_id = i_t_canal.id left join res_partner as x on res_partner.fournisseur_principal_id = x.id left join res_partner as y on res_partner.fournisseur_secondaire_id = y.id left join res_partner as z on res_partner.source_approvisionnement_id = z.id where res_partner.id = ? "
        let data_return: any;
        return this.db.executeSql(sql_selec, [id, id, id, id, id]).then((data) => {
            if (data.rows.length > 0) {

                if (data.rows.item(0).photo && data.rows.item(0).photo != "NULL") {
                    if (!this.hasWriteAccess) {
                        this.checkPermissions();
                    }
                    let options: Base64ToGalleryOptions = {
                        prefix: '',
                        mediaScanner: true
                    };
                    return this.b64tg.base64ToGallery(data.rows.item(0).photo, options).then(res => {
                        console.log("2424 => ", res);
                        data.rows.item(0).photo_uri = "http://localhost/_app_file_" + res;
                        data_return = data.rows.item(0);
                        console.log('data : \n' + JSON.stringify(data_return))
                        return data_return;
                    }).catch(e => {
                        console.log("2427 =>", e)
                    });
                }

                else {
                    return data_return = data.rows.item(0);
                }

            }
            else {
                console.log("5");
            }
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }

    get_all_tournee(state: string): Promise<any> {
        let sql_select: string = "select * from i_t_tournee where state != ? ";
        let data_return = [];
        return this.db.executeSql(sql_select, [state]).then((data) => {

            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
                return data_return;
            }
            else {
                console.log("5");
            }
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }

    get_res_partner_data_for_visite(): Promise<any> {
        let sql_select: string = "select res_partner.id, res_partner.name, res_partner.region_id, res_partner.secteur_id, res_partner.agence_id, res_partner.zone_id from res_partner";
        let data_return = [];
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
                return data_return;
            }
            else {
                console.log("5");
            }
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }


    select_basic_data_with_id(nom_table: string, id: number): Promise<any> {
        let sql_select: string = "select * from " + nom_table + " where id = ?";
        return this.db.executeSql(sql_select, [id]).then((data) => {
            if (data.rows.length > 0) {
                return data.rows.item(0);
            }
        }).catch(e => {
            console.log('Error on select \n' + JSON.stringify(e));
        })
    }

    update_status_res_partner(id: number, status: number): Promise<any> {
        let sql_select: string = "update res_partner set active = ? where id = ?";
        return this.db.executeSql(sql_select, [status, id]).then((data) => {
            let data_return: any;
            if (data.rows.length > 0) {
                data_return = data.rows.item(0);

                let sql: string = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                let params: Array<any> = ["res.partner", id, 0, 0];
                this.db.executeSql(sql, params)
                    .then(() => console.log("res_partner active data for sync "))
                    .catch(e => console.log("error data for sync res_partner active : ", e.message));
            }
            return data_return;
        }).catch(e => {
            console.log('Error on update \n' + JSON.stringify(e));
        })
    }

    //TOURNEES

    get_tournee_by_user(table: string, tour_id: number): Promise<any> {

        let query = "";

        if (table == "i_t_pos_additional") {
            query = "select IFNULL(visit_sheet.pos_additional_line_id,-1) as pos_additional_line_id, " + table + ".id as " + table + "_id" + ", " + table + ".nom_pos, " + table + ".quartier, res_partner.id as res_partner_id, res_partner.name as res_partner_name, " + table + ".visite, " + table + ".sequence , i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date,res_users.name as username from " + table + " left join visit_sheet on i_t_pos_additional.id = visit_sheet.pos_additional_line_id left join res_partner on " + table + ".partner_id = res_partner.id left join i_t_tournee on " + table + ".tour_id = i_t_tournee.id left join res_users on i_t_tournee.commercial_id = res_users.id where i_t_tournee.id = " + tour_id;
        }
        else {
            query = "select " + table + ".id as " + table + "_id" + ", " + table + ".nom_pos, " + table + ".quartier, res_partner.id as res_partner_id, res_partner.name as res_partner_name, " + table + ".visite, " + table + ".sequence , i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date,res_users.name as username from " + table + " left join res_partner on " + table + ".partner_id = res_partner.id left join i_t_tournee on " + table + ".tour_id = i_t_tournee.id left join res_users on i_t_tournee.commercial_id = res_users.id where i_t_tournee.id = " + tour_id;
        }
        console.log(query);
        let data_return = [];
        return this.db.executeSql(query, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
                console.log("data return " + JSON.stringify(data_return));
            })
            .catch(e => {
                console.log('Error on get_tournee_by_user \n' + JSON.stringify(e));
            })
    }

    update_tournee_by_id(id: number, status: string) {
        let query = "update i_t_tournee set state = ? where id = ?";
        return this.db.executeSql(query, [status, id]).then(data => {
            if (data) {
                if (status == "demarre" || status == "cloture") {
                    let sql: string = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                    let params: Array<any> = ["i.t.tournee", id, 0, 0];
                    this.db.executeSql(sql, params)
                        .then(() => console.log("tournee affected to data_for_sync"))
                        .catch(e => console.log("tournee data for sync : ", e.message));
                }
            }
        }).catch(e => {
            console.log('Error on update \n' + JSON.stringify(e));
        })
    }

    update_visite_res_patrner_by_id(id: number, etat: string) {
        let query = "update res_partner set visite = ? where id = ?";
        let data_return: any;
        return this.db.executeSql(query, [etat, id]).then(data => {
            if (data.rows.length > 0) {
                data_return = data.rows.item(0);
                let sql: string = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                let params: Array<any> = ["res.partner", id, 0, 0];
                this.db.executeSql(sql, params)
                    .then(() => console.log("res partner data for sync success"))
                    .catch(e => console.log("1562 error data for sync res_partner ", e.message));
            }
            return data_return;
        }).catch(e => {
            console.log('Error on update \n' + JSON.stringify(e));
        })
    }

    get_active_user(): Promise<any> {
        let sql_select: string = "select res_users.login , res_users.name, res_users.id, res_users.password from res_users where res_users.active = 1";
        return this.db.executeSql(sql_select, [])
            .then(data => {
                console.log(data);
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            })
            .catch(e => {
                console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
            })
    }

    get_all_fiche_visite() {
        //let sql_select : string = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet" ;
        //let sql: string = "select distinct res_users.name as user_id, visit_sheet.nom_pos, visit_sheet.quartier, visit_sheet.state, tour_id, visit_sheet.id as visit_sheet_id, res_partner.nom_gerant, ,res_partner.name as partner_id , res_partner.repere, res_partner.ville ,res_partner.numero_telephone1, res_partner.adresse, visit_sheet.partner_id as res_partner_id,begin_datetime as visit_sheet_begin_date_time,end_datetime as visit_sheet_end_date_time,start_date as tournee_begin,end_date as tournee_end,visit_sheet.state,res_partner.provider_longitude,res_partner.provider_latitude, visit_sheet.nom_pos, visit_sheet.quartier from visit_sheet join res_users on res_users.id = visit_sheet.user_id join i_t_tournee on i_t_tournee.id = visit_sheet.tour_id join res_partner on visit_sheet.partner_id = res_partner.id  group by visit_sheet.partner_id, visit_sheet.tour_id";
        let sql: string = "select res_users.name as user_id, visit_sheet.x_offline_id as visit_sheet_id, visit_sheet.nom_pos, visit_sheet.quartier, i_t_tournee.state as tour_status, visit_sheet.state, tour_id, res_partner.nom_gerant,res_partner.name as partner_id , res_partner.repere, i_t_ville.name as ville,res_partner.numero_telephone1, res_partner.adresse, visit_sheet.partner_id as res_partner_id,begin_datetime as visit_sheet_begin_date_time,end_datetime as visit_sheet_end_date_time,start_date as tournee_begin,end_date as tournee_end,visit_sheet.state,res_partner.provider_longitude,res_partner.provider_latitude, visit_sheet.nom_pos, visit_sheet.quartier from visit_sheet join res_users on res_users.id = visit_sheet.user_id join i_t_tournee on i_t_tournee.id = visit_sheet.tour_id join res_partner on visit_sheet.partner_id = res_partner.id join i_t_ville on res_partner.ville_id = i_t_ville.id group by visit_sheet.partner_id, visit_sheet.tour_id"
        let data_return = [];
        return this.db.executeSql(sql, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {

                        if (data.rows.item(i).state == "closed") data.rows.item(i).state = 'Clôturée';
                        if (data.rows.item(i).state == "open") data.rows.item(i).state = 'Ouverte';
                        if (data.rows.item(i).state == 'new') data.rows.item(i).state = 'Nouvelle';

                        data_return.push(data.rows.item(i));

                        if (data.rows.item(i).visit_sheet_begin_date_time != null && data.rows.item(i).visit_sheet_end_date_time != null) {
                            this.db.executeSql("update visit_sheet set state = 'closed' where id = ? ", [data.rows.item(i).visit_sheet_id]).then(() => {
                                console.log("closed")
                            });
                        }

                        if (data.rows.item(i).visit_sheet_begin_date_time != null && data.rows.item(i).visit_sheet_end_date_time == null) {
                            this.db.executeSql("update visit_sheet set state = 'open' where id = ? ", [data.rows.item(i).visit_sheet_id]).then(() => {
                                console.log("open")
                            });
                        }

                        if (data.rows.item(i).visit_sheet_begin_date_time == null && data.rows.item(i).visit_sheet_end_date_time == null) {
                            this.db.executeSql("update visit_sheet set state = 'new' where id = ? ", [data.rows.item(i).visit_sheet_id]).then(() => {
                                console.log("new")
                            });
                        }

                    }
                    console.log("visit rehetra" + JSON.stringify(data_return));
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
            })
    }

    //update itpos additional sy initial 

    update_pos(visit_sheet_id: number, etat: string): Promise<any> {

        return this.db.executeSql("select pos_initial_line_id, pos_additional_line_id from visit_sheet where id = ? ", [visit_sheet_id])
            .then((data) => {
                if (data.rows.length > 0) {
                    let id: number = 0;
                    let query = "", tablename = "";
                    if (data.rows.item(0).pos_initial_line_id) {
                        id = data.rows.item(0).pos_initial_line_id;
                        query = "update i_t_pos_initial set visite = 'oui' where id = " + data.rows.item(0).pos_initial_line_id;
                        tablename = "i.t.pos.initial";
                    }
                    if (data.rows.item(0).pos_additional_line_id) {
                        id = data.rows.item(0).pos_additional_line_id;
                        query = "update i_t_pos_additional set visite = 'oui' where id = " + data.rows.item(0).pos_additional_line_id;
                        tablename = "i.t.pos.additional";
                    }
                    this.db.executeSql(query, []).then((data) => {
                        console.log("pos_id", id)
                        let sql = "insert into data_for_sync (table_name, table_id, is_synced,action_type) values (?, ?, ?,?)";
                        let params = [tablename, id, 0, 0];
                        console.log("params update_pos : ", params);
                        return this.db.executeSql(sql, params).then(() => {
                            console.log("tafa anaty data_for_sync");
                        }).catch(e => console.log("error on inserting into data for sync " + tablename, e.message));
                    });

                    this.check_if_synced("visit.sheet", visit_sheet_id);

                    /*let sql_pupd = "select data_for_sync.is_synced from data_for_sync where data_for_sync.table_name = 'visit.sheet' and data_for_sync.table_id = " + visit_sheet_id;
                    console.log("1727 => ", sql_pupd);
                    return this.db.executeSql(sql_pupd, []).then(result => {
                        console.log("1729 => ", JSON.stringify(result.rows.item(0)));
                        if (result.rows.length > 0) {
                            console.log("1731 => ", JSON.stringify(result.rows.item(0)));
                            if (result.rows.item(0).is_synced == 1) {
                                return this.db.executeSql("update data_for_sync set is_synced = 0 where table_name = 'visit.sheet' and table_id = ?", [visit_sheet_id]).then(res => {
                                    console.log("if resync ok", res);
                                }).catch(e => console.log("1735 => ", e))
                            }
                        }
                        else {
                            return this.db.executeSql("insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)", ["visit.sheet", visit_sheet_id, 0, 0]).then(res => {
                                console.log("else resync ok", res);
                            }).catch(e => console.log("1742 => ", e));
                        }
                    }).catch(e => {
                        console.log("1740 => ", e)
                    })*/
                }
            }).catch(e => console.log("erreur update_pos : " + e.message))

    }

    set_visit_duration_end_datetime(visit_sheet_id: number, duration: any, end_datetime: any, partner_id: number): Promise<any> {
        let query = " update visit_sheet set visit_duration = ? , end_datetime = datetime('now','localtime') , state = ? , survey_id = (select itg_survey_res_partner_rel.itg_survey_id from itg_survey_res_partner_rel where res_partner_id = ? order by itg_survey_res_partner_rel.id desc limit 1) where id = ? ";
        let params = [duration, "closed", partner_id, visit_sheet_id];
        return this.db.executeSql(query, params)
            .then(() => {
                /*let sql: string = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                let params: Array<any> = ["visit.sheet", visit_sheet_id, 0, 0];
                this.db.executeSql(sql, params)
                    .then(() => console.log("visit sheet data for sync success"))
                    .catch(e => console.log("1649 => ", e.message));*/
            })
            .catch(e => console.log(e.message));
    }

    get_visit_begin_datetime(id: number) {
        let query = " select begin_datetime from visit_sheet where id = ?";
        return this.db.executeSql(query, [id])
            .then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        return data.rows.item(i);
                    }
                }
            })
            .catch(e => console.log(e.message))
    }

    async start_visit(visit_sheet_id: number) {
        try {
            const db = await this.init_database();
            let query = " update visit_sheet set begin_datetime = datetime('now','localtime') , state ='open' where id = ? ";
            console.log(query);
            let params = [visit_sheet_id];
            console.log(params);
            db.executeSql(query, params)
                .then((response) => {
                    this.check_if_synced("visit.sheet", visit_sheet_id);
                    db.executeSql("select begin_datetime, state from visit_sheet where id = ?", [visit_sheet_id])
                        .then((data) => {
                            for (var i = 0; i < data.rows.length; i++) {
                                console.log(data.rows.item(i));
                            }
                        })
                        .catch(e => console.log(e.message));
                })
                .catch(e_1 => console.log(e_1.message));
        }
        catch (e_2) {
            return console.log(e_2.message);
        }
    }

    get_commercial_ids_by_partner_id(partner_id: number): Promise<any> {

        let query = "select group_concat(res_users_id) as commercial_ids from res_users_res_partner_rel where partner_id = ? group by partner_id";
        return this.db.executeSql(query, [partner_id])
            .then((data: any) => {
                if (data.rows.length > 0) {
                    console.log("tato amle get_commercial_ids : ", data.rows.item(0))
                    return data.rows.item(0);
                }
            }).catch(e => console.log("1716 : ", e.message));
    }

    async get_table(): Promise<any> {
        var is_executed = false;
        let data_return = []
        return await this.db.executeSql("select data_for_sync.id as data_for_sync_id , REPLACE(table_name,'.','_') as table_name, is_synced, table_id, action_type, id from data_for_sync where table_name != 'res.partner' and is_synced = 0 group by table_name, table_id order by table_name desc", [])
            .then((data: any): any => {

                for (var i = 0; i < data.rows.length; i++) {
                    let requete = "";

                    let data_for_sync_id = data.rows.item(i).data_for_sync_id;

                    if (data.rows.item(i).table_name == 'res_partner') {
                        if (is_executed == false) {
                            requete = "select data_for_sync.id as data_for_sync_id, res_partner.*,(select group_concat(res_users_id) from res_users_res_partner_rel where partner_id = " + data.rows.item(i).table_id + " group by partner_id) as agent_commercial_ids, (select group_concat(i_t_permanent_posm_id) from i_t_permanent_posm_res_partner_rel where partner_id = " + data.rows.item(i).table_id + " group by partner_id)  as permanent_posm_ids, data_for_sync.table_name, data_for_sync.action_type from res_partner inner join data_for_sync on res_partner.id = data_for_sync.table_id where res_partner.id = " + data.rows.item(i).table_id + " and data_for_sync.is_synced = 0 limit 30";
                            is_executed = true;
                        }
                    }
                    else {
                        if (data.rows.item(i).table_name == 'visit_sheet') {
                            requete = "select " + data.rows.item(i).data_for_sync_id + " as data_for_sync_id, replace ('" + data.rows.item(i).table_name + "', '_', '.') as table_name, " + data.rows.item(i).table_name + ".* from " + data.rows.item(i).table_name + " where " + data.rows.item(i).table_name + ".id = " + data.rows.item(i).table_id + " and " + data.rows.item(i).table_name + ".state != 'new' ";
                        }
                        else {
                            requete = "select " + data.rows.item(i).data_for_sync_id + " as data_for_sync_id, replace ('" + data.rows.item(i).table_name + "', '_', '.') as table_name, " + data.rows.item(i).table_name + ".* from " + data.rows.item(i).table_name + " where " + data.rows.item(i).table_name + ".id = " + data.rows.item(i).table_id + " ";
                        }

                    }

                    data_for_sync_id = data.rows.item(i).data_for_sync_id;

                    this.db.executeSql(requete, [])
                        .then((data) => {

                            if (data.rows.length > 0) {
                                for (var i = 0; i < data.rows.length; i++) {
                                    data_return.push(data.rows.item(i));
                                }
                                return data_return;
                            }
                            else {
                                let q2 = "delete from data_for_sync where id = ? ";
                                console.log("delete from data_for_sync where id = " + data_for_sync_id);
                                this.db.executeSql(q2, [data_for_sync_id]).then(() => {
                                    console.log("deleted from data for sync ");
                                })
                            }
                        }).catch(e => {
                            console.log("error 1867 => ", e)
                        });
                }
                return data_return;
            }).catch(e => console.log("get_table dbm error : " + e.message))
    }

    get_all_table_for_sync(): Promise<any> {
        let sql_select: string = "select id,REPLACE(table_name,'.','_') as table_name, is_synced, table_id,action_type from data_for_sync where is_synced = 0";
        let data_return = [];
        return this.db.executeSql(sql_select, [])
            .then(data_step_1 => {
                if (data_step_1.rows.length > 0) {
                    for (var i = 0; i < data_step_1.rows.length; i++) {
                        data_return.push(data_step_1.rows.item(i));
                    }
                    return data_return;
                }
            })
            .catch(e => {
                console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
            });
    }

    sync_all(): Promise<any> {
        return this.db.executeSql("update data_for_sync set is_synced = 0", []).then(() => {
            console.log("vita ny sync all");
        });
    }

    get_all_data_for_sync(table_data: data_for_sync) {
        let data_return = [];
        let sql = "select " + table_data.table_name + ".*, data_for_sync.x_odoo_id,REPLACE(table_name,'.','_') as tablename  from data_for_sync inner join " + table_data.table_name + " on data_for_sync.table_id = " + table_data.table_name + ".id ";
        return this.db.executeSql(sql, [])
            .then(data_step_1 => {
                if (data_step_1.rows.length > 0) {
                    for (var i = 0; i < data_step_1.rows.length; i++) {
                        data_return.push(data_step_1.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
            });
    }

    get_audit_data_p4(visit_sheet_id: number, partner_id: number): Promise<any> {
        let sql_select = "select null as visit_end, null as visit_begin, null as last_visit_response, pos_audit_criteria.id, pos_audit_criteria.name, group_concat(pos_audit_answer.id, '|') as answer_id, group_concat(pos_audit_answer.name, '|') as answer_name  from pos_audit_criteria  inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.id"
        //let sql_select: string = "select distinct pos_audit_criteria.id, pos_audit_criteria.name, group_concat(pos_audit_answer.id,'|') as answer_id, pos_audit_criteria.active, group_concat(pos_audit_answer.name,'|') as answer_name,(select name from pos_audit_answer where id = visit_begin)as visit_begin, (select name from pos_audit_answer where id = visit_end) as visit_end , (select pos_audit_answer.name from pos_audit_line inner join pos_audit_answer on pos_audit_line.visit_end = pos_audit_answer.id where pos_audit_line.visit_sheet_id = (select visit_sheet.id from visit_sheet where visit_sheet.id < '" + visit_sheet_id + "' order by id desc limit 1)) as last_response from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id inner join pos_audit_line on pos_audit_line.audit_criteria_id = pos_audit_criteria.id where visit_sheet_id = '" + visit_sheet_id + "' group by pos_audit_criteria.id order by pos_audit_criteria.id";
        console.log("1871 => ", sql_select)
        //let sql_select = "select pos_audit_criteria.id, pos_audit_criteria.active, pos_audit_criteria.name , group_concat(pos_audit_answer.name, '|') as answer_name, group_concat(pos_audit_answer.id, '|') as answer_id,(select pos_audit_answer.name from pos_audit_line left join pos_audit_criteria on pos_audit_line.audit_criteria_id = pos_audit_criteria.id left join pos_audit_answer on pos_audit_line.visit_end = pos_audit_answer.id left join visit_sheet on pos_audit_line.visit_sheet_id = visit_sheet.id where visit_sheet.id = (select visit_sheet.id from visit_sheet where visit_sheet.id < 2651 and visit_sheet.partner_id = 43134 limit 1)) as last_response, (select pos_audit_answer.name from pos_audit_line left join pos_audit_criteria on pos_audit_line.audit_criteria_id = pos_audit_criteria.id left join pos_audit_answer on pos_audit_line.visit_end = pos_audit_answer.id left join visit_sheet on pos_audit_line.visit_sheet_id = visit_sheet.id where visit_sheet.id = 2651 ) as visit_end, (select pos_audit_answer.name from pos_audit_line left join pos_audit_criteria on pos_audit_line.audit_criteria_id = pos_audit_criteria.id left join pos_audit_answer on pos_audit_line.visit_begin = pos_audit_answer.id left join visit_sheet on pos_audit_line.visit_sheet_id = visit_sheet.id where visit_sheet.id = 2651 ) as visit_begin from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.id"
        let data_return = [];
        return this.db.executeSql(sql_select, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            })
            .catch(e => {
                console.log('Error on select get_audit_data_p4 \n' + JSON.stringify(e));
            })
        //select pos_audit_criteria.id, pos_audit_criteria.name, GROUP_CONCAT(pos_audit_answer.id, '|') as answer_id, GROUP_CONCAT(pos_audit_answer.name, '|') as answer_name from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.name order by pos_audit_criteria.id
    }

    set_response(visit_sheet_id: number, data: any) {
        let params = [];
        let i = 0, size = 0;
        if (data.length > 0) {
            size = data.length;
        }
        for (i = 0; i < size; i++) {
            //let query = "update pos_audit_line  " ;
            let query = " insert into pos_audit_line";
            if (data[i].response_begin && !data[i].response_end) {
                //query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                query += "(visit_begin,visit_sheet_id) values((select id from pos_audit_answer where criteria_id = ? and name = ? ),?)";
                params = [data[i].id, data[i].response_begin, visit_sheet_id];
            }
            else if (data[i].response_end && !data[i].response_begin) {
                //query += " set visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                query += "(visit_end,criteria_id,visit_sheet_id) values((select id from pos_audit_answer where criteria_id = ? and name = ? ),?)"
                params = [data[i].id, data[i].response_end, visit_sheet_id];
            }
            else if (data[i].response_end && data[i].response_begin) {
                //query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                query += "(visit_begin,visit_end,criteria_id,visit_sheet_id) values((select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? ),?)"
                params = [data[i].id, data[i].response_begin, data[i].id, data[i].response_end, visit_sheet_id];
            }
            else {
                continue;
            }

            this.db.executeSql(query, params)
                .then(() => {
                    console.log("mety le insert anle p4")
                })
                .catch(e => {
                    console.log(e.message)
                })

        }
    }

    save_next_visit_goal(visit_sheet_id: number, goal: string) {
        let query: string = "update visit_sheet set next_visit_goal = ? where x_offline_id = ? ";
        return this.db.executeSql(query, [goal, visit_sheet_id]).then((data) => {
            /*let query = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
            let params = ["visit.sheet", visit_sheet_id, 0, 0];
            this.db.executeSql(query, params)
                .then(() => console.log("visit_sheet inserted in data for sync"))
                .catch(e => console.log("error on inserting into data for sync visit_sheet : ", e.message));*/

        }).catch(e => console.log(e.message));
    }

    get_next_visit_goal(visit_sheet_id: number) {
        let query: string = "select next_visit_goal from visit_sheet where x_offline_id = ? ";
        return this.db.executeSql(query, [visit_sheet_id])
            .then((value) => {
                return value.rows.item(0);
            })
            .catch(e => console.log(e.message));
    }



    update_current_price(rod_current_price: number, price: number, partner_id: number, visit_sheet_id: number, id_produit: number) {
        /* let query: string = "update price_line set current_price = " + price + " where price_line.id in (select price_line.id from price_line inner join  visit_sheet on price_line.visit_sheet_id = visit_sheet.id where visit_sheet.partner_id = " + partner_id + " and price_line.visit_sheet_id = " + visit_sheet + " and price_line.product_id = " + id_produit + ")";
         return this.db.executeSql(query, []).then(() => {
             
         }).catch(e => {
             console.log('Error on update \n' + JSON.stringify(e));
         })*/

        let query: string = "select price_line.id from price_line inner join  visit_sheet on price_line.visit_sheet_id = visit_sheet.id where visit_sheet.partner_id = " + partner_id + " and price_line.visit_sheet_offline_id = " + visit_sheet_id + " and price_line.product_id = " + id_produit;
        console.log("1945 => ", query)
        return this.db.executeSql(query, [])
            .then((data) => {
                if (data.rows.length > 0) {
                    query = "update price_line set current_price = " + price + " , rod_current_price = " + rod_current_price + " where id = ? ";
                    return this.db.executeSql(query, [data.rows.item(0).id])
                        .then(() => {
                            console.log("data current_price : ", data);
                            query = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";

                            let params = ["price.line", data.rows.item(0).id, 0, 0];
                            console.log("params price_line data for sync : ", params);

                            return this.db.executeSql(query, params)
                                .then(() => console.log("data for sync net price_line "));
                        }).catch(e => console.log("error on updating price_line : ", e.message));
                }
            }).catch(e => console.log("error on getting price_line_id : ", e.message))


    }

    update_get_data_p2(available_stock: number, placement: number, product_id: number, visit_sheet_id: number): Promise<any> {
        const params = [product_id, visit_sheet_id];
        let query: string = "UPDATE stock_line set available_stock = " + available_stock + ", placement = " + placement + " WHERE product_id= " + product_id + " AND visit_sheet_offline_id=" + visit_sheet_id + "";
        console.log("update_get_data_p2 : ", query)
        return this.db.executeSql(query, []).then(() => {
            console.log("product_id : ", product_id);
            console.log("visit_sheet_id : ", visit_sheet_id);
            return this.db.executeSql("select id from stock_line where product_id = ? and visit_sheet_id = ?  ", params)
                .then((data) => {
                    if (data.rows.length > 0) {
                        console.log("stock.line ", data.rows.item(0));
                        let param2 = ["stock.line", data.rows.item(0).id, 0, 0];
                        console.log("param2 : ", param2);

                        return this.db.executeSql("insert into data_for_sync(table_name,table_id,is_synced,action_type) values (?,?,?,?)", param2)
                            .then(() => console.log(" stock_line tafiditra anaty data for sync"))
                            .catch(e => console.log("stock line data for sync error : ", e.message));
                    }
                }).catch(e => console.log("error on getting id of stock_line : ", e.message));
        }).catch(e => {
            console.log('Error on update \n' + JSON.stringify(e));
        });
    }

    insert_stock_line(data: any) {
        try {
            /*return this.db.executeSql("insert into data_for_sync(table_name,is_synced,table_id,action_type) values(?,?,?,?)", ["visit.sheet", 0, data.visit_sheet_id, 1])
                .then(() => {*/
                    let mg = "select id, manufacturer_id from itg_product where product_type = 1 " ;
                    let bf = "select itg_product.id, itg_product.manufacturer_id from itg_product inner join itg_manufacturer on itg_manufacturer.id = itg_product.manufacturer_id inner join itg_product_type on itg_product.product_type = itg_product_type.id where itg_product_type.code = 'for_sale' ";
            this.db.executeSql(bf, [])
                .then(products => {
                    if (products.rows.length > 0) {
                        for (let i = 0; i < products.rows.length; i++) {
                            let query = "insert into stock_line(create_uid,placement,product_id,write_uid,visit_sheet_id,available_stock,manufacturer_id,last_visit_stock, visit_sheet_offline_id) values(" + data.create_uid + ",0," + products.rows.item(i).id + "," + data.write_uid + "," + data.visit_sheet_id + ",0," + products.rows.item(i).manufacturer_id + ",(select last_visit_stock from stock_line where product_id = " + products.rows.item(i).id + " and visit_sheet_id = " + data.visit_sheet_id + " ), "+ data.visit_sheet_id +");";
                            this.db.executeSql(query, [])
                                .then((data) => {
                                    let query = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                                    let params = ["stock.line", data.insertId, 0, 1];
                                    this.db.executeSql(query, params)
                                        .then(() => console.log("stock_line inserted in data for sync"))
                                        .catch(e => console.log("error on inserting into data for sync stock_line : ", e.message));
                                })
                                .catch(e => console.log(e.message));
                        }
                    }
                }).catch(e => console.log(e.message))
                .then(() => {
                    //insert plv_line : page 5 
                    let bf_plv = "select itg_product.id, itg_product.manufacturer_id from itg_product  inner join itg_product_type on itg_product.product_type = itg_product_type.id where itg_product_type.code = 'plv' "
                    let mg_plv = "select id, manufacturer_id from itg_product where product_type != 1"
                    return this.db.executeSql(bf_plv, [])
                        .then((products) => {
                            for (let i = 0; i < products.rows.length; i++) {
                                let params = [data.visit_sheet_id, data.create_uid, products.rows.item(i).id, data.visit_sheet_id, null, null, data.write_uid];
                                console.log("params plv_line : ", params);
                                this.db.executeSql("insert into plv_line(visit_sheet_offline_id, create_uid,product_id,visit_sheet_id,manufacturer_id,quantity,write_uid) values(?,?,?,?,?,?,?)", params)
                                    .then((data) => {
                                        let query = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                                        let params = ["plv.line", data.insertId, 0, 1];
                                        console.log("params data for sync plv_line ", params)
                                        this.db.executeSql(query, params)
                                            .then(() => console.log("plv_line inserted in data for sync"))
                                            .catch(e => console.log("error on inserting into data for sync plv_line : ", e.message));
                                    })
                            }
                        }).catch(e => console.log(e))
                }).catch(e => console.log(e.message))
                .then(() => {
                    //page 4
                    return this.db.executeSql("select id from pos_audit_criteria", [])
                        .then((critere) => {
                            console.log(critere);
                            for (let i = 0; i < critere.rows.length; i++) {
                                let params = [data.visit_sheet_id, critere.rows.item(i).id, data.create_uid, data.write_uid, data.visit_sheet_id]
                                this.db.executeSql("insert into pos_audit_line(visit_sheet_offline_id, audit_criteria_id,create_uid,write_uid,visit_sheet_id) values(?,?,?,?,?)", params)
                                    .then((data) => {
                                        let query = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                                        let params = ["pos.audit.line", data.insertId, 0, 1];
                                        this.db.executeSql(query, params)
                                            .then(() => console.log("pos_audit_line inserted in data for sync"))
                                            .catch(e => console.log("error on inserting into data for sync pos_audit_line : ", e.message));
                                    })
                                    .catch(e => console.log(JSON.stringify(e)));
                            }
                        })
                })
            //})
        }
        catch (e_1) {
            return console.log("e3 ==>", e_1.message);
        }
    }
    get_all_fiche_visite_by_id_tournee(id_tournee: number) {
        let sql: string = "select res_users.name as user_id, visit_sheet.x_offline_id as visit_sheet_id, i_t_tournee.state as tour_status, visit_sheet.nom_pos, res_partner.numero_telephone1, res_partner.adresse, res_partner.nom_gerant, visit_sheet.quartier, visit_sheet.state, i_t_ville.name as ville, tour_id, res_partner.name as partner_id ,visit_sheet.partner_id as res_partner_id,begin_datetime as visit_sheet_begin_date_time,end_datetime as visit_sheet_end_date_time,start_date as tournee_begin,end_date as tournee_end,visit_sheet.state,res_partner.provider_longitude,res_partner.provider_latitude from visit_sheet join res_users on res_users.id = visit_sheet.user_id join i_t_tournee on i_t_tournee.id = visit_sheet.tour_id join res_partner on visit_sheet.partner_id = res_partner.id join i_t_ville on res_partner.ville_id = i_t_ville.id where tour_id = " + id_tournee + " group by visit_sheet.partner_id, visit_sheet.tour_id ";
        //let sql : string = "select visit_sheet.id as visit_sheet_id, visit_sheet.provider_latitude, visit_sheet.provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'clôturé' and visit_sheet.state != 'clôturé' and i_t_tournee.id = ? " ;
        let data_return = [];
        let params = [id_tournee];
        return this.db.executeSql(sql, [])
            .then(data => {
                console.log("sql" + sql);
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).state == "closed") data.rows.item(i).state = 'Clôturée';
                        if (data.rows.item(i).state == "open") data.rows.item(i).state = 'Ouverte';
                        if (data.rows.item(i).state == 'new') data.rows.item(i).state = 'Nouvelle';
                        data_return.push(data.rows.item(i));

                        if (data.rows.item(i).visit_sheet_begin_date_time != null && data.rows.item(i).visit_sheet_end_date_time != null) {
                            this.db.executeSql("update visit_sheet set state = 'closed' where id = ? ", [data.rows.item(i).visit_sheet_id]).then(() => {
                                console.log("closed")
                            });
                        }

                        if (data.rows.item(i).visit_sheet_begin_date_time != null && data.rows.item(i).visit_sheet_end_date_time == null) {
                            this.db.executeSql("update visit_sheet set state = 'open' where id = ? ", [data.rows.item(i).visit_sheet_id]).then(() => {
                                console.log("open")
                            });
                        }

                        if (data.rows.item(i).visit_sheet_begin_date_time == null && data.rows.item(i).visit_sheet_end_date_time == null) {
                            this.db.executeSql("update visit_sheet set state = 'new' where id = ? ", [data.rows.item(i).visit_sheet_id]).then(() => {
                                console.log("new")
                            });
                        }

                    }
                    console.log("data" + JSON.stringify(data_return));
                    return data_return;
                }
            })
            .catch(e => {
                console.log('Error on select get_all_fiche_visite_by_id_tournee \n' + JSON.stringify(e));
            })
    }

    get_all_fiche_visite2(user_id: number) {
        let sql: string = "select res_users.name as user_id,visit_sheet.tour_id,visit_sheet.x_offline_id as visit_sheet_id,res_partner.name as partner_id,visit_sheet.partner_id as res_partner_id,visit_sheet.begin_datetime as visit_sheet_begin_date_time,visit_sheet.end_datetime as visit_sheet_end_date_time , i_t_tournee.start_date as tournee_begin,i_t_tournee.end_date as tournee_end,visit_sheet.state,i_t_tournee.state,res_partner.provider_latitude,res_partner.provider_longitude from visit_sheet left join i_t_pos_initial on visit_sheet.partner_id = i_t_pos_initial.partner_id left join i_t_pos_additional on i_t_pos_additional.partner_id = visit_sheet.partner_id left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id left join res_users on visit_sheet.user_id = res_users.id where visit_sheet.user_id = ?";
        //let sql : string = "select visit_sheet.id as visit_sheet_id, visit_sheet.provider_latitude, visit_sheet.provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'clôturé' and visit_sheet.state != 'clôturé' and i_t_tournee.id = ? " ;
        let data_return = [];
        let params = [user_id];
        return this.db.executeSql(sql, params)
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).state == "closed") data.rows.item(i).state = 'Clôturée';
                        else if (data.rows.item(i).state == "open") data.rows.item(i).state = 'Ouverte';
                        else data.rows.item(i).state = 'new';
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
            })
    }

    save_position(id: number, position: any) {
        let query = "update visit_sheet set provider_latitude = ?, provider_longitude where id = ?";
        return this.db.executeSql(query, [position.latitude, position.longitude, id]).then(() => {
            /*let query = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
            let params = ["visit.sheet", id, 0, 0];
            this.db.executeSql(query, params)
                .then(() => console.log("visit sheet inserted in data for sync"))
                .catch(e => console.log("1985  : ", e.message));*/
        }).catch(e => {
            console.log('Error on update res \n' + JSON.stringify(e));
        });
    }

    insert_data_visit_sheet(data, etat: string) {
        let query = "insert into visit_sheet (partner_id, pos_initial, provider_latitude, provider_longitude, region_id, secteur_id, agence_id, zone_id, state) values (?, ?, ?, ?, ?, ?, ?, ?, 'new') ";
        let params = [data.partner_id, data.pos_initial, data.provider_latitude, data.provider_longitude, data.region_id, data.secteur_id, data.agence_id, data.zone_id]
        return this.db.executeSql(query, params)
            .then((data) => {
                if (data) {
                    let sql: string = "insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                    let params: Array<any> = ["res.partner", data.insertId, 0, 0];
                    this.db.executeSql(sql, params)
                        .then(_ => console.log("visit sheet affected into data_for_sync"))
                        .catch(e => console.log("1993 : ", e.message));
                }
            }).catch(e => {
                console.log('Error on update res \n' + JSON.stringify(e));
            });
    }

    get_res_partner_pos_init_supp() {
        let sql_select: string = "select id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet";
        let data_return = [];
        return this.db.executeSql(sql_select, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
            })
    }

    get_stock_visit_sheet_by_id_p2(visit_sheet_id: number, partner_id: number): Promise<any> {

        let sql1 = "select t2.visit_sheet_id, t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name, t2.available_stock, null as last_visit_stock, t2.placement, null as last_placement , null as last_visit_stock_avg from stock_line as t2 left join itg_product on itg_product.id= t2.product_id left join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id where t2.visit_sheet_offline_id = ? group by t2.product_id,t2.manufacturer_id"
        //let sql_select: string = " select t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name, sum(available_stock) as available_stock,sum(last_visit_stock) as last_visit_stock,sum(placement) as placement, (select sum(placement) from stock_line as t1 where t1.product_id = t2.product_id and visit_sheet_id in(select id from visit_sheet where id in (select id from visit_sheet where partner_id = '" + partner_id + "' and id < '" + visit_sheet_id + "' order by id desc limit 1 ) and partner_id = '" + partner_id + "' )) as last_placement , (select avg(last_visit_stock) as last_visit_stock_avg from stock_line as t3 where t3.product_id=t2.product_id and visit_sheet_id in (select id from visit_sheet where partner_id = '" + partner_id + "' order by id Desc limit 4) group by t3.product_id,t3.manufacturer_id) as last_visit_stock_avg from stock_line as t2 join itg_product on itg_product.id= t2.product_id join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id where visit_sheet_id = '" + visit_sheet_id + "' group by t2.product_id,t2.manufacturer_id";
        let data_return = [];
        // console.log("2160 =>", sql)
        return this.db.executeSql(sql1, [visit_sheet_id])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).available_stock === 0) data.rows.item(i).available_stock = null;
                        if (data.rows.item(i).last_visit_stock === 0) data.rows.item(i).last_visit_stock = null;
                        if (data.rows.item(i).placement === 0) data.rows.item(i).placement = null;
                        if (data.rows.item(i).last_placement === 0) data.rows.item(i).last_placement = null;
                        if (data.rows.item(i).last_visit_stock_avg === 0) data.rows.item(i).last_visit_stock_avg = null;
                        data_return.push(data.rows.item(i));
                    }
                }

                return data_return;

                console.log("2177 => ", data_return);

            })
            .catch(e => {
                console.log(e.message)
            });
    }

    get_standard_p2(): Promise<any> {
        let data_return = [];
        let sql = "select t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name, null as available_stock, null as last_visit_stock,null as placement, null as last_placement , null as last_visit_stock_avg from stock_line as t2 left join itg_product on itg_product.id= t2.product_id left join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id group by t2.product_id,t2.manufacturer_id";
        return this.db.executeSql(sql, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
            })
            .catch(e => {
                console.log(e.message)
            });
    }

    get_last_visit_stock(partner_id: number, visit_sheet_id: number): Promise<any> {
        let sql = "select ROUND(AVG(stock_line.available_stock),2) as last_visit_stock_avg from stock_line left join itg_product on itg_product.id = stock_line.product_id where stock_line.visit_sheet_id in(select visit_sheet.id from visit_sheet where visit_sheet.partner_id = " + partner_id + " and visit_sheet.id < " + visit_sheet_id + " order by visit_sheet.id desc limit 4) group by stock_line.product_id";
        let data_return = [];
        console.log("2240 => ", sql)
        return this.db.executeSql(sql, [])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(e => {
                console.log("2198 => ", e);
            })
    }

    get_last_p2_data(partner_id: number, visit_sheet_id: number): Promise<any> {
        let sql = "select stock_line.placement as last_placement, stock_line.available_stock as last_visit_stock from stock_line where stock_line.visit_sheet_id =(select visit_sheet.id from visit_sheet where visit_sheet.partner_id = ? and visit_sheet.id < ? order by visit_sheet.id desc limit 1) "
        let data_return = [];
        return this.db.executeSql(sql, [partner_id, visit_sheet_id])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(e => {
                console.log("2219 => ", e);
            })
    }

    get_last_available_stock(partner_id: number, visit_sheet_id: number): Promise<any> {
        let sql = "select stock_line.placement as last_placement from stock_line where stock_line.visit_sheet_id =(select visit_sheet.id from visit_sheet where visit_sheet.partner_id = ? and visit_sheet.id < ? order by visit_sheet.id desc limit 1) "
        let data_return = [];
        return this.db.executeSql(sql, [partner_id, visit_sheet_id])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(e => {
                console.log("2219 => ", e);
            })
    }


    get_n_last_partner_visit_sheet_id(partner_id: number, visit_sheet_id: number, n: number) {
        let sql_select: string = "select visit_sheet.id from visit_sheet where visit_sheet.partner_id = ? and visit_sheet.id != ? order by visit_sheet.id DESC limit ? ";
        let data_return = [];
        return this.db.executeSql(sql_select, [partner_id, visit_sheet_id, n])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e));
            })
    }

    get_data_for_p5(visit_sheet_id: number) {
        let sql_select: string = "select itg_product.id as produit_id, itg_product.name as product_name, plv_line.quantity from plv_line inner join itg_product on plv_line.product_id = itg_product.id where plv_line.visit_sheet_offline_id = ? group by plv_line.product_id";
        let data_return = [];
        return this.db.executeSql(sql_select, [visit_sheet_id])
            .then(data => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }

            })
            .catch(e => {
                console.log('Error on select get_data_for_p5 \n' + JSON.stringify(e));
            })
    }

    get_data_for_p3(product_id: number, visit_sheet_id: number, partner_id: number): Promise<any> {
        let sql_select: string = "select itg_product.manufacturer_id,itg_product.id as idproduit, itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,current_price,rod_current_price, partner_id,(select current_price from price_line where visit_sheet_id in (select id from visit_sheet where x_offline_id < '" + visit_sheet_id + "' and partner_id = '" + partner_id + "' order by id desc limit 1)) as current_price2 from itg_product join itg_manufacturer on itg_manufacturer.id = itg_product.manufacturer_id  join price_line on price_line.product_id = itg_product.id join visit_sheet on visit_sheet.x_offline_id = price_line.visit_sheet_offline_id where visit_sheet_offline_id = '" + visit_sheet_id + "' and product_id = '" + product_id + "' group by product_id,visit_sheet_id";
        let params = [];
        console.log("2280 => ", sql_select);
        return this.db.executeSql(sql_select, params)
            .then((data: any) => {
                if (data.rows.length > 0) {
                    console.log("tode nisy tao");
                    return data.rows.item(0);
                }
                else {
                    return this.db.executeSql("select manufacturer_id from itg_product where id = ? ", [product_id])
                        .then((produit) => {
                            console.log("tsisy tanaty base le izy");
                            let sql_insert = "insert into price_line(visit_sheet_offline_id, product_id,visit_sheet_id,current_price,manufacturer_id) values(?,?,?,?, (select itg_product.manufacturer_id from itg_product where itg_product.id = ? ))";
                            return this.db.executeSql(sql_insert, [visit_sheet_id, product_id, visit_sheet_id, null, product_id])
                                .then(() => {
                                    let sql_select: string = "select itg_product.id as idproduit, itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,current_price,partner_id,(select current_price from price_line where visit_sheet_id in (select id from visit_sheet where id < ? and partner_id = ? order by id desc limit 1)) as current_price2 from itg_product join itg_manufacturer on itg_manufacturer.id = itg_product.manufacturer_id  join price_line on price_line.product_id = itg_product.id join visit_sheet on visit_sheet.id = price_line.visit_sheet_id where visit_sheet_id = ? and product_id = ? group by product_id,visit_sheet_id";
                                    return this.db.executeSql(sql_select, [visit_sheet_id, partner_id, visit_sheet_id, product_id])
                                        .then((data) => {
                                            if (data) {
                                                console.log("averina alaina le data")
                                                return data.rows.item(0);
                                            }
                                        })
                                }).catch(e => console.log("get data p3 , insert : " + e.message));
                        }).catch(e => console.log(" dbm 2200 ", e.message));
                }

            }).catch(e => {
                console.log('Error on select get_data_for_p3 \n' + JSON.stringify(e.message));
            })
    }

    //user_id: number, itg_survey_id: number [user_id, itg_survey_id]
    get_data_for_p7() {
        let data_return = [];
        // let sql_select: string = "select distinct itg_survey_question.name, itg_survey_question.id as question_id,itg_survey.id as itg_survey_id,itg_survey_question.type, group_concat(itg_survey_label.id, '|') as response_id, group_concat(itg_survey_label.name, '|') as options from itg_survey left join itg_survey_question on itg_survey.id = itg_survey_question.survey_id left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id inner join res_users on itg_survey.create_uid = res_users.id where itg_survey.create_uid = ? and itg_survey.id = ? group by itg_survey_question.id, itg_survey_question.name, itg_survey.id";
        let sql_select: string = "select distinct itg_survey_question.name, itg_survey_question.id as question_id,itg_survey.id as itg_survey_id,itg_survey_question.type, group_concat(itg_survey_label.id, '|') as response_id, group_concat(itg_survey_label.name, '|') as options from itg_survey left join itg_survey_question on itg_survey.id = itg_survey_question.survey_id left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id left join res_users on itg_survey.create_uid = res_users.id group by itg_survey_question.id, itg_survey_question.name, itg_survey.id"
        console.log(sql_select);
        return this.db.executeSql(sql_select, [])
            .then(data => {
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
                                let md = { value: Number, label: String };
                                let key = { key: String };
                                let type = { type: String };
                                let templateOptions = {
                                    label: String,
                                    multiple: Boolean,
                                    options: [
                                        { value: Number, label: String }
                                    ]
                                }
                                var dt_response, dt_response_id, md_data = [];
                                try {
                                    dt_response = data.rows.item(i).options.split('|');
                                    dt_response_id = data.rows.item(i).response_id.split('|');
                                    for (var a = 0; a < dt_response.length; a++) {
                                        md = { value: dt_response_id[a], label: dt_response[a] }
                                        md_data.push(md);
                                    }
                                    data.rows.item(i).options = md_data
                                }
                                catch (e) {
                                    console.log('simple_choice ==>', e);
                                }
                                break;
                            }

                            case "multiple_choice": {
                                let md = { value: Number, label: String };
                                let key = { key: String };
                                var dt_response, dt_response_id, md_data = [];
                                try {
                                    dt_response = data.rows.item(i).options.split('|');
                                    dt_response_id = data.rows.item(i).response_id.split('|');
                                    for (var a = 0; a < dt_response.length; a++) {
                                        md = { value: dt_response_id[a], label: dt_response[a] }
                                        md_data.push(md);
                                    }
                                    data.rows.item(i).options = md_data
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
                    console.log("model" + data_return);
                    console.log("response" + dt_response);
                    return data_return;

                }

            }).catch(e => {
                console.log('Error on select get_data_for_p7 \n' + JSON.stringify(e));
            })
    }
    set_pv_line_quantity_product(data: any, visit_sheet_id: number) {
        this.insert_pv_line_quantity_product(data, visit_sheet_id);
    }

    update_pv_line_quantity_product(data: any, visit_sheet_id: number) {

        let query: string = "update plv_line set quantity = ? where product_id = ?  and visit_sheet_offline_id = ? ";
        let size = data.length, i = 0;
        for (i = 0; i < size; i++) {
            this.db.executeSql(query, [data[i].quantity, data[i].produit_id, visit_sheet_id])
                .then(() => {
                    this.db.executeSql("select id from plv_line where product_id = ? and visit_sheet_offline_id = ?  ", [data[i].produit_id, data[i].visit_sheet_id])
                        .then((data) => {
                            if (data.rows.length > 0) {
                                let params = [data.rows.item(0).id, "plv.line", 0, 0];
                                console.log("params plv_line data for sync : ", params);
                                query = "insert into data_for_sync(table_id,table_name,is_synced,action_type) values(?,?,?,?)"
                                this.db.executeSql(query, params)
                                    .then(() => console.log("plv_line inserted to data for sync"))
                                    .catch(e => console.log("error on inserting data to data_for_sync", e.message));
                            }
                        }).catch(e => console.log("error getting id of plv_line : ", e.message));
                })
                .catch(e => console.log(e.message));
        }
    }

    insert_pv_line_quantity_product(data: any, visit_sheet_id: number) {
        let query_insert: string = "insert into plv_line(product_id,visit_sheet_id,quantity) values(?,?,?)";
        let params = [data.produit_id, visit_sheet_id, data.quantity];
        return this.db.executeSql(query_insert, params)
            .then((data) => {
                let query = " insert into data_for_sync(table_id,table_name,action_type,is_synced) values(?,?,?,?)";
                return this.db.executeSql(query, [data.insertId, "plv.line", 1, 0])
                    .then(() => console.log("mety le insert anle p5"))
                    .catch(e => console.log(e.message));
            })
            .catch(e => console.log(e.message));
    }

    insert_new_data_for_sync(table: string) {
        this.select_max_basic_data(table).then(max => {
            let query = "insert into data_for_sync (table_name, table_id, is_synced,action_type) values (?, ?, ?,?) ";
            return this.db.executeSql(query, [
                table,
                max - 1,
                0,
                1
            ]).then(() => {
                console.log('insert insert_new_data_for_sync with succes \n');
            }).catch(e => {
                console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
            });
        })
    }

    update_data_for_sync_2(table: string, table_id: number) {
        let query = "update data_for_sync set is_synced = 1 where table_name = '" + table + "' and table_id = " + table_id + " ";
        console.log("update_data_for_sync_2 => ", query);
        return this.db.executeSql(query, []).then(() => {
            console.log('2516 update update_data_for_sync with succes \n');
        }).catch(e => {
            console.log('2519 Error on update_data_for_sync \n' + JSON.stringify(e));
        });
    }

    update_data_for_sync(synced_data: any): Promise<any> {
        /**/

        let sql_2 = "update data_for_sync set table_id = " + synced_data.x_odoo_id + " , is_synced = 1 where id = " + synced_data.data_for_sync_id + " ";
        //console.log("3138 => ", sql_2);
        return this.db.executeSql(sql_2).then(() => {
            console.log("vita")
        }).catch(e => {
            console.log(e.toString());
        })

    }


    get_all_tournees_by_user(user_id: number) {
        let sql_select = "select i_t_tournee.*, res_users.name as commercial from i_t_tournee inner join res_users on i_t_tournee.commercial_id = res_users.id where i_t_tournee.commercial_id = ? order by i_t_tournee.state desc";
        let data_return = [];
        return this.db.executeSql(sql_select, [user_id]).then((data) => {
            if (data.rows.length > 0) {
                console.log(sql_select);
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
                console.log("tournees == >" + JSON.stringify(data_return))
                return data_return;
            }
        }).catch(e => console.log(e.message))
    }

    get_user_by_secteur(secteur_id: number): Promise<any> {
        let sql = "select res_users.name as display , res_users.id as value from res_users where res_users.id in (select i_t_secteur.seller_id from i_t_secteur where i_t_secteur.id = ?) or res_users.id in (select i_t_secteur.promoter_id from i_t_secteur where i_t_secteur.id = ?) ";
        return this.db.executeSql(sql, [secteur_id, secteur_id])
            .then((data: any) => {

                let seller_sponsor = [];
                if (data && data.rows.length > 0) {
                    let i = 0, size = data.rows.length;
                    for (i = 0; i < size; i++) {
                        seller_sponsor.push(data.rows.item(i));
                    }
                    return seller_sponsor;
                }
                else return 0;
            }).catch(e => { console.log(e.message) })
        /*   .then((data: any) => {
               if (data === 0) console.log("tsy misy seller sponsor");
               else {
                   sql = " insert into res_users_res_partner_rel(partner_id,res_users_id) values(?,?)";
                   console.log("asdfasdfasdf : " , sql );
                   let params = [data[0].seller_id, data[0].promoteur_id];
                   console.log("params : " , params);
                   return this.db.executeSql(sql, params)
                       .then(() => {
                           return params;
                       }).catch(e => { console.log(e.message) })
                       .then((params: Array<any>) => {
                           if (params) {
                               sql = " select login as display , id as value  from res_users where id in(select DISTINCT id from res_users where id = ? or id = ?)";
                               return this.db.executeSql(sql, params)
                                   .then((data: any) => {
                                       if (data && data.rows.length > 0) {
                                           for (let i = 0; i < data.rows.length; i++) {
                                               data_return.push(data.rows.item(i));
                                           }
                                           console.log(JSON.stringify(data_return));
                                           return data_return;
                                       }
                                       else { throw "Aucun utilisateur du secteur" }
                                   }).catch(e => { console.log(e.message) });
                           }
                       }).catch(e => { console.log(e.message) });
               }
           }) */
    }
    async createToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }

    remove_survey_partner_rel(): Promise<any> {
        return this.db.executeSql("delete from itg_survey_res_partner_rel where 1", []).then(() => {
            console.log("2610 => remove itg_survey_res_partner_rel success");
        }).catch(e => {
            console.log("2612 => ", e)
        })
    }

    get_columns(data_from_web: any, mode: number) {
        if (data_from_web.table == 'res_partner') {

            let sql_3 = "update res_partner set x_offine_id = " + data_from_web.x_odoo_id + " , active = " + data_from_web.active + ", state = '"+ data_from_web.state +"', cible_activation_id = "+ data_from_web.cible_activation_id +" where id = " + data_from_web.x_odoo_id + " ;"
            this.db.executeSql(sql_3, []).then(data => {
                console.log("vita n update active")
            }).catch(e => {
                console.log("tsy vita n update active => ", e)
            })

            let sql = "insert into res_users_res_partner_rel(res_users_id,partner_id) values(?,?)";
            data_from_web.agent_commercial_ids.forEach((id: any) => {

                this.db.executeSql(sql, [id, data_from_web.id])
                    .then((data) => {
                    })
                    .catch(e => console.log("2437 ex:" + e.message));
            });
            data_from_web.permanent_posm_ids.forEach((id: any) => {
                this.db.executeSql("insert into i_t_permanent_posm_res_partner_rel(i_t_permanent_posm_id,partner_id) values(?,?)", [id, data_from_web.id])
                    .then()
                    .catch(e => console.log("2428 : ", e.message))
            });
        }

        if (data_from_web.table == 'itg_survey_res_partner_rel') {
            let sql_2 = "insert into itg_survey_res_partner_rel (itg_survey_id, res_partner_id) values (" + data_from_web.itg_survey_id + ", " + data_from_web.res_partner_id + ") ";
            // console.log("2631 => ", sql_2);
            this.db.executeSql(sql_2, [])
                .then((data) => {

                })
                .catch(e => console.log("2635 ex:" + e.message));
        }

        let query = "PRAGMA table_info ( '" + data_from_web.table + "' )";
        return this.db.executeSql(query, [])
            .then((data_from_db: any) => {
                var fields = [];
                if (data_from_db.rows.length > 0) {
                    for (let i = 0; i < data_from_db.rows.length; i++) {
                        fields.push(data_from_db.rows.item(i));
                    }
                }

                //OVAINA AVY EO

                if (data_from_web.action_type == 1) {
                    let query: string = " insert into " + data_from_web.table + " (";
                    let params = [];
                    fields.forEach((field: any) => {
                        if (!Reflect.get(data_from_web, field.name)) { }
                        else query += field.name + ",";
                    });
                    query = query.substring(0, query.length - 1);
                    query += ") values(";
                    fields.forEach((field: any) => {
                        if (!Reflect.get(data_from_web, field.name)) {

                        }
                        else {
                            query += "?,";
                            if (Reflect.get(data_from_web, field.name) == "x_odoo_id") {
                                params.push("id");
                            }
                            else {
                                params.push(Reflect.get(data_from_web, field.name));
                            }
                        }
                    });

                    query = query.substring(0, query.length - 1);
                    query += ")";

                    return this.db.executeSql(query, params)
                        .then(() => {
                            Counter.disableLoading();
                            return data_from_web;
                        })
                        .catch(e => console.log("2479 ==> " + e.message + " column ==> " + data_from_web.table + " query ==> " + query) + " \n requete ==> " + query);
                }
                else {

                    let query = " update " + data_from_web.table + " set ";
                    let params = [];

                    fields.forEach((field: any) => {
                        if (!Reflect.get(data_from_web, field.name)) {
                            if(field.name == "active") {
                            }
                        }
                        else {
                            params.push(Reflect.get(data_from_web, field.name));
                            query += field.name + " = ?, ";
                        }
                    });

                    query = query.substring(0, query.length - 2);

                    if(data_from_web.table == "res_partner") {
                        params.push(Reflect.get(data_from_web, "x_odoo_id"));
                        query += " where x_odoo_id = ?";
                    }

                    else {
                        params.push(Reflect.get(data_from_web, "x_offline_id"));
                        query += " where x_offline_id = ?";
                    }

                    return this.db.executeSql(query, params)
                        .then(() => {

                            /*if (mode == 0) {
                                this.db.executeSql("update data_for_sync set is_synced = ?, table_id = ? where table_name = ? and table_id = ? ", []).then(() => {

                                })
                            }*/

                            Counter.disableLoading();
                            return data_from_web;
                        })
                        .catch(e => console.log("2502 ==> " + e.message) + " \n requete ==> " + query);

                }
            }).catch(e => console.log("2504 ==> " + e.message) + " \n requete ==> " + query);
    }

    storage_Login(log: string, pass: string): Promise<any> {
        let sql_update = "update res_users set active = 0";
        let sql_update2 = "update res_users set active = 1 where login = ?";
        let sql_select: string = "select * from res_users where login = ? ";
        return this.db.executeSql(sql_update, []).then(() => {
            return this.db.executeSql(sql_select, [log]).then((data_select) => {
                if (data_select.rows.length > 0) {
                    if (data_select.rows.item(0).password == pass) {
                        this.db.executeSql(sql_update2, [log])
                        return data_select.rows.item(0);
                    }
                    else return 0;
                }
            })
        })
    }

    Updata_active_Login(id: any) {
        let sql_select: string = "update res_users set active = 0 where id = ? ";
        return this.db.executeSql(sql_select, [id]).then(() => {
            console.log('user active_id :  \n' + id);
        }).catch(e => {
            console.log("update active login exception :" + JSON.stringify(e));
        });
    }
    update_response(visit_sheet_id: number, data: any) {
        let params = [];
        let i = 0, size = data.length;
        for (i = 0; i < size; i++) {
            let query = "update pos_audit_line  ";
            if (data[i].visit_begin && !data[i].visit_end) {
                query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                params = [data[i].id, data[i].visit_begin, data[i].id, visit_sheet_id];
            }
            else if (data[i].visit_end && !data[i].visit_begin) {
                query += " set visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                params = [data[i].id, data[i].visit_end, data[i].id, visit_sheet_id];
            }
            else if (data[i].visit_end && data[i].visit_begin) {
                query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                params = [data[i].id, data[i].visit_begin, data[i].id, data[i].visit_end, data[i].id, visit_sheet_id];
            }
            else {
                continue;
            }
            query += " where audit_criteria_id = ?  and visit_sheet_offline_id = ? ";
            this.db.executeSql(query, params)
                .then(() => {
                    this.db.executeSql("select id from pos_audit_line where audit_criteria_id = ?  and visit_sheet_offline_id = ? ", [data[i].id, visit_sheet_id])
                        .then((data) => {
                            console.log("tay be");
                            if (data.rows.length > 0) {
                                let params = ["pos.audit.line", data.rows.item(0).id, 0, 0];
                                console.log("params pos_audit_line  data for sync : ", params);
                                query = " insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)";
                                this.db.executeSql(query, ["pos.audit.line", data.rows.item(0).id, 0, 0])
                                    .then(() => console.log("pos.audit.line inserted into data_for_sync"))
                                    .catch(e => console.log("error on inserting pos_audit_line into data_for_sync : ", e.message));
                            }
                        }).catch(e => console.log("error on getting id from pos_audit_line : ", e.message));
                }).catch(e => console.log("error on update pos_audit_line : ", e.message));

        }
    }

    /* verify_table() {
        this.select_basic_data("res_users").then(data => {
            if (data.rows.length == 0) {
                this.init_table_data();
            }
        });
    } */

    add_pos_additionnal(partner_id: any, tour_id: number, user_id: number) {
        return this.db.executeSql("select * from i_t_pos_additional where tour_id = ? and partner_id = ? ", [tour_id, partner_id]).then(data => {
            if (data.rows.length > 0) {
                console.log("Un doublon a été détecté");
            }
            else {
                return this.db.executeSql("insert into i_t_pos_additional (create_uid, write_uid, visite, tour_id, partner_id) values (?, ?, ?, ?, ?)", [
                    user_id, user_id, "non", tour_id, partner_id
                ]).then(data => {

                    let a = data.insertId;
                    let query2 = "insert into data_for_sync (table_name, table_id, is_synced,action_type) values (?, ?, ?,?)";
                    return this.db.executeSql(query2, ["i.t.pos.additionnal", a, 0, 1])
                        .then(() => {
                            console.log('insert insert_new_data_for_sync with succes \n');
                        }).catch(e => {
                            console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                        });
                });
            }
        })
    }

    check_password(user_id: number, password: string) {
        return this.db.executeSql("select * from res_users where id = ? and password = ? ", [user_id, password])
            .then((password: any) => {
                if (password.rows.length > 0) {
                    console.log(password.rows.item(0));
                    return password.rows.item(0);
                }
            }).catch(e => console.log("get_password_exeception : " + e.message))
    }

    set_new_password(user_id: number, password: string) {
        return this.db.executeSql("update res_users set password = ? where id = ? ", [password, user_id])
            .then((data: any) => {
                if (data) {
                    console.log("user_id : ", user_id)
                    return this.db.executeSql("insert into data_for_sync(table_name,table_id,is_synced,action_type,x_odoo_id) values(?,?,?,?,?)", ["res.users", user_id, 0, 0, user_id])
                        .then(() => { console.log("data for sync : password action update") })
                        .catch(e => console.log(e.message))
                }
            }).catch(e => console.log("excecution update password exception : " + e.message));
    }

    insert_question_answer(visit_sheet_id: number, question: string, answer: string) {

        let query = "insert into visit_survey (question, answer, visit_sheet_id) values (?, ?, ?) ";
        return this.db.executeSql(query, [question, answer, visit_sheet_id])
            .then(data => {
                console.log('insert insert_new_data_for_sync with succes \n' + query);
                let a = data.insertId;
                let query2 = "insert into data_for_sync (table_name, table_id, is_synced,action_type) values (?, ?, ?,?)";
                console.log(query2);
                return this.db.executeSql(query2, ["visit.survey", a, 0, 1])
                    .then(() => {
                        console.log('insert insert_new_data_for_sync with succes \n');
                    }).catch(e => {
                        console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                    });
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    get_data_survey_p7(visit_sheet_id: number) {
        let data_return = [];
        //let sql_select: string = "select * from visit_survey where visit_sheet_id = " + visit_sheet_id + " ";
        let sql_select: string = "select * from visit_survey where visit_sheet_id = " + visit_sheet_id + " ";
        return this.db.executeSql(sql_select, []).then((data) => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
                console.log(JSON.stringify(data_return))
                return data_return;
            }
        }).catch(e => {
            console.log('Error on select \n' + stringify(e));
        });
    }
    get_res_partner_contrat(name: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let data_return = [];
            let sql_select: string = " select i_t_contrat.date_debut_contrat as datedebut, i_t_contrat.date_fin_contrat as datefin from i_t_contrat where i_t_contrat.id = " + name + "";
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    console.log(JSON.stringify(data_return))
                    return data_return;
                }
            }).catch(e => {
                console.log('Error on select \n' + stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + stringify(e));
        })
    }

    insert_Visit_sheet(res_partner_id: number, tour_id: number, pos_initial: string, pos_initial_line_id: number, pos_additional_line_id: number) {
        if (res_partner_id > 0) {
            return this.db.executeSql("select visit_sheet.id from visit_sheet where partner_id = '" + res_partner_id + "' and tour_id = '" + tour_id + "' ", []).then(verif => {
                if (verif.rows.length > 0) {
                    return null
                }
                else {
                    let query_insert: string = "insert into visit_sheet(x_offline_id, quartier, nom_pos,  region_id, agence_id, secteur_id, zone_id, partner_id,user_id,tour_id,pos_initial,pos_initial_line_id, pos_additional_line_id, state) values( (select max(id)+1 from visit_sheet), (select quartier from res_partner where id = " + res_partner_id + " ), (select nom_pos from res_partner where id = " + res_partner_id + " ), (select region_id from res_partner where id = " + res_partner_id + " ), (select agence_id from res_partner where id = " + res_partner_id + " ), (select secteur_id from res_partner where id = " + res_partner_id + " ), (select zone_id from res_partner where id = " + res_partner_id + " ), " + res_partner_id + ", (select id from res_users where active = 1)," + tour_id + "," + pos_initial + "," + pos_initial_line_id + "," + pos_additional_line_id + ", 'new')";
                    console.log("query details tournee : " + query_insert);
                    return this.db.executeSql(query_insert, [])
                        .then((data) => {
                            return this.db.executeSql("insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)", ["visit.sheet", data.insertId, 0, 0]).then(data => {
                            })
                        })
                        .catch(e => console.log("2762 =>" + e.message));
                }
            })
        }
    }

    verification_visit_sheet(tour_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let data_return = [];
            let sql_select: string = "select partner_id,user_id,tour_id,pos_initial from visit_sheet where tour_id = " + tour_id + " and user_id = (select res_users.id from res_users where active = 1)";
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    /* data_return = data.rows.item(0);
                     console.log("dataverification" + JSON.stringify(data_return));
                     return data_return;*/
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(e => {
                console.log('Error on select \n' + stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + stringify(e));
        })
    }

    delete(tablename: string) {
        let query: string = " drop table " + tablename ;
        return this.db.executeSql(query, [])
            .then(() => {
                console.log("DBM : data from " + tablename + " deleted!");
            }).catch(e => console.log("DBM : delete " + tablename + " error ", e.message));
    }

    move_sequence(tablename: string, new_seq : string) {
        let query: string = "UPDATE SQLITE_SEQUENCE SET SEQ = '"+ new_seq +"' WHERE NAME='"+tablename+"';" ;
        return this.db.executeSql(query, [])
            .then(() => {
                console.log("DBM : SQLITE_SEQUENCE " + tablename + " updated!");
            }).catch(e => console.log("DBM : delete " + tablename + " error ", e.message));
    }

    insert_kronos_back_data(tablename: string, data_id, user_id): Promise<any> {
        let query: string = "insert into kronos_back_data(tablename,id,user_id) values(?,?,?)";
        return this.db.executeSql(query, [tablename, data_id, user_id])
            .then((data) => {


            }).catch(e => {
                console.log("insert kronos_back_data dbm exception : " + e.message)
            });
    }

    get_date_visite(visit_sheet_id: number) {
        return this.db.executeSql("select begin_datetime,end_datetime from visit_sheet where id = ? ", [visit_sheet_id])
            .then((data) => {
                if (data) {
                    return data.rows.item(0);
                }
            }).catch(e => console.log("erreur get date fin de visite " + e.message))
    }

    get_unvisited_partner(tour_id: number, initial: any): Promise<any> {
        let sq = " and res_partner.id <> "
        let sql = "";
        if (initial.length > 0) {
            for (var i = 0; i < initial.length - 1; i++) {
                sq = sq + "\'" + initial[i].res_partner_id + "\'" + " and res_partner.id <> ";
            }
            sq = sq + "\'" + initial[initial.length - 1].res_partner_id + "\'" + " ;";
        }
        let data_return = [];

        if (sq != " and res_partner.id <> ") {
            sql = "select res_partner.id, res_partner.name as res_partner_name, i_t_pos_initial.visite, i_t_pos_initial.nom_pos, i_t_pos_initial.quartier from i_t_pos_initial inner join res_partner on i_t_pos_initial.partner_id = res_partner.id where i_t_pos_initial.visite = 'non' and i_t_pos_initial.tour_id in (select i_t_tournee.id from i_t_tournee where i_t_tournee.id < ? order by id desc limit 1)" + sq;
        }
        else {
            sql = "select res_partner.id, res_partner.name as res_partner_name, i_t_pos_initial.visite, i_t_pos_initial.nom_pos, i_t_pos_initial.quartier from i_t_pos_initial inner join res_partner on i_t_pos_initial.partner_id = res_partner.id where i_t_pos_initial.visite = 'non' and i_t_pos_initial.tour_id in (select i_t_tournee.id from i_t_tournee where i_t_tournee.id < ? order by id desc limit 1)";
        }

        console.log("2996 => ", sql);

        //let sql2 = "select res_partner.id, res_partner.name from res_partner where res_partner.id in ( select visit_sheet.partner_id as pid from visit_sheet inner join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id inner join i_t_pos_initial on i_t_tournee.id = i_t_pos_initial.tour_id where i_t_tournee.state = 'Démarré' and i_t_tournee.id = ? and i_t_pos_initial.visite = 'non' order by i_t_tournee.start_date desc )"
        //let sql3 ="select distinct res_partner.id, res_partner.name as res_partner_name, i_t_pos_initial.visite, i_t_pos_initial.nom_pos, i_t_pos_initial.quartier from i_t_pos_initial inner join res_partner on i_t_pos_initial.partner_id = res_partner.id where i_t_pos_initial.visite = 'non' and i_t_pos_initial.tour_id in (select i_t_tournee.id from i_t_tournee where i_t_tournee.id < ? order by id desc limit 1) and i_t_pos_initial.partner_id <> (select i_t_pos_initial.partner_id from i_t_pos_initial where i_t_pos_initial.tour_id = ?)"

        return this.db.executeSql(sql, [tour_id])
            .then((data) => {
                if (data) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i))
                    }
                }
                return data_return
            }).catch(e => console.log("erreur get date fin de visite " + e.message))
    }

    update_position(lat: any, long: any, visit_sheet_id: number) {
        console.log(lat + '\n' + long + '\n' + visit_sheet_id);
        return this.db.executeSql("update visit_sheet set provider_latitude = ? , provider_longitude = ? where id = ?", [
            lat, long, visit_sheet_id
        ]).then(() => {
            console.log("tafa");
        }).catch(e => {
            console.log(e);
        });
    }

    select_i_t_type_client(): Promise<any> {
        let data_return = [];
        return this.db.executeSql("select res_partner.id, res_partner.name from res_partner inner join i_t_type_client on res_partner.type_client_id = i_t_type_client.id where i_t_type_client.code = 'DMG' or i_t_type_client.code = 'G' ", [])
            .then((data) => {
                if (data) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(e => console.log("erreur get date fin de visite " + e.message))
    }

    get_secteur_fitered(agence_id): Promise<any> {
        let data_return = [];
        return this.db.executeSql("select * from i_t_secteur where i_t_secteur.agence_id = ? and ( i_t_secteur.seller_id = (select id from res_users where active = 1) or i_t_secteur.promoter_id = (select id from res_users where active = 1) )", [agence_id])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
            }).catch(e => {
                console.log('Error on get_secteur_fitered \n' + JSON.stringify(e));
            });
    }

    get_i_t_canal_by_id_act_pdv(act_pdv: number) {
        let sql = "select i_t_canal.id , i_t_canal.name from i_t_activite_pos left join i_t_canal on i_t_activite_pos.canal_id = i_t_canal.id where i_t_activite_pos.id = ? ";
        return this.db.executeSql(sql, [act_pdv])
            .then(data => {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(e => {
                console.log('Error on get_i_t_canal_by_id_act_pdv \n' + JSON.stringify(e));
            });
    }

    verify_additional() {
        let sql = "delete from i_t_pos_additional where i_t_pos_additional.id in (select i_t_pos_additional.id from i_t_pos_additional inner join res_partner on i_t_pos_additional.partner_id = res_partner.id where i_t_pos_additional.id and res_partner.x_odoo_id isnull)" ;
        this.db.executeSql(sql, []).then(x => {
            console.log("3188 => ok") ;
        }).catch(e => {
            console.log("3190 => " , e)
        }) ;
        this.db.executeSql("delete from i_t_pos_additional where i_t_pos_additional.nom_pos isnull", []).then(x => {
            console.log("3193 => ok") ;
        }).catch(e => {
            console.log("3195 => " , e)
        }) ;
    }

    insert_pos_additionnal(data: any, tour_id: number, type: number): Promise<any> {
        let sql = "select res_partner.x_odoo_id from res_partner where res_partner.id = ?";
        return this.db.executeSql(sql, [data.id]).then(x_odoo_id => {
                if (x_odoo_id.rows.item(0) != null) {
                    let sl = "select i_t_pos_additional.* from i_t_pos_additional where partner_id = '" + data.id + "' and tour_id = '" + tour_id + "' "
                    return this.db.executeSql(sl, []).then(verif => {
                        if (verif.rows.length > 0) {
                            return null
                        }
                        else {
                            let sql = "insert into i_t_pos_additional (visite, tour_id, partner_id, nom_pos, quartier, x_odoo_id) values ( 'non' , " + tour_id + ", " + data.id + ", (select res_partner.nom_pos from res_partner where res_partner.id = " + data.id + "), (select res_partner.quartier from res_partner where res_partner.id = " + data.id + "), " + null + " )";
                            console.log("2911 =>", sql);
                            return this.db.executeSql(sql, [])
                                .then(insert => {
                                    this.insert_data_for_sync("i.t.pos.additional", insert.insertId, 0);
                                    if (type == 1) {
                                        this.insert_Visit_sheet(data.id, tour_id, "false", null, insert.insertId);
                                    }
                                }).catch(e => {
                                    console.log('Error on insert_pos_additionnal \n' + JSON.stringify(e));
                                });
                        }
                    })
                }
                else {
                    return null;
                }
            
        });
    }

    select_additionnal_pos(tour_id: number, tohiny: string): Promise<any> {
        let data_return = [];
        let sql = "select res_partner.id, res_partner.name as res_partner_name, res_partner.quartier, res_partner.nom_pos from res_partner  where res_partner.active = 1 and res_partner.id not in  (select i_t_pos_initial.partner_id from visit_sheet inner join i_t_pos_initial on visit_sheet.pos_initial_line_id = i_t_pos_initial.id where visit_sheet.tour_id = ?) and res_partner.id not in (select i_t_pos_additional.partner_id from visit_sheet inner join i_t_pos_additional on visit_sheet.pos_additional_line_id = i_t_pos_additional.id where visit_sheet.tour_id = ?) " + tohiny + "  order by res_partner.nom_pos";

        return this.db.executeSql(sql, [tour_id, tour_id])
            .then(data => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++)
                        data_return.push(data.rows.item(i));
                }
                return data_return;
            }).catch(e => {
                console.log('Error on get_i_t_canal_by_id_act_pdv \n' + JSON.stringify(e));
            });
    }

    update_x_odoo_id(synced_data: any): Promise<any> {

        let sql = "update " + synced_data.table.split('.').join('_') + " set x_odoo_id = " + synced_data.x_odoo_id + " , x_offline_id = "+ synced_data.id +" where " + synced_data.table.split('.').join('_') + ".id = " + synced_data.id + "";
        console.log("update_x_odoo_id => ", sql)
        return this.db.executeSql(sql).then(() => {
            console.log("3149 => tafa le update x_odoo_id");
        }).catch(e => {
            //console.log("1823 => ", e);
        });
    }

    unset_id(synced_data: any, v: string) : Promise<any>{
        let sql = "update " + synced_data.table.split('.').join('_') + " set id = " + synced_data.x_offline_id + " where x_odoo_id = " + synced_data.x_odoo_id + "";
        console.log("unset_id => ", sql)
        return this.db.executeSql(sql).then(() => {
            console.log("3295 => tafa le unset_id");
        }).catch(e => {
            console.log("3297 => TSY tafa le unset_id => " , e);
        });
    }


    init_data_for_sync(): Promise<any> {
        return this.db.executeSql("update data_for_sync set is_synced = 0").then(() => {
            console.log("vita");
        }).catch(e => {
            console.log("2922 => ", e)
        });
    }

    update_date_tournee(inona: string, tour_id: number) {
        let sql = "update i_t_tournee set " + inona + " = datetime('now','localtime') where id = ?";
        console.log("2959 => ", sql);
        return this.db.executeSql(sql, [tour_id]).then(() => {
            console.log("vita ny update i_t_tournée resaka daty");
        }).catch(e => {
            console.log("Tsy vita ny update i_t_tournée resaka daty => ", e);
        });
    }

    remove_pos_additional(id: number, tour_id: number): Promise<any> {
        let sql = "delete from i_t_pos_additional where id = ? and tour_id = ? ";
        return this.db.executeSql(sql, [id, tour_id]).then(data => {
            console.log("vita ny delete i_t_pos_additional");
            return this.db.executeSql("delete from data_for_sync where table_name = 'i.t.pos.additional' and table_id = ? ", [id]).then(data => {
                console.log("vita ny delete data_for_sync");
            }).catch(e => {
                console.log("error on delete data_for_sync", e);
            });
        }).catch(e => {
            console.log("error on delete i_t_pos_additional", e);
        })
    }

    dbm_update_data_for_sync(table_name: string, table_id: number): Promise<any> {
        let sql = "update data_for_sync set is_synced = 1 where table_name = REPLACE('" + table_name + "','_','.') and table_id = ? ";
        return this.db.executeSql(sql, [table_name, table_id]).then(() => {
            console.log("3048 => Tafa le update");
        });
    }

    get_p7_data(res_partner_id: number): Promise<any> {
        let data_return = [];
        console.log(res_partner_id);
        let sql = "select itg_survey.id as survey_id, ifnull(itg_survey_question.mandatory, 'false') as required, itg_survey_question.id as question_id, itg_survey_question.name as question, itg_survey_question.type ,( '[' || (group_concat ( ( '{ \"value\" : \"' ||itg_survey_label.id || '\", \"label\": \"' || itg_survey_label.name || '\"} ') , ',')) || ']')as answer_name from itg_survey inner join itg_survey_res_partner_rel on itg_survey.id = itg_survey_res_partner_rel.itg_survey_id inner join itg_survey_question on itg_survey.id = itg_survey_question.survey_id left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id where itg_survey.state = 'open' and itg_survey_res_partner_rel.res_partner_id = ? and itg_survey.id = (select itg_survey_res_partner_rel.itg_survey_id from itg_survey_res_partner_rel where itg_survey_res_partner_rel.res_partner_id = ? order by itg_survey_res_partner_rel.itg_survey_id desc limit 1) group by itg_survey_question.id "
        //let sql = "select itg_survey.id as survey_id, ifnull(itg_survey_question.mandatory, 'false') as required, itg_survey_question.id as question_id, itg_survey_question.name as question, itg_survey_question.type ,( '[' || (group_concat ( ( '{ \"value\" : \"' ||itg_survey_label.id || '\", \"label\": \"' || itg_survey_label.name || '\"} ') , ',')) || ']')as answer_name from itg_survey left join itg_survey_res_partner_rel on itg_survey.id = itg_survey_res_partner_rel.itg_survey_id left join itg_survey_question on itg_survey.id = itg_survey_question.survey_id left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id where itg_survey_res_partner_rel.res_partner_id = ? and itg_survey.state = 'open' group by itg_survey_question.id"
        //let sql = "select ifnull(itg_survey_question.mandatory, 'false') as required, itg_survey_question.id as question_id, itg_survey_question.name as question, itg_survey_question.type , ( '[' || (group_concat ( ( '{ \"value\" : \"' ||itg_survey_label.id || '\", \"label\": \"' || itg_survey_label.name || '\"} ') , ',')) || ']')as answer_name from itg_survey_question left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id group by itg_survey_question.id";
        return this.db.executeSql(sql, [res_partner_id, res_partner_id]).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    remove_survey(visit_survey_id: number, visit_sheet_id: number) {

        let sql = "delete from visit_survey where id = ? ";

        return this.db.executeSql(sql, [visit_survey_id]).then(data => {
            let query2 = "delete from data_for_sync where x_offline_id = ? and table_name = ? ";
            console.log(query2);
            return this.db.executeSql(query2, [visit_survey_id, "visit.survey"])
                .then(() => {
                    console.log('delete remove_survey with succes \n');
                }).catch(e => {
                    console.log('Error on remove_survey \n' + JSON.stringify(e));
                });
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    get_survey(visit_sheet_id: number): Promise<any> {
        let data_return = [];
        let sql = "select visit_survey.id, visit_survey.question, visit_survey.answer from visit_survey where visit_survey.visit_sheet_id = ?";
        return this.db.executeSql(sql, [visit_sheet_id]).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    save_survey(x_odoo_id: any, question: string, answer: string, visit_sheet_id: number, type: string) {
        console.log("3176 => ", JSON.stringify(answer))
        let sql = ""
        if (type == "choice") {
            sql = "insert into visit_survey (x_odoo_id, question, answer, visit_sheet_id) values ('" + x_odoo_id + "', \"" + question.toString() + "\", (select itg_survey_label.name from itg_survey_label where itg_survey_label.id = \"" + answer.toString() + "\"), '" + visit_sheet_id + "')";
        }
        else {
            sql = "insert into visit_survey (x_odoo_id, question, answer, visit_sheet_id) values ('" + x_odoo_id + "', \"" + question.toString() + "\", \"" + answer.toString() + "\", '" + visit_sheet_id + "')";
        }
        console.log(sql);
        return this.db.executeSql(sql, []).then(data => {
            let query2 = "insert into data_for_sync (table_name, table_id, is_synced,action_type) values (?, ?, ?,?)";
            console.log(query2);
            return this.db.executeSql(query2, ["visit.survey", data.insertId, 0, 1])
                .then(() => {
                    console.log('insert insert_new_data_for_sync with succes \n');
                }).catch(e => {
                    console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                });
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    get_last_four(visit_sheet_id: number, partner_id: number) {
        let data_return = [];
        let sql = "select avg(stock_line.available_stock) as last_visit_stock_avg from stock_line where stock_line.visit_sheet_id in (select visit_sheet.id from visit_sheet  inner join itg_product on stock_line.product_id = itg_product.id where visit_sheet.partner_id = " + partner_id + " and stock_line.visit_sheet_id < " + visit_sheet_id + " order by visit_sheet.id desc limit 4) group by stock_line.product_id";
        console.log("3172 => ", sql)
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    get_last_palcement_and_last_available_stock(visit_sheet_id: number, partner_id: number): Promise<any> {
        let data_return = [];
        let sql = "select stock_line.available_stock as last_visit_stock, stock_line.placement as last_placement from stock_line where stock_line.visit_sheet_id = (select visit_sheet.id from visit_sheet where visit_sheet.id < " + visit_sheet_id + " and visit_sheet.partner_id = " + partner_id + " order by visit_sheet.id desc limit 1)";
        console.log("3187 => " + sql);
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    get_last_criteria_response(visit_sheet_id: number, partner_id: number): Promise<any> {
        let data_return = [];
        let sql = "select avg(stock_line.available_stock) as moy from stock_line where stock_line.visit_sheet_id in (select visit_sheet.id from visit_sheet  inner join itg_product on stock_line.product_id = itg_product.id where visit_sheet.partner_id = ? and stock_line.visit_sheet_id < ? order by visit_sheet.id desc limit 4) group by stock_line.product_id";
        return this.db.executeSql(sql, [partner_id, visit_sheet_id]).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    check_if_synced(tablename: string, tableid: number): Promise<any> {
        let sql_pupd = "select data_for_sync.is_synced from data_for_sync where data_for_sync.table_name = '" + tablename + "' and data_for_sync.table_id = " + tableid;
        console.log("1727 => ", sql_pupd);
        return this.db.executeSql(sql_pupd, []).then(result => {
            console.log("1729 => ", JSON.stringify(result.rows.item(0)));
            if (result.rows.length > 0) {
                console.log("1731 => ", JSON.stringify(result.rows.item(0)));
                if (result.rows.item(0).is_synced == 1) {
                    return this.db.executeSql("update data_for_sync set is_synced = 0 where table_name = '" + tablename + "' and table_id = ?", [tableid]).then(res => {
                        console.log("if resync ok", res);
                    }).catch(e => console.log("1735 => ", e))
                }
            }
            else {
                return this.db.executeSql("insert into data_for_sync(table_name,table_id,is_synced,action_type) values(?,?,?,?)", [tablename, tableid, 0, 0]).then(res => {
                    console.log("else resync ok", res);
                }).catch(e => console.log("1742 => ", e));
            }
        }).catch(e => {
            console.log("1740 => ", e)
        })
    }

    get_supp_data(visit_sheet_id): Promise<any> {
        let data_return = [];
        let sql = "select y.name as visit_begin, z.name as visit_end from pos_audit_line as x left join pos_audit_answer as y on y.id = x.visit_begin left join pos_audit_answer as z on z.id = x.visit_end where x.visit_sheet_offline_id = " + visit_sheet_id;
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    get_last_audit_response(visit_sheet_id: number, partner_id: number): Promise<any> {
        let data_return = [];
        let sql = "select pos_audit_line.visit_end as last_visit_response from pos_audit_line where pos_audit_line.visit_sheet_id in (select visit_sheet.id from visit_sheet where visit_sheet.id < " + visit_sheet_id + " and visit_sheet.partner_id = " + partner_id + " order by visit_sheet.id desc limit 1)";
        console.log("3272 => ", sql);
        return this.db.executeSql(sql, [visit_sheet_id, partner_id]).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            else {
                data_return.push({last_visit_response : ""});
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    get_reg_sec_ag(): Promise<any> {
        //let sql = "select('[' || (group_concat(('{ \"id\" : \"' || i_t_region.id || '\", \"name\": \"' || i_t_region.name || '\"} ') , ',')) || ']') as region, ('[' || (group_concat(('{ \"id\" : \"' || i_t_agence.id || '\", \"name\": \"' || i_t_agence.name || '\"} ') , ',')) || ']') as agence , ('[' || (group_concat(('{ \"id\" : \"' || i_t_secteur.id || '\", \"name\": \"' || i_t_secteur.name || '\"} ') , ',')) || ']') as secteur from i_t_secteur inner join i_t_agence on i_t_secteur.agence_id = i_t_agence.id inner join i_t_region on i_t_agence.region_id = i_t_region.id where i_t_secteur.seller_id = "+user_id+" or i_t_secteur.promoter_id = "+user_id+" group by i_t_region.id" ;
        let sql2 = "select('[' || (group_concat(('{ \"id\" : \"' || i_t_region.id || '\", \"name\": \"' || i_t_region.name || '\"} ') , ',')) || ']') as region, ('[' || (group_concat(('{ \"id\" : \"' || i_t_agence.id || '\", \"name\": \"' || i_t_agence.name || '\"} ') , ',')) || ']') as agence , ('[' || (group_concat(('{ \"id\" : \"' || i_t_secteur.id || '\", \"name\": \"' || i_t_secteur.name || '\"} ') , ',')) || ']') as secteur from i_t_secteur inner join i_t_agence on i_t_secteur.agence_id = i_t_agence.id inner join i_t_region on i_t_agence.region_id = i_t_region.id where i_t_secteur.seller_id = (select res_users.id from res_users where res_users.active = 1) or i_t_secteur.promoter_id = (select res_users.id from res_users where res_users.active = 1) group by i_t_region.id"
        let data_return = [];
        return this.db.executeSql(sql2, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            let region = JSON.parse(data_return[0].region);
            let agence = JSON.parse(data_return[0].agence);
            let secteur = JSON.parse(data_return[0].secteur);

            if (region.length > 1) {
                region = region.slice(1, region.length - 1)
            }

            if (agence.length > 1) {
                agence = agence.slice(1, agence.length - 1)
            }

            data_return[0].region = region;
            data_return[0].agence = agence;
            data_return[0].secteur = secteur;

            return data_return;
        }).catch(e => {
            console.log("3331 => ", e);
        })
    }

    get_mes_villes(): Promise<any> {
        let data_return = [];
        let sql = 'select i_t_ville.id, i_t_ville.name from i_t_ville where i_t_ville.agence_id in(select i_t_secteur.agence_id from i_t_secteur where i_t_secteur.promoter_id in (select res_users.id from res_users where res_users.active = 1) or i_t_secteur.seller_id in (select res_users.id from res_users where res_users.active = 1)) ';
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3074 => ", e);
        })
    }

    async get_partner_for_sync(): Promise<any> {
        console.log("mande ko ny ato");
        let data_return = []
        return await this.db.executeSql("select id,REPLACE(table_name,'.','_') as table_name, is_synced, table_id, action_type, id from data_for_sync where is_synced = 0 and table_name = 'res.partner' group by table_name, table_id order by table_name desc limit 30", [])
            .then((data: any): any => {
                for (var i = 0; i < data.rows.length; i++) {
                    let requete = "";
                    if (data.rows.item(i).table_name == 'res_partner') {
                        requete = "select data_for_sync.id as data_for_sync_id, res_partner.*,(select group_concat(res_users_id) from res_users_res_partner_rel where partner_id = " + data.rows.item(i).table_id + " group by partner_id) as agent_commercial_ids, (select group_concat(i_t_permanent_posm_id) from i_t_permanent_posm_res_partner_rel where partner_id = " + data.rows.item(i).table_id + " group by partner_id)  as permanent_posm_ids, data_for_sync.table_name, data_for_sync.action_type from res_partner inner join data_for_sync on res_partner.id = data_for_sync.table_id where res_partner.id = " + data.rows.item(i).table_id + " and data_for_sync.table_name = 'res.partner' group by res_partner.id";
                    }
                    /*else {
                        requete = "select " + data.rows.item(i).id + " as data_for_sync_id, replace ('" + data.rows.item(i).table_name + "', '_', '.') as table_name, " + data.rows.item(i).table_name + ".* from " + data.rows.item(i).table_name + " where " + data.rows.item(i).table_name + ".id = " + data.rows.item(i).table_id + " ";
                    }*/

                    this.db.executeSql(requete, [])
                        .then((data) => {
                            if (data.rows.length > 0) {
                                for (var i = 0; i < data.rows.length; i++) {
                                    data_return.push(data.rows.item(i));
                                }
                                return data_return;
                            }
                            else {
                                console.log("tys nisy tao > ", requete)
                            }
                        }).catch(e => {
                            console.log("error 3421 => ", e)
                        });
                }
                return data_return;
            }).catch(e => console.log("get_partner_for_sync dbm error : " + e.message))
    }

    get_tournee_for_sync(): Promise<any> {
        let data_return = [];
        let sql = "select 'i.t.tournee' as table_name, i_t_tournee.* from i_t_tournee where i_t_tournee.state != 'nouveau' order by i_t_tournee.x_offline_create_date desc limit 10";
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    if (data.rows.item(i).start_date && data.rows.item(i).end_date) {
                        data.rows.item(i).state = "cloture";
                        console.log("cas 1");
                    }

                    if (data.rows.item(i).start_date && !data.rows.item(i).end_date) {
                        data.rows.item(i).state = "demarre";
                        console.log("cas 2");
                    }

                    if (!data.rows.item(i).start_date && !data.rows.item(i).end_date) {
                        data.rows.item(i).state = "nouveau";
                        console.log("cas 3");
                    }

                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;
        }).catch(e => {
            console.log("3449 => ", e);
        });
    }

    get_visit_sheet_for_sync(): Promise<any> {
        let data_return = [];
        let sql = "select 'visit.sheet' as table_name, visit_sheet.* from visit_sheet where visit_sheet.state != 'new' order by visit_sheet.x_offline_create_date desc limit 30";
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    data_return.push(data.rows.item(i));
                }
            }
            return data_return;
        }).catch(e => {
            console.log("3567 => ", e);
        });
    }

    get_my_today_goal(visit_sheet_id : number) {
        let data_return = [];
        let query: string = "select visit_sheet.next_visit_goal where visit_sheet.partner_id = ? order by id desc limit 1";
        return this.db.executeSql(query, [visit_sheet_id])
            .then((value) => {
                if (value.rows.item(0)) {
                    return value.rows.item(0) ;
                }
                else {
                    return {
                        next_visit_goal : "Aucun objectif pour ce pdv"
                    };
                }
                
            })
            .catch(e => console.log(e.message));
    }

    repair_data_for_sync() {
        let requete = [
            "insert into data_for_sync select null as id, null as x_offline_id, null as x_odoo_id, 'price.line' as table_name, 0 as is_synced, price_line.id as table_id, 0 as action_type, null as type from price_line inner join visit_sheet on price_line.visit_sheet_id = visit_sheet.id where price_line.x_odoo_id is null",
            "insert into data_for_sync select null as id, null as x_offline_id, null as x_odoo_id, 'stock.line' as table_name, 0 as is_synced, stock_line.id as table_id, 0 as action_type, null as type from stock_line inner join visit_sheet on stock_line.visit_sheet_id = visit_sheet.id where stock_line.x_odoo_id is null",
            "insert into data_for_sync select null as id, null as x_offline_id, null as x_odoo_id, 'plv.line' as table_name, 0 as is_synced, plv_line.id as table_id, 0 as action_type, null as type from plv_line inner join visit_sheet on plv_line.visit_sheet_id = visit_sheet.id where plv_line.x_odoo_id is null",
            "insert into data_for_sync select null as id, null as x_offline_id, null as x_odoo_id, 'pos.audit.line' as table_name, 0 as is_synced, pos_audit_line.id as table_id, 0 as action_type, null as type from pos_audit_line inner join visit_sheet on pos_audit_line.visit_sheet_id = visit_sheet.id where pos_audit_line.x_odoo_id is null",
            "insert into data_for_sync select null as id, null as x_offline_id, null as x_odoo_id, 'visit.survey' as table_name, 0 as is_synced, visit_survey.id as table_id, 0 as action_type, null as type from visit_survey inner join visit_sheet on visit_survey.visit_sheet_id = visit_sheet.id where visit_survey.x_odoo_id is null"
        ];
        for (var i = 0; i < requete.length; i++) {
            this.db.executeSql(requete[i], []).then(() => {
                console.log("Force insert success");
            }).catch(e => {
                console.log("3449 => ", e);
            });
        }
    }

    verify_data(): Promise<any> {
        let data_return = {};
        //let sql = "select count (*) as non_synced from data_for_sync where data_for_sync.is_synced = 0" ;
        let sql = "select ( (select count (*) as non_synced from data_for_sync where data_for_sync.is_synced = 0) - (select count(id) from visit_sheet where visit_sheet.state = 'new') ) as non_synced"
        return this.db.executeSql(sql, []).then(data => {
            if (data.rows.length > 0) {

                if (data.rows.item(0).non_synced > 3000) {
                    data_return = { 'severity': 'error', 'color': "#b72121", 'non_synced': "Vous avez " + data.rows.item(0).non_synced + " données non-syncronisées." };
                }
                else if (data.rows.item(0).non_synced >= 1500 && data.rows.item(0).non_synced <= 3000) {
                    data_return = { 'severity': 'warn', 'color': "#e6db10", 'non_synced': "Vous avez " + data.rows.item(0).non_synced + " données non-syncronisées." };
                }
                else {
                    data_return = { 'severity': 'success', 'color': "#21b799", 'non_synced': "Vous avez " + data.rows.item(0).non_synced + " données non-syncronisées." };
                }

                if (data.rows.item(0).non_synced <= 0) {
                    data_return = { 'severity': 'none', 'color': "transparent", 'non_synced': "Vous avez 0 donnée non-syncronisée." };
                }

                if (data.rows.item(0).non_synced == 1) {
                    data_return = { 'severity': 'success', 'color': "#21b799", 'non_synced': "Vous avez " + data.rows.item(0).non_synced + " donnée non-syncronisée." };
                }
                return data_return;
            }
        }).catch(e => {
            console.log("3449 => ", e);
        });
    }

    async make_alert() {
        //alert("Vous avez atteint le nombre maximum d\'element à syncroniser. Voulez-vous procéder à la synchronisation ?",)
        const alrt = await this.alertctrl.create({
            header: 'Pensez à syncroniser.',
            message: "Vous avez atteint le nombre maximum d\'element à syncroniser. Voulez-vous procéder à la synchronisation ?",
            buttons: [
                {
                    text: 'Ignorer',
                    role: 'ignore',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Synchroniser',
                    handler: () => {

                        this.router.navigate(["synchro"])
                    }
                }
            ]
        });

        await alrt.present();
    }


    clear_database() {
        let table = ["i_t_tournee", "i_t_pos_initial", "i_t_pos_additional", "visit_sheet", "visit_survey", "stock_line", "price_line", "pos_audit_line", "plv_line"];
        let sql = "";
        let sql_2 = "";
        for (var i = 0; i < table.length; i++) {
            sql = "delete from " + table[i] + " where " + table[i] + ".id in (select data_for_sync.table_id from data_for_sync inner join " + table[i] + " on " + table[i] + ".id = data_for_sync.table_id where data_for_sync.table_name =  '" + table[i].split('_').join('.') + "' and is_synced = 1 and " + table[i] + ".x_offline_create_date < datetime('now', '-30 days'))";
            sql_2 = "delete from " + table[i] + " where not x_offline_create_date or x_offline_create_date = null or x_offline_create_date = NULL"
            this.db.executeSql(sql, []).then(() => { console.log("mande n clean") }).catch(e => { console.log("3624 => ", e) });
            this.db.executeSql(sql_2, []).then(() => { console.log("mande n clean") }).catch(e => { console.log("3624 => ", e) });
        }
        this.createToast("Nettoyage de la base de données avec succès");
    }

    get_user_info(id : number) : Promise<any> {
        let sql = "select name from res_users where id = ? " ;
        return this.db.executeSql(sql, [id]).then((value) => {
            if (value.rows.item(0)) {
                return value.rows.item(0) ;
            }
            else {
                return {
                    name : ""
                };
            }
            
        })
        .catch(e => console.log(e.message));
    }


    get_all_user() : Promise<any> {
        let data_return = [] ;
        return this.db.executeSql("select res_users.name, res_users.password from res_users", []).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++)
                    data_return.push(data.rows.item(i));
            }
            return data_return;
        }).catch(e => {
            console.log("3747 => ", e);
        })
    }

    set_region() {
        let sql = "insert into i_t_region (id, x_odoo_id, name) values (4, 4, 'Sud'), (5, 5, 'Centre'),(6, 6, 'Nord')" ;
        return this.db.executeSql(sql, []).then(data => {
            console.log("3765 => ", data)
        }).catch(e => {
            console.log("3767 => ", e)
        })
    }


    insert_tournee() : Promise<any> {
        return this.db.executeSql("insert into i_t_tournee (name, commercial_id, date, state) values ('tournee test 01', 188, '2020-07-08', 'nouveau')", []).then(data => {
            console.log("3765 => ", data)
        }).catch(e => {
            console.log("3767 => ", e)
        })
    }

    delete_test(tablename : string, id : number) : Promise<any> {
        return this.db.executeSql("delete from "+ tablename +" where id > '"+ id +"' ", []).then(data => {
            console.log("ok")
        }).catch(e => {
            console.log( "3775 => ",  e) ;
        })
    }

    get_max_of_table(table_name : string) : Promise<any> {
        let data_return = [] ;
            let sql2 = "select REPLACE('"+ table_name +"','_','.') as table_name , ifnull(max(id),1) as max_id from "+table_name+" " ;
            return this.db.executeSql(sql2, []).then(data => {
                if(data) {
                    data_return.push(data.rows.item(0))
                }
                return data_return ;
            }).catch(e => {
                console.log( "3789 => ",  e) ;
        }) ;
            
    }

    get_max_off_all_table() : any[] {
        let resp = [] ;
        this.get_max_of_table("i_t_pos_initial").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("i_t_pos_additional").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("i_t_tournee").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("visit_sheet").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("stock_line").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("plv_line").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("pos_audit_line").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("res_partner").then(data => { resp.push(data[0]) }) ;
        this.get_max_of_table("visit_survey").then(data => { resp.push(data[0]) }) ;
        return resp ;
    }

    update_active_res_partner_1() {
        let sql = "update res_partner set active = 1 where active = 'true' "
        return this.db.executeSql(sql, []).then(data => {

        }).catch(e=> {

        })
    }

    remove_appro() {
        let sql = "update res_partner set fournisseur_principal_id = null , source_approvisionnement_id = null , fournisseur_secondaire_id = null where 1"
        return this.db.executeSql(sql, []).then(data => {

        }).catch(e=> {

        })
    }

    update_active_res_partner_2() {
        let sql = "update res_partner set active = 0 where active = 'false' "
        return this.db.executeSql(sql, []).then(data => {

        }).catch(e=> {

        })
    }

    update_active_res_partner_3() {
        let sql = "update res_partner set x_offline_id = id "
        return this.db.executeSql(sql, []).then(data => {

        }).catch(e=> {

        })
    }

    

}
