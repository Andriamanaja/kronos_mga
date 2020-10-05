import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, Event, NavigationExtras } from '@angular/router';
import { ClientInterface } from '../../model/screen/clients.screen';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { ClientDetail } from '../../model/screen/client_detail.screen';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { i_t_activation_autorisee } from '../../model/data/i_t_activation_autorisee.model';
import { i_t_cible_activation } from '../../model/data/i_t_cible_activation.model';
import { i_t_cible_installation_presentoirs } from '../../model/data/i_t_cible_installation_presentoirs.model';
import { i_t_activite_pos } from '../../model/data/i_t_activite_pos.model';
import { i_t_agence } from '../../model/data/i_t_agence.model';
import { i_t_classification1 } from '../../model/data/i_t_classification1.model';
import { i_t_classification2 } from '../../model/data/i_t_classification2.model';
import { i_t_contrat } from '../../model/data/i_t_contrat.model';
import { i_t_cooperation_itg } from '../../model/data/i_t_cooperation_itg.model';
import { i_t_couverture_commerciale } from '../../model/data/i_t_couverture_commerciale.model';
import { i_t_emplacement } from '../../model/data/i_t_emplacement.model';
import { i_t_enseigne_appartenance } from '../../model/data/i_t_enseigne_appartenance.model';
import { i_t_frequence_approvisionnement } from '../../model/data/i_t_frequence_approvisionnement.model';
import { i_t_frequence_visite } from '../../model/data/i_t_frequence_visite.model';
import { i_t_permanent_posm } from '../../model/data/i_t_permanent_posm.model';
import { i_t_preference_animateur } from '../../model/data/it_preference_animateur.model';
import { i_t_proximite } from '../../model/data/i_t_proximite.model';
import { i_t_secteur } from '../../model/data/i_t_secteur.model';
import { i_t_type_client } from '../../model/data/i_t_type_client.model';
import { i_t_type_quartier } from '../../model/data/i_t_type_quartier.model';
import { i_t_ville } from '../../model/data/i_t_ville.model';
import { i_t_zone } from '../../model/data/i_t_zone.model';
import { i_t_fournisseur_secondaire } from '../../model/data/i_t_fournisseur_secondaire.model';
import { i_t_fournisseur_principale } from '../../model/data/i_t_fournisseur_principale.model';
import { i_t_region } from '../../model/data/i_t_region.model';
import { i_t_source_approvisionnement } from '../../model/data/i_t_source_approvisionnement.model';
import { res_partner } from '../../model/data/res_partner.model';
import { res_users } from '../../model/data/res_users.model';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Data } from 'src/app/model/data/data.model';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { MessageService, SelectItem } from 'primeng/api';
import { i_t_canal } from 'src/app/model/data/i_t_canal.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';
import { name_id } from '../new-client/new-client.page';
import { MenuItem } from 'primeng/api';
import { Base64 } from '@ionic-native/base64/ngx';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { disabled_field_admin } from 'src/environments/environment';

@Component({
  selector: 'app-detail-fiche-client',
  templateUrl: './detail-fiche-client.page.html',
  styleUrls: ['./detail-fiche-client.page.scss'],
})
export class DetailFicheClientPage implements OnInit {
  canal_result: any;

  

