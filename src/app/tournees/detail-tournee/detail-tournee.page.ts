import { Component, OnInit } from '@angular/core';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { tournees_sc1 } from 'src/app/model/screen/tournnees.screen1';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage'
import { MenuItem } from 'primeng/api';
import { name_id } from 'src/app/model/data/name_id';
import { Auth } from 'src/app/model/helper/auth';
import { AlertController, LoadingController } from '@ionic/angular';

interface safidy {
  label: string;
  value: string;
}

@Component({
  selector: 'app-detail-tournee',
  templateUrl: './detail-tournee.page.html',
  styleUrls: ['./detail-tournee.page.scss'],
  styles:
    [`
  .non {
            
    color: green !important;
}
.oui {
    
    color: red !important;
}
  `]
})


export class DetailTourneePage implements OnInit {

  itemes: MenuItem[];
  data_pv: Array<tournees_sc1> = [];
  data_pvs: any[] = [];
  data_pvs2: any[] = [];
  data_p: Array<tournees_sc1> = [];
  data_pn: Array<tournees_sc1> = [];
  cols_p: { field: string; header: string; display: string, pointer_events: string, bg: string, width: string }[];
  cols_pup: { field: string; header: string; display: string, pointer_events: string, bg: string, width: string }[];
  cols_pv: { field: string; header: string; display: string, pointer_events: string, bg: string, width: string }[];
  cols_pvs: { field: string; header: string; display: string, pointer_events: string, bg: string, width: string }[];
  cols_pn: { field: string; header: string; display: string, pointer_events: string, bg: string, width: string }[];
  name: string = "";
  items: { id: number; label: string; }[];
  itemsActions: { id: number; label: string; }[];
  display: boolean = false;
  display2: boolean = false;
  display3: boolean = false;
  clicked: any;
  selected: Array<any> = [];
  screen: any = {};
  from_liste: any;
  edit: boolean = false;
  display4: boolean = false;
  tournees_fg: FormGroup;
  visites: safidy[];
  id_tournee: number;
  add: boolean = false;
  res_partner: any[];
  id: any;
  result: any;
  result2: safidy;
  data_verification: Array<any> = [];
  buttonShow: boolean = false;
  data_pup: Array<any> = [];
  selectedAction: any;
  start_date: any;
  added_pos: any;
  filtered_added_pos: any[];
  data_pvs_temp: Array<any> = [];
  date_debut: any;
  date_fin: any;
  date_prevue: any;
  commercial: any;
  status: any;
  color_icon: String = "red";
  items_sync: MenuItem[];
  navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };
  x: any;
  load : any ;

  //selected:any ;

  constructor(private loading : LoadingController, private alert: AlertController, private fb: FormBuilder, private geolocation: Geolocation, private activated_route: ActivatedRoute, private storage: Storage, private dbm: Database_manager, private route: Router) {

  }

  filter_single_pos(event) {
    let query = event.query;
    this.filtered_added_pos = this.filter_pos(query, this.res_partner);
  }

  filter_pos(query, pos: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < pos.length; i++) {
      let pos_temp = pos[i];
      if (pos_temp.nom_pos.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(pos_temp);
      }
    }
    return filtered;
  }

  add_pos_additional_on_blur() {

    this.added_pos.pos_additional_line_id = '-1';
    this.added_pos.visite = "non";
    if (!this.data_pvs) {
      this.data_pvs = [];
    }

    this.data_pvs.push(this.added_pos);
    this.data_pvs_temp.push(this.added_pos);
    this.added_pos = null;
    this.add = false;
  }

  ngOnInit() {

    this.color_icon = 'red'

    this.items = [
      { id: 1, label: '' },
    ];


    this.visites = [
      { label: "non", value: "non" },
      { label: "oui", value: "oui" },
    ]

    this.cols_pup = [
      { field: 'id', header: 'id', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
      { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
      { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
      { field: 'visite', header: 'Visité', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
    ];

    this.cols_pv = [
      { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
      { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
      { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
      { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
      { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'name', header: 'name', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'sequence', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' }
    ];

    this.cols_pvs = [

      { field: 'pos_additional_line_id', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '2%' },
      { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
      { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
      { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
      { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
      { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'name', header: 'name', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'sequence', header: 'sequence', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
    ]

    this.cols_p = [
      { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
      { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
      { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
      { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
      { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'name', header: 'name', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'sequence', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' }
    ]

    this.cols_pn = [
      { field: 'res_partner_id', header: 'res_partner_id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'res_partner_name', header: 'Code client', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '17%' },
      { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '38%' },
      { field: 'quartier', header: 'Quartier', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '32%' },
      { field: 'visite', header: 'Visité', display: 'table-cell', pointer_events: 'none', bg: '#D3D3D3', width: '13%' },
      { field: 'id', header: 'id', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'name', header: 'name', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'start_date', header: 'start_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'end_date', header: 'end_date', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' },
      { field: 'sequence', header: '', display: 'none', pointer_events: 'none', bg: '#D3D3D3', width: '0%' }
    ];

    this.tournees_fg = this.fb.group({
      sequence: [''],
      name: [''],
      visite: ['']
    });

    this.dbm.get_name_id_data("res_partner")
  }

  go_back() {
    this.route.navigate(['liste-tournee'], this.navigationExtras)
  }

  checkstatus(status: string, k: number) {

    switch (status) {
      case "Nouvelle": {
        this.items = [
          { id: 1, label: 'NOUVELLE' },
        ];

        this.itemsActions = [
          { id: 1, label: 'DÉMARRER LA TOURNÉE' },
        ];
        break;
      }

      case "Démarrée": {
        this.items = [
          { id: 2, label: 'DÉMARRÉE' }
        ];
        this.buttonShow = true;
        this.itemsActions = [
          { id: 1, label: 'CLÔTURER LA TOURNÉE' },
        ];

        if (k != 0) {
          this.display2 = true;
        }
        break;
      }

      case "démarrer": {
        this.items = [
          { id: 2, label: 'DÉMARRÉE' }
        ];
        this.buttonShow = true;
        this.itemsActions = [
          { id: 1, label: 'CLÔTURER LA TOURNÉE' },
        ];

        if (k != 0) {
          this.display2 = true;
        }
        break;
      }

      case "clôturer": {
        this.buttonShow = true;
        this.itemsActions = [
          { id: 0, label: 'CLOTURÉE' },
        ];
        this.items = [
          { id: 1, label: 'CLOTURÉE' },
        ];

        if (k != 0) {
          let temp = [];
          temp = this.data_pvs.concat(this.data_pv);
          this.data_pn = temp.filter(function (item) {
            return item.visite == "non";
          });
          this.display3 = true;
        }
        break;
      }
      case "Clôturée": {
        this.buttonShow = true;
        this.itemsActions = [
          { id: 0, label: 'CLOTURÉE' },
        ];
        this.items = [
          { id: 1, label: 'CLOTURÉE' },
        ];

        if (k != 0) {
          let temp = [];
          temp = this.data_pvs.concat(this.data_pv);
          this.data_pn = temp.filter(function (item) {
            return item.visite == "non";
          });
          this.display3 = true;
        }
        break;
      }

      default: {
      }
    }
  }

  init_data(iter: number) {

    this.color_icon = 'red'

    this.storage.get("temp").then(temp => {
      let data_temp = [];
      data_temp = JSON.parse(temp)
      if (temp.length > 0) {
        this.data_pvs_temp = data_temp;
      }
    });

    this.data_pvs_temp = [];


    this.activated_route.queryParams.subscribe(params => {
      this.checkstatus(params['status'], 0)

      this.from_liste = params;
      this.status = params["status"];
      this.name = params["name"];
      this.commercial = params["commercial"];
      this.date_prevue = params["date_prevue"];
      this.date_debut = params["date_debut"];
      this.date_fin = params["date_fin"];
      this.id_tournee = params['x_odoo_id'];

      this.dbm.get_tournee_by_user("i_t_pos_additional", this.id_tournee).then((data_i_t_pos_additional: Array<any>) => {
        this.data_pvs = data_i_t_pos_additional;

        this.dbm.get_tournee_by_user("i_t_pos_initial", this.id_tournee).then((data_i_t_pos_initial: Array<tournees_sc1>) => {
          this.data_pv = data_i_t_pos_initial;

          this.dbm.verification_visit_sheet(this.id_tournee).then((data_verif : Array <any>) => {
            this.data_verification = data_verif;
          });

          this.dbm.get_unvisited_partner(this.id_tournee, data_i_t_pos_initial).then((data) => {
            this.data_pup = data;
          });

          this.dbm.get_active_user().then(data => {
            this.id = data.id;
            this.dbm.select_additionnal_pos(this.id_tournee, "").then(data => {
              this.res_partner = data;
            });
          });
        });
      });
    });

  }

  async ionViewWillEnter() {
    this.load = await this.loading.create() ;
    this.init_data(0);
  }

  onRowClicked(rowData) {

    let index = null;
    let index_2 = null;

    for (var i = 0; i < this.data_pvs.length; i++) {
      if (this.data_pvs[i].res_partner_name == rowData.res_partner_name) {
        index = i;
      }
    }

    for (var i = 0; i < this.data_pvs_temp.length; i++) {
      if (this.data_pvs_temp[i].res_partner_name == rowData.res_partner_name) {
        index_2 = i;
      }
    }

    if (index != null) {
      this.data_pvs.splice(index, 1);
    }

    if (index_2 != null) {
      this.data_pvs_temp.splice(index_2, 1);
    }

    else {
      this.dbm.remove_pos_additional(rowData.i_t_pos_additional_id, this.id_tournee).then(data => {
        this.init_data(1);
      });
    }
  }

  itemsActionsChange(event) {
    let named = event.label.split(' ');
    named = named[0].charAt(0).toLowerCase() + named[0].slice(1).toLowerCase();

    switch (named) {
      case "Clôturée":
        named = "clôturer";
        break;
      case "Démarrée":
        named = "démarrer"

      default:
        break;
    }
    this.checkstatus(named, 1);

  }

  test(rowData, ri) {
    this.data_pup[ri] = rowData;
  }

  go_sync() {
    
      this.route.navigate(["synchro"], this.navigationExtras)

  }

  valider_tournee() {
    // alert("385 => " +  JSON.stringify(this.selected));
    this.dbm.update_date_tournee("start_date", this.id_tournee);

    if (this.data_pup.length > 0) {
      for (var i = 0; i < this.data_pup.length; i++) {
        if (this.data_pup[i].visite == "oui") {
          this.dbm.insert_pos_additionnal(this.data_pup[i], this.id_tournee, 1).then(() => {
          })
        }
      }
    }

    this.display2 = false;
    this.dbm.update_tournee_by_id(this.id_tournee, "demarre").then(() => {
      this.status = "Démarrée";
      this.dbm.get_tournee_by_user("i_t_pos_additional", this.id_tournee).then((data_i_t_pos_additional: Array<any>) => {

        if (this.data_pvs.length > 0) {
          if (data_i_t_pos_additional) {
            if (data_i_t_pos_additional.length > 0) {
              for (var i = 0; i < data_i_t_pos_additional.length; i++) {
                this.data_pvs.push(data_i_t_pos_additional[i]);
              }
            }
          }
        }

        else {
          this.data_pvs = data_i_t_pos_additional;
        }


        this.dbm.get_tournee_by_user("i_t_pos_initial", this.id_tournee).then((data_i_t_pos_initial: Array<tournees_sc1>) => {
          this.data_pv = data_i_t_pos_initial;



          this.dbm.get_active_user().then(data => {
            this.id = data.id;
            let q = "select res_partner.id as value, res_partner.name as label from res_partner where user_id = " + data.id;

          });
        });
      });
    })
  }

  cloturer_tournee() {
    this.dbm.update_date_tournee("end_date", this.id_tournee);
    this.display3 = false;
    this.dbm.update_tournee_by_id(this.id_tournee, "cloture")
      .then(() => {
        this.itemsActions = [
          { id: 0, label: 'CLOTURÉE' },
        ];
        this.items = [
          { id: 1, label: 'CLOTURÉE' },
        ];

        this.route.navigate(['liste-tournee'])

        this.dbm.get_tournee_by_user("i_t_pos_additional", this.id_tournee).then((data_i_t_pos_additional: Array<any>) => {
          if (this.data_pvs.length > 0) {
            for (var i = 0; i < data_i_t_pos_additional.length; i++) {
              this.data_pvs.push(data_i_t_pos_additional[i]);
            }
          }
          else {
            this.data_pvs = data_i_t_pos_additional;
          }

          this.dbm.get_tournee_by_user("i_t_pos_initial", this.id_tournee).then((data_i_t_pos_initial: Array<tournees_sc1>) => {
            this.data_pv = data_i_t_pos_initial;

            this.dbm.get_active_user().then(data => {
              this.id = data.id;
              let q = "select res_partner.id as value, res_partner.name as label from res_partner where user_id = " + data.id;
              this.dbm.select_additionnal_pos(this.id_tournee, "").then(data => {
                this.res_partner = data;
              });
            });
          });
        });
      });
  }

  abort_tournee() {
    this.remove_i_t_pos_additional() ;
    if (this.edit == false) {
      this.route.navigate(['detail-tournee'], this.navigationExtras);
    }
    else {
      this.edit = false;
    }
    this.data_pvs_temp = [] ;
    this.init_data(0) ;
    this.buttonShow = true
  }

  getMyLocation() {
    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {
    }).catch((error) => {
    });
  }

  edit_tournee() {
    this.buttonShow = false ;
    this.edit = true;
  }

  remove_i_t_pos_additional() {
    for (var i = 0; i < this.data_pvs.length; i++) {
      if (this.data_pvs[i].pos_additional_line_id == -1 || this.data_pvs[i].pos_additional_line_id == null) {
        this.dbm.remove_pos_additional(this.data_pvs[i].i_t_pos_additional_id, this.id_tournee);
      }
    }
  }

  async save_tournee() {
    if (this.data_pvs_temp.length > 0) {
      for (var i = 0; i < this.data_pvs_temp.length; i++) {
        await this.dbm.insert_pos_additionnal(this.data_pvs_temp[i], this.id_tournee, 0)
      }
      this.init_data(1);
    }
    this.edit = false;
    this.buttonShow = true ;
  }

  visite_change(visite: string) {
    for (var i = 0; i < this.data_p.length; i++) {
      if (this.data_p[i].res_partner_name == this.screen.res_partner_name) {
        this.data_p[i].visite = visite;
        break;
      }
    }
  }

  async go_fiche_visite() {

    let x = this.data_pvs.filter(function (additional) {
      return additional.pos_additional_line_id == -1
    });

    let temp = JSON.stringify(this.data_pvs_temp);
    this.storage.set("temp", temp);

    let navigation_extra: NavigationExtras = {
      queryParams: {
        id_tournee: this.id_tournee,
        commercial_id: this.data_pv[0].id,
        tour_status: this.status,
      }
    }

    if (this.data_pv == null) {

    }

    else {
      if(this.data_verification == undefined) {
        for (var i = 0; i < this.data_pv.length; i++) {
          this.dbm.insert_Visit_sheet(this.data_pv[i].res_partner_id, this.id_tournee, "true", this.data_pv[i].i_t_pos_initial_id, null).then(() => {
          });
        }
      }
      else {
        var diff = this.data_pv.filter(this.comparer(this.data_verification)) ;
        for (var i = 0; i < diff.length; i++) {
          this.dbm.insert_Visit_sheet(diff[i].res_partner_id, this.id_tournee, "true", diff[i].i_t_pos_initial_id, null).then(() => {
          });
        }
      }
    }
    if (x.length > 0) {
      this.save_additional()
    }

  var m = await this.loading.create({
    message: 'Veuillez patienter...',
    duration: 3000
  }) ;

  await m.present() ;
  await m.onDidDismiss().then(()=> {
    this.route.navigate(["fiche-visite"], navigation_extra);
  });
    

  }

  comparer(verif){
    return function(from_db){
      return verif.filter(function(verif_filterd){
        return verif_filterd.partner_id == from_db.res_partner_id && verif_filterd.pos_initial == from_db.i_t_pos_initial_id
      }).length == 0;
    }
  }

  save_additional() {
    if (this.data_pvs_temp == null) {
      
    }
    else {
      console.log("632 => ", this.data_pvs) ;
      for (var i = 0; i < this.data_pvs.length; i++) {
        console.log("it => " , i) ;
        if (this.data_pvs[i].pos_additional_line_id == -1 || this.data_pvs[i].pos_additional_line_id == null) {
          this.dbm.insert_Visit_sheet(this.data_pvs[i].res_partner_id, this.id_tournee, "false", null, this.data_pvs[i].i_t_pos_additional_id).then(() => {
          });
        }
      }
      this.data_pvs_temp = []
    }
  }

  open_menu() {
    this.route.navigate(['menu'], this.navigationExtras)
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
    this.route.navigate(['home'], this.navigationExtras)
  }


  add_line() {
    this.add = true;
    let tohiny = "";
    let tohiny_2 = "";
    if (this.data_pvs_temp && this.data_pvs_temp.length > 0) {
      tohiny = " and res_partner.id not in (";
      for (var i = 0; i < this.data_pvs_temp.length - 1; i++) {
        tohiny_2 = tohiny_2 + this.data_pvs_temp[i].id + ', ';
      }
      tohiny_2 = tohiny_2 + this.data_pvs_temp[this.data_pvs_temp.length - 1].id + ")";
      tohiny = tohiny + tohiny_2;
    }

    this.dbm.select_additionnal_pos(this.id_tournee, tohiny).then(data => {
      this.res_partner = data;
    });
  }

  test_close_shit(rowData) {
    for (var i = 0; i < this.data_pup.length; i++) {
      if (this.data_pup[i].res_partner_name == rowData.data.res_partner_name) {
        if (this.data_pup[i].visite == "non") {
          this.data_pup[i].visite = "oui"
        }
        else {
          this.data_pup[i].visite = "non"
        }
      }
    }
  }

  check_all(is_checked) {
    if (is_checked == true) {
      for (var i = 0; i < this.data_pup.length; i++) {
        this.data_pup[i].visite = "oui"
      }
    }
    else {
      this.data_pup[i].visite = "non"
    }
  }

}
