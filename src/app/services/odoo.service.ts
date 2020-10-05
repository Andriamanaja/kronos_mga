import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Database_manager } from '../model/DAO/database_manager.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Counter } from '../model/helper/counter';
import { of } from 'rxjs';
import { retry, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

class data_sync {
  user_id: {
    database: String,
    username: String,
    password: String
  }
  data: any;
  constructor() { }
}

@Injectable({
  providedIn: 'root'
})

export class OdooService {
  counter: Counter = new Counter()
  to_offline: Array<any> = [];
  user_data: any;
  data_for_sync: any;

  constructor(private router: Router, private toastController: ToastController, private storage: Storage, private loader: LoadingController, private http: HttpClient, private dbm: Database_manager) {

  }

  async get_all_backup_data(url, username, database, password): Promise<any> {

    const loading = await this.loader.create();

    loading.present();

    this.user_data = {
      url: "http://192.168.200.44:3002",
      username: username,
      database: "mada13",
      password: password,
    };
    console.log("50 => ", this.user_data);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Content-Length': ''
      })
    };

    return await this.http.put("http://192.168.200.44:3002" + "/sync/check_backup", this.user_data).pipe(
      retry(0),
      tap(res => {
        console.log("res == > ", res);
        if (!res) {
          console.log("tsy nisy tao e ! : " + JSON.stringify(res));
          Counter.disableLoading();
        }
        return res;
      })
    ).toPromise().then(async (data: any) => {
      if (data.status == 500) {
        loading.dismiss().then(() => {
          this.set_message("error", "Erreur serveur Odoo.");
          this.createToast("Erreur serveur Odoo");
          this.router.navigate(["menu"]);
        });
      }
      else if (data.status == 202) {
        loading.dismiss().then(() => {
          this.set_message("warn", "Un autre processus est en cours sur le serveur.");
          this.createToast("Un autre processus est en cours sur le serveur");
          this.router.navigate(["menu"]);
        });
      }
      else {

        for (var i = 0; i < data.response.from_offline.length; i++) {
          this.dbm.update_x_odoo_id(data.response.from_offline[i]);
          this.dbm.update_data_for_sync_2(data.response.from_offline[i].table, data.response.from_offline[i].id)
        }

        this.dbm.get_active_user()
          .then((user) => {

            for (var i = 0; i < data.response.to_offline.length; i++) {
              //insert 

              this.dbm.insert_kronos_back_data(data.response.to_offline[i].table, data.response.to_offline[i].id, user.id)
                .catch(e => console.log(" insert back data odoo service exception : " + e.message))
              this.dbm.get_columns(data.response.to_offline[i], 1).catch(e => console.log("get column error : " + e.message)).then(() => {

              });
            }

            this.dbm.get_kronos_back_data()
              .then((data: any) => {
                if (!data) {
                  data = [];
                }
                let to_send = {
                  vals: data,
                  user_id: this.user_data
                }
                this.http.post("http://192.168.200.44:3002"+ "/sync/return", to_send, httpOptions).subscribe(
                  //next
                  _ => {
                    this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions).subscribe((final_result: any) => {

                      if (final_result.status == 200) {
                        this.dbm.delete('kronos_back_data').then(() => {
                          this.set_message("success", "Mise à jour de la base de données avec succès.");
                          this.dbm.remove_survey_partner_rel();
                          this.dbm.remove_user_partner_rel();
                          this.dbm.remove_posm_partner_rel();
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
      }
    }, (error) => {
      console.log("142 =>" + JSON.stringify(error));
      loading.dismiss().then(() => {
        this.set_message("error", "Une erreur s'est produite lors de la mise à jour de la base de données .");
        this.createToast("Une erreur s'est produite lors de la mise à jour de la base de données ... ");
        loading.dismiss();
        //+++
        this.router.navigate(["menu"]);
      })
    });
  }


  async   synchronise_as_admin(url: string, username: string, database: string, password: string) {
    this.user_data = {
      url: "http://192.168.200.44:3002",
      username: username,
      password: password,
      database: "mada13"
    };
    console.log("144 => ", this.user_data);
    Counter.presentLoading();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Content-Length': '0'
      })
    };

    return this.http.post("http://192.168.200.44:3002" + "/sync/firstConnection", this.user_data, httpOptions).subscribe(
      //next
      (data: any) => {
        console.log("52", data)
        if (data.status == 500) {
          Counter.disableLoading().then(() => {
            this.set_message("error", "Erreur du serveur , veuillez réessayer ultérieurement.");
            this.createToast("Erreur du serveur , veuillez réessayer ultérieurement...");
            this.router.navigate(['menu']);
          });
        }
        else {
          console.log("firstConnection => " + JSON.stringify(data));
          for (var i = 0; i < data.response.length; i++) {

            this.dbm.verify_login(data.response[i])
              .then(data => {

              }).catch(e => {
                this.set_message("error", "Une erreur est survenue.");
                this.createToast("Une erreur est survenue ");
                this.router.navigate(['menu']);
              });
          }

        }

      },

      //error
      (error) => {
        console.log(error)

        this.createToast("Erreur du serveur! Verifier les champs saisis ou réessayer ultérieurement...").then(() => {
          this.set_message("error", "Erreur du serveur! Verifier les champs saisis ou réessayer ultérieurement.");
          Counter.disableLoading();
        })
      },
    );
  }

  setDataForSync(data: any): Promise<any> {
    return this.data_for_sync = data;
  }

  destroy_data_for_sync() {
    this.data_for_sync = [];
    console.log("209 destroy data_for_sync => ", this.data_for_sync);
  }

  synchronise_2(url: string, username: string, database: string, password: string, data_to_send: string) {
    try{
      console.log("251 => ", JSON.stringify(data_to_send));
    }
    catch(e){
      console.log(e) ;
    }
  }

  async synchronise(url: string, username: string, database: string, password: string, data_to_send: string) {
    
    Counter.presentLoading();
    this.user_data = {
      url: "",
      username: username,
      password: password,
      database: ""
    };
    Counter.disableLoading();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Content-Length': "1000000",
      })
    };

    let to_send_1 = {
      vals: data_to_send,
      user_id: this.user_data
    }


    console.log("278 => ", JSON.stringify(data_to_send));
    await this.http.post("http://192.168.200.44:3002" + "/sync/data", JSON.stringify(to_send_1), httpOptions)
      .pipe(
        retry(0),
        tap(res => {
          console.log("res == > ", res);
          if (!res) {
            console.log("tsy nisy tao e ! : " + JSON.stringify(res));
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
                //this.dbm.remove_survey_partner_rel() ;
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
                  //this.dbm.update_data_for_sync(data.response.from_offline[i]);
                  this.dbm.update_data_for_sync_2(data.response.from_offline[i].table, data.response.from_offline[i].id)
                }

                this.dbm.get_kronos_back_data()
                  .then((data: any) => {
                    if (!data) {
                      data = [];
                    }
                    let to_send = {
                      vals: data,
                      user_id: this.user_data
                    }
                    this.http.post("http://192.168.200.44:3002" + "/sync/return", to_send, httpOptions).subscribe(
                      //next
                      _ => {
                        this.destroy_data_for_sync();

                        Counter.disableLoading().then(() => {
                          this.dbm.delete('kronos_back_data').then(() => {
                            console.log("data service : data deleted");
                            this.http.post("http://192.168.200.44:3002" + "/sync/remove_backup", to_send, httpOptions).subscribe(final_result => {
                              console.log("final_result => ", JSON.stringify(final_result));
                              this.router.navigate(["menu"]).then(() => console.log("nav 3"));
                              this.createToast("Synchronisation effectuée avec succès!");
                              this.set_message("success", "Synchronisation effectuée avec succès!");
                            })
                          }).catch(e => console.log("odoo service deleted"))
                        });
                      },
                      err => {

                        Counter.disableLoading().then(() => {
                          this.createToast("Une erreur est survenue ... ");
                          this.set_message("error", "Une erreur est survenue.");
                          this.router.navigate(["menu"]).then(() => console.log("nav 4"));;
                        });
                        console.log("erreur an amle post return ", err.message);

                      });
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
