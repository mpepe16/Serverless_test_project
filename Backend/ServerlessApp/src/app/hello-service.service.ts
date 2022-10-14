import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get("https://6hfa14136e.execute-api.eu-central-1.amazonaws.com/Prod/hello/")

  }
}
