import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import { MenuItem } from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';
interface Quizz {
	ans_id: number,
	ans_name: string
}

@Component({
	selector: 'app-page-four',
	templateUrl: './page-four.page.html',
	styleUrls: ['./page-four.page.scss'],
})

export class PageFourPage implements OnInit {

	items: { id: number; label: string; }[];
	cols: any[];
	data_from_route: any;
	dt: any;
	pos_audit_data: any;
	qz = new Array();
	edit: boolean = true;
	itemes: MenuItem[];
	etat: any;
	color_icon: any;
	items_sync: MenuItem[];
	navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };;

	constructor(private dbm: Database_manager, private router: Router, private activatedRoute: ActivatedRoute, private storage: Storage) { }

	ngOnInit() {

		this.storage.get("state_visit").then(etat => {
			this.etat = etat;
		});

		this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
			console.log("p4");
			console.log(params);
			this.dt = params.get("data");
			this.data_from_route = JSON.parse(params.get("data"));
		})
		this.edit = true;
		if (this.data_from_route.state == 'Clôturée') {
			this.edit = false;
		}

		this.color_icon = this.data_from_route.color;

		this.itemes = [
			{ label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
		];

		this.items_sync = [
			{
				label: this.data_from_route.unsynced
			}
		];

		console.log("page 4 parametres " + JSON.stringify(this.data_from_route));
		this.init_data();
		this.items = [{ id: 1, label: this.data_from_route.state }];

	}

	ionViewWillEnter() {

		
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

	init_data() {

		this.dbm.get_audit_data_p4(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(data => {
			this.pos_audit_data = data;
			console.log("pos_audit data ", this.pos_audit_data)
			var quizz: Quizz[];

			for (var i = 0; i < this.pos_audit_data.length; i++) {

				var ans_id = this.pos_audit_data[i].answer_id.split('|');
				var ans_name = this.pos_audit_data[i].answer_name.split('|');
				let q: { "value": string, "label": string };
				let k = new Array();
				k.push({ "value": "", "label": "" });
				for (var x = 0; x < ans_id.length; x++) {
					q = { "value": ans_name[x], "label": ans_name[x] }
					k.push(q);
				}
				this.pos_audit_data[i].answer_name = k;

			}
		}).finally(() => {
			this.dbm.get_supp_data(this.data_from_route.visit_sheet_id).then(supp => {
				for (var i = 0; i < this.pos_audit_data.length; i++) {
					this.pos_audit_data[i].visit_begin = supp[i].visit_begin;
					this.pos_audit_data[i].visit_end = supp[i].visit_end
				}
			});
			this.dbm.get_last_audit_response(this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(last => {
				if(last) {
					if (last.length > 0) {
						for (var i = 0; i < last.length; i++) {
							this.pos_audit_data[i].last_visit_response = last[i].last_visit_response;
						}
					}
				}
			})
		});
	}
	

	page_three() {
		let data_nav = {
			data: this.dt
		}
		if (this.etat != "Clôturée") {
			for(var i = 0 ; i < this.pos_audit_data.length ; i++ ) {
				var audit_criteria_id = this.pos_audit_data[i].id ;
				if(this.pos_audit_data[i].visit_begin == undefined) this.pos_audit_data[i].visit_begin = null ;
				if(this.pos_audit_data[i].visit_end == undefined) this.pos_audit_data[i].visit_end = null ;
				this.dbm.update_response(this.data_from_route.visit_sheet_id, this.pos_audit_data[i], audit_criteria_id);
			}
		}
		this.router.navigate(['page-three', data_nav]);
	}

	page_five() {
		let data_for_nav = {
			data: this.dt,
		}
		if (this.etat != "Clôturée") {
			for(var i = 0 ; i < this.pos_audit_data.length ; i++ ) {
				var audit_criteria_id = this.pos_audit_data[i].id ;
				if(this.pos_audit_data[i].visit_begin == undefined) this.pos_audit_data[i].visit_begin = null ;
				if(this.pos_audit_data[i].visit_end == undefined) this.pos_audit_data[i].visit_end = null ;
				this.dbm.update_response(this.data_from_route.visit_sheet_id, this.pos_audit_data[i], audit_criteria_id);
			}
		}

		this.router.navigate(['page-five', data_for_nav]);

	}

	open_menu() {
		this.storage.set("last", "tournees");
		this.router.navigate(['menu']);
	}

	enable_edit() {
		if (this.edit == false) {
			this.edit = true;
		}
		else {
			this.edit = false
		}
	}

	save() {
		if (this.etat != "Clôturée") {
			for(var i = 0 ; i < this.pos_audit_data.length ; i++ ) {
				if(this.pos_audit_data[i].visit_begin == undefined) this.pos_audit_data[i].visit_begin = null ;
				if(this.pos_audit_data[i].visit_end == undefined) this.pos_audit_data[i].visit_end = null ;
				var audit_criteria_id = this.pos_audit_data[i].id ;
				this.dbm.update_response(this.data_from_route.visit_sheet_id, this.pos_audit_data[i], audit_criteria_id);
			}
		}
		this.init_data();
		this.enable_edit();
	}
	cancel() {
		this.init_data();
		this.enable_edit();
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
}
