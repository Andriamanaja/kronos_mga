import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Storage } from '@ionic/storage'
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { MenuItem } from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';

@Component({
	selector: 'app-page-three',
	templateUrl: './page-three.page.html',
	styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {
	itemes: MenuItem[];
	items: { id: number; label: string; }[];
	cols: any[];
	edit: boolean = false;
	data_from_route: any;
	dt: any;
	data_for_three: any = [];
	arr_product_id = [];
	data_from_db = [];
	data_fv = [];
	etat: any;
	color_icon: any;
	items_sync: MenuItem[];
	navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };;
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private storage: Storage, private dbm: Database_manager) {

	}

	async ionViewWillEnter() {

		
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

	async ngOnInit() {
		this.storage.get("state_visit").then(etat => {
			this.etat = etat;
		});

		await this.activatedRoute.paramMap.subscribe(async (params: ParamMap) => {

			this.data_from_db = [];
			this.edit = false;

			if (params.get("data")) {
				this.dt = params.get('data');
				this.data_from_route = JSON.parse(params.get('data'));
			} else {
				this.dt = params.get('data_nav');
				this.data_from_route = JSON.parse(params.get("data_nav"));
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

			console.log("page 3 parametres " + JSON.stringify(this.data_from_route));
			await this.storage.get("data_p3")
				.then(async (data_p3: any) => {
					await data_p3.forEach(async (id: number) => {
						await this.dbm.get_data_for_p3(id, this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
							.then(async (data: any) => {
								await this.data_from_db.push(data);
								console.log("46 => ", this.data_from_db);
							}).catch(e => console.log(e.message))
					});
				});
		});

		this.edit = true;
		if (this.data_from_route.state == 'Clôturée') {
			this.edit = false;
		}


		this.items = [{ id: 1, label: this.data_from_route.state }];


		// this.carService.getCarsSmall().then(cars => this.cars = cars);

		this.cols = [
			{ field: 'manufacturer_name', header: 'Fabricant', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3', width: '23%' },
			{ field: 'product_name', header: 'Produit', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3', width: '33%' },
			{ field: 'current_price_2', header: 'Prix relevé lors de la dernière visite', display: 'table-cell', text_align: "right", pointer_events: 'none', bg: '#D3D3D3', width: '33%' },
			{ field: 'current_price', header: 'Relevé prix par paquet', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '', width: '22%' },
			//{ field: 'rod_current_price', header: 'Relevé prix par tige', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '', width: '22%' },
		];
	}


	save() // relevé prix
	{

		console.log("79 =>", this.data_from_db);
		console.log("80 =>", this.data_from_route.visit_sheet_id);
		for (var i = 0; i < this.data_from_db.length; i++) {
			//this.dbm.update_current_price(this.data_from_db[i].rod_current_price, this.data_from_db[i].current_price, parseInt(this.data_from_route.res_partner_id), this.data_from_route.visit_sheet_id, this.data_from_db[i].idproduit)
			this.dbm.update_current_price(this.data_from_db[i].current_price, parseInt(this.data_from_route.res_partner_id), this.data_from_route.visit_sheet_id, this.data_from_db[i].idproduit)
				.then(() => {
					console.log("mande");
				}).catch(e => console.log("85 =>", e.message))
		}
		//this.dbm.update_current_price(parseInt(this.data_from_route.res_partner_id),this.data_from_db);

		this.enable_edit();

	}

	cancel() {
		this.enable_edit();
	}
	page_two() {
		let data_nav = {
			data_nav: JSON.stringify(this.data_from_route),
		}
		this.router.navigate(['page-two', data_nav]);
	}

	page_four() {
		let data_for_nav = {
			data: this.dt,
			data_for_three: JSON.stringify(this.arr_product_id)
		}
		//this.dbm.update_current_price(parseInt(this.data_from_route.res_partner_id),this.data_from_db);
		if (this.etat != "Clôturée") {
			for (var i = 0; i < this.data_from_db.length; i++) {
				//this.dbm.update_current_price(this.data_from_db[i].rod_current_price, this.data_from_db[i].current_price, parseInt(this.data_from_route.res_partner_id), this.data_from_route.visit_sheet_id, this.data_from_db[i].idproduit)
				this.dbm.update_current_price(this.data_from_db[i].current_price, parseInt(this.data_from_route.res_partner_id), this.data_from_route.visit_sheet_id, this.data_from_db[i].idproduit)
				.then(() => {
						console.log("mandeBe");
					}).catch(e => console.log("112 =>", e.message))
			}
		}

		this.router.navigate(['page-four', data_for_nav]);
	}

	enable_edit() {
		if (this.edit == false) {
			this.edit = true;
		}
		else {
			this.edit = false
		}
	}

	open_menu() {
		this.storage.set("last", "tournees");
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


}
