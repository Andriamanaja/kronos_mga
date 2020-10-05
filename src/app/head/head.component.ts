import { Component, OnInit, OnChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavigationExtras, Router, NavigationStart, RouterEvent } from '@angular/router';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Auth } from '../model/helper/auth';
import { Storage } from '@ionic/storage'
import { interval, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  private destroyed$ = new Subject();
  itemes: MenuItem[];
  msgs = [];
  color_icon = null;
  items_sync: MenuItem[];
  data_cmp: any;
  navigationExtras: NavigationExtras;

  constructor(private dbm: Database_manager, private storage: Storage, private router: Router) {

  }

  ngOnInit() {
    const source = interval(15000);
    //source.subscribe(val => {
      this.dbm.verify_data().then(data => {
        if (this.color_icon == null) {
          this.color_icon = data.color;
          this.itemes = [
            { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
          ];
          this.items_sync = [
            { label: data.non_synced },
          ];

          let x = { severity : data.severity , detail : data.non_synced }
          this.msgs.push(x) ;

          this.storage.set("msg_data" , this.msgs) ;

        }
      });
    //});
  }

  open_menu() {
    this.storage.set("last", "fiches-client");
    this.router.navigate(['menu'], null);
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
