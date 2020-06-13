import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { TestComponent } from './test.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';


export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: MainComponent,
      children: [{
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'fetch-data',
        component: FetchDataComponent
      }, {
        path: 'owner',
        loadChildren: './owner/owner.module#OwnerModule'
        },

        {
          path: 'business',
          loadChildren: './event-master/event-master.module#EventMasterModule'
        },
        {
          path: 'business',
          loadChildren: './template-master/template-master.module#TemplateMasterModule'
        },
        {
          path: 'business',
          loadChildren: './archival-master/archival-master.module#ArchivalMasterModule'
        },
        {
          path: 'business',
          loadChildren: './scheduler-master/scheduler-master.module#SchedulerMasterModule'
        },
        {
          path: 'business',
          loadChildren: './channel-master/channel-master.module#ChannelMasterModule'
        },
        {
          path: 'ConfigurationSettings',
          loadChildren: './service-provider/service-provider.module#ServiceProviderModule'
        },
        {
          path: 'ConfigurationSettings',
          loadChildren: './communication-mgmt/communication-mgmt.module#CommunicationMgmtModule'
        },
        {
          path: 'reports',
          loadChildren: './reports/communication-tracking/communication-tracking.module#CommunicationTrackingModule'
        }
        
      ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'authentication',
        loadChildren: './session/session.module#SessionModule'
      }, {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      }]

}];
