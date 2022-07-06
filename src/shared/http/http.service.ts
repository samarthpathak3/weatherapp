import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  post(serviceName: string, data: any = {}, isAuth = true) {
    return this.httpClient.post(environment.apiUrl + serviceName, data);
  }

  getWithHeader(serviceName: string, data: any, options: any, isAuth = true) {
    return this.httpClient.get(
      environment.apiUrl + serviceName + data,
      options
    );
  }
  get(serviceName: string, data: any, isAuth = true) {
    return this.httpClient.get(environment.apiUrl + serviceName, data);
  }
}
