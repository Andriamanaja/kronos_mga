import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url_for_sync, httpOptions } from 'src/environments/environment';
import { res_partner } from '../data/res_partner.model';

@Injectable({
    providedIn: 'root'
})
export class ser_partner_sync {
    constructor(private http : HttpClient) {

    }

    get_res_patner_from_server()  {
        return this.http.get<res_partner>(base_url_for_sync + '/get_all_res_partner', httpOptions) ;
    }

    post_res_patner_for_server(list_res_patner : String) {
        return this.http.post<res_partner>(base_url_for_sync, list_res_patner, httpOptions)
    }
}