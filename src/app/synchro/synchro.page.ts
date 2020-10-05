import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OdooService } from '../services/odoo.service';
import { Storage } from '@ionic/storage'
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router, Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Auth } from '../model/helper/auth';
import { Counter } from '../model/helper/counter';
import { Observable, of } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs/operators';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-synchro',
  templateUrl: './synchro.page.html',
  styleUrls: ['./synchro.page.scss'],
})
export class SynchroPage implements OnInit {

  show: boolean;
  sync: FormGroup;
  loadIndicator: boolean;
  edit: boolean = false;
  itemes: MenuItem[];
  items: { id: number; label: string; }[];
//mada13

//mada13
  url: string = "http://192.168.200.44:3002";
  database: string = "mada13";
  username: string = "";
  password: string = "";

  filtered_visit_sheet = [] ;

  for_sync: any = [];
  for_sync_1 = [];
  for_sync_2 = [];
  for_sync_3 = [];
  for_sync_4 = [];
  for_sync_5 = [];

  disable: boolean = false;
  reset: boolean = false;

  val2: any = "2";
  display: boolean = false;
  position: string = "";
  displayPosition: boolean = false;
  color_icon: any;
  items_sync: MenuItem[];
  max_info = [] ;
  resp : any ;

  //enable_partner : boolean = false ;

