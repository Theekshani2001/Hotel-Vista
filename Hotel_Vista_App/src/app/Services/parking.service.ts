import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Parking} from "../DTO/parking";


@Injectable({
  providedIn: 'root'
})
export class ParkingService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllParking(): Observable<Parking[]> {
    return this.http.get<Parking[]>(`${this.apiServerUrl}/parking/all`);
  }

  public addParking(parking:Parking):Observable<Parking>{
    return this.http.post<Parking>(`${this.apiServerUrl}/parking/add`,parking);
  }

  public updateParking(parking:Parking):Observable<Parking>{
    return this.http.put<Parking>(`${this.apiServerUrl}/parking/update`,parking);
  }

  public deleteParking(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/parking/delete/${id}`);
  }
}
