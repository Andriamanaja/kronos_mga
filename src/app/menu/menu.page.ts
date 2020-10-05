import { Component, OnInit } from '@angular/core';
import { Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Database_manager } from '../model/DAO/database_manager.model';
import { i_t_region } from '../model/data/i_t_region.model';
import { MenuItem, MessageService } from 'primeng/api';
import { Auth } from '../model/helper/auth';
import { OdooService } from '../services/odoo.service';
import { maj } from '../model/data/maj.model';
import { request_res_partner_res_users_rel, edit_permanent_posm_res_partner_rel } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  loadIndicator: boolean;
  root: String;
  term;
  menus: { name: string, icone: string }[];
  data_cmp: any;
  itemes: MenuItem[];
  msgs = [] ;
  msgs_data = [{severity : String , detail : String}] ;
  color_icon = null;
  items_sync: MenuItem[];

  navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };


  constructor(private msg_srv : MessageService , private act: ActivatedRoute, private router: Router, private storage: Storage, private dbm: Database_manager, private service: OdooService) {

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loadIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loadIndicator = false;
      }
    });

  }

  ngOnInit() {

    this.dbm.get_update().then((data) => {
      console.log("52 => " , data) ;
      if(data.length > 0) {
        for(var i = 0 ; i < data.length ; i++) {
          console.log("53 => ", data[i].name) ;
          switch(data[i].name) {
            case "add_column_visit_sheet_offline_id" : {
              this.dbm.update_any_column() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            };
            case "copy_visit_sheet_offline_id" : {
              this.dbm.set_all_visit_offline_id() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            case "update_active_partner_where_true" : {
              this.dbm.update_active_res_partner_1() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            case "update_active_partner_where_false" : {
              this.dbm.update_active_res_partner_2() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            case "update_x_offline_id_res_partner" : {
              this.dbm.update_active_res_partner_3() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            case "add_res_partner_res_users_rel" : {
              this.dbm.insert_res_data(request_res_partner_res_users_rel) ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            case "update_permanent_posm_res_partner_rel" : {
              this.dbm.insert_res_data(edit_permanent_posm_res_partner_rel) ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            case "repair_partner_x_odoo_id" : {
              
              this.dbm.deny_update(data[i].id) ;
              break;
            }
            
            case "repair_visit_sheet" : {
              this.dbm.repair_visit_sheet() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }

            /*case "remove_null_user" : {
              this.dbm.remove_null_user() ;
              this.dbm.deny_update(data[i].id) ;
              break;
            }*/
          }
        }
        this.msg_srv.add({severity:'info', summary:'', detail:'Installation des mises à jours effectués.'})
      }
    }).catch(e => {

    })
  }

  ionViewWillEnter() {

    this.menus = [
      { name: "Sécurité", icone: "assets/image/secure.png" },
      { name: "Fichier clients", icone: "assets/image/client.png" },
      { name: "Tournées", icone: "assets/image/tournes.png" },
      { name: "Synchronisation", icone: "assets/image/parametrage.png" },
      { name: "Fiches de visite", icone: "assets/image/visite.png" },
    ]
    this.storage.get("last").then(last => {
      this.root = last;
    });

    //{ name : "NEW SYNC", icone : "assets/image/database.png"}

    this.storage.get("msg_data").then(message => {
      if (message) {
        if(message[0].severity != "none") {
          this.msgs_data = message;
        }
        
      }
    }).catch(e => {
      console.log(e);
    });

    this.storage.get("message").then(message => {
      if (message) {
        this.msgs = message;
      }
    }).catch(e => {
      console.log(e);
    });

    this.itemes = [
      { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
    ];

    this.dbm.verify_data().then(data => {
      console.log("nande tato..." , data) ;
      this.msg_srv.clear() ;
      if(data.severity != 'none') {
        //this.msg_srv.add({severity:data.severity, detail:data.non_synced})
      }
    }) ;

  }

  ionViewWillLeave() {
    console.log("tato 1...") ;
    this.msg_srv.clear() ;
  }

  ionViewDidLeave() {
    console.log("tato 2...") ;
    this.msg_srv.clear() ;
  }

  ngOnDestroy() {
    console.log("tato 3...") ;
    this.msg_srv.clear() ;
  }

  open_menu(menu) {
    switch (menu) {
      case "Sécurité": {
        this.open_securite();
        this.remove_message();
        break;
      }

      case "Fichier clients": {
        this.open_fiches_client();
        this.remove_message();
        break;
      }

      case "Tournées": {
        this.open_tournees();
        this.remove_message();
        break;
      }

      case "Synchronisation": {
        this.open_synchro();
        this.remove_message();
        break;
      }

      case "Fiches de visite": {
        this.open_fiches_visite();
        this.remove_message();
        break;
      }

      case "NEW SYNC": {
        this.open_bdd();
        this.remove_message();
        break;
      }

      default: break;
    }
  }

  remove_message() {
    this.storage.remove("message").then(() => {
      console.log("voafafa le msg");
    }).catch(e => {
      console.log("menu 113 => ", e)
    });
  }

  open_fiches_client() {
    //this.dbm.select_basic_data("i_t_region") ;
    this.router.navigate(['fiches-client'], this.navigationExtras);
  }

  open_securite() {
    this.router.navigate(['compte'], this.navigationExtras);
  }

  open_bdd() {
    this.router.navigate(['new-sync'], this.navigationExtras);
  }

  open_tournees() {
    this.router.navigate(['liste-tournee'], this.navigationExtras);
  }

  open_synchro() {
    // this.dbm.repair_data_for_sync() ;
    this.router.navigate(['synchro'], this.navigationExtras)
  }

  open_fiches_visite() {
    this.router.navigate(['fiche-visite'], this.navigationExtras);
  }

  navigate_back() {
    if (this.root) {
      this.router.navigate([this.root]);
    }
  }
  Deconnexion() {
    Auth.access = true;
    this.storage.get('data_p2')
      .then((data2: any) => {
        this.data_cmp = JSON.parse(data2);
        this.dbm.Updata_active_Login(this.data_cmp.id);
        this.storage.remove("data_p2");
      })
    this.router.navigate(['home'], this.navigationExtras);
  }

  go_sync() {
    this.router.navigate(['synchro'], this.navigationExtras)
  }
}
