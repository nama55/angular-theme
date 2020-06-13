export interface ServiceProvider {
  serviceproviderid:string;
  serviceprovidername: string;
  serviceproviderdescription?: string;
  serviceprovideruserid: string; 
  serviceproviderpassword: string;
  channelid: string;
  serviceproviderstatus: boolean;
  serviceproviderpriority: boolean;
  serviceproviderurl: string;
  serviceprovidercontactnumber?: string;
  createdby: string;
  createddate: any;
  modifiedby?: string;
  modifieddate?: any;
  isactive: boolean;

}
