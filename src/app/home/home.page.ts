import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { Router, NavigationExtras } from '@angular/router';
import { base_data } from '../model/data/base_data.model';
import { i_t_region } from '../model/data/i_t_region.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { ToastController } from '@ionic/angular';
import { Ng6OdooRPCService } from 'angular6-odoo-jsonrpc';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TestService } from '../model/service/test.service';
import { Auth } from '../model/helper/auth';
import { Storage } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx'
import { edit_price_line } from 'src/environments/environment';
import { maj } from '../model/data/maj.model';

export class test {
    db: string;
    name: string;
    password: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [MessageService]
})
export class HomePage implements OnInit {

    userFormGroup: FormGroup;
    msgs: Message[] = [];
    err: boolean;
    region: Array<i_t_region> = [];
    progress: number = 0;
    non_synced: string = "";
    resp = [] ;

    constructor(private sqlite_porter : SQLitePorter , private storage: Storage, private formbuilder: FormBuilder, private messageService: MessageService, private router: Router, private dbm: Database_manager, private toast: ToastController, private odooRPC: Ng6OdooRPCService, private service: TestService, private http: HttpClient) {
        this.userFormGroup = this.formbuilder.group({
            "login": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }

    ngOnInit(): void {
        
    }

    onSubmit(): void {
        try {
            if (this.userFormGroup.get('login').value == "admin" && this.userFormGroup.get('password').value == "Admin123") {
                Auth.access = false;
                this.router.navigate(['menu']);
            }
            else {

                this.dbm.clear_database();

                /*let is_updated = false;
                this.dbm.update_any_table().then(data => {
                    for (var i = 0; i < data.length; i++) {
                        if (data.name == "rod_current_price") {
                            is_updated = true;
                            break;
                        }
                    }

                    this.dbm.update_any_column() ;

                    

                    if (is_updated == false) {
                        this.dbm.insert_res_data(edit_price_line).then(() => {
                            console.log("Vita ny update");
                        }).catch(e => {
                            console.log("363 dbm=> ", e)
                        });
                    }
                    else {
                        console.log("Efa nisy tao k.");
                    }
                })*/

                this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then(result => {
                        switch (result) {
                            case 0: {
                                this.makeToast("Mot de passe incorrect !");
                                break;
                            }
                            case 1: {
                                let maj_1 = new maj(1, "add_column_visit_sheet_offline_id", 0) ;
                                let maj_2 = new maj(2, "copy_visit_sheet_offline_id", 0) ;
                                let maj_3 = new maj(3, "update_active_partner_where_true", 0) ;
                                let maj_4 = new maj(4, "update_active_partner_where_false", 0) ;
                                let maj_5 = new maj(5, "update_x_offline_id_res_partner", 0) ;
                                let maj_6 = new maj(6, "add_res_partner_res_users_rel", 0) ;
                                let maj_7 = new maj(7, "update_permanent_posm_res_partner_rel", 0) ;
                                let maj_8 = new maj(8, "repair_partner_x_odoo_id", 0) ;
                                let maj_9 = new maj(9,"repair_visit_sheet",0);
                                let maj_10 = new maj(10, "remove_null_user", 0) ;
                                
                                //let maj_6 = new maj(6, "repair_all_visit", 0) ;
                                
                                this.dbm.insert_update(maj_1) ;
                                this.dbm.insert_update(maj_2) ;
                                this.dbm.insert_update(maj_3) ;
                                this.dbm.insert_update(maj_4) ;
                                this.dbm.insert_update(maj_5) ;
                                this.dbm.insert_update(maj_6) ;
                                this.dbm.insert_update(maj_7) ;
                                this.dbm.insert_update(maj_8) ;
                                this.dbm.insert_update(maj_9) ;
                                this.dbm.insert_update(maj_10) ;

                                Auth.access = false;

                                //this.dbm.update_active_res_partner_1() ;
                                //this.dbm.update_active_res_partner_2() ;
                                //this.dbm.update_active_res_partner_3() ;
                                //this.dbm.repair_data() ;
                                //this.dbm.remove_appro();

                                this.dbm.storage_Login(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value)
                                    .then(data => {
                                        console.log(JSON.stringify(data));
                                        this.storage.set('data_p2', JSON.stringify(data))
                                            .catch(e => console.log("set storage p2 " + e.message));
                                    }).catch(e => console.log('storage login homepage exception : ' + e.message))
                                    .then(() => {
                                        let user_config = {
                                            username: this.userFormGroup.get('login').value,
                                            password: this.userFormGroup.get('password').value
                                        }
                                        this.storage.set("color", "red");
                                        this.storage.set("user_config", user_config);
                                        this.storage.get("reset").then(reset => {
                                            if (reset || reset == true) {
                                                this.storage.set("reset", true);
                                            }
                                            else {
                                                this.storage.set("reset", false);
                                            }
                                        })
                                        
                                        this.router.navigate(['menu']);
                                    })
                                break;
                            }
                            case -1: {
                                this.makeToast("Login incorrect !");
                                break;
                            }
                        }
                })
            }

        } catch (error) {
            console.log(error.stack);
            console.log(error.message);
        }
    }

    async makeToast(message: string) {
        let x = await this.toast.create({
            message: message,
            duration: 3000
        });
        x.present();
    }

    move_seq() {
        this.resp = this.dbm.get_max_off_all_table()
        console.log("139 => ", this.resp) ;
    }

    remove_db() {
        this.resp = this.dbm.get_max_off_all_table()
        console.log("144 => ", this.resp) ;}
}
