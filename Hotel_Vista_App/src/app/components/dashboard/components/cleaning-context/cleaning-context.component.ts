import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Cleaning} from "../../../../DTO/cleaning";
import {CleaningService} from "../../../../Services/cleaning.service";

@Component({
  selector: 'app-cleaning-context',
  templateUrl: './cleaning-context.component.html',
  styleUrls: ['./cleaning-context.component.scss']
})
export class CleaningContextComponent implements OnInit {

  public cleanings: Cleaning[] = [];

  public editCleaning: Cleaning | undefined;

  public deleteCleaning: Cleaning | undefined;

  public deleteCleaningId: number = 0;

  constructor(private cleaningService:CleaningService) { }

  ngOnInit(): void {
    this.getAllCleanings();
  }


  public getAllCleanings():void{
    this.cleaningService.getAllCleanings().subscribe(
      (response:Cleaning[])=>{
        this.cleanings=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any employees');
      }
    )
  }
  public onAddCleaning(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-cleaning-form').click();
    this.cleaningService.addCleaning(addForm.value).subscribe(
      (response: Cleaning) => {
        console.log(response);
        this.getAllCleanings();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCleaning(cleaning: Cleaning): void {
    this.cleaningService.updateCleaning(cleaning).subscribe(
      (response: Cleaning) => {
        console.log(response);
        this.getAllCleanings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCleaning(cleaningId: number): void {
    this.cleaningService.deleteCleaning(cleaningId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllCleanings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCleaning(key: string): void {
    console.log(key);
    const results: Cleaning[] = [];
    for (const cleaning of this.cleanings) {
      if (cleaning.roomType.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || cleaning.cleaningStatus.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(cleaning);
      }
    }
    this.cleanings = results;
    if (results.length === 0 || !key) {
      this.getAllCleanings();
    }
  }

  public onOpenModal(cleaning: Cleaning|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addCleaningModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public onOpenModalEdit(cleaning: Cleaning,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editCleaning=cleaning;
      button.setAttribute('data-target','#updateCleaningModal')
    }
    if (mode==='delete'){
      this.deleteCleaning=cleaning;
      this.deleteCleaningId=cleaning.id;
      button.setAttribute('data-target','#deleteCleaningModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }


}
