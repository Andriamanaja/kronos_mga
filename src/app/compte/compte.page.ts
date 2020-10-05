import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Database_manager } from '../model/DAO/database_manager.model';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage' ;
import { MenuItem } from 'primeng/api';
import { Auth } from '../model/helper/auth';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  itemes: MenuItem[];
  items: { id: number; label: string; }[];

  hide_a : boolean = true ;
  hide_b : boolean = true ;
  hide_c : boolean = true ;
  
  password: FormGroup;
  color_icon: any;
  items_sync: MenuItem[];
  navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };;
  constructor(private act : ActivatedRoute, private storage : Storage, private router: Router, private formBuilder: FormBuilder, private dbm: Database_manager, private alertCtrl: AlertController) { }

  ngOnInit() {

    this.act.queryParams.subscribe(data => {
      this.color_icon = data ["color"] ;
      this.itemes = [
        {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
      ];

      this.items_sync = [
        {label: data['unsynced']}, 
      ];
    })

    this.password = this.formBuilder.group(
      {
        "oldpassword": ["", Validators.required],
        "newpassword": ["", Validators.required],
        "confirmpassword": ["", Validators.required],
      }
    );
  }

  ionViewWillEnter() {
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

  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      message: message,
      buttons: ['OK']
    })
    await alert.present();
  }

  changePassword() {
    let old = this.password.get(['oldpassword']).value;
    let newpassword = this.password.get(['newpassword']).value;
    let confirmpassword = this.password.get(['confirmpassword']).value;
    //le new comparer-na amle confirm
    this.dbm.get_active_user()
      .then((user: any) => {
        this.dbm.check_password(user.id, old)
          .then((data: any) => {
            if (data) {
              if (newpassword == confirmpassword) {
                this.dbm.set_new_password(user.id, newpassword);
                this.presentAlert('Modification effectuée avec succès');
              } else {
                //toast controller
                this.presentAlert('Les nouveaux mot de passe ne correspondent pas');
              }
            }
            else {
              this.presentAlert('Votre ancien mot de passe est incorrecte');
            }
          })
      }).catch(e => console.log("res_user_active_exception : " + e.message));

  }

  home_page() {
    this.router.navigate(['menu']);
  }

  open_menu(){
    this.storage.set("last" , "fiches-client") ;
    this.router.navigate(['menu']) ;
  }

  data_cmp  : any;
  Deconnexion() {
    Auth.access = true ;
    this.storage.get('data_p2')
      .then((data2: any) => {
        this.data_cmp = JSON.parse(data2);
        this.dbm.Updata_active_Login(this.data_cmp.id);
        this.storage.remove("data_p2");
      })
    this.router.navigate(['home']);
  }

  hide_psw_a() {
    if(this.hide_a == true) {
      this.hide_a = false ;
    }
    else {
      this.hide_a = true ;
    }
  }

  hide_psw_b() {
    if(this.hide_b == true) {
      this.hide_b = false ;
    }
    else {
      this.hide_b = true ;
    }
  }

  hide_psw_c() {
    if(this.hide_c == true) {
      this.hide_c = false ;
    }
    else {
      this.hide_c = true ;
    }
  }

}
