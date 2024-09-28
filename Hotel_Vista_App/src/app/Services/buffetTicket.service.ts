import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BuffetTicket} from "../DTO/buffetTicket";


@Injectable({
  providedIn: 'root'
})
export class BuffetTicketService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getBuffetTickets(): Observable<BuffetTicket[]> {
    return this.http.get<BuffetTicket[]>(`${this.apiServerUrl}/buffetTicket/all`);
  }

  public addBuffetTicket(buffetTicket:BuffetTicket):Observable<BuffetTicket>{
    return this.http.post<BuffetTicket>(`${this.apiServerUrl}/buffetTicket/add`,buffetTicket);
  }

  public updateBuffetTicket(buffetTicket:BuffetTicket):Observable<BuffetTicket>{
    return this.http.put<BuffetTicket>(`${this.apiServerUrl}/buffetTicket/update`,buffetTicket);
  }

  public deleteBuffetTicket(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/buffetTicket/delete/${id}`);
  }
}
