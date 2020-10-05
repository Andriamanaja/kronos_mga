import { Component, OnInit } from '@angular/core';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import * as Pako from 'pako';
import { HttpClient, HttpHeaders } from '@angular/common/http'
 
export interface single_field {
  key: string,
  type: string,
  templateOptions:
  {
    label: string,
    placeholder: string,
    required: boolean,
  }
}

export interface html {
  input: string,
  type: string
}

@Component({
  selector: 'app-imgtest',
  templateUrl: './imgtest.page.html',
  styleUrls: ['./imgtest.page.scss'],
})



export class ImgtestPage {

  constructor( private dbm: Database_manager, private storage : Storage, private http : HttpClient) {
    
  }

  showCompressed() {
    let x = [
      {
        "id" : 1 , 
        "nom" : "nom" , 
        "prenom" : "test"
      }, 
      {
        "id" : 2 , 
        "nom" : "nom_2" , 
        "prenom" : "test_2"
      }
    ]
    var y = Pako.gzip(JSON.stringify(x), {to: 'string'} )  ;

    const httpOptions = {
      headers: new HttpHeaders({
        //"Content-Encoding" : "gzip" ,
        "Accept-Encoding": "gzip", 
        //'Accept': 'application/json',
        'Content-Type': 'application/json; charset=x-user-defined-binary',
      })
    };


    console.log("62=>", y) ;

    this.http.post("http://192.168.200.32:3000/sync/gzip_test", y, httpOptions).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    }) ;

    /*var z = Pako.ungzip(y, { to : "string" }) ;
    console.log( z ); */

  }

}

