import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import { AlertController } from '@ionic/angular';
import { MenuItem } from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
}) 



export class PageTwoPage implements OnInit {
  itemes: MenuItem[];
  items: { id: number; label: string; }[];
  cols: any[];
  data_from_db: any;
  data_from_route: any;
  edit: boolean = false;
  dt: any;
  data_cmp: any;
  frozenCols : any [] ;
  etat: any;
  color_icon: any;
  items_sync: MenuItem[];
  navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dbm: Database_manager,
    private storage: Storage
  ) {
   
  }


  ionViewWillEnter() {
    this.ngOnInit() ;
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

  ngOnInit() {

    this.storage.get("state_visit").then(etat => {
      this.etat = etat ;
      
    }) ;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      
      if (params.get("data_nav")) {
        let data_nav = JSON.parse(params.get("data_nav"));
        this.data_from_route = data_nav;

        this.dt = params.get("data_nav");
        this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
          .then((data) => {
            if(data) {
              this.data_from_db = data;
            }
            else {
              this.dbm.get_standard_p2().then(data => {
                this.data_from_db = data;
              }) ;
            }
            this.storage.set('data_p2', JSON.stringify(data)).catch(e => alert("set storage p2 " + e.message))
              .then(() => {
                this.storage.get('data_p2')
                  .then((data: any) => {
                    this.data_cmp = JSON.parse(data);
                  })
              }).finally(()=>{
                this.dbm.get_last_visit_stock(this.data_from_route.res_partner_id , this.data_from_route.visit_sheet_id).then(stock => {
                  if(stock) {
                    for(var i = 0 ; i < stock.length ; i++) {
                      this.data_from_db[i].last_visit_stock_avg = stock[i].last_visit_stock_avg ;
                    }
                  }
                  
                  
                  this.dbm.get_last_palcement_and_last_available_stock(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(last => {
                    if(last) {
                      for(var i = 0 ; i < last.length ; i++) {
                        this.data_from_db[i].last_visit_stock = last[i].last_visit_stock ;
                        this.data_from_db[i].last_placement = last[i].last_placement ; 
                      }
                    }
                    
                  });
              });
              })
          }).catch(e => console.log(e.message))
      }
      else {

        this.data_from_route = JSON.parse(params.get("data"));
        this.dt = params.get("data");

        this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
          .then((data) => {
            
            if(data) {
              this.data_from_db = data;
            }
            else {
              this.dbm.get_standard_p2().then(data => {
                this.data_from_db = data;
              }) ;
            }
               
              this.storage.set('data_p2', JSON.stringify(data)).catch(e => console.log("set storage p2 " + e.message))
              .then(() => {
                this.storage.get('data_p2')
                  .then((data: any) => {
                    this.data_cmp = JSON.parse(data);
                  });
              })
            }).finally(()=> {
              this.dbm.get_last_visit_stock(this.data_from_route.res_partner_id , this.data_from_route.visit_sheet_id).then(stock => {
                if(stock) {
                  for(var i = 0 ; i < stock.length ; i++) {
                    this.data_from_db[i].last_visit_stock_avg = stock[i].last_visit_stock_avg ;
                  }
                }
                
                
                this.dbm.get_last_palcement_and_last_available_stock(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(last => {
                  if(last) {
                    for(var i = 0 ; i < last.length ; i++) {
                      this.data_from_db[i].last_visit_stock = last[i].last_visit_stock ;
                      this.data_from_db[i].last_placement = last[i].last_placement ; 
                    }
                  }
                  
                });
            });
          }).catch(e => console.log(e.message))
      }

      this.edit = true;
      console.log("p2 95", this.data_from_route) ;

      this.color_icon = this.data_from_route.color ;

      this.itemes = [
        {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
      ];

      this.items_sync = [
        {
          label: this.data_from_route.unsynced
        }
      ];

      if (this.data_from_route.state == 'Clôturée') {
        this.edit = false;
      }
      console.log("page 2 parametres " + JSON.stringify(this.data_from_route));
    })

    this.items = [
      { id: 1, label: this.data_from_route.state }
    ];

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get("data_nav")) {

        let data_nav = JSON.parse(params.get("data_nav"));

        console.log("149 => ", data_nav)

        this.data_from_route = data_nav;

        

       }
    }) ;

    this.cols = [
      { field: 'product_id', header: 'product_id', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
      { field: 'last_visit_stock_avg', header: 'Stock moyen des 4 dernières visites', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
      { field: 'available_stock', header: 'Relevé stock initial', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' },
      { field: 'last_visit_stock', header: 'Stock initial dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
      { field: 'last_placement', header: 'Placement dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
      { field: 'placement', header: 'Placement', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' }
    ];

    this.frozenCols = [
      { field: 'manufacturer_name', header: 'Fabricant', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
      { field: 'product_name', header: 'Produit', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
      //{ width: "20%" ,field: 'last_visit_stock_avg', header: 'Stock moyen des 4 dernières visites', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3' },
    ];
  }

  enable_edit() {
    if (this.edit == false) {
      this.edit = true;
    }
    else {
      this.edit = false
    }
  }
  sauvegarder() {
    
      for (var i = 0; i < this.data_from_db.length; i++) {
        this.dbm.update_get_data_p2(this.data_from_db[i].available_stock, this.data_from_db[i].placement, this.data_from_db[i].product_id, this.data_from_route.visit_sheet_id);
      }
      this.enable_edit();
  }

  annuler() {
    this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(data => {
      if(data) {
        this.data_from_db = data;
      }
      else {
        this.dbm.get_standard_p2().then(data => {
          this.data_from_db = data;
        }) ;
      }
    });
    this.enable_edit();
  }


  cancel() {
    this.enable_edit();
  }
  save() {
    this.enable_edit();
  }
  modify() {
    this.enable_edit();
  }

  page_one() {
    let data_nav = {
      data: this.dt
    }
    this.router.navigate(['page-one', data_nav]);
  }
  
  async page_three() {
    let data_for_nav = {
      data: this.dt,
    }
    
   // if(this.etat != "Clôturée") {

      if(this.data_from_db){
        for (var i = 0; i < this.data_from_db.length; i++) {
          this.dbm.update_get_data_p2(this.data_from_db[i].available_stock, this.data_from_db[i].placement, this.data_from_db[i].product_id, this.data_from_route.visit_sheet_id);
        }
      }
  
      let data_rtrn = [];
      if (this.data_from_db) {
        this.data_from_db.forEach(data => {
          if (!data.placement) data.placement = 0;
          if (!data.available_stock) data.available_stock = 0;
          if (data.available_stock + data.placement > 0) {
            data_rtrn.push(data.product_id);
            data.placement = null;
            data.available_stock = null;
          }
        });
      }
  
      this.storage.set("data_p3", data_rtrn)
        .then(() => {
          data_rtrn = null;
          this.storage.get("data_p3")
            .then((data) => {
              console.log("data_p3" + data);
            }) ;
        }) ;
  
      this.storage.get('data_p2').then(async data_p2 => {
        if (data_p2 == JSON.stringify(this.data_from_db)) {
          const alert = await this.alertController.create({
            message: 'Êtes vous sûre de vouloir continuer sans rien modifier ?',
            buttons: [
              {
                text: 'Non',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                }
              }, {
                text: 'Oui',
                handler: () => {
                  console.log("188 => ", data_for_nav) ;
                  this.router.navigate(['page-three', data_for_nav]);
                }
              }
            ]
          });
          await alert.present();
        }
        else {
          console.log("196 => ", data_for_nav) ;
          
        }
      })
        .catch(e => console.log(e.message))
        ;
     

     this.router.navigate(['page-three', data_for_nav]);

  }

  open_menu() {
    this.storage.set("last", "tournees");
    this.router.navigate(['menu']);
  }
  data2_cmp: any;

  Deconnexion() {
    Auth.access = true ;
    this.storage.get('data_p2')
      .then((data2: any) => {
        this.data2_cmp = JSON.parse(data2);
        this.dbm.Updata_active_Login(this.data2_cmp.id);
        this.storage.remove("data_p2");
      })
    this.router.navigate(['home']);
  }

  show_rowdata (rowdata) {
    console.log("p2 310=> " , rowdata)
  }

  get_state(rowdata, current_field) {
    let ret : boolean = true ;
    if(rowdata.manufacturer_name !== "ITG" && current_field == "placement") {
      ret = true
    }
    else {
      ret = false;
    }
    console.log(ret) ;
    return ret ;
  }

  get_bg_color(rowdata, current_field) {
    let ret : string = "none" ;
    if(rowdata.manufacturer_name !== "ITG" && current_field == "placement") {
      ret = "#d3d3d3"
    }
    else {
      ret = "none";
    }
    console.log(ret) ;
    return ret ;
  }

  get_pointer(rowData, current_field) {
    let ret : string = "none" ;
    if(rowData.manufacturer_name !== "ITG" && current_field == "placement") {
      ret = "none"
    }
    else {
      ret = "auto";
    }
    console.log(ret) ;
    return ret ;
  }
}