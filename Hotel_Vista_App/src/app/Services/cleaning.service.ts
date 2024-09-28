import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cleaning} from "../DTO/cleaning";


@Injectable({
  providedIn: 'root'
})
export class CleaningService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllCleanings(): Observable<Cleaning[]> {
    return this.http.get<Cleaning[]>(`${this.apiServerUrl}/cleaning/all`);
  }

  public addCleaning(cleaning:Cleaning):Observable<Cleaning>{
    return this.http.post<Cleaning>(`${this.apiServerUrl}/cleaning/add`,cleaning);
  }

  public updateCleaning(cleaning:Cleaning):Observable<Cleaning>{
    return this.http.put<Cleaning>(`${this.apiServerUrl}/cleaning/update`,cleaning);
  }

  public deleteCleaning(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/cleaning/delete/${id}`);
  }
}
