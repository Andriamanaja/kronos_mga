import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import { i_t_region } from '../../model/data/i_t_region.model';
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
import { i_t_source_approvisionnement } from '../../model/data/i_t_source_approvisionnement.model';
import { res_users } from '../../model/data/res_users.model';
import { stringify } from 'querystring';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { i_t_canal } from 'src/app/model/data/i_t_canal.model';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';
import { Auth } from 'src/app/model/helper/auth';
import { Base64 } from '@ionic-native/base64/ngx';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface name_id {
  value: any;
  display: string;
}

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})



export class NewClientPage implements OnInit {
  photo: String;
  itemes: MenuItem[];
  items: Array<MenuItem>;
  itemsActions: Array<MenuItem>;
  home: any;
  base64Image: any;
  fiche_client: FormGroup;
  i_t_activation_autorisee: Array<i_t_activation_autorisee> = [];
  i_t_cible_activation: Array<i_t_cible_activation> = [];
  i_t_cible_installation_presentoirs: Array<i_t_cible_installation_presentoirs> = [];
  i_t_activite_pos: Array<i_t_activite_pos> = [];
  i_t_agence: Array<i_t_agence> = [];
  i_t_agence_filtered: Array<i_t_agence> = [];
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
  i_t_source_approvisionnement: Array<name_id>;
  i_t_zone_filtered: Array<i_t_zone> = [];
  i_t_secteur_filtered: Array<i_t_secteur> = [];
  i_t_canal: Array<i_t_canal> = [];
  i_t_canal_filtered: Array<i_t_canal> = [];
  res_user: Array<name_id>;
  users_same_secteur: Array<name_id> = [];
  display_2: boolean = false;
  selectedWorkFlow : any ;
  signature: string;
  invalid_fields = [];
  canal: string = "";
  id_contrat: number = 0;
  active_user: res_users;
  active: number = 0;
  filePath: string;
  window: any = window;
  display: boolean = false;
  max: number;
  cover: string = "cover";
  loadIndicator: boolean = false;
  canal_result: any;


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredPosm: Observable<name_id[]>;
  posms: name_id[];

