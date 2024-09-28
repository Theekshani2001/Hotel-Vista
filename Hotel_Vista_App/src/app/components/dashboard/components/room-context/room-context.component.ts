import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {RoomService} from "../../../../Services/room.service";
import {Room} from "../../../../DTO/room";

@Component({
  selector: 'app-room-context',
  templateUrl: './room-context.component.html',
  styleUrls: ['./room-context.component.scss']
})
export class RoomContextComponent implements OnInit {

  public rooms: Room[] = [];

  public editRoom: Room | undefined;

  public deleteRoom: Room | undefined;

  public deleteRoomId: number = 0;

  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.getRooms();
  }


  public getRooms():void{
    this.roomService.getRooms().subscribe(
      (response:Room[])=>{
        this.rooms=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any employees');
      }
    )
  }
  public onAddRoom(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-room-form').click();
    this.roomService.addRoom(addForm.value).subscribe(
      (response: Room) => {
        console.log(response);
        this.getRooms();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateRoom(room: Room): void {
    this.roomService.updateRoom(room).subscribe(
      (response: Room) => {
        console.log(response);
        this.getRooms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRoom(roomId: number): void {
    this.roomService.deleteRoom(roomId).subscribe(
      (response: void) => {
        console.log(response);
        this.getRooms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchRoom(key: string): void {
    console.log(key);
    const results: Room[] = [];
    for (const room of this.rooms) {
      if (room.roomType.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || room.roomRate.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || room.floorNumber.toString().indexOf(String(Number(key))) !== -1
        || room.roomCapacity.toString().indexOf(String(Number(key))) !== -1
        || room.roomStatus.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(room);
      }
    }
    this.rooms = results;
    if (results.length === 0 || !key) {
      this.getRooms();
    }
  }

  public onOpenModal(room: Room|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addRoomModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public onOpenModalEdit(room: Room,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editRoom=room;
      button.setAttribute('data-target','#updateRoomModal')
    }
    if (mode==='delete'){
      this.deleteRoom=room;
      this.deleteRoomId=room.id;
      button.setAttribute('data-target','#deleteRoomModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }





}
