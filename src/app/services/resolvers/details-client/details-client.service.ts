import { Injectable } from '@angular/core';
import { ClientInterface } from 'src/app/model/screen/clients.screen';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsClientService implements Resolve<ClientInterface[]> {
  data_return = {
    i_t_region: [],
    res_users: [],
    i_t_secteur: [],
    i_t_permanent_posm: [],
    i_t_agence: [],
    i_t_zone: [],
    i_t_cooperation_itg: [],
    i_t_couverture_commerciale: [],
    i_t_activite_pos: [],
    i_t_emplacement: [],
    i_t_activation_autorisee: [],
    i_t_cible_activation: [],
    i_t_cible_installation_presentoirs: [],
    i_t_classification1: [],
    i_t_classification2: [],
    i_t_contrat: [],
    i_t_preference_animateur: [],
    i_t_enseigne_appartenance: [],
    i_t_frequence_visite: [],
    i_t_proximite: [],
    i_t_frequence_approvisionnement: [],
    i_t_type_client: [],
    i_t_type_quartier: [],
    i_t_ville: [],
    res_partner: [],
    i_t_source_approvisionnement: [],
    i_t_canal: [],
    i_t_fournisseur : []
  }
  constructor(private dbm: Database_manager) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

    return this.dbm.select_basic_data_2("i_t_region")
      .then((regions: any) => {
        this.data_return.i_t_region = regions;
        return this.data_return;
      })
      .then((data_prec) => {
        return this.dbm.select_data_res_users("res_users").then((users: any) => {
          data_prec.res_users = users;
          return data_prec;
        });
      })
      .then((users) => {
        return this.dbm.select_data_with_table_name("i_t_permanent_posm").then(data => {
          users.i_t_permanent_posm = data;
          return users;
        });
      })
      .then((posm) => {
        return this.dbm.select_basic_data_2("i_t_agence").then(data => {
          posm.i_t_agence = data;
          return posm;
        });
      })
      .then((agence) => {
        return this.dbm.select_basic_data_2("i_t_zone").then(data => {
          agence.i_t_zone = data;
          return agence;
        });
      })  
      .then((i_t_zone) => {
        return this.dbm.select_basic_data_2("i_t_activite_pos").then(data => {
          i_t_zone.i_t_activite_pos = data;
          return i_t_zone;
        });
      })
      .then((i_t_activite_pos) => {
        return this.dbm.select_basic_data_2("i_t_activation_autorisee").then(data => {
          i_t_activite_pos.i_t_activation_autorisee = data;
          return i_t_activite_pos;
        });
      })
      .then((i_t_activation_autorisee) => {
        return this.dbm.select_basic_data_2("i_t_cible_activation").then(data => {
          i_t_activation_autorisee.i_t_cible_activation = data;
          return i_t_activation_autorisee;
        });
      })
      .then((i_t_cible_activation) => {
        return this.dbm.select_basic_data_2("i_t_cible_installation_presentoirs").then(data => {
          i_t_cible_activation.i_t_cible_installation_presentoirs = data;
          return i_t_cible_activation;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_classification1").then(data => {
          data_prec.i_t_classification1 = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_classification2").then(data => {
          data_prec.i_t_classification2 = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_contrat").then(data => {
          data_prec.i_t_contrat = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_cooperation_itg").then(data => {
          data_prec.i_t_cooperation_itg = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_couverture_commerciale").then(data => {
          data_prec.i_t_couverture_commerciale = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_emplacement").then(data => {
          data_prec.i_t_emplacement = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_enseigne_appartenance").then(data => {
          data_prec.i_t_enseigne_appartenance = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_frequence_approvisionnement").then(data => {
          data_prec.i_t_frequence_approvisionnement = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_frequence_visite").then(data => {
          data_prec.i_t_frequence_visite = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_preference_animateur").then(data => {
          data_prec.i_t_preference_animateur = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_proximite").then(data => {
          data_prec.i_t_proximite = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_secteur").then(data => {
          data_prec.i_t_secteur = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_type_client").then(data => {
          data_prec.i_t_type_client = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_type_quartier").then(data => {
          data_prec.i_t_type_quartier = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_ville").then(data => {
          data_prec.i_t_ville = [];
          return data_prec;
        });
      })
      /*.then((data_prec) => {
        return this.dbm.get_name_id_data("res_partner").then(data => {
          data_prec.res_partner = [];
          return data_prec;
        });
      })*/
      .then((data_prec) => {
        return this.dbm.select_i_t_type_client().then(data => {
          data_prec.i_t_source_approvisionnement = data;
          return data_prec;
        });
      })
      .then((data_prec) => {
        return this.dbm.select_basic_data_2("i_t_canal").then(data => {
          data_prec.i_t_canal = data;
          return data_prec;
        });
      })
      /*.then((data_prec) => {
        return this.dbm.get_name_id_fournisseur().then(data => {
          data_prec.i_t_fournisseur = [];
          return data_prec;
        });
      })*/
      .then((data_prec) => {
        return data_prec;
      })
  }
}
