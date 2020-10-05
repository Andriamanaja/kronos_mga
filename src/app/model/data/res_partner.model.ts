import { res_partner_source } from './res_partner_source';

export class res_partner extends res_partner_source{
     id : number = 0; 
     name : string = " " ;
     company_id : number = 0 ;
     comment: string = " " ;
     website : string = " ";
     create_date :Date = new Date(0);
     color : number = 0 ;
     active : number = 0	; 
     street : string = " " ;
     supplier : number = 0 ;
     city : string = " " ;
     display_name : string = " " ;
     zip : string = " ";
     title : number = 0 ;
     country_id : number = 0 ;
     commercial_company_name : string = " " ;
     parent_id : number = 0 ;
     company_name : string = " " ;
     employee : number	; 
     ref : string = " " ;
     email : string = " " ;
     is_company : number	; 
     fonction : string = " " ;
     lang : string = " " ;
     fax : string = " " ;
     street2 : string = " " ;
     barcode : string = " " ;
     phone : string = " " ;
     write_date :Date = new Date(0);
     daty :Date = new Date(0);
     tz : string = " " ;
     write_uid : number = 0 ;
     customer : number = 0 ;
     create_uid : number = 0 ;
     credit_limit : number = 0 ;
     user_id : number = 0 ;
     mobile : string = " " ;
     type : string = " ";
     partner_share : number = 0 ;
     vat : string = " " ;
     state_id : number = 0 ;
     commercial_partner_id : number = 0 ;
     Date_localization :Date = new Date(0);
     partner_latitude : number = 0 ;
     partner_longitude : number = 0 ;
     notify_email : string ; 
     message_last_post :Date = new Date(0);
     opt_out : number	; 
     message_bounce : number = 0 ;
     signup_type : string = " " ;
     signup_expiration :Date = new Date(0);
     signup_token : string = " " ;
     team_id : number = 0 ;
     calendar_last_notif_ack :Date = new Date(0);
     type_quartier_id : number = 0 ;
     source_approvisionnement_id : number = 0 ;
     cible_installation_presentoirs_id : number = 0 ;
     numero_telephone2 : string = " " ;
     numero_telephone3 : string = " ";
     numero_telephone1 : string = " ";
     couverture_commerciale_id : number = 0 ;
     classification2_id : number = 0 ;
     nom_gerant : string = " " ;
     frequence_approvisionnement_id : number = 0 ;
     enseigne_appartenance_id : number = 0 ;
     agence_id : number = 0 ;
     activite_pos_id : number = 0 ;
     fournisseur_principal_id : number = 0 ;
     contrat_id : number = 0 ;
     fournisseur_secondaire_id : number = 0 ; 
     nom_agent_commercial_id : number = 0 ;
     cible_activation_id : number = 0 ;
     state : string = " ";
     statut_client_id : number = 0 ;
     permanent_POSM5_id : number = 0 ;
     point_de_vente : number = 0	; 
     repere : string = " " ;
     emplacement_id : number = 0 ;
     cooperation_itg_id : number = 0 ; 
     proximite_id : number = 0 ;
     frequence_visite_id : number = 0 ;
     permanent_POSM3_id : number = 0 ;
     permanent_POSM1_id : number = 0 ;
     adresse : string = " " ;
     preference_animateur_id : number = 0 ;
     provider_latitude : number = 0 ;
     zone_id : number = 0 ;
     latitude : number = 0 ;
     commentaire: string = " " ;
     longitude :  number = 0 ;
     message_warning : string = " " ;
     permanent_POSM4_id : number = 0 ;
     region_id : number = 0 ;
     nom_pos : string = " "   ;
     quartier : string = " "  ;
     ville_id : number = 0 ;
     type_client_id : number = 0 ;
     utilisateur_associe_id : number = 0 ;
     permanent_POSM2_id : number = 0 ;  
     secteur_id : number = 0 ;
     provider_longitude : number = 0 ;    
     code_client : string = " " ;
     activation_autorisee_id : number = 0 ;
     is_today: number = 0; 
     classification1_id : number = 0 ;    
     a_visiter_moved0 : string = " "  ;
     visite : string = " "    ;
     a_visite: number =0 ; 
		 a_visiter: number = 0 ;
		 canal_id : number = 0 ;


