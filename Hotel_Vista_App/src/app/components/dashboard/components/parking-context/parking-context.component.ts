import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Parking} from "../../../../DTO/parking";
import {ParkingService} from "../../../../Services/parking.service";

@Component({
  selector: 'app-parking-context',
  templateUrl: './parking-context.component.html',
  styleUrls: ['./parking-context.component.scss']
})
export class ParkingContextComponent implements OnInit {

  public allParking: Parking[] = [];

  public editParking: Parking | undefined;

  public deleteParking: Parking | undefined;

  public deleteParkingId: number = 0;

  constructor(private parkingService:ParkingService) { }

  ngOnInit(): void {
    this.getAllParking();
  }


  public getAllParking():void{
    this.parkingService.getAllParking().subscribe(
      (response:Parking[])=>{
        this.allParking=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any employees');
      }
    )
  }
  public onAddParking(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-parking-form').click();
    this.parkingService.addParking(addForm.value).subscribe(
      (response: Parking) => {
        console.log(response);
        this.getAllParking();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateParking(parking: Parking): void {
    this.parkingService.updateParking(parking).subscribe(
      (response: Parking) => {
        console.log(response);
        this.getAllParking();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteParking(parkingId: number): void {
    this.parkingService.deleteParking(parkingId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllParking();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchParking(key: string): void {
    console.log(key);
    const results: Parking[] = [];
    for (const parking of this.allParking) {
      if (parking.vehicleNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || parking.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(parking);
      }
    }
    this.allParking = results;
    if (results.length === 0 || !key) {
      this.getAllParking();
    }
  }

  public onOpenModal(parking: Parking|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addParkingModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public onOpenModalEdit(parking: Parking,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editParking=parking;
      button.setAttribute('data-target','#updateParkingModal')
    }
    if (mode==='delete'){
      this.deleteParking=parking;
      this.deleteParkingId=parking.id;
      button.setAttribute('data-target','#deleteParkingModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }


}
