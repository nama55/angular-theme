import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomsModule } from './../customs/customs.module'
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceproviderCreateComponent } from './serviceprovider-create/serviceprovider-create.component';
import { ServiceproviderListComponent } from './serviceprovider-list/serviceprovider-list.component';


@NgModule({
  declarations: [ServiceProviderComponent,
      ServiceproviderCreateComponent,
      ServiceproviderListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomsModule,
    RouterModule.forChild([
      { path: 'service-provider', component: ServiceproviderListComponent },
      { path: 'serviceprovider-add/:id', component: ServiceproviderCreateComponent },
      { path: 'service-providerold', component: ServiceProviderComponent }
    ])
  ]
  
})
export class ServiceProviderModule { }