  constructor(private b64: Base64, private actRoute: ActivatedRoute, private fullScreenImage: FullScreenImage, private storage: Storage, private messageService: MessageService, private toast: ToastController, private dbm: Database_manager, private form_builder: FormBuilder, private router: Router, private camera: Camera, private geolocation: Geolocation, private alert: AlertController) {

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loadIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loadIndicator = false;
      }
    })
  }

  ionViewWillEnter(): void {
    console.log("207 ato")
    this.actRoute.data.subscribe((details: { data: any }) => {
      this.i_t_region = details.data.i_t_region;
      this.i_t_permanent_posm = details.data.i_t_permanent_posm;
      this.res_user = details.data.res_users;
      this.i_t_agence = details.data.i_t_agence;
      //this.i_t_zone = details.data.i_t_zone ;
      this.i_t_activite_pos = details.data.i_t_activite_pos;
      this.i_t_activation_autorisee = details.data.i_t_activation_autorisee;
      this.i_t_cible_activation = details.data.i_t_cible_activation;
      this.i_t_cible_installation_presentoirs = details.data.i_t_cible_installation_presentoirs;
      this.i_t_classification1 = details.data.i_t_classification1;
      this.i_t_classification2 = details.data.i_t_classification2;
      this.i_t_contrat = details.data.i_t_contrat;
      this.i_t_cooperation_itg = details.data.i_t_cooperation_itg;
      this.i_t_couverture_commerciale = details.data.i_t_couverture_commerciale;
      this.i_t_emplacement = details.data.i_t_emplacement;
      this.i_t_enseigne_appartenance = details.data.i_t_enseigne_appartenance;
      this.i_t_frequence_approvisionnement = details.data.i_t_frequence_approvisionnement;
      this.i_t_frequence_visite = details.data.i_t_frequence_visite;
      this.i_t_preference_animateur = details.data.i_t_preference_animateur;
      this.i_t_proximite = details.data.i_t_proximite;
      this.i_t_secteur = details.data.i_t_secteur;
      this.i_t_type_client = details.data.i_t_type_client;
      this.i_t_type_quartier = details.data.i_t_type_quartier;
      this.i_t_ville = details.data.i_t_ville;
      this.i_t_source_approvisionnement = details.data.i_t_fournisseur;
      this.i_t_canal = details.data.i_t_canal;
      this.i_t_fournisseur_principale = details.data.i_t_fournisseur;
      this.i_t_fournisseur_secondaire = details.data.i_t_fournisseur;
    })

  }

  ngOnInit() {

    this.itemes = [
      { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
    ];
    this.items = [
      { label: 'PROSPECT' },
      { label: 'VALIDÉE PAR SUPERVISEUR' },
      { label: 'VALIDÉE PAR ADMINISTRATEUR' },
    ];
    this.itemsActions = [
      { label: 'VALIDÉE PAR SUPERVISEUR' },
      { label: 'VALIDÉE PAR ADMINISTRATEUR' },
    ];

    this.fiche_client = this.form_builder.group({
      name: [''],
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

      provider_latitude: [''],
      provider_longitude: [''],

      type_client_id: ['', Validators.required],
      activite_pos_id: [''],
      enseigne_appartenance_id: ['', Validators.required],
      classification1_id: ['', Validators.required],
      classification2_id: ['', Validators.required],

      couverture_commerciale_id: ['', Validators.required],
      frequence_visite_id: [''],

      user_id: [''],
      canal_id: [''],

      active: [''],
      photo_uri: [''],
      photo: [''],

      cible_installation_presentoirs_id: ['', Validators.required],
      permanent_POSM_id: [''],

      contrat_id: [''],
      date_debut_contrat: [''],
      date_fin_contrat: [''],

      cooperation_itg_id: ['', Validators.required],
      activation_autorisee_id: ['', Validators.required],
      preference_animateur_id: ['', Validators.required],

      frequence_approvisionnement_id: ['', Validators.required],
      new_source_approvisionnement_id: [''],
      new_fournisseur_principal_id: [''],
      new_fournisseur_secondaire_id: [''],

      visite: [''],

      commentaire: [''],
      state: ['']
    });

    this.fiche_client.controls['active'].setValue(this.active);

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
        result = result.split(',')[1];
        this.photo = result;
        this.fiche_client.controls['photo'].setValue(result);
      });
    }
    return this.window.Ionic.WebView.convertFileSrc(imagePath);
  } 

  async showImageFromCamera() {
    try {
      this.filePath = await this.takePicture();
    } catch (error) {
      this.fiche_client.controls['canal_id']
    }
  }

  getMyLocation() {
    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((resp) => {

      this.fiche_client.get('provider_longitude').setValue(resp.coords.longitude);
      this.fiche_client.get('provider_latitude').setValue(resp.coords.latitude);

    }).catch((error) => {
    });
  }

  open_fiche_client() {
    this.router.navigate(['fiches-client']);
  }

  async make_alert(message) {
    let x = await this.alert.create({
      message: message,
      header: "test",
    });
    x.present();
  }

  async make_toast(message) {
    let x = await this.toast.create({
      message: message,
      duration: 3000
    });
    x.present();
  }

  save_new_client() {
    this.fiche_client.controls['contrat_id'].setValue(null);
    if (this.fiche_client.invalid) {
      let invalid = '';
      for (const name in this.fiche_client.controls) {
        if (this.fiche_client.controls[name].invalid) {
          let named = name.charAt(0).toUpperCase() + name.slice(1);
          named = named.replace(/_|(id)/gi, function (a) { return ' '; });
          invalid = '\n' + invalid + ' - ' + named + '\n';
        }
      }
      this.messageService.add({ severity: 'error', summary: 'Les champs suivants sont incorrects : ', detail: invalid, key: 'invalid' });
    }


    else {
      let state = 'brouillon'
      this.fiche_client.controls['photo'].setValue(this.photo);
      this.fiche_client.controls['name'].setValue("/");
      this.fiche_client.controls['visite'].setValue(null);
      this.fiche_client.controls['state'].setValue(state.trim());
      let q1 = "insert into res_partner ";
      let q2 = "";
      let q3 = "";
      let keys = Object.keys(this.fiche_client.value);
      let values = Object.values(this.fiche_client.value)
      for (var i = 0; i < keys.length - 1; i++) {

        if (values[i] == "" || values[i] == null || values[i] == undefined) {
          values[i] = "NULL";
        }

        if (keys[i].trim() == "contrat_id" || keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat" || keys[i].trim() == "user_id" || keys[i].trim() == "permanent_POSM_id") {
          i++;
        }
        else {
          q2 += keys[i] + " ,";
          if (typeof (values[i]) == "string") {
            q3 += "\"" + values[i] + "\",";
          }
          else {
            q3 += "'" + values[i] + "' ,";
          }
        }
      }

      let query = q1 + " ( " + q2 + keys[keys.length - 1] + " , canal_id) values (" + q3 + " \"" + values[values.length - 1] + "\" , " + this.fiche_client.get('canal_id').value + ")";
      let query2 = "insert into i_t_contrat (date_debut_contrat, date_fin_contrat) values ('" + this.fiche_client.get('date_debut_contrat').value + "' ,'" + this.fiche_client.get('date_debut_contrat').value + "' )";
      //let query5 = "insert into data_for_sync (table_name, is_synced, table_id, action_type, type) values (\"res_partner\", 0, (select max (id) + 1 from res_partner ), 1,\"insert\")";


      if (this.fiche_client.get('user_id').value.length > 0) {

        for (var i = 0; i < this.fiche_client.get('user_id').value.length; i++) {
          let query3 = "insert into res_users_res_partner_rel (partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '" + this.fiche_client.get('user_id').value[i].value + "' )";
          this.dbm.insert_res_data(query3).then((data) => {
          }).catch(e => {
          });
        }
      }


      if (this.fiche_client.get('permanent_POSM_id').value.length > 0) {
        for (var i = 0; i < this.fiche_client.get('permanent_POSM_id').value.length; i++) {
          //insert into i_t_permanent_posm_res_partner_rel (res_partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('permanent_POSM_id').value[i] +"' )
          let query4 = "insert into i_t_permanent_posm_res_partner_rel (partner_id, i_t_permanent_posm_id) values ( (select max (id) + 1 from res_partner ) , '" + this.fiche_client.get('permanent_POSM_id').value[i].value + "' )";
          this.dbm.insert_res_data(query4).then(() => {
          }).catch(e => {
          });
        }
      }

      this.dbm.insert_res_data(query).then(() => {

        this.dbm.insert_data_for_sync("res.partner", "(select max(res_partner.id) from res_partner)", 1).then(() => {
          this.dbm.insert_res_data(query2).then(() => {
            this.make_toast("Insertion avec succès");
            this.router.navigate(['fiches-client']);
          }).catch(e => {
          })
        })


      }).catch(e => {
      });
    }
  }

  abort_new_client() {

  }

  edit_image() {

  }

  delete_image() {

  }

  regionChange(event) {
    this.i_t_agence_filtered = this.i_t_agence.filter(function (agence_filtered) {
      return agence_filtered.region_id == event;
    });
  }

  agenceChange(event) {
    /*this.i_t_zone_filtered = this.i_t_zone.filter(function(zone_filtered) {
      return zone_filtered.agence_id == event;
    });*/
    this.dbm.get_secteur_fitered(event).then(data => {
      this.i_t_secteur_filtered = data;
    })
  }

  zoneChange(event) {
    this.i_t_secteur_filtered = this.i_t_secteur.filter(function (secteur_filtered) {
      return secteur_filtered.agence_id == event;
    });
  }

  secteurChange(event) {
    let secteur_id = event;
    this.dbm.get_user_by_secteur(secteur_id)
      .then((data: any) => {
        if (data) {
          this.users_same_secteur = data;
          this.fiche_client.controls['user_id'].disable();
        }
      })

  }

  activite_pos_Change(event) {

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

  ConvertStatut(status: number) {
    this.active = status;
    this.fiche_client.controls['active'].setValue(status);
    if (status == 0) {
      this.make_toast("Client active...");
    }
    else {
      this.make_toast("Client inactive...");
    }
  }

  open_menu() {
    this.router.navigate(['fiches-client'])
  }
  data_cmp: any;
  Deconnexion() {
    Auth.access = true;
    this.storage.get('data_p2')
      .then((data2: any) => {
        this.data_cmp = JSON.parse(data2);
        this.dbm.Updata_active_Login(this.data_cmp.id);
        this.storage.remove("data_p2");
      })
    this.router.navigate(['home']);
  }

  open_full_screen() {
    this.display_2 = true;
  }

  remove_image() {
    this.filePath = null;
  }
  //this.posts.filter(post => post.nomCategorie === m_categorie) ; (selectionChange)="selectChangeSigle($event)"

}
