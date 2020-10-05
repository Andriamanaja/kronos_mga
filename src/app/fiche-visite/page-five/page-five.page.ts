import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import { MenuItem } from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';
@Component({
	selector: 'app-page-five',
	templateUrl: './page-five.page.html',
	styleUrls: ['./page-five.page.scss'],
})
export class PageFivePage implements OnInit {
	itemes: MenuItem[];
	items: { id: number; label: string; }[];
	cols: any[];
	dt: any;
	data_from_route: any;
	data_from_db: any;
	edit: boolean = true;
	data_for_three: string;
	etat: any;
	color_icon: any;
	items_sync: MenuItem[];
	navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };;
	constructor(private storage: Storage, private dbm: Database_manager, private router: Router, private activatedRoute: ActivatedRoute) { }

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

	ngOnInit() {

		this.storage.get("state_visit").then(etat => {
			this.etat = etat;
		});

		this.activatedRoute.paramMap.subscribe((params: any) => {

			this.dt = params.get("data");
			this.data_from_route = JSON.parse(this.dt);
			this.dbm.get_data_for_p5(this.data_from_route.visit_sheet_id).then(data => {
				this.data_from_db = data;
				this.items = [
					{ id: 1, label: this.data_from_route.state }
				];
			});

			this.edit = true;

			if (this.data_from_route.state == 'Clôturée') {
				this.edit = false;
			}
		});
		console.log("page 5 parametres " + JSON.stringify(this.data_from_route));

		this.color_icon = this.data_from_route.color;

		this.itemes = [
			{ label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
		];

		this.items_sync = [
			{
				label: this.data_from_route.unsynced
			}
		];

		this.cols = [
			{ field: 'produit_id', header: '', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
			{ field: 'product_name', header: 'Article', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
			{ field: 'quantity', header: 'Quantité posée', display: 'table-cell', text_align: "right", pointer_events: 'initial', bg: '' },
			{ field: 'manufacturer_id', header: '', display: 'none', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
		];
	}

	page_four() {
		let data_for_nav = {
			data: this.dt,
		}
		this.router.navigate(['page-four', data_for_nav]);
	}

	page_six() {
		let data_for_nav = {
			data: this.dt,
		}

		if (this.etat != "Clôturée") {
			for(var i = 0 ; i < this.data_from_db.length ; i++) {
				var produit_id = this.data_from_db[i].produit_id ;
				this.dbm.update_pv_line_quantity_product(produit_id, this.data_from_db[i], this.data_from_route.visit_sheet_id);
			}
		}
		this.router.navigate(['page-six', data_for_nav]);

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
		this.storage.set("last", "fiches-client");
		this.router.navigate(['menu']);
	}

	save() {
		for(var i = 0 ; i < this.data_from_db.length ; i++) {
			var produit_id = this.data_from_db[i].produit_id ;
			this.dbm.update_pv_line_quantity_product(produit_id, this.data_from_db[i], this.data_from_route.visit_sheet_id);
		}
		this.dbm.get_data_for_p5(this.data_from_route.visit_sheet_id).then(data => {
			this.data_from_db = [];
			this.data_from_db = data;
		});
		this.enable_edit();
	}
	cancel() {
		this.dbm.get_data_for_p5(this.data_from_route.visit_sheet_id).then(data => {
			this.data_from_db = data;
		});
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
