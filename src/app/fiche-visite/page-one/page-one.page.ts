import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { MenuItem } from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';
import { Counter } from 'src/app/model/helper/counter';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {
  itemes: MenuItem[];
  items: { id: number; label: string; }[];
  name: string = "";
  date_debut: any;
  date_fin: any;
  duree: number = 0;
  checked: boolean = false;
  id: number = 0;
  res_partner_name: any;
  data: string = "";
  coord: any = {
    longitude: 0,
    latitude: 0
  };
  dist: number;
  edit: boolean = false;
  location = {
    latitude: 0,
    longitude: 0
  }
  data_from_route: any = [];
  etat: any;
  color_icon: any ;
  items_sync: MenuItem[];
  navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };
  my_goal : String;

  constructor(private alertController: AlertController, private geolocation: Geolocation, private storage: Storage, private dbm: Database_manager, private router: Router, private activeroute: ActivatedRoute) {
  }

  ionViewWillEnter() {

    this.storage.get("state_visit").then(etat => {
      this.etat = etat;
      this.items = [
        { id: 1, label: etat }
      ];
    });

    this.dbm.get_active_user().then(async data => {
     
      this.name = data.name;
      this.id = data.id
    });

  }

  ngOnInit() {
    this.activeroute.paramMap.subscribe((params: ParamMap) => {
      this.data_from_route = JSON.parse(params.get("data"))
      this.res_partner_name = JSON.parse(params.get("data"));
      
      //this.color_icon = this.data_from_route.unsynced ;
      this.edit = true;
      if (this.res_partner_name.state == 'Clôturée') {
        this.edit = false;
      }
      console.log("data from route page 1 : " + JSON.stringify(this.data_from_route))
      this.dbm.get_date_visite(this.data_from_route.visit_sheet_id)
        .then((dates) => {
          console.log("dates ionviewWillenter : " + JSON.stringify(dates));
          this.date_fin = dates.end_datetime;
          this.date_debut = dates.begin_datetime;
        });

      this.dbm.get_my_today_goal(this.data_from_route.res_partner_id).then(data => {
        this.my_goal = data.goal
      })
    });
  }

  modify() {
    this.enable_edit();
  }
  create() {
    this.enable_edit();
  }
  save() {
    this.enable_edit();
  }
  cancel() {
    this.enable_edit();
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

  page_two() {

    let data_for_nav = {
      edit: this.edit,
      data: JSON.stringify(this.data_from_route)
    }

    this.storage.set("user_id", this.id)
      .then(() => {
        this.router.navigate(['page-two', data_for_nav]);
      })
      .catch(e => console.log(e.message));
  }

  enable_edit() {
    if (this.edit == false) {
      this.edit = true;
    }
    else {
      this.edit = false
    }
  }

  open_menu() {
    this.storage.set("last", "tournees");
    this.router.navigate(['menu']);
  }

  page_fiche_visite() {
    this.router.navigate(['fiche-visite']);
  }

  async demarrer_visite() {
    Counter.presentLoading();

    var options = {
      enableHighAccuracy: true, timeout: 30000, maximumAge: 0
    };

    await this.geolocation.getCurrentPosition(options).then(async (resp) => {

      this.dbm.start_visit(this.res_partner_name.visit_sheet_id).then(() => {
        this.res_partner_name = this.data_from_route;
        console.log("res_partner_name : " + JSON.stringify(this.res_partner_name));
        this.dbm.get_date_visite(this.data_from_route.visit_sheet_id)
          .then((dates) => {
            console.log("date visite : " + JSON.stringify(dates));
            this.date_fin = dates.end_datetime;
            this.date_debut = dates.begin_datetime;
            this.res_partner_name.state = "Ouvert";
          })
        let stock_line_data = {
          create_uid: this.id,
          placement: 0,
          product_id: 0,
          write_uid: this.id,
          visit_sheet_id: this.data_from_route.visit_sheet_id,
          create_date: null,
          available_stock: 0,
          write_date: null,
          manufacturer_id: 0,
          last_visit_stock: 0,
        }
        this.dbm.insert_stock_line(stock_line_data);

        console.log("res_partner name le avy nomena data anle from route : " + JSON.stringify(this.res_partner_name));
      })

      /*var geodist = require('geodist');
      var p1 = { lat: resp.coords.latitude, lon: resp.coords.longitude };

      var p2 = { lat: this.res_partner_name.provider_latitude, lon: this.res_partner_name.provider_longitude };*/

      if(resp.coords.latitude != 0 && resp.coords.longitude != 0) {
        this.dbm.update_position(resp.coords.latitude, resp.coords.longitude, this.data_from_route.visit_sheet_id);

        //this.dist = geodist(p1, p2, { exact: true, unit: 'm' });
  
        this.coord = resp.coords;
  
        this.etat = "Ouverte"
        this.storage.set("state_visit", this.etat);
      }

      else {
        const alert = await this.alertController.create({
          message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
          buttons: ['OK']
        });
  
        await alert.present();
      }


      Counter.disableLoading();


    }).catch(async (error) => {

      const alert = await this.alertController.create({
        message: 'Merci de vérifier si le GPS est activé et/ou changer de position.',
        buttons: ['OK']
      });

      await alert.present();

      Counter.disableLoading();
    });
    this.items = [
      { id: 1, label: this.res_partner_name.state }
    ];
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

}



