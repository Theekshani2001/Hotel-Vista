import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomServiceOrder} from "../DTO/roomServiceOrder";


@Injectable({
  providedIn: 'root'
})
export class RoomServiceOrderService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getRoomServiceOrders(): Observable<RoomServiceOrder[]> {
    return this.http.get<RoomServiceOrder[]>(`${this.apiServerUrl}/roomServiceOrder/all`);
  }

  public addRoomServiceOrder(roomServiceOrder:RoomServiceOrder):Observable<RoomServiceOrder>{
    return this.http.post<RoomServiceOrder>(`${this.apiServerUrl}/roomServiceOrder/add`,roomServiceOrder);
  }

  public updateRoomServiceOrder(roomServiceOrder:RoomServiceOrder):Observable<RoomServiceOrder>{
    return this.http.put<RoomServiceOrder>(`${this.apiServerUrl}/roomServiceOrder/update`,roomServiceOrder);
  }

  public deleteRoomServiceOrder(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/roomServiceOrder/delete/${id}`);
  }
}
