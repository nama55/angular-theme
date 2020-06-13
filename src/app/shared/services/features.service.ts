import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  
  private baseUrl = 'http://localhost:9000/filefeatures/upload';
  constructor(private httpClient: HttpClient) { }
 

  postfileUpload(file: File) : Observable<any>
  {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
    return this.httpClient.post(`${this.baseUrl}`, formdata);
  }

  getFileContent(url: String) : Observable<string> {
    console.log("Template URL: ",url);
    return this.httpClient.get(`${url}`,{ responseType: 'text' });
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.httpClient.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.httpClient.get('/getallfiles');
  }
}
