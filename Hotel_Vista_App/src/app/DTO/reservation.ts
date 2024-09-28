export interface Reservation{

  id:number;
  checkInDate:Date;
  checkOutDate:Date;
  numOfAdults:number;
  numOfChildren:number;
  totalCost:number;
  reservationStatus:string;
  userName:string;
  roomType:string;
}
