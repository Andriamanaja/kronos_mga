export const environment = {
  production: true
};

import { HttpHeaders } from '@angular/common/http';

export const base_url_for_sync = 'http://localhost:3000/' ;
export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
};
export const one_signal_app_id : string = "53177fa0-fee4-4085-b1af-9176f9c7b77a"

//TABLES
export const request_res_partner : string = "create table if not exists res_partner (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, name varchar(40), active tinyint(4) default 0, employee tinyint(4)	, ref varchar(40), email varchar(40),  phone varchar(40),  write_uid INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) ,  partner_latitude numeric,partner_longitude numeric,   type_quartier_id INTEGER, source_approvisionnement_id INTEGER, cible_installation_presentoirs_id INTEGER, numero_telephone2 varchar(40), numero_telephone3 varchar(40),numero_telephone1 varchar(40),couverture_commerciale_id INTEGER, classification2_id INTEGER, nom_gerant varchar(40), frequence_approvisionnement_id INTEGER, enseigne_appartenance_id INTEGER,agence_id INTEGER, activite_pos_id INTEGER, fournisseur_principal_id INTEGER, contrat_id INTEGER, fournisseur_secondaire_id INTEGER,  nom_agent_commercial_id INTEGER, cible_activation_id INTEGER, state varchar(40) default 'brouillon', statut_client_id INTEGER,  point_de_vente tinyint(4) default 1	, repere varchar(40), emplacement_id INTEGER, cooperation_itg_id INTEGER,  proximite_id INTEGER, frequence_visite_id INTEGER, adresse varchar(40), preference_animateur_id INTEGER, provider_latitude numeric, zone_id INTEGER, latitude double , commentaire text, longitude double, message_warning text, region_id INTEGER, nom_pos varchar(40),   quartier varchar(40),  ville_id INTEGER, type_client_id INTEGER, utilisateur_associe_id INTEGER,  secteur_id INTEGER, provider_longitude numeric,     code_client varchar(40), activation_autorisee_id INTEGER, is_today tinyint(4)	,classification1_id INTEGER,     visite varchar(40),   canal_id tinyint(4), photo_uri varchar(40), photo blob, new_source_approvisionnement_id INTEGER, new_fournisseur_principal_id INTEGER, new_fournisseur_secondaire_id INTEGER)" ;
export const request_res_users : string = "create table if not exists res_users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER,name varchar(100), active TINYINT(4), login varchar(40), password varchar(40), write_uid INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , password_crypt varchar(200))" ;
export const request_i_t_activation_autorisee : string = "create table if not exists i_t_activation_autorisee (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_activite_pos : string = "create table if not exists i_t_activite_pos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), canal_id INTEGER, write_uid INTEGER)" ;
export const request_i_t_agence : string = "create table if not exists i_t_agence (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , code varchar(40), name varchar(40), write_uid INTEGER, region_id INTEGER)" ;
export const request_i_t_cible_activation : string = "create table if not exists i_t_cible_activation (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)";
export const request_i_t_cible_installation_presentoirs : string = "create table if not exists i_t_cible_installation_presentoirs (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_classification1 : string = "create table if not exists i_t_classification1 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_classification2 : string = "create table if not exists i_t_classification2 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_contrat : string = "create table if not exists i_t_contrat (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, date_debut_contrat TIMESTAMP, date_fin_contrat TIMESTAMP)" ;
export const request_i_t_cooperation_itg : string = "create table if not exists i_t_cooperation_itg (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_couverture_commerciale : string = "create table if not exists i_t_couverture_commerciale (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_emplacement : string = "create table if not exists i_t_emplacement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_enseigne_appartenance : string = "create table if not exists i_t_enseigne_appartenance (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_client_grossiste : string = "create table if not exists i_t_client_grossiste (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_frequence_approvisionnement : string = "create table if not exists i_t_frequence_approvisionnement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_frequence_visite : string = "create table if not exists i_t_frequence_visite (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_fournisseur_principale : string = "create table if not exists i_t_fournisseur_principale (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_fournisseur_secondaire : string = "create table if not exists i_t_fournisseur_secondaire (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_permanent_posm : string = "create table if not exists i_t_permanent_posm (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, manufacturer_id integer)" ;
export const request_i_t_preference_animateur : string = "create table if not exists i_t_preference_animateur (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_proximite : string = "create table if not exists i_t_proximite (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_secteur : string = "create table if not exists i_t_secteur (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , code varchar(40), name varchar(40), seller_id integer, promoter_id integer, write_uid INTEGER, zone_id INTEGER,agence_id INTEGER)" ;
export const request_i_t_source_approvisionnement : string = "create table if not exists i_t_source_approvisionnement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_canal : string = "create table if not exists i_t_canal (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_statut_client : string = "create table if not exists i_t_statut_client (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_type_client : string = "create table if not exists i_t_type_client (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, code varchar(40) )" ;
export const request_i_t_type_quartier : string = "create table if not exists i_t_type_quartier (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER)" ;
export const request_i_t_ville : string = "create table if not exists i_t_ville (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, region_id INTEGER, agence_id INTEGER)" ;
export const request_i_t_zone : string = "create table if not exists i_t_zone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, agence_id INTEGER)" ;
export const request_i_t_tournee : string = "create table if not exists i_t_tournee (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, commercial_id tinyint(4), date TIMESTAMP, start_date TIMESTAMP, end_date TIMESTAMP, state tinyint(4))" ;
export const request_i_t_pos_initial : string = "create table if not exists i_t_pos_initial (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, nom_pos varchar(50), quartier varchar(50), create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, sequence INTEGER, visite varchar (40), tour_id INTEGER, partner_id INTEGER)" ;
export const request_i_t_pos_additional : string = "create table if not exists i_t_pos_additional (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, nom_pos varchar(50), quartier varchar(50), create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, sequence INTEGER, visite varchar (40), tour_id INTEGER, partner_id INTEGER)" ;
export const request_visit_sheet : string = "create table if not exists visit_sheet (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), nom_pos varchar(40), quartier varchar (40), write_uid INTEGER, page_number_total varchar(40), show_btn_end_visit tinyint (4), visit_duration double, partner_id INTEGER, user_id INTEGER, state varchar (40) default 'new', provider_longitude numeric, begin_datetime TIMESTAMP , next_visit_goal text, provider_latitude numeric, end_datetime TIMESTAMP , hide_btn_next_next_page tinyint (4), tour_id INTEGER, visit_duration_str varchar(40), pos_initial varchar(8), region_id INTEGER, secteur_id INTEGER, agence_id INTEGER, zone_id INTEGER, has_survey tinyint(4), pos_initial_line_id INTEGER, pos_additional_line_id INTEGER, survey_id INTEGER)" ;
export const request_stock_line : string = "create table if not exists stock_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , placement INTEGER, product_id INTEGER, write_uid INTEGER, visit_sheet_id INTEGER, available_stock INTEGER, manufacturer_id INTEGER, last_visit_stock INTEGER)";
export const request_itg_manufacturer : string = "create table if not exists itg_manufacturer (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), sequence INTEGER, write_uid INTEGER)" ;
export const request_itg_product : string = "create table if not exists itg_product (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , begin_date TIMESTAMP, name varchar(40), end_date TIMESTAMP, retailer_unit_sale_price double, retailer_pqt_sale_price double, grs_cost_price double, tax_status_id INTEGER, dmg_sale_price double, write_uid INTEGER, brand_id INTEGER, dmg_cost_price double, active tinyint(4), grs_sale_price double, manufacturer_id INTEGER, ref varchar(40), product_type_code varchar(40), product_type INTEGER)" ;
export const request_itg_product_type : string = "create table if not exists itg_product_type (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, brand_id INTEGER, code varchar(40) )" ;
export const request_price_line : string = "create table if not exists price_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , product_id INTEGER, currency_id INTEGER, visit_sheet_id INTEGER, current_price INTEGER, manufacturer_id INTEGER, name varchar(40), write_uid INTEGER)";
export const request_res_currency : string = "create table if not exists res_currency (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), symbol varchar(40), write_uid INTEGER, rounding DOUBLE, active tinyint(4), position varchar(40))";
export const request_pos_audit_line : string = "create table if not exists pos_audit_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, visit_begin_moved0 tinyint(4), create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , audit_criteria_id INTEGER, name varchar(40), write_uid INTEGER, note varchar(40), visit_sheet_id INTEGER, visit_end_moved0 tinyint(4), visit_begin INTEGER, visit_end INTEGER)" ;
export const request_pos_audit_answer : string = "create table if not exists pos_audit_answer (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, criteria_id INTEGER)" ;
export const request_pos_audit_criteria : string = "create table if not exists pos_audit_criteria (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, active tinyint(4))";
export const request_plv_line : string = "create table if not exists plv_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , product_id INTEGER, visit_sheet_id INTEGER, manufacturer_id INTEGER, quantity INTEGER, name varchar(40), write_uid INTEGER)";
export const request_itg_survey : string = "create table if not exists itg_survey (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, view_id integer, state varchar(40), field_default_value varchar(40))" ;
export const request_itg_survey_question : string = "create table if not exists itg_survey_question (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, type VARCHAR(40), page_id INTEGER, mandatory TINYINT(4), sequence INTEGER, survey_id INTEGER)" ;
export const request_itg_survey_label : string = "create table if not exists itg_survey_label (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , name varchar(40), write_uid INTEGER, quizz_mark INTEGER, question_id INTEGER)" ;
export const request_data_for_sync : string = "create table if not exists data_for_sync (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, table_name varchar(30), is_synced tinyint(4), table_id integer, action_type integer, type varchar(40))" ;
export const request_permanent_posm_res_partner_rel : string = "create table if not exists i_t_permanent_posm_res_partner_rel (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, permanent_posm_id integer, partner_id integer)" ;
export const request_res_partner_res_users_rel : string = "create table if not exists res_partner_res_users_rel (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, res_users_id integer, res_partner_id integer)" ;
export const request_i_t_region : string = "create table if not exists i_t_region (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, create_uid INTEGER, x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) , code varchar(255), name varchar(255), write_uid INTEGER)" ;
export const request_tax_status : string =" create table if not exists tax_status (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER,create_uid number,name,write_uid number) ";
export const request_kronos_back_data : string = " create table if not exists kronos_back_data(data_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER,tablename varchar(50),id number,user_id number)";
export const request_visit_survey : string = "create table if not exists visit_survey (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, question varchar (250),answer varchar (250), visit_sheet_id varchar (250), x_offline_create_date DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW', 'localtime')) )";
export const request_itg_partner_wholesaler : string = "create table if not exists itg_partner_wholesaler (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, name varchar (50), nom_pos varchar (50), active tinyint(4), type_client_id INTEGER, state varchar (50), partner_id INTEGER, region_id INTEGER, agence_id INTEGER, zone_id INTEGER, secteur_id INTEGER, ville_id INTEGER, quartier INTEGER)" ;
export const request_kronos_maj_function : string = "create table if not exists kronos_maj_function (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name varchar (50) , is_executed INTEGER NOT NULL DEFAULT 0) "
// VIEWS
export const four_last_view : string = "create view if not exists four_last as select avg(last_visit_stock) as last_four_visit,product_id,create_uid,manufacturer_id from stock_line where visit_sheet_id in (select DISTINCT visit_sheet_id from stock_line where visit_sheet_id order by visit_sheet_id DESC) group by product_id,create_uid;" ;
export const user_partner_concatened : string = "create view user_partner_concatened as select res_partner.id ,res_partner.name, group_concat(res_users.login, '|') as cnc_login, group_concat(res_users.id , '|') as cnc_usr_id from res_partner_res_users_rel left join res_partner on res_partner_res_users_rel.partner_id = res_partner.id left join res_users on res_partner_res_users_rel.res_users_id = res_users.id group by res_partner.id" ;
export const posm_partner_concatened : string = "create view posm_partner_concatened as select res_partner.id, res_partner.name, group_concat(i_t_permanent_posm.name , '|') as cnc_posm, group_concat(i_t_permanent_posm.id , '|') as cnc_posm_id from i_t_permanent_posm_res_partner_rel left join res_partner on i_t_permanent_posm_res_partner_rel.partner_id = res_partner.id left join i_t_permanent_posm on i_t_permanent_posm_res_partner_rel.permanent_posm_id = i_t_permanent_posm.id group by res_partner.id"
export const request_itg_survey_res_partner_rel : string = "create table if not exists itg_survey_res_partner_rel (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, itg_survey_id integer not null, res_partner_id not null)" ;
export const request_i_t_fonction_ac : string = "create table if not exists i_t_fonction_ac_itg_survey_rel (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, name varchar(50) )"
export const request_i_t_fonction_ac_itg_survey_rel : string = "create table if not exists i_t_fonction_ac_itg_survey_rel (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  x_offline_id INTEGER, x_odoo_id INTEGER, itg_survey_id integer not null, i_t_fonction_ac_id not null)" ;

//VIEW
export const disabled_field_admin : string[] = ["region_id", "agence_id", "secteur_id", "nom_pos", "nom_gerant", "adresse", "repere", "quartier", "ville_id", "numero_telephone1", "numero_telephone2", "numero_telephone3", "emplacement_id", "proximite_id", "type_quartier_id", "provider_latitude", "provider_longitude", "type_client_id", "activite_pos_id", "enseigne_appartenance_id", "classification1_id", "classification2_id", "couverture_commerciale_id", "frequence_visite_id", "user_id", "canal_id", "active", "cible_installation_presentoirs_id", "contrat_id", "date_debut_contrat", "date_fin_contrat", "cooperation_itg_id", "activation_autorisee_id", "preference_animateur_id", "frequence_approvisionnement_id", "source_approvisionnement_id", "fournisseur_principal_id", "fournisseur_secondaire_id", "visite", "commentaire"]
//VIEW

export const edit_price_line : string = "alter table price_line add column rod_current_price integer null"
export const edit_stock_line_add_visit_sheet_offline_id = "alter table stock_line add visit_sheet_offline_id integer null" ;
export const edit_price_line_add_visit_sheet_offline_id = "alter table price_line add visit_sheet_offline_id integer null" ;
export const edit_plv_line_add_visit_sheet_offline_id = "alter table plv_line add visit_sheet_offline_id integer null" ;
export const edit_pos_audit_line_add_visit_sheet_offline_id = "alter table pos_audit_line add visit_sheet_offline_id integer null" ;
export const edit_visit_survey_add_visit_sheet_offline_id = "alter table visit_survey add visit_sheet_offline_id integer null" ;
export const edit_permanent_posm_res_partner_rel = "alter table i_t_permanent_posm_res_partner_rel add column permanent_posm_id integer null"
//STATE
export const tournee_state = [
  {
    "db" : "nouveau",
    "screen" : "Nouvelle"
  } ,
  {
    "db" : "demarre",
    "screen" : "Démarrée"
  } ,
  {
    "db" : "cloture",
    "screen" : "Clôturée"
  }
]

export const res_partner_state = [
  {
    "db" : "brouillon",
    "screen" : "PROSPECT"
  } ,
  {
    "db" : "superviseur",
    "screen" : "SUPERVISEUR"
  } ,
  {
    "db" : "administrateur",
    "screen" : "ADMINISTRATEUR"
  }
]

export const visit_sheet_state = [
  {
    "db" : "new",
    "screen" : "Nouvelle"
  } ,
  {
    "db" : "open",
    "screen" : "Ouverte"
  } ,
  {
    "db" : "closed",
    "screen" : "Clôturée"
  }
]


//STATE