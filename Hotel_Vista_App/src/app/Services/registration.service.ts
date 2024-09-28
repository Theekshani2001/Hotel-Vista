import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }


  public signUp(name:String,email:String,phone:String,password:String):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/admin/register`,{
      name,email,phone,password
    });
  }

  public login(email:string,password:string):Observable<any>{
    return this.http.get(`${this.apiServerUrl}/admin/login/${email}/${password}`);
  }

}
