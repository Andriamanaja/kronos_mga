import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { 

  }

  test () {
    let params = {
      database : "it",
      username : "admin" ,
      password : "Admin123"
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
      this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(params), httpOptions ).subscribe(data => {
        console.log(data) ;
      })
  }

  test_2 () {
    let params = {
      model : "itg.manufacturer",
      method : "create" ,
      args : [
        {"name" : "test", "sequence" : 10}
      ]
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
      this.http.post('https://imperial-tobacco.ingenosya.eu/', JSON.stringify(params), httpOptions ).subscribe(data => {
        console.log(data) ;
      })
  }

}