  photo: String;
  itemes: MenuItem[];
  cities1: SelectItem[];
  edit: boolean = false;
  items: SelectItem[];
  itemsActions: SelectItem[];
  id: number;
  client_detail: any = {};
  date_contrat: any;
  i_t_activation_autorisee: Array<i_t_activation_autorisee> = [];
  i_t_cible_activation: Array<i_t_cible_activation> = [];
  i_t_cible_installation_presentoirs: Array<i_t_cible_installation_presentoirs> = [];
  i_t_activite_pos: Array<i_t_activite_pos> = [];
  i_t_agence: Array<i_t_agence> = [];
  i_t_classification1: Array<i_t_classification1> = [];
  i_t_classification2: Array<i_t_classification2> = [];
  i_t_contrat: Array<i_t_contrat> = [];
  i_t_cooperation_itg: Array<i_t_cooperation_itg> = [];
  i_t_couverture_commerciale: Array<i_t_couverture_commerciale> = [];
  i_t_emplacement: Array<i_t_emplacement> = [];
  i_t_enseigne_appartenance: Array<i_t_enseigne_appartenance> = [];
  i_t_frequence_approvisionnement: Array<i_t_frequence_approvisionnement> = [];
  i_t_frequence_visite: Array<i_t_frequence_visite> = [];
  i_t_permanent_posm: Array<name_id> = [];
  i_t_preference_animateur: Array<i_t_preference_animateur> = [];
  i_t_proximite: Array<i_t_proximite> = [];
  i_t_secteur: Array<i_t_secteur> = [];
  i_t_type_client: Array<i_t_type_client> = [];
  i_t_type_quartier: Array<i_t_type_quartier> = [];
  i_t_ville: Array<i_t_ville> = [];
  i_t_zone: Array<i_t_zone> = [];
  i_t_fournisseur_secondaire: Array<name_id> = [];
  i_t_fournisseur_principale: Array<name_id> = [];
  i_t_region: Array<i_t_region> = [];
  i_t_source_approvisionnement: Array<name_id>
  res_user: Array<name_id>;
  res_user_active: Array<name_id>;
  fiche_client: FormGroup;
  data_cli: any = {};
  i_t_agence_filtered: Array<i_t_agence> = [];
  i_t_zone_filtered: Array<i_t_zone> = [];
  i_t_secteur_filtered: Array<i_t_secteur> = [];
  i_t_canal: Array<i_t_canal> = [];
  i_t_canal_filtered: Array<i_t_canal> = [];
  canal: any;
  filePath: String = "";
  window: any = window;
  resp: any;
  display: boolean = false;
  fichier: File;
  etat: string;
  valeur: any;
  condition: any;
  // By Tolotra
  OnClickInactif: number;
  loadIndicator: boolean = false;
  hasWriteAccess: boolean = false;
  partner_id: number;
  state: string;

  filteredSourceAppro: any;
  filteredfournisseur_principal: any;
  filteredfournisseur_secondaire: any;
  color_icon;
  items_sync : MenuItem[] ;

  enable : boolean = true ;

  navigationExtras: NavigationExtras = {
    queryParams: {
        "color": String,
        "unsynced" : String
    }
};

  //test: string = "";

