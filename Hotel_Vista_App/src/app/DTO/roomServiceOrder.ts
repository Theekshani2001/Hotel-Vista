import {Time} from "@angular/common";

export interface RoomServiceOrder{

  id:number;
  userName:string;
  roomNumber:number;
  orderDate:Date;
  orderTime:Time;
  itemsOrdered:string;
  orderStatus:string;
  totalCost:number

}
