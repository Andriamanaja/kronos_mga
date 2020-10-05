import { Component, OnInit } from '@angular/core';
import { visit_sheet } from '../model/data/visit_sheet.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router, Event, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage'
import { MenuItem } from 'primeng/api';
import { Auth } from '../model/helper/auth';
@Component({
  selector: 'app-fiche-visite',
  templateUrl: './fiche-visite.page.html',
  styleUrls: ['./fiche-visite.page.scss'],

})


export class FicheVisitePage implements OnInit {
  selected: any;
  data_fv: any = [];
  itemes: MenuItem[];
  col_fv: { field: string; header: string; display: string }[];
  data_cmp: any;
  items_sync: MenuItem[];

  x: any;
  loadIndicator: boolean;

  constructor(private storage: Storage, private activated_route: ActivatedRoute, private dbm: Database_manager, private router: Router) {

  }

  ionViewWillEnter() {
    this.init_data();
  }

  go_sync() {
    this.router.navigate(["synchro"]);
  }

  init_data() {

    this.dbm.verify_additional() ;

    this.activated_route.queryParams.subscribe(data => {
      this.loadIndicator = true;

      this.data_fv = [];
      if (data['id_tournee'] == undefined) {
        this.dbm.get_all_fiche_visite().then(data => {
          this.data_fv = data;
          this.loadIndicator = false
        });
      }
      else {

        this.dbm.get_all_fiche_visite_by_id_tournee(data.id_tournee)
          .then((data) => {
            this.data_fv = data;
            this.loadIndicator = false
          })
          .catch(e => console.log(e.message));

      }
    });
  }

  open_menu() {
    this.storage.set("last", "fiches-client");
    this.router.navigate(['menu']);
  }

  ngOnInit() {

    this.col_fv = [
      { field: 'visit_sheet_id', header: 'id', display: 'none' },
      { field: 'user_id', header: 'Commercial', display: 'none' },
      { field: 'partner_id', header: 'Point de vente', display: 'table-cell' },
      { field: 'nom_pos', header: 'Nom du PDV', display: 'table-cell' },
      { field: 'nom_gerant', header: 'Nom du gérant', display: 'table-cell' },
      { field: 'quartier', header: 'Quartier', display: 'table-cell' },
      { field: 'adresse', header: 'Adresse', display: 'table-cell' },
      { field: 'numero_telephone_1', header: 'Téléphone', display: 'table-cell' },
      { field: 'visit_sheet_begin_date_time', header: 'Debut de visite', display: 'table-cell' },
      { field: 'visit_sheet_end_date_time', header: 'Fin de visite', display: 'table-cell' },
      { field: 'provider_longitude', header: 'Longitude', display: 'none' },
      { field: 'provider_latitude', header: 'Latitude', display: 'none' },
      { field: 'state', header: 'Statut', display: 'table-cell' },
      { field: 'tour_status', header: 'tour_status', display: 'none' },
      { field: 'ville', header: 'ville', display: 'none' },
      { field: 'repere', header: 'repere', display: 'none' },
    ];
    
  }

  open_nouveau_fiche_visite() {
    this.router.navigate(['new-fiche-visite']);
  }

  onRowClicked(rowData: any): void {
    let data_nav = {
      data: JSON.stringify(rowData),
      commercial_id: this.data_fv.commercial_id,
    }
    this.storage.set("state_visit", rowData.state);
    this.router.navigate(['page-one', data_nav]);
  }


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

  onRowSelect(event: any) {

  }

  onRowUnselect(event: any) {

  }
}
