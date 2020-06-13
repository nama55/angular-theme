import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ServiceProvider } from '../../_interfaces/service-provider.model';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationSettingsService {
  private url: string;
  private baseUrl = 'http://localhost:9000/configurationsettingss/serviceproviders';
  //srcProvider: any = {};
  constructor(private httpClient: HttpClient) 
  {
    //this.url = baseUrl;
    //, @Inject('BASE_URL') baseUrl: string
  }

  serviceProviderList(): Observable<any> 
  {
    return this.httpClient.get(`${this.baseUrl}active`);
  }
  
  getServiceProviderByid(serviceproviderid: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/serviceproviderids/${serviceproviderid}`);
  }

  createServiceProvider(serviceprovider: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + `/create`, serviceprovider);
  }

  updateServiceProvider(serviceproviderid:string,serviceprovider: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${serviceproviderid}`, serviceprovider);
  }

  deleteupdateServiceProvider(serviceproviderid:string,serviceprovider: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}delete/${serviceproviderid}`, serviceprovider);
  }

  deleteServiceProvider(id: string): Observable<any>
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  private S4() {
      return (((Date.now()+1+Math.random())*0x10000)|0).toString(16).substring(1); 
  }
  


    generateUUID(forEntity: string) {

      // then to call it, plus stitch in '4' in the third group
      // var guid = (
      //   this.S4() + this.S4() + "-" + this.S4() + "-4" + 
      //   this.S4().substr(0,3) + "-" + this.S4() + "-" + 
      //   this.S4() + this.S4() + this.S4()
      // ).toLowerCase();

    var guid = (forEntity+ '-' + this.S4()).toLowerCase();
    return guid;
  }

  // testServiceProvider(testData: Object, path: string): Observable<any> {
  //   return this.httpClient.post(`${this.baseUrl}` + path, testData, {responseType:"text"});
  // }

  // testServiceProvider(testData: ServiceProvider, path: string): Observable<Object> {
  //   console.log("testServiceProvider - ServiceProvider: ",testData);
  //   return this.httpClient.post(`${this.baseUrl}` + path, testData, {responseType:"text"});
  // }
  
}


//  serviceProviderCreate(item: T): Observable<T> {

 //   return this.httpClient
 //     .post < T > (`${this.url}/${this.endpoint}`, item)
 //     .map(data => data as T);
      //atch ((error: Response) => Observable.throw(error));
 // }



