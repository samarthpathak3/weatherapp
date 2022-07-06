import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ApiRoute } from "../constant/api-route";

@Injectable({
  providedIn: "root",
})
export class CityListService {
  constructor(private httpService: HttpService) {}

  getCityList(data: any) {
    return this.httpService.get(ApiRoute.searchAutoComplete, data);
  }

  getCityCurrentCondition(data: any, options: any) {
    return this.httpService.getWithHeader(
      ApiRoute.currentCondition,
      data,
      options
    );
  }

  getFutureRecord(data: any, option: any) {
    return this.httpService.getWithHeader(
      ApiRoute.futureCondition,
      data,
      option
    );
  }

  getGeoLocation(data: any) {
    return this.httpService.get(ApiRoute.geoLocation, data);
  }
}
