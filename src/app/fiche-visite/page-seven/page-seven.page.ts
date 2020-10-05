import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'

import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { MenuItem } from 'primeng/api';
import { Auth } from 'src/app/model/helper/auth';
import { html } from 'src/app/imgtest/imgtest.page';
import * as moment from 'moment';

@Component({
	selector: 'app-page-seven',
	templateUrl: './page-seven.page.html',
	styleUrls: ['./page-seven.page.scss'],
})
export class PageSevenPage implements OnInit {

	itemes: MenuItem[];
	items: { id: number; label: string; }[];
	//cols: any[];
	data_from_route: any;
	dt: any;
	myForm: FormGroup;
	orderFields: any;
	//data_from_db: any;
	formArray: FormArray;
	//display: boolean = false;
	name: string = '';
	todo: FormGroup;
	filegroupe: FormGroup;
	fileName: string;
	data_for_three: any = [];
	question_answer: any;
	data_question: any;
	etat: any;

	//manaja
	form = new FormGroup({});

	form2 = new FormGroup({});
	model = {};

	fields: FormlyFieldConfig[] = [];

	my_fields: FormlyFieldConfig[] = [];
	test: FormlyFieldConfig;
	display: boolean = false;
	data_from_db: any;
	cols: any[];
	data_for_screen: any[];
	has_data: boolean = false;
	has_survey: boolean = false;
	items_sync: MenuItem[];
	color_icon: any;
	navigationExtras: NavigationExtras = {
    queryParams: {
      "color": String,
      "unsynced": String
    }
  };;
	//manaja

