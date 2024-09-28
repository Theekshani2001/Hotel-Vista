import { Component, OnInit } from '@angular/core';
import {User} from "../../../../DTO/user";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {BuffetTicketService} from "../../../../Services/buffetTicket.service";
import {BuffetTicket} from "../../../../DTO/buffetTicket";

@Component({
  selector: 'app-buffet-ticket-context',
  templateUrl: './buffet-ticket-context.component.html',
  styleUrls: ['./buffet-ticket-context.component.scss']
})
export class BuffetTicketContextComponent implements OnInit {
  public buffetTickets: BuffetTicket[] = [];

  public editBuffetTicket: BuffetTicket | undefined;

  public deleteBuffetTicket: BuffetTicket | undefined;

  public deleteBuffetTicketId: number = 0;

  constructor(private buffetTicketService:BuffetTicketService) { }

  ngOnInit(): void {
    this.getBuffetTickets();
  }


  public getBuffetTickets():void{
    this.buffetTicketService.getBuffetTickets().subscribe(
      (response:BuffetTicket[])=>{
        this.buffetTickets=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any buffet tickets');
      }
    )
  }
  public onAddBuffetTicket(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-buffetTicket-form').click();
    this.buffetTicketService.addBuffetTicket(addForm.value).subscribe(
      (response: BuffetTicket) => {
        console.log(response);
        this.getBuffetTickets();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateBuffetTicket(buffetTicket: BuffetTicket): void {
    this.buffetTicketService.updateBuffetTicket(buffetTicket).subscribe(
      (response: BuffetTicket) => {
        console.log(response);
        this.getBuffetTickets();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBuffetTicket(buffetTicketId: number): void {
    this.buffetTicketService.deleteBuffetTicket(buffetTicketId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBuffetTickets();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchBuffetTickets(key: string): void {
    console.log(key);
    const results: BuffetTicket[] = [];
    for (const buffetTicket of this.buffetTickets) {
      if (buffetTicket.ticketType.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || buffetTicket.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        ||buffetTicket.price.toString().indexOf(String(Number(key))) !== -1){
        results.push(buffetTicket);
      }
    }
    this.buffetTickets = results;
    if (results.length === 0 || !key) {
      this.getBuffetTickets();
    }
  }

  public onOpenModal(buffetTicket: BuffetTicket|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addBuffetTicketModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }







  public onOpenModalEdit(buffetTicket: BuffetTicket,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editBuffetTicket=buffetTicket;
      button.setAttribute('data-target','#updateBuffetTicketModal')
    }
    if (mode==='delete'){
      this.deleteBuffetTicket=buffetTicket;
      this.deleteBuffetTicketId=buffetTicket.id;
      button.setAttribute('data-target','#deleteBuffetTicketModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

}
