import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ConfigurationSettingsService } from '../../shared/services/configuration-settings.service';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Data } from '@angular/router';
import { ServiceProvider } from '../../_interfaces/service-provider.model'
//import { ServiceProvider } from '../../_classes/service-provider.class'
import { expand } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {
  
  //srcProvider: ServiceProvider[];
  //srcProvider: ServiceProvider;
  srcProvider: any = {};
  curdate = new Date();
  
  

  constructor(httpClient: HttpClient/*, private datePipe: DatePipe*/) {
    
    //this.curdate = this.datePipe.transform(this.curdate, 'yyyy-MM-dd');
  }

  ngOnInit() {

  }

  onSave(srcProvider: NgForm)
  {
 

    console.log(this.srcProvider);

   
    this.insertRecord();
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.srcProvider))
  }

  insertRecord() {
    //this.srcProvider.ChannelID = "123";
    //this.srcProvider.CreatedBy = "956562"
    //this.srcProvider.CreatedDate = ""; //String(this.curdate);
    //this.srcProvider.ServiceProviderPriority = Boolean(this.srcProvider.ServiceProviderPriority);
    //this.srcProvider.ServiceProviderStatus = Boolean(this.srcProvider.ServiceProviderStatus);
    //this.srcProvider.IsActive = true;
    //this.srcProvider.createddate = this.curdate;
    //this.serviceProviderCreate(this.srcProvider).subscribe(res => {
    //  res
    //});
  }
}
