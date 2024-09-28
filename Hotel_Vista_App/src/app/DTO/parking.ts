import {Time} from "@angular/common";

export interface Parking{

  id:number;
  vehicleNumber:string;
  parkingStartTime:Time;
  parkingEndTime:Time;
  userName:string;

}
