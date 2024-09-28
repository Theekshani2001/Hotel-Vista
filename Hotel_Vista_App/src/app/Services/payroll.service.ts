import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payroll} from "../DTO/payroll";


@Injectable({
  providedIn: 'root'
})
export class PayrollService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getPayrolls(): Observable<Payroll[]> {
    return this.http.get<Payroll[]>(`${this.apiServerUrl}/payroll/all`);
  }

  public addPayroll(payroll:Payroll):Observable<Payroll>{
    return this.http.post<Payroll>(`${this.apiServerUrl}/payroll/add`,payroll);
  }

  public updatePayroll(payroll:Payroll):Observable<Payroll>{
    return this.http.put<Payroll>(`${this.apiServerUrl}/payroll/update`,payroll);
  }

  public deletePayroll(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/payroll/delete/${id}`);
  }
}
