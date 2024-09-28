import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Payroll} from "../../../../DTO/payroll";
import {PayrollService} from "../../../../Services/payroll.service";

@Component({
  selector: 'app-payroll-context',
  templateUrl: './payroll-context.component.html',
  styleUrls: ['./payroll-context.component.scss']
})
export class PayrollContextComponent implements OnInit {
  public payrolls: Payroll[] = [];

  public editPayroll: Payroll | undefined;

  public deletePayroll: Payroll | undefined;

  public deletePayrollId: number = 0;
  public netPay: number = 0;




  constructor(private payrollService:PayrollService) { }

  ngOnInit(): void {
    this.getPayrolls();
  }

  public calculateNetPay(form: any): void {
    const formValues = form.value;
    const basicSalary = formValues.basicSalary || 0;
    const allowance = formValues.allowance || 0;
    const deduction = formValues.deduction || 0;
    this.netPay = basicSalary + allowance - deduction;
    form.controls['netPay'].setValue(this.netPay);
  }



  public getPayrolls():void{
    this.payrollService.getPayrolls().subscribe(
      (response:Payroll[])=>{
        this.payrolls=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any employees');
      }
    )
  }
  public onAddPayroll(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-payroll-form').click();
    this.payrollService.addPayroll(addForm.value).subscribe(
      (response: Payroll) => {
        console.log(response);
        this.getPayrolls();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePayroll(payroll: Payroll): void {
    this.payrollService.updatePayroll(payroll).subscribe(
      (response: Payroll) => {
        console.log(response);
        this.getPayrolls();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePayroll(payrollId: number): void {
    this.payrollService.deletePayroll(payrollId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPayrolls();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPayroll(key: string): void {
    console.log(key);
    const results: Payroll[] = [];
    for (const payroll of this.payrolls) {
      if (payroll.employeeName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(payroll);
      }
    }
    this.payrolls = results;
    if (results.length === 0 || !key) {
      this.getPayrolls();
    }
  }

  public onOpenModal(payroll: Payroll|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addPayrollModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public onOpenModalEdit(payroll: Payroll,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editPayroll=payroll;
      button.setAttribute('data-target','#updatePayrollModal')
    }
    if (mode==='delete'){
      this.deletePayroll=payroll;
      this.deletePayrollId=payroll.id;
      button.setAttribute('data-target','#deletePayrollModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

}
