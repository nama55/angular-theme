import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from './../../shared/services/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceproviderListComponent } from './../serviceprovider-list/serviceprovider-list.component';
import { ServiceProvider } from '../../_interfaces/service-provider.model';
import { ConfigurationSettingsService } from '../../shared/services/configuration-settings.service';
import { BusinessService } from './../../shared/services/business.service';
import { Observable } from 'rxjs';
import { GuID } from './../../_classes/gu-id.class';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';



@Component({
  selector: 'app-serviceprovider-create',
  templateUrl: './serviceprovider-create.component.html',
  styleUrls: ['./serviceprovider-create.component.scss']
})
export class ServiceproviderCreateComponent implements OnInit {

  public errorMessage = '';
  public srcProviderFormLabelName = 'Add Service Provider';
  serviceprovidersEdit: Observable<ServiceProvider[]>;
  serviceProvideriddata: ServiceProvider[];
  channelType: any;
  guid: GuID;
  
  public srcProviderForm: FormGroup;

  


  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
     private router: Router, private route: ActivatedRoute, private location: Location,
     private configurationsettingsservice: ConfigurationSettingsService,
     private businessservice: BusinessService
     ) { }

  ngOnInit() {
    
    this.srcProviderForm = new FormGroup({
      SrcProviderName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      SrcProviderUrl: new FormControl('', [Validators.required]), 
      SrcProviderUserName: new FormControl('', [Validators.required]),
      SrcProviderUserpass: new FormControl('', [Validators.required]),
      SrcProviderPriority: new FormControl('', [Validators.required]),
      srcProviderStatus: new FormControl('0'),
      SrcProviderContactnumber:new FormControl(''),
      SrcProviderID:new FormControl('00000'),
      SrcProviderChannel: new FormControl('0'),
      SrcProviderDescription:new FormControl('')
    });
    this.getchannelType();
    if (this.route.snapshot.paramMap.get('id') != "0") {
      
      this.srcProviderFormLabelName = 'Edit Service Provider';

      this.getserviceproviderNameData();
    }
    
    
  }

  public validateControl(controlName: string) {

    if (this.srcProviderForm.controls[controlName].invalid && this.srcProviderForm.controls[controlName].touched) {
      return true;
    }

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.srcProviderForm.controls[controlName].hasError(errorName)) {
      return true;
    }

    return false;
  }

  public createServiceProvider(srcProviderFormValue) {
    if (this.srcProviderForm.valid) {
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(srcProviderFormValue))
      //serviceproviderid: this.configurationsettingsservice.generateUUID('sp'),
      //this.executeEventCreation(templateFormValue);
      
      const d: Date = new Date();
      if(srcProviderFormValue.SrcProviderID === '00000'){
        const serviceprovider: ServiceProvider = {
          channelid:srcProviderFormValue.SrcProviderChannel,
          serviceproviderid: this.configurationsettingsservice.generateUUID('sp'),
          serviceprovidername: srcProviderFormValue.SrcProviderName,
          serviceproviderstatus: srcProviderFormValue.srcProviderStatus === "1" ? true : false,
          serviceproviderdescription: srcProviderFormValue.SrcProviderDescription,
          serviceprovideruserid: srcProviderFormValue.SrcProviderUserName,
          serviceproviderpassword: srcProviderFormValue.SrcProviderUserpass,
          serviceproviderpriority: true,
          serviceproviderurl: srcProviderFormValue.SrcProviderUrl,
          serviceprovidercontactnumber: srcProviderFormValue.SrcProviderContactnumber,
          createdby: 'UserX',
          createddate: d,
          modifiedby: 'UserY',
          modifieddate: d,
          isactive: true
        };

        this.configurationsettingsservice.createServiceProvider(serviceprovider).subscribe(
          data => {
            console.log("testServiceProvider data: ",data);
            Swal.fire('Service Provider Save Successfully');
            this.redirectToServiceProvideList();
          },
          error => {
            Swal.fire('Oops...', 'Something went wrong!', 'error');
            console.log("testServiceProvider error: ",error);
           }
        );
        }
        else
        {
          var objserviceprovider = { 
            channelid:srcProviderFormValue.SrcProviderChannel,
            serviceprovidername: srcProviderFormValue.SrcProviderName, //scalar value 
            serviceproviderstatus: srcProviderFormValue.srcProviderStatus === "1" ? true : false,
            serviceproviderurl: srcProviderFormValue.SrcProviderUrl,
            serviceprovideruserid: srcProviderFormValue.SrcProviderUserName,
            serviceproviderpassword: srcProviderFormValue.SrcProviderUserpass,
            serviceprovidercontactnumber: srcProviderFormValue.SrcProviderContactnumber,
            serviceproviderpriority: true,
            serviceproviderdescription: srcProviderFormValue.SrcProviderDescription,
            modifiedby: 'UserY',
            modifieddate: d
         };
            
          this.configurationsettingsservice.updateServiceProvider(srcProviderFormValue.SrcProviderID,objserviceprovider).subscribe(
            data => {
              console.log("testServiceProvider data: ",data);
              this.redirectToServiceProvideList();
            },
            error => {
              console.log("testServiceProvider error: ",error);
             }
          );
        }


       
    }
    else {
      alert('Please Fill Requeried Field');
    }
  }

  public getserviceproviderNameData()
  {
 
    this.serviceprovidersEdit = this.configurationsettingsservice.getServiceProviderByid(this.route.snapshot.paramMap.get('id'))
    

    // this.serviceprovidersEdit .subscribe( data => {
    //   this.srcProviderForm.setValue(data);})
    let that = this;
    this.serviceprovidersEdit.subscribe(
      data => {
        //console.log(data);

        
        that.serviceProvideriddata = data;
        if(that.serviceProvideriddata.length !=0){
        that.srcProviderForm.setValue({
          SrcProviderName: that.serviceProvideriddata[0].serviceprovidername,
          SrcProviderUrl:that.serviceProvideriddata[0].serviceproviderurl,
          SrcProviderUserName:that.serviceProvideriddata[0].serviceprovideruserid,
          SrcProviderUserpass:that.serviceProvideriddata[0].serviceproviderpassword,
          SrcProviderPriority:that.serviceProvideriddata[0].serviceproviderpriority,
          srcProviderStatus:that.serviceProvideriddata[0].serviceproviderstatus?'1':'2',
          SrcProviderContactnumber:that.serviceProvideriddata[0].serviceprovidercontactnumber,
          SrcProviderID:that.serviceProvideriddata[0].serviceproviderid,
          SrcProviderChannel:that.serviceProvideriddata[0].channelid,
          SrcProviderDescription:that.serviceProvideriddata[0].serviceproviderdescription
        })
      }
        
      },
      error => {
        console.log("Error: serviceprovidersEdit.subscribe :",error)
      }
    );       
  }

  public getchannelType()
  {
    debugger;
    this.businessservice.channelType()
    .subscribe(
      data => {
        console.log("testchannelType data: ",data);
        this.channelType=data
      },
      error => {
        console.log("testchannelType data: ",error);
       }
      
      );
  }

  public redirectToServiceProvideList() {
    this.router.navigate(['/ConfigurationSettings/service-provider']);
  }




}