  constructor(private http: HttpClient, private toastController: ToastController, private loading: LoadingController, private actRoute: ActivatedRoute, private router: Router, private dbm: Database_manager, private storage: Storage, private fb: FormBuilder, private service: OdooService) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loadIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loadIndicator = false;
      }
    });
    this.sync = this.fb.group({
      "url": ["http://192.168.200.44:3002", Validators.required],
      "database": ["mada13", Validators.required],
      "username": ["", Validators.required],
      "password": ["", Validators.required]
    });
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
    });

    this.storage.get("reset").then(reset => {
      if (reset == true) {
        this.reset = reset;
      }
    });

    this.disable = false;
    this.dbm.get_active_user().then(user_config => {
      this.storage.get("server_config").then(async server_config => {
        if (user_config.username != "admin") {

          await this.service.get_all_backup_data("http://192.168.200.44:3002", user_config.login, "mada13", user_config.password).then(() => { })
            .finally(async () => {

              this.dbm.get_visit_sheet_for_sync().then(data => {
                this.for_sync_3 = data;
              });

              this.dbm.get_tournee_for_sync().then(data => {
                this.for_sync_1 = data;
              });

              this.dbm.get_partner_for_sync().then(data => {
                this.for_sync_4 = data;
              });

              this.dbm.get_table().then(data => {
                this.for_sync_5 = data;
              })

             this.max_info = this.dbm.get_max_off_all_table() ;

            });
        }
        else {
          console.log(user_config.username)
        }
      }).catch(e => {
        console.log("97 => ", e)
      })
    }).catch(e => {
      console.log("100 => ", e)
    })

    const obs = of(Counter.show)

    obs.subscribe((data: boolean) => {
      console.log("show  : " + data);
      this.show = data;
    });

    this.itemes = [
      { label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
    ];

    this.storage.get("server_config").then(server_config => {
      this.storage.get("user_config").then(user_config => {
        this.url = "http://192.168.200.44:3002";
        this.database = "mada13";
        this.username = user_config.username;
        this.password = user_config.password;
      });
    });
  }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(data => {
      this.color_icon = data ["color"] ;
      this.itemes = [
        {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
      ];

      this.items_sync = [
        {label: data['unsynced']}, 
      ];
    })
  }

  open_menu() {
    this.storage.set("last", "fiches-client");
    this.router.navigate(['menu']);
  }

  sauvegarder() {
    let server_config = {
      url: "http://192.168.200.44:3002",
      database: "mada13"
    }

    let user_config = {
      username: this.username,
      password: this.password,
    }

    this.storage.set("server_config", server_config).then(() => {
      // this.edit = false;
      this.sync.controls["url"].enable();
      this.sync.controls["database"].enable();
    });

    this.storage.set("user_config", user_config).then(() => {
      // this.edit = false;
      this.sync.controls["username"].enable();
      this.sync.controls["password"].enable();
    });
  }

  async synchroniser() {

    for (var i = 0; i < this.for_sync_1.length; i++) {
      this.for_sync_5.push(this.for_sync_1[i]);
    }

    for (var i = 0; i < this.for_sync_3.length; i++) {
      this.for_sync_5.push(this.for_sync_3[i]);
    }

    for (var i = 0; i < this.for_sync_4.length; i++) {
      this.for_sync_5.push(this.for_sync_4[i]);
    }

    this.sauvegarder();

    if (this.username == "admin") {
      await this.service.synchronise_as_admin("http://192.168.200.44:3002", "admin", "mada13", "tsiory")
    }
    else {
      Counter.presentLoading();
      let user_data = {
        url: this.sync.get(['url']).value,
        username: this.sync.get(['username']).value,
        password: this.sync.get(['password']).value,
        database: this.sync.get(['database']).value
      };

      Counter.disableLoading();

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          //'Content-Length': "1000000",
        })
      };

      let vals = { vals : this.for_sync_5 , table_info : this.max_info }

      let to_send_1 = {
        vals: vals,
        user_id: user_data
      }

      console.log(JSON.stringify(to_send_1))

      await this.http.post("http://192.168.200.44:3002" + "/sync/data", JSON.stringify(to_send_1), httpOptions)
        .pipe(
          retry(0),
          tap(res => {
            console.log("241 ", JSON.stringify(res));
            let to_send = {
              vals: [],
              user_id: user_data
            }
            this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions).subscribe(()=> {
              console.log("Avy namafa....")
            });
            this.resp = res ;
            if (!res) {
              Counter.disableLoading();
            }
            return res;
          })
        ).subscribe(
          //next
          (data: any) => {

            if (data.status == 500) {
              Counter.disableLoading().then(() => {
                this.set_message("error", "Erreur serveur Odoo.");
                this.createToast("Erreur serveur Odoo");
                this.router.navigate(["menu"]).then(() => console.log("nav 1"));
              });
            }

            else if (data.status == 202) {
              Counter.disableLoading().then(() => {
                this.createToast("Un autre processus est en cours sur le serveur");
                this.set_message("warn", "Un autre processus est en cours sur le serveur.");
                this.router.navigate(["menu"]).then(() => console.log("nav 2"));;
              });
            }

            else {
              this.dbm.get_active_user()
                .then((user) => {
                  console.log("318 => ", JSON.stringify(data.response));
                  Counter.data_length = data.response.to_offline.length;

                  for (var i = 0; i < data.response.to_offline.length; i++) {

                    this.dbm.insert_kronos_back_data(data.response.to_offline[i].table, data.response.to_offline[i].id, user.id)
                      .catch(e => console.log(" insert back data odoo service exception : " + e.message))
                    this.dbm.get_columns(data.response.to_offline[i], 0).catch(e => console.log("get column error : " + e.message)).then(() => {
                      
                    });

                  }

                  for (var i = 0; i < data.response.from_offline.length; i++) {
                    this.dbm.update_x_odoo_id(data.response.from_offline[i])
                    this.dbm.update_data_for_sync_2(data.response.from_offline[i].table, data.response.from_offline[i].id);
                  }

                  this.dbm.get_kronos_back_data()
                    .then((data: any) => {
                      if (!data) {
                        data = [];
                      }
                      let to_send = {
                        vals: data,
                        user_id: user_data
                      }
                      this.http.post("http://192.168.200.44:3002" + "/sync/return", to_send, httpOptions).subscribe(_ => {

                        this.dbm.delete('kronos_back_data').then(() => {
                          console.log("data service : data deleted");
                          this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions).subscribe(final_result => {
                            this.router.navigate(["menu"]).then(() => {
                              //Counter.disableLoading().then(() => console.log("4"))
                            });

                            for (var i = 0; i < this.resp.response.to_offline.length; i++) {
                              //insert 
                              if(this.resp.response.to_offline.table != "res_partner") {
                                this.dbm.unset_id(this.resp.response.to_offline[i], "1").catch(e => console.log("unset id error : " + e.message)).then(() => {
                                });
                              }
                              
                            }

                            this.createToast("Synchronisation effectuée avec succès!").then(()=> {
                              //Counter.disableLoading().then(() => console.log("6"))

                            });
                            this.set_message("success", "Synchronisation effectuée avec succès!");
                            //Counter.disableLoading().then(() => console.log("1"))
                          }) ;
                          //Counter.disableLoading().then(() => console.log("2"))
                        }).catch(e => console.log("odoo service deleted"))

                        //Counter.disableLoading().then(() => console.log("3"))
                      },
                        err => {
                          Counter.disableLoading().then(() => {
                            this.createToast("Une erreur est survenue ... ");
                            this.set_message("error", "Une erreur est survenue.");
                            this.router.navigate(["menu"]).then(() => console.log("nav 4"));;
                          });
                          console.log("erreur an amle post return ", err.message);

                        });
                        //Counter.disableLoading().then(() => console.log("5"))
                    }).catch(err => {
                      console.log("142 =>" + err);

                      Counter.disableLoading().then(() => {
                        this.set_message("error", "Impossible de se connecter au serveur.");
                        this.createToast("Impossible de se connecter au serveur.");
                        this.router.navigate(["menu"]).then(() => console.log("nav 5"));;
                      });
                    })

                }).catch(err => {
                  console.log("159 =>" + err);

                  Counter.disableLoading().then(() => {
                    this.set_message("error", "Une erreur s'est produite lors de la synchronisation");
                    this.createToast("Une erreur s'est produite lors de la synchronisation");
                    this.router.navigate(["menu"]).then(() => console.log("nav 6"));;
                  });

                })
            }
          }, (error) => {
            console.log("179 ", error)
            this.createToast("Une erreur s'est produite lors de la synchronisation, verifier les champs saisis.").then(() => {
              Counter.disableLoading();
              this.set_message("error", "Une erreur s'est produite lors de la synchronisation, verifier les champs saisis.");
              this.router.navigate(["menu"]).then(() => console.log("nav 7"));;
            })
          });

    }
  }

  set_message(type: string, message: string) {
    let mensaje = [{
      severity: type,
      detail: message
    }]
    this.storage.set("message", mensaje).then(() => {
      console.log("tafa le set message");
    });
    Counter.disableLoading().then(() => console.log("5"))
  }

  async createToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  home_page() {
    this.router.navigate(['menu']);
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

  sync_all() {
    this.display = true;
  }

  valider() {
    if (this.val2 == 1) {
      this.dbm.sync_all();
      this.reset = false;
      this.storage.set("reset", false);
      this.display = false;
    }
    this.reset = false;
    this.storage.set("reset", false);
    this.display = false;
  }

  showPositionDialog() {
    this.dbm.sync_all().then(() => {
      this.displayPosition = false;
      this.router.navigate(['menu']);
    });
  }

  repair() {
    this.dbm.repair_data_for_sync();
    this.router.navigate(['menu']);
  }

}