	constructor(name: string = "", company_id: number = 0 , comment: string = "", website: string = "", create_date: Date = new Date(0), color: number = 1 , active: number	= 1 , street: string = "", supplier: number	= 0 , city: string = "", display_name: string = "", zip: string = "", title: number = 0 , country_id: number = 0 , commercial_company_name: string = "", parent_id: number = 0 , company_name: string = "", employee: number = 0	, ref: string = "", email: string = "", is_company: number =0	, fonction: string = "", lang: string = "", fax: string = "", street2: string = "", barcode: string = "", phone: string = "", write_date: Date = new Date(0), daty: Date = new Date(0), tz: string = "", write_uid: number = 0 , customer: number = 0 , create_uid: number = 0 , credit_limit: number = 0 , user_id: number = 0 , mobile: string = "", type: string = "", partner_share: number = 0 , vat: string = "", state_id: number = 0 , commercial_partner_id: number = 0 , Date_localization: Date = new Date(0), partner_latitude: number = 0 , partner_longitude: number = 0 , notify_email: string = "", message_last_post: Date = new Date(), opt_out: number = 0	, message_bounce: number = 0 , signup_type: string = "", signup_expiration: Date = new Date(0), signup_token: string = "", team_id: number = 0 , calendar_last_notif_ack: Date = new Date(0), type_quartier_id: number = 0 , source_approvisionnement_id: number = 0 , cible_installation_presentoirs_id: number = 0 , numero_telephone2: string = "", numero_telephone3: string = "", numero_telephone1: string = "", couverture_commerciale_id: number = 0 , classification2_id: number = 0 , nom_gerant: string = "", frequence_approvisionnement_id: number = 0 , enseigne_appartenance_id: number = 0 , agence_id: number = 0 , activite_pos_id: number = 0 , fournisseur_principal_id: number = 0 , contrat_id: number = 0 , fournisseur_secondaire_id: number = 0 , nom_agent_commercial_id: number = 0 , cible_activation_id: number = 0 , state: string = "", statut_client_id: number = 0 , permanent_POSM5_id: number = 0 , point_de_vente: number = 0	, repere: string = "", emplacement_id: number = 0 , cooperation_itg_id: number = 0 , proximite_id: number = 0 , frequence_visite_id: number = 0 , permanent_POSM3_id: number = 0 , permanent_POSM1_id: number = 0 , adresse: string = "", preference_animateur_id: number = 0 , provider_latitude: number = 0 , zone_id: number = 0 , latitude: number = 0, commentaire: string = "", longitude:  number = 0 , message_warning: string = "", permanent_POSM4_id: number = 0 , region_id: number = 0 , nom_pos: string = "", quartier: string = "", ville_id: number = 0 , type_client_id: number = 0 , utilisateur_associe_id: number = 0 , permanent_POSM2_id: number = 0 , secteur_id: number = 0 , provider_longitude: number = 0 , code_client: string = "", activation_autorisee_id: number = 0 , is_today: number	, classification1_id: number = 0 , a_visiter_moved0: string = "", visite: string = "", a_visite: number =0	, a_visiter: number = 0 , canal_id : number=0 , id?: number) {
		super();
		if(id){
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
		this.canal_id = canal_id ;
	}

	 get_id(): number  {
		return this.id;
    }
    
	 get_name(): string {
		return this.name;
    }
    
	 get_company_id(): number {
		return this.company_id;
    }
    
	 get_comment(): string {
		return this.comment;
    }
    
	 get_website(): string {
		return this.website;
    }
    
	 get_create_date(): Date {
		return this.create_date;
    }
    
	 get_color(): number {
		return this.color;
    }
    
	 get_active(): number	 {
		return this.active;
    }
    
	 get_street(): string {
		return this.street;
    }
    
	 get_supplier(): number	 {
		return this.supplier;
    }
    
	 get_city(): string {
		return this.city;
    }
    
	 get_display_name(): string {
		return this.display_name;
    }
    
	 get_zip(): string {
		return this.zip;
    }
    
	 get_title(): number {
		return this.title;
    }
    
	 get_country_id(): number {
		return this.country_id;
    }
    
	 get_commercial_company_name(): string {
		return this.commercial_company_name;
    }
    
	 get_parent_id(): number {
		return this.parent_id;
    }
    
	 get_company_name(): string {
		return this.company_name;
    }
    
	 get_employee(): number	 {
		return this.employee;
    }
    
	 get_ref(): string {
		return this.ref;
    }
    
	 get_email(): string {
		return this.email;
    }
    
	 get_is_company(): number	 {
		return this.is_company;
    }
    
	 get_fonction(): string {
		return this.fonction;
    }
    
	 get_lang(): string {
		return this.lang;
    }
    
	 get_fax(): string {
		return this.fax;
    }
    
	 get_street2(): string {
		return this.street2;
    }
    
	 get_barcode(): string {
		return this.barcode;
    }
    
	 get_phone(): string {
		return this.phone;
    }
    
	 get_write_date(): Date {
		return this.write_date;
    }
    
	 get_daty(): Date {
		return this.daty;
    }
    
	 get_tz(): string {
		return this.tz;
    }
    
	 get_write_uid(): number {
		return this.write_uid;
    }
    
	 get_customer(): number {
		return this.customer;
    }
    
	 get_create_uid(): number {
		return this.create_uid;
    }
    
	 get_credit_limit(): number {
		return this.credit_limit;
    }
    
	 get_user_id(): number {
		return this.user_id;
    }
    
	 get_mobile(): string {
		return this.mobile;
    }
    
	 get_type(): string {
		return this.type;
    }
    
	 get_partner_share(): number {
		return this.partner_share;
    }
    
	 get_vat(): string {
		return this.vat;
    }
    
	 get_state_id(): number {
		return this.state_id;
    }
    
	 get_commercial_partner_id(): number {
		return this.commercial_partner_id;
    }
    
	 get_Date_localization(): Date {
		return this.Date_localization;
    }
    
	 get_partner_latitude(): number {
		return this.partner_latitude;
    }
    
	 get_partner_longitude(): number {
		return this.partner_longitude;
    }
    
	 get_notify_email(): string  {
		return this.notify_email;
    }
    
	 get_message_last_post(): Date {
		return this.message_last_post;
    }
    
	 get_opt_out(): number	 {
		return this.opt_out;
    }
    
	 get_message_bounce(): number {
		return this.message_bounce;
    }
    
	 get_signup_type(): string {
		return this.signup_type;
    }
    
	 get_signup_expiration(): Date {
		return this.signup_expiration;
    }
    
	 get_signup_token(): string {
		return this.signup_token;
    }
    
	 get_team_id(): number {
		return this.team_id;
    }
    
	 get_calendar_last_notif_ack(): Date {
		return this.calendar_last_notif_ack;
    }
    
	 get_type_quartier_id(): number {
		return this.type_quartier_id;
    }
    
	 get_source_approvisionnement_id(): number {
		return this.source_approvisionnement_id;
    }
    
	 get_cible_installation_presentoirs_id(): number {
		return this.cible_installation_presentoirs_id;
    }
    
	 get_numero_telephone2(): string {
		return this.numero_telephone2;
    }
    
	 get_numero_telephone3(): string {
		return this.numero_telephone3;
    }
    
	 get_numero_telephone1(): string {
		return this.numero_telephone1;
    }
    
	 get_couverture_commerciale_id(): number {
		return this.couverture_commerciale_id;
    }
    
	 get_classification2_id(): number {
		return this.classification2_id;
    }
    
	 get_nom_gerant(): string {
		return this.nom_gerant;
    }
    
	 get_frequence_approvisionnement_id(): number {
		return this.frequence_approvisionnement_id;
    }
    
	 get_enseigne_appartenance_id(): number {
		return this.enseigne_appartenance_id;
    }
    
	 get_agence_id(): number {
		return this.agence_id;
    }
    
	 get_activite_pos_id(): number {
		return this.activite_pos_id;
    }
    
	 get_fournisseur_principal_id(): number {
		return this.fournisseur_principal_id;
    }
    
	 get_contrat_id(): number {
		return this.contrat_id;
    }
    
	 get_fournisseur_secondaire_id(): number {
		return this.fournisseur_secondaire_id;
    }
    
	 get_nom_agent_commercial_id(): number {
		return this.nom_agent_commercial_id;
    }
    
	 get_cible_activation_id(): number {
		return this.cible_activation_id;
    }
    
	 get_state(): string {
		return this.state;
    }
    
	 get_statut_client_id(): number {
		return this.statut_client_id;
    }
    
	 get_permanent_POSM5_id(): number {
		return this.permanent_POSM5_id;
    }
    
	 get_point_de_vente(): number	 {
		return this.point_de_vente;
    }
    
	 get_repere(): string {
		return this.repere;
    }
    
	 get_emplacement_id(): number {
		return this.emplacement_id;
    }
    
	 get_cooperation_itg_id(): number {
		return this.cooperation_itg_id;
    }
    
	 get_proximite_id(): number {
		return this.proximite_id;
    }
    
	 get_frequence_visite_id(): number {
		return this.frequence_visite_id;
    }
    
	 get_permanent_POSM3_id(): number {
		return this.permanent_POSM3_id;
    }
    
	 get_permanent_POSM1_id(): number {
		return this.permanent_POSM1_id;
    }
    
	 get_adresse(): string {
		return this.adresse;
    }
    
	 get_preference_animateur_id(): number {
		return this.preference_animateur_id;
    }
    
	 get_provider_latitude(): number {
		return this.provider_latitude;
    }
    
	 get_zone_id(): number {
		return this.zone_id;
    }
    
	 get_latitude(): number  {
		return this.latitude;
    }
    
	 get_commentaire(): string {
		return this.commentaire;
    }
    
	 get_longitude():  number {
		return this.longitude;
    }
    
	 get_message_warning(): string {
		return this.message_warning;
    }
    
	 get_permanent_POSM4_id(): number {
		return this.permanent_POSM4_id;
    }
    
	 get_region_id(): number {
		return this.region_id;
    }
    
	 get_nom_pos(): string {
		return this.nom_pos;
    }
    
	 get_quartier(): string {
		return this.quartier;
    }
    
	 get_ville_id(): number {
		return this.ville_id;
    }
    
	 get_type_client_id(): number {
		return this.type_client_id;
    }
    
	 get_utilisateur_associe_id(): number {
		return this.utilisateur_associe_id;
    }
    
	 get_permanent_POSM2_id(): number {
		return this.permanent_POSM2_id;
    }
    
	 get_secteur_id(): number {
		return this.secteur_id;
    }
    
	 get_provider_longitude(): number {
		return this.provider_longitude;
    }
    
	 get_code_client(): string {
		return this.code_client;
    }
    
	 get_activation_autorisee_id(): number {
		return this.activation_autorisee_id;
    }
    
	 get_is_today(): number	 {
		return this.is_today;
    }
    
	 get_classification1_id(): number {
		return this.classification1_id;
    }
    
	 get_a_visiter_moved0(): string {
		return this.a_visiter_moved0;
    }


	 get_a_visiter(): number {
		return this.a_visiter;
    }
    
	 get_visite(): string {
		return this.visite;
    }
    
	 get_a_visite(): number	 {
		return this.a_visite;
    }
    
	 set_id(value: number ) {
		this.id = value;
    }
    
	 set_name(value: string) {
		this.name = value;
    }
    
	 set_company_id(value: number) {
		this.company_id = value;
    }
    
	 set_comment(value: string) {
		this.comment = value;
    }
    
	 set_website(value: string) {
		this.website = value;
    }
    
	 set_create_date(value: Date) {
		this.create_date = value;
    }
    
	 set_color(value: number) {
		this.color = value;
    }
    
	 set_active(value: number	) {
		this.active = value;
    }
    
	 set_street(value: string) {
		this.street = value;
    }
    
	 set_supplier(value: number	) {
		this.supplier = value;
    }
    
	 set_city(value: string) {
		this.city = value;
    }
    
	 set_display_name(value: string) {
		this.display_name = value;
    }
    
	 set_zip(value: string) {
		this.zip = value;
    }
    
	 set_title(value: number) {
		this.title = value;
    }
    
	 set_country_id(value: number) {
		this.country_id = value;
    }
    
	 set_commercial_company_name(value: string) {
		this.commercial_company_name = value;
    }
    
	 set_parent_id(value: number) {
		this.parent_id = value;
    }
    
	 set_company_name(value: string) {
		this.company_name = value;
    }
    
	 set_employee(value: number	) {
		this.employee = value;
    }
    
	 set_ref(value: string) {
		this.ref = value;
    }
    
	 set_email(value: string) {
		this.email = value;
    }
    
	 set_is_company(value: number	) {
		this.is_company = value;
    }
    
	 set_fonction(value: string) {
		this.fonction = value;
    }
    
	 set_lang(value: string) {
		this.lang = value;
    }
    
	 set_fax(value: string) {
		this.fax = value;
    }
    
	 set_street2(value: string) {
		this.street2 = value;
    }
    
	 set_barcode(value: string) {
		this.barcode = value;
    }
    
	 set_phone(value: string) {
		this.phone = value;
    }
    
	 set_write_date(value: Date) {
		this.write_date = value;
    }
    
	 set_daty(value: Date) {
		this.daty = value;
    }
    
	 set_tz(value: string) {
		this.tz = value;
    }
    
	 set_write_uid(value: number) {
		this.write_uid = value;
    }
    
	 set_customer(value: number) {
		this.customer = value;
    }
    
	 set_create_uid(value: number) {
		this.create_uid = value;
    }
    
	 set_credit_limit(value: number) {
		this.credit_limit = value;
    }
    
	 set_user_id(value: number) {
		this.user_id = value;
    }
    
	 set_mobile(value: string) {
		this.mobile = value;
    }
    
	 set_type(value: string) {
		this.type = value;
    }
    
	 set_partner_share(value: number) {
		this.partner_share = value;
    }
    
	 set_vat(value: string) {
		this.vat = value;
    }
    
	 set_state_id(value: number) {
		this.state_id = value;
    }
    
	 set_commercial_partner_id(value: number) {
		this.commercial_partner_id = value;
    }
    
	 set_Date_localization(value: Date) {
		this.Date_localization = value;
    }
    
	 set_partner_latitude(value: number) {
		this.partner_latitude = value;
    }
    
	 set_partner_longitude(value: number) {
		this.partner_longitude = value;
    }
    
	 set_notify_email(value: string ) {
		this.notify_email = value;
    }
    
	 set_message_last_post(value: Date) {
		this.message_last_post = value;
    }
    
	 set_opt_out(value: number	) {
		this.opt_out = value;
    }
    
	 set_message_bounce(value: number) {
		this.message_bounce = value;
    }
    
	 set_signup_type(value: string) {
		this.signup_type = value;
    }
    
	 set_signup_expiration(value: Date) {
		this.signup_expiration = value;
    }
    
	 set_signup_token(value: string) {
		this.signup_token = value;
    }
    
	 set_team_id(value: number) {
		this.team_id = value;
    }
    
	 set_calendar_last_notif_ack(value: Date) {
		this.calendar_last_notif_ack = value;
    }
    
	 set_type_quartier_id(value: number) {
		this.type_quartier_id = value;
    }
    
	 set_source_approvisionnement_id(value: number) {
		this.source_approvisionnement_id = value;
    }
    
	 set_cible_installation_presentoirs_id(value: number) {
		this.cible_installation_presentoirs_id = value;
    }
    
	 set_numero_telephone2(value: string) {
		this.numero_telephone2 = value;
    }
    
	 set_numero_telephone3(value: string) {
		this.numero_telephone3 = value;
    }
    
	 set_numero_telephone1(value: string) {
		this.numero_telephone1 = value;
    }
    
	 set_couverture_commerciale_id(value: number) {
		this.couverture_commerciale_id = value;
    }
    
	 set_classification2_id(value: number) {
		this.classification2_id = value;
    }
    
	 set_nom_gerant(value: string) {
		this.nom_gerant = value;
    }
    
	 set_frequence_approvisionnement_id(value: number) {
		this.frequence_approvisionnement_id = value;
    }
    
	 set_enseigne_appartenance_id(value: number) {
		this.enseigne_appartenance_id = value;
    }
    
	 set_agence_id(value: number) {
		this.agence_id = value;
    }
    
	 set_activite_pos_id(value: number) {
		this.activite_pos_id = value;
    }
    
	 set_fournisseur_principal_id(value: number) {
		this.fournisseur_principal_id = value;
    }
    
	 set_contrat_id(value: number) {
		this.contrat_id = value;
    }
    
	 set_fournisseur_secondaire_id(value: number) {
		this.fournisseur_secondaire_id = value;
    }
    
	 set_nom_agent_commercial_id(value: number) {
		this.nom_agent_commercial_id = value;
    }
    
	 set_cible_activation_id(value: number) {
		this.cible_activation_id = value;
    }
    
	 set_state(value: string) {
		this.state = value;
    }
    
	 set_statut_client_id(value: number) {
		this.statut_client_id = value;
    }
    
	 set_permanent_POSM5_id(value: number) {
		this.permanent_POSM5_id = value;
    }
    
	 set_point_de_vente(value: number	) {
		this.point_de_vente = value;
    }
    
	 set_repere(value: string) {
		this.repere = value;
    }
    
	 set_emplacement_id(value: number) {
		this.emplacement_id = value;
    }
    
	 set_cooperation_itg_id(value: number) {
		this.cooperation_itg_id = value;
    }
    
	 set_proximite_id(value: number) {
		this.proximite_id = value;
    }
    
	 set_frequence_visite_id(value: number) {
		this.frequence_visite_id = value;
    }
    
	 set_permanent_POSM3_id(value: number) {
		this.permanent_POSM3_id = value;
    }
    
	 set_permanent_POSM1_id(value: number) {
		this.permanent_POSM1_id = value;
    }
    
	 set_adresse(value: string) {
		this.adresse = value;
    }
    
	 set_preference_animateur_id(value: number) {
		this.preference_animateur_id = value;
    }
    
	 set_provider_latitude(value: number) {
		this.provider_latitude = value;
    }
    
	 set_zone_id(value: number) {
		this.zone_id = value;
    }
    
	 set_latitude(value: number ) {
		this.latitude = value;
    }
    
	 set_commentaire(value: string) {
		this.commentaire = value;
    }
    
	 set_longitude(value:  number) {
		this.longitude = value;
    }
    
	 set_message_warning(value: string) {
		this.message_warning = value;
    }
    
	 set_permanent_POSM4_id(value: number) {
		this.permanent_POSM4_id = value;
    }
    
	 set_region_id(value: number) {
		this.region_id = value;
    }
    
	 set_nom_pos(value: string) {
		this.nom_pos = value;
    }
    
	 set_quartier(value: string) {
		this.quartier = value;
    }
    
	 set_ville_id(value: number) {
		this.ville_id = value;
    }
    
	 set_type_client_id(value: number) {
		this.type_client_id = value;
    }
    
	 set_utilisateur_associe_id(value: number) {
		this.utilisateur_associe_id = value;
    }
    
	 set_permanent_POSM2_id(value: number) {
		this.permanent_POSM2_id = value;
    }
    
	 set_secteur_id(value: number) {
		this.secteur_id = value;
    }
    
	 set_provider_longitude(value: number) {
		this.provider_longitude = value;
    }
    
	 set_code_client(value: string) {
		this.code_client = value;
    }
    
	 set_activation_autorisee_id(value: number) {
		this.activation_autorisee_id = value;
    }
    
	 set_is_today(value: number	) {
		this.is_today = value;
    }
    
	 set_classification1_id(value: number) {
		this.classification1_id = value;
    }
    
	 set_a_visiter_moved0(value: string) {
		this.a_visiter_moved0 = value;
    }


	 set_a_visiter(value: number) {
		this.a_visiter = value;
    }
    
	 set_visite(value: string) {
		this.visite = value;
    }
    
	 set_a_visite(value: number	) {
		this.a_visite = value;
	}


}