import {Employee} from "./employee";

export interface Payroll{

  id:number;
  basicSalary:number;
  allowance:number;
  deduction:number;
  netPay:number;
  paymentDate:Date;
  employeeName:string;

}
