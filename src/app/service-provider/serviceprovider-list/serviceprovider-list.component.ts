import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationSettingsService } from '../../shared/services/configuration-settings.service';
import { ServiceProvider } from '../../_interfaces/service-provider.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';




@Component({
  selector: 'app-serviceprovider-list',
  templateUrl: './serviceprovider-list.component.html',
  styleUrls: ['./serviceprovider-list.component.scss'],
  
})
export class ServiceproviderListComponent implements OnInit {

  serviceproviders: Observable<ServiceProvider[]>;
  serviceProviderdata: ServiceProvider[];
  
  constructor(httpClient: HttpClient,
    private configurationsettingsservice: ConfigurationSettingsService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData()
  {
    
    this.serviceproviders = this.configurationsettingsservice.serviceProviderList()

    this.serviceproviders.subscribe(data =>{this.serviceProviderdata = data;});
    //.subscribe(
      // data => {console.log(data);},
      // error => console.log(error));
  }

  deleteServiceProvider(id)
  {
    // this.configurationsettingsservice.deleteServiceProvider(id)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.reloadData();
    //   },
    //   error => console.log(error)
    // );
    
    debugger;
    //Swal.fire('Hello world!');

    //Swal.fire('Oops...', 'Something went wrong!', 'error');

            var objserviceprovider = { 
                isactive:false,
              };

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
              this.configurationsettingsservice.deleteupdateServiceProvider(id,objserviceprovider)
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
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
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