  constructor(private androidPermissions: AndroidPermissions, private b64tg: Base64ToGallery, private b64: Base64, private fullScreenImage: FullScreenImage, private camera: Camera, private messageService: MessageService, private toast: ToastController, private load: LoadingController, private alertController : AlertController, private data_router: Data, private geolocation: Geolocation, private storage: Storage, private dbm: Database_manager, private form_builder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        console.log("manomboka")
        this.loadIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        console.log("mifarana")
        this.loadIndicator = false;
      }
    });

    //this.test = "test";
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.color_icon = data ["color"] ;
      this.itemes = [
        {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
      ];

      this.items_sync = [
        {label: data['unsynced']}, 
      ];
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

  ionViewWillEnter() {
    this.dbm.verify_data().then(data => {
      
      this.color_icon = data.color;
      this.itemes = [
        { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
      ];

      this.items_sync = [
        { label: data.non_synced },
      ];
      
      this.navigationExtras.queryParams = {
        "color" : data.color ,
        "unsynced" : data.non_synced
      }
    });
    // this.test = "test";
    this.checkPermissions();
    this.items = [
      { label: 'PROSPECT', value: { name: 'PROSPECT' } },
      { label: 'VALIDÉE PAR SUPERVISEUR', value: { name: 'VALIDÉE PAR SUPERVISEUR' } },
      { label: 'VALIDÉE PAR ADMINISTRATEUR', value: { name: 'VALIDÉE PAR ADMINISTRATEUR' } },
    ];

    this.activatedRoute.queryParams.subscribe(async params => {
      console.log("state =>", params['state']);
      this.partner_id = params['id'];
      this.state = params['state'];
      this.init_be(this.partner_id);
    });

  }


  init_be(partner_id) {

    this.dbm.get_if_exist_gps(partner_id).then(data => {
      if(data.enable == 0) {
        this.enable = false ;
      }
      else {
        this.enable = true ;
      }
    }) ;

    this.dbm.get_res_partner_data(partner_id).then(data => {

      let md = { value: Number, display: String };
      let md2 = { value: Number, display: String };
      var md_data2 = new Array();
      var md_data = new Array();



      if (data.cnc_posm) {
        if (data.cnc_posm.includes('|') == true) {
          var cnc_posm = data.cnc_posm.split('|');
          var cnc_posm_id = data.cnc_posm_id.split('|');
          for (var i = 0; i < cnc_posm_id.length; i++) {
            try {
              md = { value: cnc_posm_id[i], display: cnc_posm[i] };
              console.log(md);
              md_data.push(md);
            }
            catch (e) {
              console.log("data.cnc_posm ==> ", e);
            }
          } data.cnc_posm = md_data;
        }

        else {
          try {
            md = { value: data.cnc_posm_id, display: data.cnc_posm }
            md_data.push(md);
          }
          catch (e) {
            console.log("else n°1 data.cnc_posm ==> ", e);
          }
        }
      }
      else {
        try {
          md = { value: null, display: null }
          md_data.push(md);
        }
        catch (e) {
          console.log("else n°2 data.cnc_posm ==> ", e);
        }

      }

      if (data.cnc_login) {

        if (data.cnc_login.includes('|') == true) {
          var cnc_login = data.cnc_login.split('|');
          var cnc_usr_id = data.cnc_usr_id.split('|');
          for (var i = 0; i < cnc_usr_id.length; i++) {
            try {
              md2 = { value: cnc_usr_id[i], display: cnc_login[i] }
              md_data2.push(md2);
            }
            catch (e) {
              console.log("data.cnc_login ==> ", e);
            }
          }
        }
        else {
          try {
            md2 = { value: data.cnc_usr_id, display: data.cnc_login }
            md_data2.push(md2);
          }
          catch (e) {
            console.log("else n°1 data.cnc_login ==> ", e);
          }
        }

        data.cnc_login = md_data2;
        console.log("login" + data.cnc_login);
      }
      else {
        try {
          md2 = { value: null, display: null }
          md_data2.push(md2);
        }
        catch (e) {
          console.log("else n°2 data.cnc_login ==> ", e);
        }
      }
      data.cnc_login = md_data2;
      data.cnc_posm = md_data;
      console.log("245", data);

      this.client_detail = data;
      console.log("248", this.client_detail);
      this.condition = (this.client_detail.state_id != null || this.client_detail.state_id != false || this.client_detail.state_id != "") ? true : false;
      if (this.client_detail.state_id == "brouillon") {
        this.client_detail.state_id = "PROSPECT";
        this.etat = "Inactif";
      }
      if (this.client_detail.state_id == "superviseur") {
        this.client_detail.state_id = "VALIDÉE PAR SUPERVISEUR";
        this.etat = "Inactif";
      }
      if (this.client_detail.state_id == "administrateur") {
        this.client_detail.state_id = "VALIDÉE PAR ADMINISTRATEUR";
        this.etat = "Actif";
      }
    });

    this.charge_data();

    this.dbm.select_basic_data_with_id("res_partner", partner_id).then(data_res_partner => {
      this.data_cli = data_res_partner;
    });

    this.dbm.get_active_user().then(data => {
      this.res_user_active = data;
    });

    /*this.dbm.get_name_id_data("itg_partner_wholesaler").then(data => {
     
    }); */


    this.fiche_client = this.form_builder.group({
      region_id: ['', Validators.required],
      agence_id: ['', Validators.required],
      //zone_id: [''],
      secteur_id: ['', Validators.required],

      nom_pos: ['', Validators.required],
      nom_gerant: ['', Validators.required],
      adresse: ['', Validators.required],
      repere: ['', Validators.required],
      quartier: [''],
      ville_id: ['', Validators.required],
      numero_telephone1: [''],
      numero_telephone2: [''],
      numero_telephone3: [''],

      emplacement_id: ['', Validators.required],
      proximite_id: ['', Validators.required],
      type_quartier_id: ['', Validators.required],

      provider_latitude: ['', Validators.required],
      provider_longitude: ['', Validators.required],

      type_client_id: ['', Validators.required],
      activite_pos_id: [this.data_cli.active_pos_id],
      enseigne_appartenance_id: ['', Validators.required],
      classification1_id: ['', Validators.required],
      classification2_id: ['', Validators.required],

      couverture_commerciale_id: ['', Validators.required],
      frequence_visite_id: [''],

      user_id: [''],
      canal_id: [''],

      photo_uri: [''],
      photo: ['', Validators.required],

      cible_installation_presentoirs_id: ['', Validators.required],
      permanent_POSM_id: [''],

      contrat_id: [''],
      date_debut_contrat: [''],
      date_fin_contrat: [''],

      cooperation_itg_id: ['', Validators.required],
      cible_activation_id: ['', Validators.required],
      activation_autorisee_id: ['', Validators.required],
      preference_animateur_id: ['', Validators.required],

      frequence_approvisionnement_id: ['', Validators.required],
      new_source_approvisionnement_id: [''],
      new_fournisseur_principal_id: [''],
      new_fournisseur_secondaire_id: [''],

      visite: [''],

      commentaire: [''],
    });

    console.log(this.fiche_client.controls['date_debut_contrat'].patchValue(this.client_detail.date_debut_contrat));
    this.fiche_client.controls['date_fin_contrat'].patchValue(this.client_detail.date_fin_contrat);
    
    
    this.fiche_client.controls['agence_id'].disable();
    this.fiche_client.controls['region_id'].disable();
    this.fiche_client.controls['secteur_id'].disable();

    this.fiche_client.controls['nom_pos'].disable();
    this.fiche_client.controls['adresse'].disable();
    //this.fiche_client.controls['repere'].disable();
    this.fiche_client.controls['quartier'].disable();
    this.fiche_client.controls['ville_id'].disable();
    this.fiche_client.controls['type_quartier_id'].disable();
    this.fiche_client.controls['type_client_id'].disable();
    this.fiche_client.controls['enseigne_appartenance_id'].disable();
    this.fiche_client.controls['classification1_id'].disable();
    this.fiche_client.controls['classification2_id'].disable();
    this.fiche_client.controls['couverture_commerciale_id'].disable();
    this.fiche_client.controls['cible_installation_presentoirs_id'].disable();
    this.fiche_client.controls['contrat_id'].disable();
    this.fiche_client.controls['date_debut_contrat'].disable();
    this.fiche_client.controls['date_fin_contrat'].disable();
    this.fiche_client.controls['cible_activation_id'].disable();
    // this.fiche_client.controls['new_source_approvisionnement_id'].setValue("test_1")
  }

  charge_data() {

    this.dbm.select_basic_data_2("i_t_type_client").then(data => {
      this.i_t_type_client = data;
    });

    this.dbm.select_basic_data_2("i_t_region")
      .then((regions: any) => {
        this.i_t_region = regions
      });

    this.dbm.select_basic_data_2("i_t_agence")
      .then((regions: any) => {
        this.i_t_agence = regions
      });

    this.dbm.select_basic_data_2("i_t_secteur")
      .then((regions: any) => {
        this.i_t_secteur = regions
      });

      this.dbm.select_basic_data_2("i_t_cible_activation")
      .then((regions: any) => {
        this.i_t_cible_activation = regions
      });

    this.dbm.get_mes_villes()
      .then((villes: any) => {
        this.i_t_ville = villes
      });

    this.dbm.select_basic_data_2("i_t_emplacement").then(data => {
      this.i_t_emplacement = data;
    });

    this.dbm.select_basic_data_2("i_t_proximite").then(data => {
      this.i_t_proximite = data;
    });

    this.dbm.select_basic_data_2("i_t_type_quartier").then(data => {
      this.i_t_type_quartier = data;
    });

    this.dbm.select_i_t_type_client().then(data => {
      this.i_t_source_approvisionnement = data;
    });

    this.dbm.select_basic_data("i_t_activite_pos").then(data => {
      this.i_t_activite_pos = data;
    });

    this.dbm.select_basic_data_2("i_t_enseigne_appartenance").then(data => {
      this.i_t_enseigne_appartenance = data;
    });

    this.dbm.select_basic_data_2("i_t_classification1").then(data => {
      this.i_t_classification1 = data;
    });

    this.dbm.select_basic_data_2("i_t_classification2").then(data => {
      this.i_t_classification2 = data;
    });

    this.dbm.select_basic_data_2("i_t_couverture_commerciale").then(data => {
      this.i_t_couverture_commerciale = data;
    });

    this.dbm.select_basic_data_2("i_t_frequence_visite").then(data => {
      this.i_t_frequence_visite = data;
    });

    this.dbm.select_basic_data_2("i_t_canal").then(data => {
      this.i_t_canal = data;
    });

    this.dbm.select_basic_data_2("i_t_cible_installation_presentoirs").then(data => {
      this.i_t_cible_installation_presentoirs = data;
    });

    this.dbm.select_data_with_table_name("i_t_permanent_posm").then(data => {
      this.i_t_permanent_posm = data;
    });

    this.dbm.select_basic_data_2("i_t_cooperation_itg").then(data => {
      this.i_t_cooperation_itg = data;
    });

    this.dbm.select_basic_data_2("i_t_activation_autorisee").then(data => {
      this.i_t_activation_autorisee = data;
    });

    this.dbm.select_basic_data_2("i_t_preference_animateur").then(data => {
      this.i_t_preference_animateur = data;
    });

    this.dbm.select_basic_data_2("i_t_frequence_approvisionnement").then(data => {
      this.i_t_frequence_approvisionnement = data;
    });

    this.dbm.get_name_id_fournisseur(null).then(data => {
      this.i_t_fournisseur_principale = data;
      this.i_t_fournisseur_secondaire = data;
      //this.i_t_source_approvisionnement = data;
    });
  }

  async edit_fiche_client() {
    const loading = await this.load.create({
      message: 'Chargement...',
    });
    loading.present();

    this.regionChange(this.data_cli.region_id);
    this.agenceChange(this.data_cli.agence_id);
    //this.zoneChange(this.data_cli.zone_id) ;
    console.log("453 => ", this.data_cli.activite_pos_id);
    if (this.data_cli.activite_pos_id) {
      this.activite_pos_Change(this.data_cli.activite_pos_id)
    }


    this.edit = true;
    loading.dismiss();
  }

  create_fiche_client() {
    this.router.navigate(['new-client'], this.navigationExtras);
  }

  go_sync() {
    this.dbm.verify_data().then(data => {
      this.navigationExtras.queryParams = {
        "color" : data.color ,
        "unsynced" : data.non_synced
      }
      this.router.navigate(["synchro"], this.navigationExtras)
    });
	}

  save_edit() {

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.fiche_client.invalid) {
        let invalid = '';
        for (const name in this.fiche_client.controls) {
          if (this.fiche_client.controls[name].invalid) {
            if(name == "provider_latitude" || name == "provider_longitude" || name == "photo") {
              if(name == "provider_latitude") {
                invalid = '\n' + invalid + "Coordonnées GPS latitude" + '\n'
              }

              if(name == "provider_longitude") {
                invalid = '\n' + invalid + " - Coordonnées GPS longitude" + '\n'
              }

              if(name == "photo") {
                invalid = '\n' + invalid + " - Photo" + '\n'
              }
              
            }
            else {
            let named = name.charAt(0).toUpperCase() + name.slice(1);
            named = named.replace(/_|(id)/gi, function (a) { return ' '; });
            invalid = '\n' + invalid + ' - ' + named + '\n';
          }
        }
      }
        this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: invalid, key: 'invalid' });
      }
      else {
        /*if (this.filePath != "") {
          this.fiche_client.controls['photo_uri'].setValue(this.filePath);
          this.fiche_client.controls['photo'].setValue(this.photo);
        }
        if (this.filePath == "" && this.client_detail.photo_uri != "") {
          this.fiche_client.controls['photo_uri'].setValue(this.client_detail.photo_uri);
          this.fiche_client.controls['photo'].setValue(this.client_detail.photo);
        }
        if (this.filePath == "" && this.client_detail.photo_uri == "") {
          this.fiche_client.controls['photo_uri'].setValue("");
          this.fiche_client.controls['photo'].setValue("");
        }
        if (this.resp != undefined || this.resp != null) {
          this.fiche_client.controls['provider_latitude'].setValue(this.resp.latitude);
          this.fiche_client.controls['provider_longitude'].setValue(this.resp.longitude);
        }*/
        console.log("526 => ", this.data_cli.new_source_approvisionnement_id, " ", this.fiche_client.get('new_source_approvisionnement_id').value.id)
        if (this.data_cli.new_source_approvisionnement_id != this.fiche_client.get('new_source_approvisionnement_id').value.id) {
          if (this.fiche_client.get('new_source_approvisionnement_id').value.id) {
            this.fiche_client.controls['new_source_approvisionnement_id'].setValue(this.fiche_client.get('new_source_approvisionnement_id').value.id);
          }
          else {
            this.fiche_client.controls['new_source_approvisionnement_id'].setValue(this.data_cli.new_source_approvisionnement_id);
          }
        }


        console.log("536 => ", this.data_cli.new_fournisseur_principal_id, " ", this.fiche_client.get('new_fournisseur_principal_id').value.id)
        if (this.data_cli.new_fournisseur_principal_id != this.fiche_client.get('new_fournisseur_principal_id').value.id) {
          if (this.fiche_client.get('new_fournisseur_principal_id').value.id) {
            this.fiche_client.controls['new_fournisseur_principal_id'].setValue(this.fiche_client.get('new_fournisseur_principal_id').value.id);
          }
          else {
            this.fiche_client.controls['new_fournisseur_principal_id'].setValue(this.data_cli.new_fournisseur_principal_id);
          }
        }


        console.log("546 => ", this.data_cli.new_fournisseur_secondaire_id, " ", this.fiche_client.get('new_fournisseur_secondaire_id').value.id)
        if (this.data_cli.new_fournisseur_secondaire_id != this.fiche_client.get('new_fournisseur_secondaire_id').value.id) {
          if (this.fiche_client.get('new_fournisseur_secondaire_id').value.id) {
            this.fiche_client.controls['new_fournisseur_secondaire_id'].setValue(this.fiche_client.get('new_fournisseur_secondaire_id').value.id);
          }
          else {
            this.fiche_client.controls['new_fournisseur_secondaire_id'].setValue(this.data_cli.new_fournisseur_secondaire_id);
          }
        }



        //this.fiche_client.controls['canal_id'].setValue(this.data_cli.canal_id);
        console.log("501 => ", this.fiche_client.value);
        //this.fiche_client.controls['canal_id'].setValue(this.canal.id)
        let q1 = "update res_partner set cooperation_itg_id = "+ this.fiche_client.get('cooperation_itg_id').value +", canal_id = " + this.fiche_client.get('canal_id').value + " , ";
        let q2 = "";
        let q3 = "";
        let keys = Object.keys(this.fiche_client.value);
        let values = Object.values(this.fiche_client.value)
        for (var i = 0; i < keys.length - 1; i++) {

          if (values[i] == "" || values[i] == null || values[i] == undefined) {
            values[i] = "NULL";
          }

          if (keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat" || keys[i].trim() == "user_id" || keys[i].trim() == "permanent_POSM_id") {
            i++;
          }
          else {
            q2 += keys[i] + " = ";
            if (typeof (values[i]) == "string") {
              q2 += "\"" + this.remove_special_charachter(values[i]) + "\" ,";
            }
            else {
              q2 += "'" + values[i] + "' ,";
            }
          }
        }

        let query = q1 + q2 + keys[keys.length - 1] + " = \" " + this.remove_special_charachter(values[values.length - 1]) + " \" where id = " + this.partner_id;
        let query2 = "update i_t_contrat set date_debut_contrat = '" + this.fiche_client.get('date_debut_contrat').value + "' , date_fin_contrat = '" + this.fiche_client.get('date_debut_contrat').value + "' where id = " + this.data_cli.contrat_id;

        let query5 = "delete from res_partner_res_users_rel where partner_id = " + this.partner_id;
        let query6 = "delete from i_t_permanent_posm_res_partner_rel where partner_id = " + this.partner_id;

        this.dbm.insert_res_data(query5).then(() => {
          console.log("delete success i_t_permanent_posm_res_partner_rel");
        }).catch(e => {
          console.log("error delete i_t_permanent_posm_res_partner_rel" + e);
        });

        this.dbm.insert_res_data(query6).then(() => {
          console.log("delete success i_t_permanent_posm_res_partner_rel");
        }).catch(e => {
          console.log("error delete i_t_permanent_posm_res_partner_rel" + e);
        });
        let size = 0;
        if (this.fiche_client.get('user_id').value) {
          size = this.fiche_client.get('user_id').value.length;
          for (var i = 0; i < size; i++) {
            // insert into res_users_res_partner_rel (res_partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('date_debut_contrat').value[i] +"' )
            let query3 = "insert into res_partner_res_users_rel (partner_id, res_users_id) values ( " + this.partner_id + " , '" + this.fiche_client.get('user_id').value[i].value + "' )";
            this.dbm.insert_res_data(query3).then(() => {
              console.log("success res_users_res_partner_rel");
            }).catch(e => {
              console.log("error res_users_res_partner_rel" + e);
            });
          }
        }

        if (this.fiche_client.get('permanent_POSM_id').value) {
          size = this.fiche_client.get('permanent_POSM_id').value.length;
          for (var i = 0; i < size; i++) {
            if (this.fiche_client.get('permanent_POSM_id').value[i].value != null) {
              let query4 = "insert into i_t_permanent_posm_res_partner_rel (partner_id, permanent_posm_id) values ( " + this.partner_id + " , '" + this.fiche_client.get('permanent_POSM_id').value[i].value + "' )";
              this.dbm.insert_res_data(query4).then(() => {
              }).catch(e => {
                console.log("error res_users_res_partner_rel" + e);
              });
            }

          }
        }

        this.dbm.update_res_data(query).then(() => {
          this.dbm.update_res_data(query2).then(() => {
            this.dbm.insert_data_for_sync("res.partner", this.partner_id, 0).then(() => {
              this.make_toast("Mise à jour avec succès...");
              this.edit = false;
              this.init_be(this.partner_id);
            }).catch(e => {
              alert('Erreur 1 : ' + e.message) ;
              this.messageService.add({ severity: 'error', summary: 'Erreur 1 : ', detail: e.message, key: 'invalid' });
            });
          }).catch(e => {
            alert('Erreur 2 : ' + e.message) ;
            this.messageService.add({ severity: 'error', summary: 'Erreur 2 : ', detail: e.message, key: 'invalid' });
          });
        }).catch(e => {
          alert('Erreur 3 : ' + e.message) ;
          this.messageService.add({ severity: 'error', summary: 'Erreur 3 : ', detail: e.message, key: 'invalid' });
        });
      }
    });
  }

  open_fiche_client() {
    this.router.navigate(['fiches-client'], this.navigationExtras);
  }



  async getMyLocation() {

    var options = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 0
    };

    let loading = await this.load.create({
      duration: 6000
    });
    loading.present();

    await this.geolocation.getCurrentPosition(options).then(async (resp) => {
      this.resp = resp.coords;
      if(resp.coords.longitude && resp.coords.longitude) {
        this.fiche_client.controls['provider_longitude'].setValue(resp.coords.longitude);
        this.fiche_client.controls['provider_latitude'].setValue(resp.coords.latitude);
      }
      else {
        const alert = await this.alertController.create({
          message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
          buttons: ['OK']
        });
  
        await alert.present();
      }
      loading.dismiss();
    }).catch(async (error) => {
      const alert = await this.alertController.create({
        message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
        buttons: ['OK']
      });

      await alert.present();
    });
  }

  abort_edit_client() {
    this.edit = false;
  }

  ConvertStatut(status) {
    console.log(status);
    if (status == "") {
      this.activatedRoute.queryParams.subscribe(params => {
        this.dbm.update_status_res_partner(this.partner_id, null).then(() => {
          this.etat = "";
        });
      });
    }
    if (status == "Actif") {
      this.activatedRoute.queryParams.subscribe(params => {
        this.dbm.update_status_res_partner(this.partner_id, 1).then(() => {
          this.etat = "Inactif";
          if (status == "Actif") {
            this.make_toast("Client inactivé...");
          }
          else {
            this.make_toast("Client activé...");
          }
        });
      });
    }
    else

      this.activatedRoute.queryParams.subscribe(params => {
        this.dbm.update_status_res_partner(this.partner_id, 0).then(() => {
          this.etat = "Actif";
          if (status == "Inactif") {
            this.make_toast("Client activé...");
          }
          else {
            this.make_toast("Client inactivé...");
          }
        });
      });
  }
  async make_toast(message) {
    let x = await this.toast.create({
      message: message,
      duration: 3000
    });
    x.present();
  }

  cancel(champ: string) {
    this.fiche_client.controls[champ].setValue(null);
    //console.log(this.fiche_client.get('champ').value) ;
  }

  async regionChange(event) {
    this.i_t_agence_filtered = await this.i_t_agence.filter(function (agence_filtered) {
      return agence_filtered.region_id == event;
    });
    console.log('regionChange : ' + JSON.stringify(this.i_t_agence_filtered));
  }

  async agenceChange(event) {
    /*this.i_t_zone_filtered = this.i_t_zone.filter(function(zone_filtered) {
  return zone_filtered.agence_id == event;
});*/
    this.dbm.get_secteur_fitered(event).then(data => {
      this.i_t_secteur_filtered = data;
    })
  }

  async zoneChange(event) {
    this.i_t_secteur_filtered = await this.i_t_secteur.filter(function (secteur_filtered) {
      return secteur_filtered.agence_id == event;
    });
    console.log('zoneChange : ' + JSON.stringify(this.i_t_secteur_filtered));
  }

  activite_pos_Change(event) {

    console.log(event);

    if (event) {
      let activite = this.i_t_activite_pos.find(function (pos) {
        return pos.id == event;
      });

      if (activite.canal_id != null) {
        this.canal_result = this.i_t_canal.find(function (can) {
          return activite.canal_id == can.id;
        });
        this.fiche_client.controls['canal_id'].setValue(this.canal_result.id);
      }

      else {
        this.canal_result = {
          id: null,
          name: null
        }
        this.fiche_client.controls['canal_id'].setValue(null);
      }
    }

  }


  async takePicture() {

    let cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 1024,
      targetWidth: 1024,
      cameraDirection: 1,
      correctOrientation: true,
    };
    const imagePath: string = await this.camera.getPicture(cameraOptions);
    this.fiche_client.controls['photo_uri'].setValue(this.window.Ionic.WebView.convertFileSrc(imagePath));
    if (this.window.Ionic.WebView.convertFileSrc(imagePath).includes("http://localhost/_app_file_/") == true) {
      this.b64.encodeFile(this.window.Ionic.WebView.convertFileSrc(imagePath).replace("http://localhost/_app_file_/", "file:///")).then(result => {
        console.log(imagePath);
        console.log("result" + result);
        result = result.split(',')[1];
        this.photo = result;
        this.fiche_client.controls['photo'].setValue(result);
      });
    }
    console.log(this.fiche_client.get('photo').value); //this.win.Ionic.WebView.convertFileSrc(imageSrc);
    return this.window.Ionic.WebView.convertFileSrc(imagePath);

  }

  async showImageFromCamera() {
    try {
      this.filePath = await this.takePicture();
      this.client_detail.photo_uri = this.filePath;
      this.fiche_client.controls['photo_uri'].setValue(this.filePath);
    } catch (error) {
      console.log(error);
    }
  }

  removeImage() {
    this.client_detail.photo_uri = "";
    this.fiche_client.controls['photo_uri'].setValue("");
  }

  itemsActionsChange(event) {

    if (event.value.name == "PROSPECT") {
      this.itemsActions = [{ label: 'VALIDÉE PAR SUPERVISEUR', value: { name: 'VALIDÉE PAR SUPERVISEUR' } }];
      this.etat = "Inactif"
    }
    if (event.value.name == "VALIDÉE PAR SUPERVISEUR") {
      this.itemsActions = [{ label: 'VALIDÉE PAR ADMINISTRATEUR', value: { name: 'VALIDÉE PAR ADMINISTRATEUR' } }];
      this.etat = "Inactif";
    }
    if (event.value.name == "VALIDÉE PAR ADMINISTRATEUR") {
      this.itemsActions = [{ label: 'VALIDÉE PAR ADMINISTRATEUR', value: { name: 'VALIDÉE PAR ADMINISTRATEUR' } }];
      this.etat = "Actif";
    }
  }
  open_full_screen() {
    this.display = true;
  }
  data_cmp: any;
  Deconnexion() {
    this.storage.get('data_p2')
      .then((data2: any) => {
        this.data_cmp = JSON.parse(data2);
        this.dbm.Updata_active_Login(this.data_cmp.id);
        this.storage.remove("data_p2");
      })
    this.router.navigate(['home'], this.navigationExtras);
  }
  Contrat_date(event) {
    this.dbm.get_res_partner_contrat(event.detail.value).then(data => {
      this.date_contrat = data
      this.client_detail.date_debut_contrat = this.date_contrat["datedebut"];
      this.client_detail.date_fin_contrat = this.date_contrat['datefin'];
    });
  }

  open_menu() {
    this.router.navigate(['menu'], this.navigationExtras);
  }

  filterSourceAppro(event_souce_appro) {
    this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(data => {
      console.log(data);
      this.filteredSourceAppro = data;
    });
  }

  filterfournisseur_principal(event_souce_appro) {
    this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(data => {
      console.log(data);
      this.filteredfournisseur_principal = data;
    });
  }

  filterfournisseur_secondaire(event_souce_appro) {
    this.dbm.get_name_id_fournisseur(event_souce_appro.query).then(data => {
      console.log(data);
      this.filteredfournisseur_secondaire = data;
    });
  }

  remove_special_charachter(soratra ) : string {
    if (soratra == null) {
      return "" ;
    }
    else {
      return soratra.replace(/['"<>]/g, ' ') ;
    }
  }

}
