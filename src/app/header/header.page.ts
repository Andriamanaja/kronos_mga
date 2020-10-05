import { Component, OnInit } from '@angular/core';
import { Database_manager } from '../model/DAO/database_manager.model';
import { MenuItem } from 'primeng/api';
import { Auth } from '../model/helper/auth';
import { Storage } from '@ionic/storage'
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  itemes: MenuItem[];
  msgs = [];
  color_icon = null;
  items_sync: MenuItem[];
  data_cmp: any;
  navigationExtras: NavigationExtras;

  constructor(private dbm : Database_manager, private storage : Storage, private router : Router) { 
    console.log("test_2") ;
  }

  ngOnInit() {

    this.dbm.verify_data().then(data => {

      this.color_icon = data.color;
      this.itemes = [
        { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
      ];

      this.items_sync = [
        { label: data.non_synced },
      ];
      
    });

  }

  ionViewWillEnter() {
    console.log("test") ;
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
