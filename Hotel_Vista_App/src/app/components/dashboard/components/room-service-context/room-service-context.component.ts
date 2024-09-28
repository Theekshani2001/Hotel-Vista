import { Component, OnInit } from '@angular/core';
import {RoomServiceOrder} from "../../../../DTO/roomServiceOrder";
import {RoomServiceOrderService} from "../../../../Services/roomServiceOrder.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-room-service-context',
  templateUrl: './room-service-context.component.html',
  styleUrls: ['./room-service-context.component.scss']
})
export class RoomServiceContextComponent implements OnInit {

  public orders: RoomServiceOrder[] = [];
  public editOrder: RoomServiceOrder | undefined;
  public deleteOrder: RoomServiceOrder | undefined;
  public deleteOrderId: number = 0;
  public totalCost: number = 0;


  constructor(private orderService: RoomServiceOrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }


  public getAllOrders(): void {
    this.orderService.getRoomServiceOrders().subscribe(
      (response: RoomServiceOrder[]) => {
        this.orders = response;
      },
      (error: HttpErrorResponse) => {
        alert('No orders found');
      }
    );
  }

  public onAddOrder(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-order-form').click();
    this.orderService.addRoomServiceOrder(addForm.value).subscribe(
      (response: RoomServiceOrder) => {
        console.log(response);
        this.getAllOrders();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateOrder(order: RoomServiceOrder): void {
    this.orderService.updateRoomServiceOrder(order).subscribe(
      (response: RoomServiceOrder) => {
        console.log(response);
        this.getAllOrders();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteOrder(orderId: number): void {
    this.orderService.deleteRoomServiceOrder(orderId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllOrders();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchOrder(key: string): void {
    console.log(key);
    const results: RoomServiceOrder[] = [];
    for (const order of this.orders) {
      if (order.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || order.orderStatus.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(order);
      }
    }
    this.orders = results;
    if (results.length === 0 || !key) {
      this.getAllOrders();
    }
  }


  public onOpenModal(order: RoomServiceOrder|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addRoomServiceOrderModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public onOpenModalEdit(order: RoomServiceOrder,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editOrder=order;
      button.setAttribute('data-target','#updateRoomServiceOrderModal')
    }
    if (mode==='delete'){
      this.deleteOrder=order;
      this.deleteOrderId=order.id;
      button.setAttribute('data-target','#deleteRoomServiceOrderModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }


}
