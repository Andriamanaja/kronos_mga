import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Database_manager } from '../model/DAO/database_manager.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, tap } from 'rxjs/operators';
import { Counter } from '../model/helper/counter';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';
import { OdooService } from '../services/odoo.service';

@Component({
  selector: 'app-new-sync',
  templateUrl: './new-sync.page.html',
  styleUrls: ['./new-sync.page.scss'],
})
export class NewSyncPage implements OnInit {

  sync: FormGroup;
  database : String ;
  username : String ;
  password : String ;
  url : String ;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Content-Length': "1000000",
    })
  };

  user_id : any ;
  for_sync_3: any;
  for_sync_1: any;
  for_sync_4: any;
  for_sync_5: any;

  constructor(private service: OdooService, private router : Router, private toastController : ToastController, private storage : Storage, private loader : LoadingController, private http: HttpClient, private dbm : Database_manager, private fb: FormBuilder) { }

  async ngOnInit() {
    
    const loading = await this.loader.create();

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
    
    await this.dbm.get_active_user().then(async active_user => {
      this.sync = this.fb.group({
        "url": ["", Validators.required],
        "database": ["", Validators.required],
        "username": ["", Validators.required],
        "password": ["", Validators.required]
      });

      this.url = "" ;
      this.database = "" ;
      this.username = active_user.login ;
      this.password = active_user.password ;

      this.user_id = {
        url : "" ,
        database : "" ,
        username : active_user.login ,
        password : active_user.password 
      }

      //const loading = await this.loader.create();
      this.http.post(this.url + "/sync/mysql_check_me", JSON.stringify(this.user_id), this.httpOptions)
      .pipe(
        retry(0),
        tap(res => {
          if (!res) {
            Counter.disableLoading();
          }
          return res;
        })
      ).subscribe(
        //next
        (data: any) => {
          console.log("70 => " , JSON.stringify(data)) ;
            switch(data.status) {
              case 200 : {
                this.http.post(this.url + "/sync/mysql_check_my_backup", JSON.stringify(this.user_id), this.httpOptions)
                  .subscribe( async (data : any) => {
                    console.log("75 => ", JSON.stringify(data)) ;
                    for (var i = 0; i < data.from_offline.length; i++) {
                      this.dbm.update_x_odoo_id(data.from_offline[i]);
                      this.dbm.update_data_for_sync_2(data.from_offline[i].table, data.from_offline[i].id)
                    }
            
                    this.dbm.get_active_user()
                      .then((user) => {
            
                        for (var i = 0; i < data.to_offline.length; i++) {
                          //insert 
            
                          this.dbm.insert_kronos_back_data(data.to_offline[i].table, data.to_offline[i].id, user.id)
                            .catch(e => console.log(" insert back data odoo service exception : " + e.message))
                          this.dbm.get_columns(data.to_offline[i], 1).catch(e => console.log("get column error : " + e.message)).then(() => {
            
                          });
                        }
            
                        this.dbm.get_kronos_back_data()
                          .then((data: any) => {
                            if (!data) {
                              data = [];
                            }
                            let to_send = {
                              vals: data,
                              user_id: this.user_id
                            }
                            this.http.post(""+ "/sync/return", to_send, this.httpOptions).subscribe(
                              //next
                              _ => {
                                this.http.post("" + "/sync/mysql_unset_my_backup", to_send, this.httpOptions).subscribe((final_result: any) => {
            
                                  if (final_result.status == 200) {
                                    this.dbm.delete('kronos_back_data').then(() => {
                                      this.set_message("success", "Mise à jour de la base de données avec succès.");
                                      this.dbm.remove_survey_partner_rel();
                                      this.createToast("Mise à jour de la base de données avec succès.");
                                      loading.dismiss();
                                      console.log("data service : data deleted");
                                    }).catch(e => console.log("odoo service deleted"))
            
                                  }
                                  else {
            
                                  }
                                }, (err => {
                                  console.log("110 =>" + err);
                                  loading.dismiss().then(() => {
                                    this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                    this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                    loading.dismiss();
                                    this.router.navigate(["menu"]);
                                  })
            
                                }))
            
                              },
                              err => {
                                loading.dismiss().then(() => {
                                  this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                                  this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                                  loading.dismiss();
                                  //+++
                                  this.router.navigate(["menu"]);
                                })
                              });
                          })
            
                      }).catch(err => {
                        console.log("128 =>" + err);
                        loading.dismiss().then(() => {
                          this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                          this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                          loading.dismiss();
                          //+++
                          this.router.navigate(["menu"]);
                        })
                      }) 
                  }) ; 
                break ;
              }
              case 201 : {
                loading.dismiss().then(() => {
                  this.set_message("warn", "Un autre processus est en cours sur le serveur.");
                  this.createToast("Un autre processus est en cours sur le serveur");
                  this.router.navigate(["menu"]);
                });
                break ;
              }
              case 202 : {
                loading.dismiss().then(() => {
                  this.set_message("warn", "Votre email a été enregistré sur le serveur. Merci de relancer la synchronisation");
                  this.createToast("Votre email a été enregistré sur le serveur. Merci de relancer la synchronisation");
                  this.router.navigate(["menu"]);
                });
                break ;
              }
              case 500 : {
                loading.dismiss().then(() => {
                  this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
                  this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
                  loading.dismiss();
                  //+++
                  this.router.navigate(["menu"]);
                })
                break ;
              }
            }
        });
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

    if (this.username == "admin") {
      await this.service.synchronise_as_admin("", this.sync.get(['username']).value, "", this.sync.get(['password']).value)
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

      let to_send_1 = {
        vals: this.for_sync_5,
        user_id: user_data
      }

      console.log(JSON.stringify(to_send_1))

      await this.http.post("" + "/sync/mysql_pass_data_to_odoo", JSON.stringify(to_send_1), httpOptions)
        .pipe(
          retry(0),
          tap(res => {
            console.log("res == > ", res);
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
                    //insert 
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
                      this.http.post("" + "/sync/return", to_send, httpOptions).subscribe(_ => {

                        this.dbm.delete('kronos_back_data').then(() => {
                          console.log("data service : data deleted");
                          this.http.post("" + "/sync/mysql_remove_me", to_send, httpOptions).subscribe(final_result => {
                            this.router.navigate(["menu"]).then(() => {
                              //Counter.disableLoading().then(() => console.log("4"))
                            });
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


  async createToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  set_message(type: string, message: string) {
    let mensaje = [{
      severity: type,
      detail: message
    }]
    this.storage.set("message", mensaje).then(() => {
      console.log("tafa le set message");
    });
  }

}
