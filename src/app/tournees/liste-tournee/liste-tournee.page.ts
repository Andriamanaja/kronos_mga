import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { i_t_tournee } from 'src/app/model/data/i_t_tournee.model';
import { Storage } from '@ionic/storage' ;
import {MenuItem} from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';

@Component({
  selector: 'app-liste-tournee',
  templateUrl: './liste-tournee.page.html',
  styleUrls: ['./liste-tournee.page.scss'],
  styles: [`
        
    `
    ]
})
export class ListeTourneePage implements OnInit {
  itemes: MenuItem[];
  cols: { field: string; header: string; display : string}[];
  data : i_t_tournee [] ;
  selected : any[];
  user_id : number ;
  state : string;
  color_icon: any;
  items_sync: MenuItem[];
  navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };
  x: any;
  constructor(private activeroute : ActivatedRoute, private dbm : Database_manager, private router : Router, private storage : Storage) { }

  ngOnInit() {

    this.activeroute.queryParams.subscribe(data => {
     
      this.color_icon = data ["color"] ;
      this.itemes = [
        {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
      ];

      this.items_sync = [
        {label: data['unsynced']}, 
      ];
    })


    this.cols = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'x_odoo_id' , header: 'x_odoo_id', display : 'none' },
      { field: 'commercial' , header: 'commercial', display : 'none' },
      { field: 'name' , header: 'Nom' , display: 'table-cell'},
      { field: 'date' , header: 'Date prévue' , display: 'table-cell'},
      { field: 'state' , header: 'Etat', display: 'table-cell' },
      { field: 'start_date' , header: 'start_date' , display: 'none'},
      { field: 'end_date' , header: 'end_date', display: 'none' },
    ];

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

  ionViewWillEnter(){
    this.dbm.get_active_user().then( data => {
      this.user_id = data.id
      this.dbm.get_all_tournees_by_user(this.user_id)
        .then( (data : any) => {
          if(data){
            this.data = data
            for(var i =0; i<this.data.length; i++){
              if(this.data[i].state == "nouveau"){
                this.data[i].state  = "Nouvelle";
              }
              if(this.data[i].state == "cloture"){
                this.data[i].state  = "Clôturée";
              }
              if(this.data[i].state == "demarre"){
                this.data[i].state  = "Démarrée";
              }
            }
           
          }
        })
        .catch(e => alert(e.message)) ;
    }) ;

    this.dbm.verify_data().then(data => {
      
      this.x = data ;

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
    
  }

  open_menu(){
    this.storage.set("last" , "fiches-client") ;
    this.router.navigate(['menu'], this.navigationExtras) ;
  }

  open_nouveau_client(){
    this.router.navigate(['new-client'], this.navigationExtras) ;  
  }

  onRowSelect(event) {
  }

  onRowUnselect(event) {
  }

  onRowClicked(rowData){
   let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": rowData.id ,
        "x_odoo_id": rowData.x_odoo_id ,
        "commercial" : rowData.commercial ,
        "name" : rowData.name ,
        "status" : rowData.state ,
        "date_prevue" : rowData.date ,
        "date_debut" : rowData.start_date,
        "date_fin" : rowData.end_date ,
        "color" : this.x.color,
        "unsynced" : this.x.non_synced
      }
    };
    //this.data_router.storage = rowData.id ;
    this.router.navigate(['detail-tournee'], navigationExtras) ; 
  }
  data_cmp  : any;
  Deconnexion(){
    Auth.access = true ;
    this.storage.get('data_p2')
    .then((data2:any)=>{
      this.data_cmp = JSON.parse(data2);
      this.dbm.Updata_active_Login(this.data_cmp.id);
      this.storage.remove("data_p2");
    })
    this.router.navigate(['home'], this.navigationExtras);
  }
}
