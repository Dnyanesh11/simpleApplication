import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import "rxjs/Rx";

//import {observa}


@Injectable()
export class DataServiceService {

  //private url = "https://yesno.wtf/api"; 
  private url = "http://localhost:3000/people";
  //private http:Http;
  //http://localhost:8080/api/events
 constructor(private http: Http) { }

  fetch(): Promise<Object> {
      return new Promise((res, rej) => {
      this.http.get(this.url).toPromise().then((response: Response) => {
        res(response.json());
      });
    })
  }

   




  // getData():string{
  //   return "From Service";   
  // }https

}
