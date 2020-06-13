import { Component, OnInit } from '@angular/core';
import { DetailsPopupComponent } from '../../customs/details-popup/details-popup.component';


@Component({
  selector: 'app-communication-management',
  templateUrl: './communication-management.component.html',
  styleUrls: ['./communication-management.component.scss']
})
export class CommunicationManagementComponent implements OnInit {

  PopupheaderName = '';
  detailsObjectsOfTable = [];
  

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  
  constructor() { }

  ngOnInit() {
    
    this.dropdownList = [
      { item_id: 1, item_text: 'SMS' },
      { item_id: 2, item_text: 'Mails' },
      { item_id: 3, item_text: 'Push' },
      { item_id: 4, item_text: 'Notification' },
      { item_id: 5, item_text: 'Other' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'SMS' }
      //,{ item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  popuopenvalue()
  {
    this.PopupheaderName = 'Message Details';
    this.detailsObjectsOfTable = [
      { key: "Message Unique ID", value: 'MSG1024545' },
      { key: "Message Corresponding Application", value: 'Narco' },
      { key: "Message Channel", value: 'Bombasto' },
      { key: "Message Service Provider", value: 'Celeritas' },
      { key: "Other", value: 'Magneta' },
      { key: 16, value: 'RubberMan' },
      { key: 17, value: 'Dynama' },
      { key: 18, value: 'Dr IQ' },
      { key: 19, value: 'Magma' },
      { key: 20, value: 'Tornado' }
    ];
  }
}
