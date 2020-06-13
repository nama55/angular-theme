import { Component, OnInit } from '@angular/core';
import { ChannelMaster } from './../../_interfaces/channel-master.model';
import {Observable} from 'rxjs';
import { BusinessService } from './../../shared/services/business.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-channelmaster-list',
  templateUrl: './channelmaster-list.component.html',
  styleUrls: ['./channelmaster-list.component.scss']
})
export class ChannelmasterListComponent implements OnInit {

  channelmasters: Observable<ChannelMaster[]>;
  channelMasterdata: ChannelMaster[];
  constructor(httpClient: HttpClient,
    private businessservice: BusinessService) { }

  ngOnInit() {
    this.reloadData();
  }
  
  reloadData()
  {
    
    this.channelmasters = this.businessservice.channelMasterList()
      // .subscribe(
      //  data => {console.log(data);},
      //  error => console.log(error));

    this.channelmasters.subscribe(data =>{this.channelMasterdata = data;});
  }

  deleteChannel(id)
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
              this.businessservice.deleteupdateChannel(id)
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
