import { Component } from "@angular/core";
import { CityListService } from "../../shared/services/cityList.service";
import { formatDate } from "@angular/common";
import { LoaderService } from "../../shared/services/loader/loader.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  location: any;
  constructor(
    private cityList: CityListService,
    public loaderServices: LoaderService
  ) {}
  apiKey = "JmaUBIYerG57HKNlYtPLcrDmCB4JvMwl";
  city: [];
  startCitySearch: boolean = false;
  cityTemp: any[];
  unit: any[];
  cityName: string;
  countryName: string;
  date = formatDate(new Date(), "EEEE, d MMMM", "en-US");
  futureDay1: any;
  futureDay2: any;
  futureDay3: any;
  futureDate1: any;
  futureDate2: any;
  futureDate3: any;
  cloudCover: any;
  windDirection: any;
  WeatherText: any;
  src: any;
  lat:any;
  lng :any;
  isLoading = false;
  ionViewWillEnter() {
    this.getLocation();
  }

  ionChange($event) {
    this.startCitySearch = true;
    let obj = {
      params: {
        apikey: this.apiKey,
        q: $event.detail.value,
      },
    };
    this.cityList.getCityList(obj).subscribe((response: any) => {
      this.city = response;
    });
  }

  citySelectEvent(value: any) {
    this.cityName = value.LocalizedName;
    this.countryName = value.Country.LocalizedName;
    let obj = {
      params: {
        apikey: this.apiKey,
      },
    };

    this.cityList
      .getCityCurrentCondition(value.Key, obj)
      .subscribe((Response: any) => {
        this.startCitySearch = false;
        this.getFurtherData(value.Key);
        this.cityTemp = Response[0].Temperature.Metric.Value;
        this.WeatherText = Response[0].WeatherText;
        this.iconAsPerWeather();
      });
  }

  getFurtherData(cityId :any) {
    let obj = {
      params: {
        apikey: this.apiKey,
        details: true,
        metric: true,
      },
    };
    this.cityList.getFutureRecord(cityId, obj).subscribe((res: any) => {
      this.futureDay1 = res.DailyForecasts[1].Temperature.Minimum.Value;
      this.unit = res.DailyForecasts[1].Temperature.Minimum.Unit;
      this.futureDay2 = res.DailyForecasts[2].Temperature.Minimum.Value;
      this.futureDay3 = res.DailyForecasts[3].Temperature.Minimum.Value;
      this.cloudCover = res.DailyForecasts[0].Day.PrecipitationProbability;
      this.windDirection = res.DailyForecasts[0].Day.Wind.Direction.Degrees;

      this.futureDate1 = formatDate(
        res.DailyForecasts[1].Date,
        "EEEE",
        "en-US"
      );
      this.futureDate2 = formatDate(
        res.DailyForecasts[2].Date,
        "EEEE",
        "en-US"
      );
      this.futureDate3 = formatDate(
        res.DailyForecasts[3].Date,
        "EEEE",
        "en-US"
      );
    });
  }

  iconAsPerWeather() {
    switch (this.WeatherText) {
      case "Mostly cloudy":
        this.src = "assets/images/images/broken-clouds.png";
        break;
      case "Clear":
        this.src = "assets/images/images/clear-sky.png";
        break;
      case "Mostly clear":
        this.src = "assets/images/images/few-clouds.png";
        break;
      case "Cloudy":
        this.src = "assets/images/images/mist.png";
        break;
      case "Mostly cloudy":
        this.src = "assets/images/images/rain.png";
        break;
      case "Cloudy":
        this.src = "assets/images/images/scattered-clouds.png";
        break;
      case "snow":
        this.src = "assets/images/images/shower-rain.png";
        break;
      case "rain":
        this.src = "assets/images/images/snow.png";
        break;
      case "Mostly cloudy":
        this.src = "assets/images/images/thunderstorm.png";
        break;

      default:
        this.src = "assets/images/images/few-clouds.png";
        break;
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      this.loaderServices.showHideAutoLoader();
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          if (position) {
            console.log(
              "Latitude: " +
                position.coords.latitude +
                "Longitude: " +
                position.coords.longitude
            );
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.location = this.lat + "," + this.lng;
            let obj = {
              params: {
                apikey: this.apiKey,
                q: this.location,
              },
            };
            this.cityList.getGeoLocation(obj).subscribe((res: any) => {
              this.citySelectEvent(res);
            });
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