	constructor(private formBuilder: FormBuilder, private dbm: Database_manager, private fbuilder: FormBuilder, private storage: Storage, private router: Router, private activatedRoute: ActivatedRoute) {
		this.cols = [
			{ field: 'question', header: 'Questions', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
			{ field: 'answer', header: 'Réponses', display: 'table-cell', text_align: "left", pointer_events: 'none', bg: '#D3D3D3' },
		];
		this.activatedRoute.paramMap.subscribe(data => {
			console.log(" params p7" + JSON.stringify(data));
			this.dt = data.get("data");
			this.data_from_route = JSON.parse(this.dt);
			this.data_for_three = data.get("data_for_three");
		});

	}

	ionViewWillEnter() {

		
	}

	ngOnInit() {

		this.storage.get("state_visit").then(etat => {
			this.etat = etat;
		});

		this.activatedRoute.paramMap.subscribe(data => {
			this.dt = data.get("data");
			this.data_from_route = JSON.parse(this.dt);
			this.data_for_three = data.get("data_for_three");
		});

		this.items = [
			{ id: 1, label: this.data_from_route.state }
		];


		this.itemes = [
			{ label: 'Déconnecter', icon: 'pi pi-fw pi-plus' },
		];

		this.storage.get(this.data_from_route.visit_sheet_id.toString()).then(model => {
			if (model) {
				this.model = model
			}
		})
		
		this.items = [
			{ id: 1, label: 'NOUVEAU' },
			{ id: 2, label: 'OUVERTE' },
			{ id: 3, label: 'CLÔTURÉE' },

		];

		//manaja
		this.refresh_data()

		this.dbm.get_p7_data(this.data_from_route.res_partner_id).then(async data => {
			if (data) {
				if (data.length > 0) {
					this.has_survey = true;
				}

				this.data_from_db = data;
			}

			this.fields = [{
				key: 'email',
				type: 'input',
				templateOptions: {
					label: 'Email address',
					placeholder: 'Enter email',
					required: true,
				},
				hideExpression: true
			}];
			let field = {};
			for (var i = 0; i < data.length; i++) {
				if (data[i].answer_name == null) {
					field = await this.get_free_template(data[i], this.model);
				}
				else {
					field = await this.get_multiple_response(data[i], this.model);
				}
				this.fields.push(field);
			}
			console.log("133 => ", this.fields);
		});
		//manaja

	}

	submit(model, fields) {

		console.log("159 => ", fields);

		this.storage.set(this.data_from_route.visit_sheet_id.toString(), model).then(() => {
			console.log("set data p7 successful")
		});

		if (this.has_data == true) {
			for (var i = 0; i < this.data_for_screen.length; i++) {
				this.dbm.remove_survey(this.data_for_screen[i].id, this.data_from_route.visit_sheet_id);
			}
		}

		for (var i = 0; i < this.data_from_db.length; i++) {
			if (typeof (model[this.data_from_db[i].question]) == "object") {
				if (model[this.data_from_db[i].question].length > 0) {
					for (var x = 0; x < model[this.data_from_db[i].question].length; x++) {
						this.dbm.save_survey(null, this.data_from_db[i].question, model[this.data_from_db[i].question][x], this.data_from_route.visit_sheet_id, "choice");
					}
				}
				else {
					model[this.data_from_db[i].question] = moment(model[this.data_from_db[i].question]).format("YYYY-MM-DD").toString();
					console.log("p7 173 => ", model[this.data_from_db[i].question]);
					this.dbm.save_survey(null, this.data_from_db[i].question, model[this.data_from_db[i].question], this.data_from_route.visit_sheet_id, "free");
				}
			}
			else {
				if (this.data_from_db[i].type == "simple_choice") {
					this.dbm.save_survey(null, this.data_from_db[i].question, model[this.data_from_db[i].question], this.data_from_route.visit_sheet_id, "choice");
				}
				else {
					this.dbm.save_survey(null, this.data_from_db[i].question, model[this.data_from_db[i].question], this.data_from_route.visit_sheet_id, "free");
				}

			}
		}
		this.display = false;
		this.refresh_data();
	}

	refresh_data() {
		this.dbm.get_survey(this.data_from_route.visit_sheet_id).then(data => {
			if (data.length > 0) {
				this.has_data = true;
				this.data_for_screen = data;
			}
		});
	}

	//MANAJA
	async get_multiple_response(value: any, model: any) {
		switch (value.type) {
			case "simple_choice": {
				return {
					key: value.question,
					type: 'select',
					templateOptions: {
						label: value.question,
						placeholder: '',
						description: '',
						required: this.check_if_required(value.required),
						options: JSON.parse(value.answer_name)
					},
				}
			}

			case "multiple_choice": {

				return {
					key: value.question,
					type: 'select',
					templateOptions: {
						label: value.question,
						placeholder: '',
						description: '',
						required: this.check_if_required(value.required),
						multiple: true,
						//  selectAllOption: 'Select All',
						options: JSON.parse(value.answer_name)
					},
				}
			}
		}
	}

	async get_free_template(value: any, model: any) {
		this.test =
			{
				key: value.question,
				type: this.switch_type(value.type).input,
				templateOptions: {
					label: value.question,
					placeholder: '',
					required: this.check_if_required(value.required),
					type: this.switch_type(value.type).type
				}
			}
		return this.test;
	}

	switch_type(type: string): html {
		switch (type) {
			case "free_text": return { input: "input", type: "text" };
			case "textbox": return { input: "textarea", type: "" };
			case "numerical_box": return { input: "input", type: "number" };
			case "datetime": return { input: "datepicker", type: "text" };
			default: return { input: "", type: "" };
		}
	}

	check_if_required(required: string): boolean {
		if (required == "true") {
			return true;
		}
		else {
			return false;
		}
	}
	//MANAJA


	page_six() {
		let data_for_nav = {
			data: this.dt,
			data_for_three: this.data_for_three
		}
		this.router.navigate(['page-six', data_for_nav]);
	}

	open_menu() {
		this.storage.set("last", "tournees");
		this.router.navigate(['menu']);
	}


	page_one() {
		let data_nav = {
			data: this.dt
		}
		this.router.navigate(['page-one', data_nav]);
	}

	end_visite() {
		this.data_from_route.state = "Clôturée";
		this.dt = JSON.stringify(this.data_from_route);

		let id = this.data_from_route.visit_sheet_id;
		let now = this.dbm.getDatetimeNow();

		this.dbm.get_visit_begin_datetime(id)
			.then(data => {
				let begin_datetime = data.begin_datetime;

				begin_datetime = new Date(begin_datetime).valueOf();
				let end_datetime = new Date(now).valueOf();

				let duration = end_datetime - begin_datetime;
				duration = duration / 1000;
				duration = duration / 60;

				this.dbm.set_visit_duration_end_datetime(id, duration, now, this.data_from_route.res_partner_id)
					.then(() => {
						this.dbm.update_pos(this.data_from_route.visit_sheet_id, this.etat, this.data_from_route.tour_id, this.data_from_route.res_partner_id)
							.then(() => {
								this.storage.set("state_visit", "Clôturée");
								this.page_one();
							})
					})
					.catch(e => console.log(e.message));
			})
			.catch(e => console.log("330 => ", e))
	}


	showDialog() {
		this.display = true;
	}

	Annuler() {
		this.display = false;
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

	go_sync() {
		this.router.navigate(["synchro"], this.navigationExtras)
	}
}
