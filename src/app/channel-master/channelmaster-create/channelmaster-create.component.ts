import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from './../../shared/services/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChannelMaster } from './../../_interfaces/channel-master.model';
import { Observable } from 'rxjs';
import { BusinessService } from './../../shared/services/business.service';
import { GuID } from './../../_classes/gu-id.class';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-channelmaster-create',
  templateUrl: './channelmaster-create.component.html',
  styleUrls: ['./channelmaster-create.component.scss']
})
export class ChannelmasterCreateComponent implements OnInit {

  public errorMessage = '';
  
  public channelMasterFormLabelName = 'Add Channel';

  public channelMasterForm: FormGroup;
  channelMasterEdit: Observable<ChannelMaster[]>;
  channelMasteriddata: ChannelMaster[];
  guid: GuID;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
     private router: Router, private route: ActivatedRoute, private location: Location,
     private businessservice: BusinessService) { }

  ngOnInit() {

    this.channelMasterForm = new FormGroup({
      channelMSTID: new FormControl('0000'),
      channelMSTName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      channelMSTStatus:new FormControl('1'),
      channelMSTMaxRty: new FormControl('', [Validators.required]),
      channelMSTTimeDelaySec: new FormControl('', [Validators.required]),
      channelMSTActionFailsMsg: new FormControl('', [Validators.required])
    });

    if (this.route.snapshot.paramMap.get('id') != "0") {
      
      this.channelMasterFormLabelName = 'Edit Channel';

      this.getChennelIDData();
    }
  }


  public validateControl(controlName: string) {

    if (this.channelMasterForm.controls[controlName].invalid && this.channelMasterForm.controls[controlName].touched) {
      return true;
    }
    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.channelMasterForm.controls[controlName].hasError(errorName)) {
      return true;
    }
  return false;
  }

  public getChennelIDData()
  {
 
    this.channelMasterEdit = this.businessservice.getchannelMasterByid(this.route.snapshot.paramMap.get('id'))
    // this.channelMasterEdit.subscribe( data => {
    //   this.channelMasterForm.setValue(data);})
    
    let that = this;
    this.channelMasterEdit.subscribe(
      data => {
        console.log(data);
        that.channelMasteriddata = data;
        if(that.channelMasteriddata.length !=0){
        that.channelMasterForm.setValue({
          channelMSTID: that.channelMasteriddata[0].channelid,
          channelMSTName:that.channelMasteriddata[0].channelname,
          channelMSTStatus:that.channelMasteriddata[0].channelstatus,
          channelMSTMaxRty:that.channelMasteriddata[0].maxretryattempts,
          channelMSTTimeDelaySec:that.channelMasteriddata[0].timedelay,
          channelMSTActionFailsMsg:that.channelMasteriddata[0].actiontaken
        })
      }
      },
      error => {
        console.log("Error: channelMasterEdit.subscribe :",error)
      }
    );       
  }

  public createChannel(channelMasterFormValue) {
    if (this.channelMasterForm.valid) {
      
      const d: Date = new Date();
      if(channelMasterFormValue.channelMSTID === '0000'){
        const channelmaster: ChannelMaster = {
          channelid:  this.businessservice.generateUUID('ch'),
          actiontaken: channelMasterFormValue.channelMSTActionFailsMsg,
          channelname: channelMasterFormValue.channelMSTName,
          channelstatus: channelMasterFormValue.channelMSTStatus,
          maxretryattempts: Number(channelMasterFormValue.channelMSTMaxRty),
          serviceproviderslist: '',
          timedelay: Number(channelMasterFormValue.channelMSTTimeDelaySec),
          createdby: 'UserX',
          createddate: d,
          modifiedby: 'UserY',
          modifieddate: d,
          isactive: true
        };
        debugger;
        this.businessservice.createChannelMaster(channelmaster).subscribe(
          data => {
            console.log("testServiceProvider data: ",data);
            Swal.fire('Channel Save Successfully');
            this.redirectToChannelMasterList();
          },
          error => {
            console.log("testServiceProvider error: ",error);
            Swal.fire('Oops...', 'Something went wrong!', 'error');
           }
        );
        }
        else
        {
          var objchannelmaster = { 
            channelname:channelMasterFormValue.channelMSTName,
            channelstatus: channelMasterFormValue.channelMSTStatus,
            maxretryattempts: Number(channelMasterFormValue.channelMSTMaxRty),
            timedelay: Number(channelMasterFormValue.channelMSTTimeDelaySec),
            actiontaken: channelMasterFormValue.channelMSTActionFailsMsg,
            modifiedby: 'UserZ',
            modifieddate: d
         };
           
         
         Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, Update it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            this.businessservice.updateChannelMaster(channelMasterFormValue.channelMSTID,objchannelmaster).subscribe(
                data => {
                  console.log("testChannelMaster data: ",data);
                  Swal.fire(
                    'Update!',
                    'Your Channel has been Updated.',
                    'success'
                  )
                
                  this.redirectToChannelMasterList();

                },
                error => {
                  console.log("testChannelMaster error: ",error);
                 }
              );
            
            
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })

        }  
    }
    else {
      alert('Please Fill Requeried Field');
    }
  }

  public redirectToChannelMasterList() {
    this.router.navigate(['/business/channel-master']);
  }

}
