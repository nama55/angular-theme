import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { error } from 'protractor';
import { Response } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private url: string;
  private channelbaseUrl = 'http://localhost:9000/businesss/channellists';
  private templatebaseUrl = 'http://localhost:9000/businesss/templatelists';
  
  constructor(private httpClient: HttpClient) {
  }


  private S4() {
    return (((Date.now()+1+Math.random())*0x10000)|0).toString(16).substring(1); 
  }

  generateUUID(forEntity: string) {
  var guid = (forEntity+ '-' + this.S4()).toLowerCase();
  return guid;
  }
  
  channelMasterList(): Observable<any> 
  {
    return this.httpClient.get(`${this.channelbaseUrl}active`);
  }

  getchannelMasterByid(channelid: string): Observable<any> {
    return this.httpClient.get(`${this.channelbaseUrl}/channelids/${channelid}`);
  }


  deleteupdateChannel(id: string): Observable<any>
  {
    return this.httpClient.delete(`${this.channelbaseUrl}/${id}`, { responseType: 'text' });
  }

  createChannelMaster(channelmaster: Object):Observable<Object>
  {
    return this.httpClient.post(`${this.channelbaseUrl}` + `/create`, channelmaster);
  }
  
  updateChannelMaster(channelid:string,channelmaster:any): Observable<Object>
  {
    return this.httpClient.put(`${this.channelbaseUrl}/${channelid}`, channelmaster);
  }

  channelType(): Observable<any>
  {
    return this.httpClient.get(`${this.channelbaseUrl}specificcolumns`);
  }


  templateMasterList(page:string,size:string,sortby="templatename",orderby="0"): Observable<any> 
  {
    return this.httpClient.get(`${this.templatebaseUrl}active?page=${page}&size=${size}&sortby=${sortby}&orderby=${orderby}`);
  }

  gettemplateMasterByid(templateid: string): Observable<any> {
    return this.httpClient.get(`${this.templatebaseUrl}/templateids/${templateid}`);
  }

  createTemplateMaster(template: Object):Observable<Object>
  {
    return this.httpClient.post(`${this.templatebaseUrl}` + `/create`, template);
  }

  updateTemplate(templateid:string,templatemaster:any): Observable<Object>
  {
    return this.httpClient.put(`${this.templatebaseUrl}/${templateid}`, templatemaster);
  }

  deleteupdatetemplate(id: string): Observable<any>
  {
    return this.httpClient.delete(`${this.templatebaseUrl}/${id}`, { responseType: 'text' });
  }

}
