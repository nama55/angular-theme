import { Component, OnInit } from '@angular/core';
import { TemplateMaster } from './../../_interfaces/template-master.model';
import {Observable} from 'rxjs';
import { BusinessService } from './../../shared/services/business.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import {PaginationComponent} from "../../pagination/pagination.component";
import {PaginationPipe, PaginationInterface} from "../../pagination/pagination.pipe";

@Component({
  selector: 'app-templatemaster-list',
  templateUrl: './templatemaster-list.component.html',
  styleUrls: ['./templatemaster-list.component.scss'],
  providers: [PaginationPipe]
})
export class TemplatemasterListComponent implements OnInit {
  PopupheaderName = '';
  detailsObjectsOfTable = [];

  templatemasters: Observable<TemplateMaster[]>;
  templateMasterdata: TemplateMaster[];

  sortsizetemplateMasterdata : any;

  currentPage: number = 1;
  totalItems: number = 200; // total numbar of page not items
  pageSize: number = 2; // max page size




  constructor(httpClient: HttpClient,
    private businessservice: BusinessService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData()
  {
    
    this.templatemasters = this.businessservice.templateMasterList("0","5")
    //  this.businessservice.templateMasterList("0","2")
    //     .subscribe(
    //      data => {console.log(data);},
    //       error => console.log(error));
    this.templatemasters.subscribe(data =>{
      this.sortsizetemplateMasterdata = data;
      console.log(data);
      this.templateMasterdata = this.sortsizetemplateMasterdata.datatable;
      this.totalItems = this.sortsizetemplateMasterdata.numberofrecords
    });
  }

  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-

 
  public onPageChange(event: any): void {
debugger;
    this.currentPage = event.currentPage;
};

public paginationArgs() : PaginationInterface{
    return {
        currentPage : this.currentPage,
        totalItems : this.totalItems,
        pageSize : this.pageSize
    }
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-

  popuopenvalue(index) {
    this.PopupheaderName = 'Template Details';
    this.templateMasterdata[index];
    this.detailsObjectsOfTable = [
      { key: "Template Master ID", value: this.templateMasterdata[index].templateid },
      { key: "Template Master Name", value: this.templateMasterdata[index].templatename },
      { key: "Template Master Purpose", value: this.templateMasterdata[index].templatepurpose },
      { key: "Template Master App ID", value: this.templateMasterdata[index].application },
      { key: "Template Master CH ID", value: this.templateMasterdata[index].channelid },
      { key: "Template Master Status", value: this.templateMasterdata[index].templatestatus }
    ];
  }


  deleteTemplate(id)
  {
    debugger;
 
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
              this.businessservice.deleteupdatetemplate(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
          },
              error => console.log(error)
          );
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
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
