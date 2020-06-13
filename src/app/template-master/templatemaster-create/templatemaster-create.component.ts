import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from './../../shared/services/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TemplateMaster } from './../../_interfaces/template-master.model';
import { Observable } from 'rxjs';
import { BusinessService } from './../../shared/services/business.service';
import { FeaturesService } from './../../shared/services/features.service';
import { GuID } from './../../_classes/gu-id.class';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-templatemaster-create',
  templateUrl: './templatemaster-create.component.html',
  styleUrls: ['./templatemaster-create.component.scss']
})
export class TemplatemasterCreateComponent implements OnInit {


  public errorMessage = '';
  public templateFormLabelName = 'Add Template';
  public templateMasterForm: FormGroup;
  templateMasterEdit: Observable<TemplateMaster[]>;
  templateMasteriddata: TemplateMaster[];
  guid: GuID;
  channelType: any;
  mailbodyshow: boolean = false;
  attachmentfilepath="Choose file...";
  attachmenturl="";
  previewHtmlContent:any;
  disablePreview: boolean = true;

  Previewhtmldata = `<b>This text is bold</b> and this one is <i>italics</i>`;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router, private route: ActivatedRoute, private location: Location,
    private businessservice: BusinessService,private featuresservice: FeaturesService) { }

  ngOnInit() {

    this.templateMasterForm = new FormGroup({
      templateID: new FormControl('0000'),
      templatename: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      templateAttachments: new FormControl(null),
      templateReplaceString: new FormControl(''),
      templatePurpose: new FormControl(''),
      templateCSVParameters: new FormControl(''),
      templateChannelType: new FormControl('0',[Validators.required]),
      templateStatus: new FormControl('1')

      //,templatesubject: new FormControl('', [Validators.required]),
      //templatebody: new FormControl('', [Validators.required]),
      //templateto: new FormControl('', [Validators.required])
    });
    this.getchannelType();
    if (this.route.snapshot.paramMap.get('id') != "0") {
      this.templateFormLabelName = 'Edit Template';
      this.getTemplateIDData();
     
    }
    

  }

  getTemplateIDData(){
    
    this.templateMasterEdit = this.businessservice.gettemplateMasterByid(this.route.snapshot.paramMap.get('id'))
    // this.channelMasterEdit.subscribe( data => {
    //   this.channelMasterForm.setValue(data);})
    
    let that = this;
    this.templateMasterEdit.subscribe(
      data => {
        console.log(data);
        that.templateMasteriddata = data;
        if(that.templateMasteriddata.length !=0){
        that.templateMasterForm.setValue({
          templateID: that.templateMasteriddata[0].templateid,
          templatename:that.templateMasteriddata[0].templatename,
          templateReplaceString:that.templateMasteriddata[0].replacementstring,
          templatePurpose:that.templateMasteriddata[0].templatepurpose,
          templateCSVParameters:that.templateMasteriddata[0].csvparameters,
          templateChannelType: that.templateMasteriddata[0].channelid,
          templateStatus: that.templateMasteriddata[0].templatestatus=="Active"?"1":"2",
          templateAttachments:null//that.templateMasteriddata[0].attachments
        })
        that.attachmentfilepath=(that.templateMasteriddata[0].attachments).split('0123_0123')[1];
        that.attachmenturl=that.templateMasteriddata[0].attachments;
        that.disablePreview=false;

 
      }
      },
      error => {
        console.log("Error: templateMasterEdit.subscribe :",error)
      }
    );

    //let file = "xsf";
    //this.templateMasterForm.controls['templateAttachments'].setValue(file ? that.templateMasteriddata[0].attachments : '');

  }

  public getchannelType()
  {
    this.businessservice.channelType()
    .subscribe(
      data => {
        //console.log("testchannelType data: ",data);
        this.channelType=data
      },
      error => {
        console.log("testchannelType data: ",error);
       }
      
      );
  }

  onAttachmentChange(event) {
    const reader = new FileReader();
    let that = this;
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.attachmentfilepath = file.name;

      this.featuresservice.postfileUpload(file)
        .subscribe(
          data => {
            console.log("testFileUpload data: ", data);
            if (data.uploadflag == 'S') {
              this.attachmenturl = data.uploadurl;
            }
          },
          error => {
            console.log("testFileUpload data: ", error);
          }

        );
    };

  }

  onAttachmentPreview(event) {

    if (this.templateMasterForm.get('templateReplaceString').value.trim() != '' && this.templateMasterForm.get('templateCSVParameters').value.trim() != '') {
      this.disablePreview = false;
    }
    else {
      this.disablePreview = true;
    }



    if (!(event.target.id == "templateReplacString" || event.target.id == "templateCSVParameters")) {
        
      this.featuresservice.getFileContent(this.attachmenturl)
       .subscribe(
         data => {
           console.log("getFileContent data: ", data);
           this.previewHtmlContent =data;
           this.clreatePreview(this.previewHtmlContent);
         },
         error => {
           console.log("getFileContent error: ", error);
         }
       );
      
    }
  }

  public clreatePreview(Previewhtmlcode: string){

      //console.log("Calling clreatePreview ...");

      this.Previewhtmldata = Previewhtmlcode;
      let rgxp = new RegExp(this.templateMasterForm.get('templateReplaceString').value, "g");

      if (Previewhtmlcode != undefined && Previewhtmlcode.indexOf(this.templateMasterForm.get('templateReplaceString').value) != -1 && 
        (Previewhtmlcode.match(rgxp).length == this.templateMasterForm.get('templateCSVParameters').value.split(',').length)) {

          //console.log("Calling clreatePreview :", true);
        this.mailbodyshow = true;
        for (var i = 0; i < Previewhtmlcode.match(rgxp).length; i++) {
          this.Previewhtmldata = this.Previewhtmldata.replace(this.templateMasterForm.get('templateReplaceString').value, this.templateMasterForm.get('templateCSVParameters').value.split(',')[i]);
        }

      } else {
        //console.log("Calling clreatePreview :", false);
        this.mailbodyshow = false;
        Swal.fire('Oops...', 'Replacement String and CSV Parameters is not Matched with Attachment', 'error');
      }
  }

  public createTemplate(templateFormValue) {
    if (this.templateMasterForm.valid && this.attachmenturl != "" && this.disablePreview == false) {

      const d: Date = new Date();
      if (templateFormValue.templateID === '0000') {
        const template: TemplateMaster = {
          application: "ARCCC",
          attachments: this.attachmenturl,
          body: "",
          channelid: templateFormValue.templateChannelType,
          createdby: 'UserX',
          createddate: d,
          csvparameters: templateFormValue.templateCSVParameters,
          isactive: true,
          modifiedby: 'UserY',
          modifieddate: d,
          replacementstring: templateFormValue.templateReplaceString,
          subject: "",
          templatebcc: "",
          templatecc: "",
          templatedetails: "",
          templatefrom: "",
          templateid: this.businessservice.generateUUID('tm'),
          templatename: templateFormValue.templatename,
          templatepurpose: templateFormValue.templatePurpose,
          templatestatus: templateFormValue.templateStatus=="1"?"Active":"In-Active",
          templateto: ""

        };

        this.businessservice.createTemplateMaster(template).subscribe(
          data => {
            console.log("testTemplate data: ", data);
            Swal.fire('Template Save Successfully');
            this.redirectToTemplateList();
          },
          error => {
            Swal.fire('Oops...', 'Something went wrong!', 'error');
            console.log("testTemplate error: ", error);
          }
        );
      }
      else {
           var objTemplate = { 
            attachments: this.attachmenturl,
            channelid: templateFormValue.templateChannelType,
            csvparameters: templateFormValue.templateCSVParameters,
            modifiedby: 'UserY',
            modifieddate: d,
            replacementstring: templateFormValue.templateReplaceString,
            templatename: templateFormValue.templatename,
            templatepurpose: templateFormValue.templatePurpose,
            templatestatus: templateFormValue.templateStatus=="1"?"Active":"In-Active"
          };

           this.businessservice.updateTemplate(templateFormValue.templateID,objTemplate).subscribe(
             data => {
               console.log("testtemplate data: ",data);
               Swal.fire('Template Updated Successfully');
               this.redirectToTemplateList();
             },
             error => {
               console.log("testtemplate error: ",error);
              }
           );
      }



    }
    else {
      alert('Please Fill Requeried Field');
    }
  }

  redirectToTemplateList()
  {
    this.router.navigate(['/business/template-master']);
  }

  public validateControl(controlName: string) {
    
    if (this.templateMasterForm.controls[controlName].invalid && this.templateMasterForm.controls[controlName].touched) {
      return true;
    }

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.templateMasterForm.controls[controlName].hasError(errorName)) {
      return true;
    }

    return false;
  }
}
