import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Reservation} from "../../../../DTO/reservation";
import {ReservationService} from "../../../../Services/reservation.service";

@Component({
  selector: 'app-reservation-context',
  templateUrl: './reservation-context.component.html',
  styleUrls: ['./reservation-context.component.scss']
})
export class ReservationContextComponent implements OnInit {

  public reservations: Reservation[] = [];

  public editReservation: Reservation | undefined;

  public deleteReservation: Reservation | undefined;

  public deleteReservationId: number = 0;
  public totalCost: number = 0;
  private roomRates: { [key: string]: number } = {
    'Single Room': 1000,
    'Double Room': 1500,
    'Suite Room': 2000,
    'Family Room': 2500};

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.getAllReservations();
  }

  public calculateTotalCost(formValues: any): void {
    const roomType = formValues.roomType;
    const checkInDate = new Date(formValues.checkInDate);
    const checkOutDate = new Date(formValues.checkOutDate);

    if (roomType && checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const roomRate = this.roomRates[roomType];
      if (this.editReservation) {
        this.editReservation.totalCost = diffDays * roomRate;
      }
    } else if (this.editReservation) {
      this.editReservation.totalCost = 0;
    }
  }

  public getAllReservations():void{
    this.reservationService.getAllReservations().subscribe(
      (response:Reservation[])=>{
        this.reservations=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any employees');
      }
    )
  }
  public onAddReservation(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-reservation-form').click();
    this.reservationService.addReservation(addForm.value).subscribe(
      (response: Reservation) => {
        console.log(response);
        this.getAllReservations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateReservation(reservation: Reservation): void {
    this.reservationService.updateReservation(reservation).subscribe(
      (response: Reservation) => {
        console.log(response);
        this.getAllReservations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteReservation(reservationId: number): void {
    this.reservationService.deleteReservation(reservationId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllReservations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchReservation(key: string): void {
    console.log(key);
    const results: Reservation[] = [];
    for (const reservation of this.reservations) {
      if (reservation.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || reservation.roomType.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || reservation.reservationStatus.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(reservation);
      }
    }
    this.reservations = results;
    if (results.length === 0 || !key) {
      this.getAllReservations();
    }
  }

  public onOpenModal(reservation: Reservation|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addReservationModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public onOpenModalEdit(reservation: Reservation,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editReservation=reservation;
      button.setAttribute('data-target','#updateReservationModal')
    }
    if (mode==='delete'){
      this.deleteReservation=reservation;
      this.deleteReservationId=reservation.id;
      button.setAttribute('data-target','#deleteReservationModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }



}
