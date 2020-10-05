import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import {MenuItem} from 'primeng/api';
import { Auth } from '../model/helper/auth';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})

export class DiscussionPage implements OnInit {
  itemes: MenuItem[];
  constructor(private router : Router, private storage : Storage, private dbm : Database_manager) { }

  ngOnInit() {
    this.itemes = [
      {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
    ];
  }
 
  open_menu(){
    this.storage.set("last" , "discussion") ;
    this.router.navigate(['menu']) ;
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
    this.router.navigate(['home']);
  }
}
