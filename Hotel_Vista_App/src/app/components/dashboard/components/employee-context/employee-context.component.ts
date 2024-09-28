import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../Services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Employee} from "../../../../DTO/employee";

@Component({
  selector: 'app-employee-context',
  templateUrl: './employee-context.component.html',
  styleUrls: ['./employee-context.component.scss']
})
export class EmployeeContextComponent implements OnInit {

  public employees: Employee[] = [];

  public editEmployee: Employee | undefined;

  public deleteEmployee: Employee | undefined;

  public deleteEmployeeId: number = 0;

  constructor(private employeeService:EmployeeService) {
  }

  ngOnInit(): void {
  this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;
      },
      (error:HttpErrorResponse) => {
        alert('No any employees');
      }
    )
  }
  public onAddEmployee(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-employee-form').click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        // || employee.phone.toString().indexOf(String(Number(key))) !== -1
        || employee.address.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: Employee|null,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addEmployeeModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }







  public onOpenModalEdit(employee: Employee,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode==='edit'){
      this.editEmployee=employee;
      button.setAttribute('data-target','#updateEmployeeModal')
    }
    if (mode==='delete'){
      this.deleteEmployee=employee;
      this.deleteEmployeeId=employee.id;
      button.setAttribute('data-target','#deleteEmployeeModal')
    }

    // @ts-ignore
    container.appendChild(button);
    button.click();

  }





}
