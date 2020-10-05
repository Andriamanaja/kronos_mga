var res_partner = /** @class */ (function () {
    function res_partner(name, company_id, comment, website, create_date, color, active, street, supplier, city, display_name, zip, title, country_id, commercial_company_name, parent_id, company_name, employee, ref, email, is_company, fonction, lang, fax, street2, barcode, phone, write_date, daty, tz, write_uid, customer, create_uid, credit_limit, user_id, mobile, type, partner_share, vat, state_id, commercial_partner_id, Date_localization, partner_latitude, partner_longitude, notify_email, message_last_post, opt_out, message_bounce, signup_type, signup_expiration, signup_token, team_id, calendar_last_notif_ack, type_quartier_id, source_approvisionnement_id, cible_installation_presentoirs_id, numero_telephone2, numero_telephone3, numero_telephone1, couverture_commerciale_id, classification2_id, nom_gerant, frequence_approvisionnement_id, enseigne_appartenance_id, agence_id, activite_pos_id, fournisseur_principal_id, contrat_id, fournisseur_secondaire_id, nom_agent_commercial_id, cible_activation_id, state, statut_client_id, permanent_POSM5_id, point_de_vente, repere, emplacement_id, cooperation_itg_id, proximite_id, frequence_visite_id, permanent_POSM3_id, permanent_POSM1_id, adresse, preference_animateur_id, provider_latitude, zone_id, latitude, commentaire, longitude, message_warning, permanent_POSM4_id, region_id, nom_pos, quartier, ville_id, type_client_id, utilisateur_associe_id, permanent_POSM2_id, secteur_id, provider_longitude, code_client, activation_autorisee_id, is_today, classification1_id, a_visiter_moved0, visite, a_visite, a_visiter, canal_id, id) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.company_id = company_id;
        this.comment = comment;
        this.website = website;
        this.create_date = create_date;
        this.color = color;
        this.active = active;
        this.street = street;
        this.supplier = supplier;
        this.city = city;
        this.display_name = display_name;
        this.zip = zip;
        this.title = title;
        this.country_id = country_id;
        this.commercial_company_name = commercial_company_name;
        this.parent_id = parent_id;
        this.company_name = company_name;
        this.employee = employee;
        this.ref = ref;
        this.email = email;
        this.is_company = is_company;
        this.fonction = fonction;
        this.lang = lang;
        this.fax = fax;
        this.street2 = street2;
        this.barcode = barcode;
        this.phone = phone;
        this.write_date = write_date;
        this.daty = daty;
        this.tz = tz;
        this.write_uid = write_uid;
        this.customer = customer;
        this.create_uid = create_uid;
        this.credit_limit = credit_limit;
        this.user_id = user_id;
        this.mobile = mobile;
        this.type = type;
        this.partner_share = partner_share;
        this.vat = vat;
        this.state_id = state_id;
        this.commercial_partner_id = commercial_partner_id;
        this.Date_localization = Date_localization;
        this.partner_latitude = partner_latitude;
        this.partner_longitude = partner_longitude;
        this.notify_email = notify_email;
        this.message_last_post = message_last_post;
        this.opt_out = opt_out;
        this.message_bounce = message_bounce;
        this.signup_type = signup_type;
        this.signup_expiration = signup_expiration;
        this.signup_token = signup_token;
        this.team_id = team_id;
        this.calendar_last_notif_ack = calendar_last_notif_ack;
        this.type_quartier_id = type_quartier_id;
        this.source_approvisionnement_id = source_approvisionnement_id;
        this.cible_installation_presentoirs_id = cible_installation_presentoirs_id;
        this.numero_telephone2 = numero_telephone2;
        this.numero_telephone3 = numero_telephone3;
        this.numero_telephone1 = numero_telephone1;
        this.couverture_commerciale_id = couverture_commerciale_id;
        this.classification2_id = classification2_id;
        this.nom_gerant = nom_gerant;
        this.frequence_approvisionnement_id = frequence_approvisionnement_id;
        this.enseigne_appartenance_id = enseigne_appartenance_id;
        this.agence_id = agence_id;
        this.activite_pos_id = activite_pos_id;
        this.fournisseur_principal_id = fournisseur_principal_id;
        this.contrat_id = contrat_id;
        this.fournisseur_secondaire_id = fournisseur_secondaire_id;
        this.nom_agent_commercial_id = nom_agent_commercial_id;
        this.cible_activation_id = cible_activation_id;
        this.state = state;
        this.statut_client_id = statut_client_id;
        this.permanent_POSM5_id = permanent_POSM5_id;
        this.point_de_vente = point_de_vente;
        this.repere = repere;
        this.emplacement_id = emplacement_id;
        this.cooperation_itg_id = cooperation_itg_id;
        this.proximite_id = proximite_id;
        this.frequence_visite_id = frequence_visite_id;
        this.permanent_POSM3_id = permanent_POSM3_id;
        this.permanent_POSM1_id = permanent_POSM1_id;
        this.adresse = adresse;
        this.preference_animateur_id = preference_animateur_id;
        this.provider_latitude = provider_latitude;
        this.zone_id = zone_id;
        this.latitude = latitude;
        this.commentaire = commentaire;
        this.longitude = longitude;
        this.message_warning = message_warning;
        this.permanent_POSM4_id = permanent_POSM4_id;
        this.region_id = region_id;
        this.nom_pos = nom_pos;
        this.quartier = quartier;
        this.ville_id = ville_id;
        this.type_client_id = type_client_id;
        this.utilisateur_associe_id = utilisateur_associe_id;
        this.permanent_POSM2_id = permanent_POSM2_id;
        this.secteur_id = secteur_id;
        this.provider_longitude = provider_longitude;
        this.code_client = code_client;
        this.activation_autorisee_id = activation_autorisee_id;
        this.is_today = is_today;
        this.classification1_id = classification1_id;
        this.a_visiter_moved0 = a_visiter_moved0;
        this.visite = visite;
        this.a_visite = a_visite;
        this.a_visiter = a_visiter;
        this.canal_id = canal_id;
    }
    res_partner.prototype.get_id = function () {
        return this.id;
    };
    res_partner.prototype.get_name = function () {
        return this.name;
    };
    res_partner.prototype.get_company_id = function () {
        return this.company_id;
    };
    res_partner.prototype.get_comment = function () {
        return this.comment;
    };
    res_partner.prototype.get_website = function () {
        return this.website;
    };
    res_partner.prototype.get_create_date = function () {
        return this.create_date;
    };
    res_partner.prototype.get_color = function () {
        return this.color;
    };
    res_partner.prototype.get_active = function () {
        return this.active;
    };
    res_partner.prototype.get_street = function () {
        return this.street;
    };
    res_partner.prototype.get_supplier = function () {
        return this.supplier;
    };
    res_partner.prototype.get_city = function () {
        return this.city;
    };
    res_partner.prototype.get_display_name = function () {
        return this.display_name;
    };
    res_partner.prototype.get_zip = function () {
        return this.zip;
    };
    res_partner.prototype.get_title = function () {
        return this.title;
    };
    res_partner.prototype.get_country_id = function () {
        return this.country_id;
    };
    res_partner.prototype.get_commercial_company_name = function () {
        return this.commercial_company_name;
    };
    res_partner.prototype.get_parent_id = function () {
        return this.parent_id;
    };
    res_partner.prototype.get_company_name = function () {
        return this.company_name;
    };
    res_partner.prototype.get_employee = function () {
        return this.employee;
    };
    res_partner.prototype.get_ref = function () {
        return this.ref;
    };
    res_partner.prototype.get_email = function () {
        return this.email;
    };
    res_partner.prototype.get_is_company = function () {
        return this.is_company;
    };
    res_partner.prototype.get_fonction = function () {
        return this.fonction;
    };
    res_partner.prototype.get_lang = function () {
        return this.lang;
    };
    res_partner.prototype.get_fax = function () {
        return this.fax;
    };
    res_partner.prototype.get_street2 = function () {
        return this.street2;
    };
    res_partner.prototype.get_barcode = function () {
        return this.barcode;
    };
    res_partner.prototype.get_phone = function () {
        return this.phone;
    };
    res_partner.prototype.get_write_date = function () {
        return this.write_date;
    };
    res_partner.prototype.get_daty = function () {
        return this.daty;
    };
    res_partner.prototype.get_tz = function () {
        return this.tz;
    };
    res_partner.prototype.get_write_uid = function () {
        return this.write_uid;
    };
    res_partner.prototype.get_customer = function () {
        return this.customer;
    };
    res_partner.prototype.get_create_uid = function () {
        return this.create_uid;
    };
    res_partner.prototype.get_credit_limit = function () {
        return this.credit_limit;
    };
    res_partner.prototype.get_user_id = function () {
        return this.user_id;
    };
    res_partner.prototype.get_mobile = function () {
        return this.mobile;
    };
    res_partner.prototype.get_type = function () {
        return this.type;
    };
    res_partner.prototype.get_partner_share = function () {
        return this.partner_share;
    };
    res_partner.prototype.get_vat = function () {
        return this.vat;
    };
    res_partner.prototype.get_state_id = function () {
        return this.state_id;
    };
    res_partner.prototype.get_commercial_partner_id = function () {
        return this.commercial_partner_id;
    };
    res_partner.prototype.get_Date_localization = function () {
        return this.Date_localization;
    };
    res_partner.prototype.get_partner_latitude = function () {
        return this.partner_latitude;
    };
    res_partner.prototype.get_partner_longitude = function () {
        return this.partner_longitude;
    };
    res_partner.prototype.get_notify_email = function () {
        return this.notify_email;
    };
    res_partner.prototype.get_message_last_post = function () {
        return this.message_last_post;
    };
    res_partner.prototype.get_opt_out = function () {
        return this.opt_out;
    };
    res_partner.prototype.get_message_bounce = function () {
        return this.message_bounce;
    };
    res_partner.prototype.get_signup_type = function () {
        return this.signup_type;
    };
    res_partner.prototype.get_signup_expiration = function () {
        return this.signup_expiration;
    };
    res_partner.prototype.get_signup_token = function () {
        return this.signup_token;
    };
    res_partner.prototype.get_team_id = function () {
        return this.team_id;
    };
    res_partner.prototype.get_calendar_last_notif_ack = function () {
        return this.calendar_last_notif_ack;
    };
    res_partner.prototype.get_type_quartier_id = function () {
        return this.type_quartier_id;
    };
    res_partner.prototype.get_source_approvisionnement_id = function () {
        return this.source_approvisionnement_id;
    };
    res_partner.prototype.get_cible_installation_presentoirs_id = function () {
        return this.cible_installation_presentoirs_id;
    };
    res_partner.prototype.get_numero_telephone2 = function () {
        return this.numero_telephone2;
    };
    res_partner.prototype.get_numero_telephone3 = function () {
        return this.numero_telephone3;
    };
    res_partner.prototype.get_numero_telephone1 = function () {
        return this.numero_telephone1;
    };
    res_partner.prototype.get_couverture_commerciale_id = function () {
        return this.couverture_commerciale_id;
    };
    res_partner.prototype.get_classification2_id = function () {
        return this.classification2_id;
    };
    res_partner.prototype.get_nom_gerant = function () {
        return this.nom_gerant;
    };
    res_partner.prototype.get_frequence_approvisionnement_id = function () {
        return this.frequence_approvisionnement_id;
    };
    res_partner.prototype.get_enseigne_appartenance_id = function () {
        return this.enseigne_appartenance_id;
    };
    res_partner.prototype.get_agence_id = function () {
        return this.agence_id;
    };
    res_partner.prototype.get_activite_pos_id = function () {
        return this.activite_pos_id;
    };
    res_partner.prototype.get_fournisseur_principal_id = function () {
        return this.fournisseur_principal_id;
    };
    res_partner.prototype.get_contrat_id = function () {
        return this.contrat_id;
    };
    res_partner.prototype.get_fournisseur_secondaire_id = function () {
        return this.fournisseur_secondaire_id;
    };
    res_partner.prototype.get_nom_agent_commercial_id = function () {
        return this.nom_agent_commercial_id;
    };
    res_partner.prototype.get_cible_activation_id = function () {
        return this.cible_activation_id;
    };
    res_partner.prototype.get_state = function () {
        return this.state;
    };
    res_partner.prototype.get_statut_client_id = function () {
        return this.statut_client_id;
    };
    res_partner.prototype.get_permanent_POSM5_id = function () {
        return this.permanent_POSM5_id;
    };
    res_partner.prototype.get_point_de_vente = function () {
        return this.point_de_vente;
    };
    res_partner.prototype.get_repere = function () {
        return this.repere;
    };
    res_partner.prototype.get_emplacement_id = function () {
        return this.emplacement_id;
    };
    res_partner.prototype.get_cooperation_itg_id = function () {
        return this.cooperation_itg_id;
    };
    res_partner.prototype.get_proximite_id = function () {
        return this.proximite_id;
    };
    res_partner.prototype.get_frequence_visite_id = function () {
        return this.frequence_visite_id;
    };
    res_partner.prototype.get_permanent_POSM3_id = function () {
        return this.permanent_POSM3_id;
    };
    res_partner.prototype.get_permanent_POSM1_id = function () {
        return this.permanent_POSM1_id;
    };
    res_partner.prototype.get_adresse = function () {
        return this.adresse;
    };
    res_partner.prototype.get_preference_animateur_id = function () {
        return this.preference_animateur_id;
    };
    res_partner.prototype.get_provider_latitude = function () {
        return this.provider_latitude;
    };
    res_partner.prototype.get_zone_id = function () {
        return this.zone_id;
    };
    res_partner.prototype.get_latitude = function () {
        return this.latitude;
    };
    res_partner.prototype.get_commentaire = function () {
        return this.commentaire;
    };
    res_partner.prototype.get_longitude = function () {
        return this.longitude;
    };
    res_partner.prototype.get_message_warning = function () {
        return this.message_warning;
    };
    res_partner.prototype.get_permanent_POSM4_id = function () {
        return this.permanent_POSM4_id;
    };
    res_partner.prototype.get_region_id = function () {
        return this.region_id;
    };
    res_partner.prototype.get_nom_pos = function () {
        return this.nom_pos;
    };
    res_partner.prototype.get_quartier = function () {
        return this.quartier;
    };
    res_partner.prototype.get_ville_id = function () {
        return this.ville_id;
    };
    res_partner.prototype.get_type_client_id = function () {
        return this.type_client_id;
    };
    res_partner.prototype.get_utilisateur_associe_id = function () {
        return this.utilisateur_associe_id;
    };
    res_partner.prototype.get_permanent_POSM2_id = function () {
        return this.permanent_POSM2_id;
    };
    res_partner.prototype.get_secteur_id = function () {
        return this.secteur_id;
    };
    res_partner.prototype.get_provider_longitude = function () {
        return this.provider_longitude;
    };
    res_partner.prototype.get_code_client = function () {
        return this.code_client;
    };
    res_partner.prototype.get_activation_autorisee_id = function () {
        return this.activation_autorisee_id;
    };
    res_partner.prototype.get_is_today = function () {
        return this.is_today;
    };
    res_partner.prototype.get_classification1_id = function () {
        return this.classification1_id;
    };
    res_partner.prototype.get_a_visiter_moved0 = function () {
        return this.a_visiter_moved0;
    };
    res_partner.prototype.get_a_visiter = function () {
        return this.a_visiter;
    };
    res_partner.prototype.get_visite = function () {
        return this.visite;
    };
    res_partner.prototype.get_a_visite = function () {
        return this.a_visite;
    };
    res_partner.prototype.set_id = function (value) {
        this.id = value;
    };
    res_partner.prototype.set_name = function (value) {
        this.name = value;
    };
    res_partner.prototype.set_company_id = function (value) {
        this.company_id = value;
    };
    res_partner.prototype.set_comment = function (value) {
        this.comment = value;
    };
    res_partner.prototype.set_website = function (value) {
        this.website = value;
    };
    res_partner.prototype.set_create_date = function (value) {
        this.create_date = value;
    };
    res_partner.prototype.set_color = function (value) {
        this.color = value;
    };
    res_partner.prototype.set_active = function (value) {
        this.active = value;
    };
    res_partner.prototype.set_street = function (value) {
        this.street = value;
    };
    res_partner.prototype.set_supplier = function (value) {
        this.supplier = value;
    };
    res_partner.prototype.set_city = function (value) {
        this.city = value;
    };
    res_partner.prototype.set_display_name = function (value) {
        this.display_name = value;
    };
    res_partner.prototype.set_zip = function (value) {
        this.zip = value;
    };
    res_partner.prototype.set_title = function (value) {
        this.title = value;
    };
    res_partner.prototype.set_country_id = function (value) {
        this.country_id = value;
    };
    res_partner.prototype.set_commercial_company_name = function (value) {
        this.commercial_company_name = value;
    };
    res_partner.prototype.set_parent_id = function (value) {
        this.parent_id = value;
    };
    res_partner.prototype.set_company_name = function (value) {
        this.company_name = value;
    };
    res_partner.prototype.set_employee = function (value) {
        this.employee = value;
    };
    res_partner.prototype.set_ref = function (value) {
        this.ref = value;
    };
    res_partner.prototype.set_email = function (value) {
        this.email = value;
    };
    res_partner.prototype.set_is_company = function (value) {
        this.is_company = value;
    };
    res_partner.prototype.set_fonction = function (value) {
        this.fonction = value;
    };
    res_partner.prototype.set_lang = function (value) {
        this.lang = value;
    };
    res_partner.prototype.set_fax = function (value) {
        this.fax = value;
    };
    res_partner.prototype.set_street2 = function (value) {
        this.street2 = value;
    };
    res_partner.prototype.set_barcode = function (value) {
        this.barcode = value;
    };
    res_partner.prototype.set_phone = function (value) {
        this.phone = value;
    };
    res_partner.prototype.set_write_date = function (value) {
        this.write_date = value;
    };
    res_partner.prototype.set_daty = function (value) {
        this.daty = value;
    };
    res_partner.prototype.set_tz = function (value) {
        this.tz = value;
    };
    res_partner.prototype.set_write_uid = function (value) {
        this.write_uid = value;
    };
    res_partner.prototype.set_customer = function (value) {
        this.customer = value;
    };
    res_partner.prototype.set_create_uid = function (value) {
        this.create_uid = value;
    };
    res_partner.prototype.set_credit_limit = function (value) {
        this.credit_limit = value;
    };
    res_partner.prototype.set_user_id = function (value) {
        this.user_id = value;
    };
    res_partner.prototype.set_mobile = function (value) {
        this.mobile = value;
    };
    res_partner.prototype.set_type = function (value) {
        this.type = value;
    };
    res_partner.prototype.set_partner_share = function (value) {
        this.partner_share = value;
    };
    res_partner.prototype.set_vat = function (value) {
        this.vat = value;
    };
    res_partner.prototype.set_state_id = function (value) {
        this.state_id = value;
    };
    res_partner.prototype.set_commercial_partner_id = function (value) {
        this.commercial_partner_id = value;
    };
    res_partner.prototype.set_Date_localization = function (value) {
        this.Date_localization = value;
    };
    res_partner.prototype.set_partner_latitude = function (value) {
        this.partner_latitude = value;
    };
    res_partner.prototype.set_partner_longitude = function (value) {
        this.partner_longitude = value;
    };
    res_partner.prototype.set_notify_email = function (value) {
        this.notify_email = value;
    };
    res_partner.prototype.set_message_last_post = function (value) {
        this.message_last_post = value;
    };
    res_partner.prototype.set_opt_out = function (value) {
        this.opt_out = value;
    };
    res_partner.prototype.set_message_bounce = function (value) {
        this.message_bounce = value;
    };
    res_partner.prototype.set_signup_type = function (value) {
        this.signup_type = value;
    };
    res_partner.prototype.set_signup_expiration = function (value) {
        this.signup_expiration = value;
    };
    res_partner.prototype.set_signup_token = function (value) {
        this.signup_token = value;
    };
    res_partner.prototype.set_team_id = function (value) {
        this.team_id = value;
    };
    res_partner.prototype.set_calendar_last_notif_ack = function (value) {
        this.calendar_last_notif_ack = value;
    };
    res_partner.prototype.set_type_quartier_id = function (value) {
        this.type_quartier_id = value;
    };
    res_partner.prototype.set_source_approvisionnement_id = function (value) {
        this.source_approvisionnement_id = value;
    };
    res_partner.prototype.set_cible_installation_presentoirs_id = function (value) {
        this.cible_installation_presentoirs_id = value;
    };
    res_partner.prototype.set_numero_telephone2 = function (value) {
        this.numero_telephone2 = value;
    };
    res_partner.prototype.set_numero_telephone3 = function (value) {
        this.numero_telephone3 = value;
    };
    res_partner.prototype.set_numero_telephone1 = function (value) {
        this.numero_telephone1 = value;
    };
    res_partner.prototype.set_couverture_commerciale_id = function (value) {
        this.couverture_commerciale_id = value;
    };
    res_partner.prototype.set_classification2_id = function (value) {
        this.classification2_id = value;
    };
    res_partner.prototype.set_nom_gerant = function (value) {
        this.nom_gerant = value;
    };
    res_partner.prototype.set_frequence_approvisionnement_id = function (value) {
        this.frequence_approvisionnement_id = value;
    };
    res_partner.prototype.set_enseigne_appartenance_id = function (value) {
        this.enseigne_appartenance_id = value;
    };
    res_partner.prototype.set_agence_id = function (value) {
        this.agence_id = value;
    };
    res_partner.prototype.set_activite_pos_id = function (value) {
        this.activite_pos_id = value;
    };
    res_partner.prototype.set_fournisseur_principal_id = function (value) {
        this.fournisseur_principal_id = value;
    };
    res_partner.prototype.set_contrat_id = function (value) {
        this.contrat_id = value;
    };
    res_partner.prototype.set_fournisseur_secondaire_id = function (value) {
        this.fournisseur_secondaire_id = value;
    };
    res_partner.prototype.set_nom_agent_commercial_id = function (value) {
        this.nom_agent_commercial_id = value;
    };
    res_partner.prototype.set_cible_activation_id = function (value) {
        this.cible_activation_id = value;
    };
    res_partner.prototype.set_state = function (value) {
        this.state = value;
    };
    res_partner.prototype.set_statut_client_id = function (value) {
        this.statut_client_id = value;
    };
    res_partner.prototype.set_permanent_POSM5_id = function (value) {
        this.permanent_POSM5_id = value;
    };
    res_partner.prototype.set_point_de_vente = function (value) {
        this.point_de_vente = value;
    };
    res_partner.prototype.set_repere = function (value) {
        this.repere = value;
    };
    res_partner.prototype.set_emplacement_id = function (value) {
        this.emplacement_id = value;
    };
    res_partner.prototype.set_cooperation_itg_id = function (value) {
        this.cooperation_itg_id = value;
    };
    res_partner.prototype.set_proximite_id = function (value) {
        this.proximite_id = value;
    };
    res_partner.prototype.set_frequence_visite_id = function (value) {
        this.frequence_visite_id = value;
    };
    res_partner.prototype.set_permanent_POSM3_id = function (value) {
        this.permanent_POSM3_id = value;
    };
    res_partner.prototype.set_permanent_POSM1_id = function (value) {
        this.permanent_POSM1_id = value;
    };
    res_partner.prototype.set_adresse = function (value) {
        this.adresse = value;
    };
    res_partner.prototype.set_preference_animateur_id = function (value) {
        this.preference_animateur_id = value;
    };
    res_partner.prototype.set_provider_latitude = function (value) {
        this.provider_latitude = value;
    };
    res_partner.prototype.set_zone_id = function (value) {
        this.zone_id = value;
    };
    res_partner.prototype.set_latitude = function (value) {
        this.latitude = value;
    };
    res_partner.prototype.set_commentaire = function (value) {
        this.commentaire = value;
    };
    res_partner.prototype.set_longitude = function (value) {
        this.longitude = value;
    };
    res_partner.prototype.set_message_warning = function (value) {
        this.message_warning = value;
    };
    res_partner.prototype.set_permanent_POSM4_id = function (value) {
        this.permanent_POSM4_id = value;
    };
    res_partner.prototype.set_region_id = function (value) {
        this.region_id = value;
    };
    res_partner.prototype.set_nom_pos = function (value) {
        this.nom_pos = value;
    };
    res_partner.prototype.set_quartier = function (value) {
        this.quartier = value;
    };
    res_partner.prototype.set_ville_id = function (value) {
        this.ville_id = value;
    };
    res_partner.prototype.set_type_client_id = function (value) {
        this.type_client_id = value;
    };
    res_partner.prototype.set_utilisateur_associe_id = function (value) {
        this.utilisateur_associe_id = value;
    };
    res_partner.prototype.set_permanent_POSM2_id = function (value) {
        this.permanent_POSM2_id = value;
    };
    res_partner.prototype.set_secteur_id = function (value) {
        this.secteur_id = value;
    };
    res_partner.prototype.set_provider_longitude = function (value) {
        this.provider_longitude = value;
    };
    res_partner.prototype.set_code_client = function (value) {
        this.code_client = value;
    };
    res_partner.prototype.set_activation_autorisee_id = function (value) {
        this.activation_autorisee_id = value;
    };
    res_partner.prototype.set_is_today = function (value) {
        this.is_today = value;
    };
    res_partner.prototype.set_classification1_id = function (value) {
        this.classification1_id = value;
    };
    res_partner.prototype.set_a_visiter_moved0 = function (value) {
        this.a_visiter_moved0 = value;
    };
    res_partner.prototype.set_a_visiter = function (value) {
        this.a_visiter = value;
    };
    res_partner.prototype.set_visite = function (value) {
        this.visite = value;
    };
    res_partner.prototype.set_a_visite = function (value) {
        this.a_visite = value;
    };
    return res_partner;
}());
export { res_partner };
//# sourceMappingURL=res_partner.model.js.map