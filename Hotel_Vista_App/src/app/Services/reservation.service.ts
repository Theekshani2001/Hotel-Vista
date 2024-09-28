import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../DTO/reservation";


@Injectable({
  providedIn: 'root'
})
export class ReservationService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiServerUrl}/reservation/all`);
  }

  public addReservation(reservation:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(`${this.apiServerUrl}/reservation/add`,reservation);
  }

  public updateReservation(reservation:Reservation):Observable<Reservation>{
    return this.http.put<Reservation>(`${this.apiServerUrl}/reservation/update`,reservation);
  }

  public deleteReservation(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/reservation/delete/${id}`);
  }
}
