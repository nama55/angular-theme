import { Injectable } from '@angular/core';

export interface GrandchildItems
{
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  icon?: string;
  grandchild?: GrandchildItems[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS: Menu[] = [

  //{
  //  state: 'dashboard',
  //  name: 'HOME',
  //  type: 'link',
  //  icon: 'home'
  //}
  //,{
  //  state: 'authentication',
  //  name: 'AUTHENTICATION',
  //  type: 'sub',
  //  icon: 'security',
  //  children: [
  //    {state: 'login', name: 'LOGIN'},
  //    {state: 'register', name: 'REGISTER'},
  //    {state: 'forgot-password', name: 'FORGOT'},
  //    {state: 'lockscreen', name: 'LOCKSCREEN'}
  //  ]
  //}
  //,
  {
    state: 'business',
    name: 'Business',
    type: 'sub',
    icon: 'business',
    children: [
      { state: 'about-us', name:'About Us'},
      { state: 'contact', name:'Contact Us'},
      { state: 'userdashboard', name:'User Dashboard'},
      { state: 'template-master', name: 'Template Master' },
      { state: 'event-master', name: 'Event Master' },
      // { state: 'channel-master', name: 'Channel Master' },
      // { state: 'archival-master', name: 'Archival Master' },
      // { state: 'scheduler-master', name: 'Scheduler Master' },
      // { state: 'application-master', name: 'Application Master' },
      //{ state: 'Srcprovidermaster', name: 'Service Provider Master' },
      //{ state: 'SrcprovidermasterbyApplication', name: 'Service Provider Master by Application' },
      //{ state: 'tempobjectlist', name: 'Template Objects List' },
      //{ state: 'viewcommqueue', name: 'View Communication Queue' },
      //{ state: 'viewscheduledcomm', name: 'View Scheduled Communication' },
      //{ state: 'viewdispatchedcomm', name: 'View Dispatched Communication' },
      //{ state: 'viewfailedcomm', name: 'View Failed Communication' }

    ]
  },
  // {
  //   state: 'ConfigurationSettings',
  //   name: 'Configuration Settings',
  //   type: 'sub',
  //   icon: 'settings',
  //   children: [
  //     {
  //       state: 'service-provider',
  //       name: 'Service Provider',
  //       type: 'link',
  //       //grandchild:
  //       //  [
  //       //    { state: 'serviceprovideradd', name: 'Service Provider Add', type: 'link' },
  //       //    { state: 'serviceprovideredit', name: 'Service Provider Edit', type: 'link' }
  //       //  ]

  //     },
  //     { state: 'channelmgmt', name: 'Channel Management' },
  //     { state: 'communication-mgmt', name: 'Communication Management' }
  //   ]
  // },
  // {
  //   state: 'reports',
  //   name: 'Reports',
  //   type: 'sub',
  //   icon: 'receipt',
  //   children: [
  //     { state: 'communication-tracking', name: 'Communication Tracking' },
  //     { state: 'commmis', name: 'Communication MIS' }
  //   ]
  // },
  // {
  //   state: 'rolesnright',
  //   name: 'Roles & Rights',
  //   type: 'sub',
  //   icon: 'check',
  //   children: [
  //     { state: 'userprofile', name: 'User Profile', type: 'link' },
  //     { state: 'hierarchymgmt', name: 'Hierarchy Management', type: 'link' }
  //   ]
  // },
  // {
  //   state: 'security',
  //   name: 'Security',
  //   type: 'sub',
  //   icon: 'security',
  //   children: [
  //     { state: 'User', name: 'User', type: 'link', icon: 'person' },
  //     { state: 'User', name: 'Roles', type: 'link', icon: 'person' },
  //     { state: 'User', name: 'Access Rights', type: 'link', icon: 'person' },
  //     { state: 'User', name: 'Hierarchy', type: 'link', icon: 'person' }
  //   ]
  // }
  //,
  //{
  //  state: 'fetch-data',
  //  name: 'Fetch Data',
  //  type: 'link',
  //  icon: 'label'
  //},
  //{
  //  state: 'owner',
  //  name: 'Owner Actions',
  //  type: 'link',
  //  icon: 'label'
  //}
];



@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
