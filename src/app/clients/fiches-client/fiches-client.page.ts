import { Component, OnInit } from '@angular/core';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Router, NavigationExtras, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage'
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../../model/screen/clients.screen';
import { Data } from 'src/app/model/data/data.model';
import {MenuItem} from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';

@Component({
  selector: 'app-fiches-client',
  templateUrl: './fiches-client.page.html',
  styleUrls: ['./fiches-client.page.scss'],
  styles : 
  [ `
      .id : {
        display : none ;
      };
  `]
})
export class FichesClientPage implements OnInit {
  loadIndicator : boolean ;
  itemes: MenuItem[];
  cols: { field: string; header: string; display : string}[];
  data : any;
  selected : ClientInterface[]
  color_icon: any;
  items_sync: MenuItem[];
  navigationExtras: NavigationExtras = {
    queryParams: {
        "color": String,
        "unsynced" : String
    }
};
  x: any;

  constructor(private actRoute:ActivatedRoute,  private data_router : Data , private dbm : Database_manager,private router : Router, private storage : Storage, private http : HttpClient) {
    this.router.events.subscribe((routerEvent : Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.loadIndicator = true ;
      }
      if(routerEvent instanceof NavigationEnd){
        this.loadIndicator = false ;
      }
    })
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

    this.actRoute.queryParams.subscribe(data => {
      this.navigationExtras.queryParams = {
        "color" : data ["color"] , 
        "unsynced" : data["non_synced"]
      }
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
      { field: 'name' , header: 'Code client' , display: 'table-cell'},
      { field: 'region_id' , header: 'Région', display: 'table-cell' },
      { field: 'agence_id' , header: 'Agence', display: 'table-cell' },
      { field: 'zone_id' , header: 'Zone', display: 'none' },
      
      { field: 'secteur_id' , header: 'Secteur', display: 'table-cell' },
      { field: 'ville_id' , header: 'Ville', display: 'table-cell' },
      { field: 'quartier' , header: 'Quartier', display: 'table-cell' },
      { field: 'nom_agent_commercial_id' , header: 'Agents Commerciaux', display: 'table-cell' },
      { field: 'nom_pos' , header: 'Nom du POS', display: 'table-cell' } ,
      { field: 'nom_gerant' , header: 'Nom du Gérant', display: 'table-cell' },
      { field: 'adresse' , header: 'Adresse', display: 'table-cell' },
      { field: 'state_id' , header: 'Etat', display: 'table-cell' } ,
      { field: 'active' , header: 'active', display: 'none' }
    ];
    
  }

  ionViewWillEnter(){

    this.actRoute.queryParams.subscribe(data => {
      console.log("89 => " , data)
      this.x = data
    });

        

    this.actRoute.data.subscribe((data : {data:ClientInterface[]}) => {
      this.data = data.data;   
      this.dbm.get_res_partner().then((data)=>{
        this.data = data ;
        for(var i =0 ; i<this.data.length; i++)  {
          if(this.data[i].state_id == "brouillon"){
            this.data[i].state_id = "Prospect";
          }
          if(this.data[i].state_id == "superviseur"){
            this.data[i].state_id = "Validée par superviseur";
           
          }
          if(this.data[i].state_id == "administrateur"){
            this.data[i].state_id = "Validée par administrateur";
          } 
        }
      }).finally(()=> {
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
      })
    }
  );
  }

  getColor(rowData) {;
    switch (rowData.active) {
      case "NULL" :
        return "red";
      case "false" :
          return "red";  
      case 0 :
          return "red";  
      case "0" :
          return "red";  
      default : 
        return "black"
    }
  }

  open_menu(){
    this.storage.set("last" , "fiches-client") ;
    this.router.navigate(['menu'], this.navigationExtras) ;
  }

  open_nouveau_client(){
    this.router.navigate(['new-client'], this.navigationExtras) ;  
  }

  onRowSelect(event) {
    console.log(JSON.stringify(this.selected))
  }

  onRowUnselect(event) {
    console.log(JSON.stringify(this.selected))
  }

  onRowClicked(rowData : ClientInterface){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": rowData.id ,
        "state" : rowData.state_id,
        "color" : this.x.color ,
        "unsynced" : this.x.unsynced
      }
    };
    this.data_router.storage = rowData.id ;
    this.router.navigate(['detail-fiche-client'], navigationExtras) ;
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
