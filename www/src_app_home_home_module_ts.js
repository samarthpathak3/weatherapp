"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_cityList_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/cityList.service */ 5622);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/loader/loader.service */ 2868);







let HomePage = class HomePage {
    constructor(cityList, loaderServices) {
        this.cityList = cityList;
        this.loaderServices = loaderServices;
        this.apiKey = "JmaUBIYerG57HKNlYtPLcrDmCB4JvMwl";
        this.startCitySearch = false;
        this.date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), "EEEE, d MMMM", "en-US");
        this.isLoading = false;
    }
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
        this.cityList.getCityList(obj).subscribe((response) => {
            this.city = response;
        });
    }
    citySelectEvent(value) {
        this.cityName = value.LocalizedName;
        this.countryName = value.Country.LocalizedName;
        let obj = {
            params: {
                apikey: this.apiKey,
            },
        };
        this.cityList
            .getCityCurrentCondition(value.Key, obj)
            .subscribe((Response) => {
            this.startCitySearch = false;
            this.getFurtherData(value.Key);
            this.cityTemp = Response[0].Temperature.Metric.Value;
            this.WeatherText = Response[0].WeatherText;
            this.iconAsPerWeather();
        });
    }
    getFurtherData(cityId) {
        let obj = {
            params: {
                apikey: this.apiKey,
                details: true,
                metric: true,
            },
        };
        this.cityList.getFutureRecord(cityId, obj).subscribe((res) => {
            this.futureDay1 = res.DailyForecasts[1].Temperature.Minimum.Value;
            this.unit = res.DailyForecasts[1].Temperature.Minimum.Unit;
            this.futureDay2 = res.DailyForecasts[2].Temperature.Minimum.Value;
            this.futureDay3 = res.DailyForecasts[3].Temperature.Minimum.Value;
            this.cloudCover = res.DailyForecasts[0].Day.PrecipitationProbability;
            this.windDirection = res.DailyForecasts[0].Day.Wind.Direction.Degrees;
            this.futureDate1 = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(res.DailyForecasts[1].Date, "EEEE", "en-US");
            this.futureDate2 = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(res.DailyForecasts[2].Date, "EEEE", "en-US");
            this.futureDate3 = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(res.DailyForecasts[3].Date, "EEEE", "en-US");
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
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log("Latitude: " +
                        position.coords.latitude +
                        "Longitude: " +
                        position.coords.longitude);
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    this.location = this.lat + "," + this.lng;
                    let obj = {
                        params: {
                            apikey: this.apiKey,
                            q: this.location,
                        },
                    };
                    this.cityList.getGeoLocation(obj).subscribe((res) => {
                        this.citySelectEvent(res);
                    });
                }
            }, (error) => console.log(error));
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _shared_services_cityList_service__WEBPACK_IMPORTED_MODULE_2__.CityListService },
    { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-home",
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 6305:
/*!******************************************!*\
  !*** ./src/shared/constant/api-route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRoute": () => (/* binding */ ApiRoute)
/* harmony export */ });
const ApiRoute = {
    searchAutoComplete: "locations/v1/cities/autocomplete",
    currentCondition: "currentconditions/v1/",
    futureCondition: "forecasts/v1/daily/5day/",
    geoLocation: "locations/v1/cities/geoposition/search"
};


/***/ }),

/***/ 1586:
/*!*****************************************!*\
  !*** ./src/shared/http/http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let HttpService = class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    post(serviceName, data = {}, isAuth = true) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName, data);
    }
    getWithHeader(serviceName, data, options, isAuth = true) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName + data, options);
    }
    get(serviceName, data, isAuth = true) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + serviceName, data);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], HttpService);



/***/ }),

/***/ 5622:
/*!*************************************************!*\
  !*** ./src/shared/services/cityList.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityListService": () => (/* binding */ CityListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/http.service */ 1586);
/* harmony import */ var _constant_api_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant/api-route */ 6305);




let CityListService = class CityListService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCityList(data) {
        return this.httpService.get(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.searchAutoComplete, data);
    }
    getCityCurrentCondition(data, options) {
        return this.httpService.getWithHeader(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.currentCondition, data, options);
    }
    getFutureRecord(data, option) {
        return this.httpService.getWithHeader(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.futureCondition, data, option);
    }
    getGeoLocation(data) {
        return this.httpService.get(_constant_api_route__WEBPACK_IMPORTED_MODULE_1__.ApiRoute.geoLocation, data);
    }
};
CityListService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
CityListService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], CityListService);



/***/ }),

/***/ 2868:
/*!******************************************************!*\
  !*** ./src/shared/services/loader/loader.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let LoaderService = class LoaderService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    // This will show then autohide the loader
    showHideAutoLoader() {
        this.loadingController
            .create({
            message: "Loading...",
            spinner: "circles",
            duration: 8000,
        })
            .then((response) => {
            response.present();
            response.onDidDismiss().then(() => { });
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.LoadingController }
];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: "root",
    })
], LoaderService);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins\";\n}\n\nion-searchbar {\n  height: 48px;\n  background: #1A1C49;\n  border-radius: 15px;\n}\n\n.icon-size {\n  width: 95px;\n  height: 90px;\n}\n\ninput.searchbar-input.sc-ion-searchbar-md {\n  /* border-radius: 15px; */\n  background: transparent;\n}\n\n.div-background {\n  background: #575A7F;\n  height: 100%;\n}\n\nion-chip {\n  background-color: transparent;\n}\n\n.p-r-13 {\n  padding-right: 13px;\n}\n\n.padding-25 {\n  padding: 25px;\n}\n\n.p-b-18 {\n  padding-bottom: 18px;\n}\n\n.p-t-10 {\n  padding-top: 10px;\n}\n\nion-card {\n  background: #1a1c49;\n  border-radius: 15px;\n  width: 100%;\n}\n\n.ion-card-main {\n  padding: 10px 16px 0px 16px;\n  color: #fff;\n}\n\n.ion-card-second {\n  padding: 16px;\n}\n\n.degree-img {\n  position: absolute;\n  top: 20%;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.fs-17 {\n  font-size: 17px;\n  line-height: 17px;\n}\n\n.fs-16 {\n  font-size: 16px;\n}\n\n.fs-58 {\n  font-size: 58px;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.fs-24 {\n  font-size: 24px;\n}\n\n.fw-600 {\n  font-weight: 600;\n}\n\n.fw-400 {\n  font-weight: 400;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\n.fw-700 {\n  font-weight: 700;\n}\n\nlistDiv {\n  position: absolute;\n  z-index: 9;\n}\n\nlistDiv .listPopup {\n  max-height: 210px;\n  border: 2px solid #efefef;\n  border-radius: 10px;\n  overflow: scroll;\n  min-width: 200px;\n  max-width: 250px;\n  min-height: 45px;\n}\n\nlistDiv ion-item {\n  --highlight-color-focused: none;\n  --highlight-color-valid: none;\n  --highlight-color-invalid: none;\n}\n\n.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios {\n  color: #575A7F;\n}\n\n.listDiv {\n  position: relative;\n}\n\n.listDiv .listPopup {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  border-radius: 15px;\n  top: -10px;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FBSUo7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUpFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUhBO0VBQ0UsbUJBQUE7QUFNRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xufVxuXG5pb24tc2VhcmNoYmFye1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICMxQTFDNDk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pY29uLXNpemV7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbmlucHV0LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgLyogYm9yZGVyLXJhZGl1czogMTVweDsgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cblxuLmRpdi1iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kOiAjNTc1QTdGO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY2hpcHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wLXItMTMge1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xufVxuXG4ucGFkZGluZy0yNSB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5wLWItMTgge1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLnAtdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxYTFjNDk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW9uLWNhcmQtbWFpbiB7XG4gIHBhZGRpbmc6IDEwcHggMTZweCAwcHggMTZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pb24tY2FyZC1zZWNvbmQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZGVncmVlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG59XG5cbi5zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZzLTE3IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmZzLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZnMtNTgge1xuICBmb250LXNpemU6IDU4cHg7XG59XG5cbi5mcy0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZzLTI0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZnctNjAwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mdy00MDAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZnctNTAwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZ3LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5saXN0RGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICAubGlzdFBvcHVwIHtcbiAgICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWZlZmVmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogbm9uZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogbm9uZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiBub25lO1xuICB9XG59XG4uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBjb2xvcjogIzU3NUE3Rjtcbn1cbi5saXN0RGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAubGlzdFBvcHVwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbi5uby13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"><img src=\"../../assets/icon/menu.svg\" /></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"fw-600 fs-24\">Weather Forcast</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"padding-25 div-background\">\n    <div class=\"p-b-18\">\n      <ion-searchbar\n        placeholder=\"Search your City \"\n        debounce=\"1000\"\n        (ionChange)=\"ionChange($event)\"\n        search-icon=\"assets/icon/search-icon.svg\"\n      ></ion-searchbar>\n    </div>\n    <div class=\"listDiv\">\n      <ion-list\n        *ngIf=\"startCitySearch && city && city.length > 0\"\n        class=\"listPopup\"\n      >\n        <ion-item *ngFor=\"let c of city\" (click)=\"citySelectEvent(c)\"\n          >{{ c.LocalizedName }}\n        </ion-item>\n      </ion-list>\n    </div>\n    <ion-row class=\"p-b-18\">\n      <ion-card class=\"ion-no-padding ion-no-margin ion-card-main\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col class=\"fw-600 fs-16 ion-no-padding\">\n              <div>\n                <span>Toady</span>\n              </div>\n            </ion-col>\n            <ion-col class=\"fw-400 fs-12ion-no-padding ion-text-end\">\n              <div class=\"ion-no-padding\">\n                <span class=\"no-wrap\">{{date}}</span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-no-padding ion-text-center\">\n              <span class=\"fw-500 fs-58\"\n                >{{cityTemp}}\n                <img class=\"degree-img\" src=\"../../assets/images/oC.svg\"\n              /></span>\n            </ion-col>\n            <ion-col class=\"ion-text-end ion-no-padding\">\n              <img class=\"icon-size\" src=\"{{src}}\" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-12 ion-text-center ion-no-padding\">\n              <ion-chip>\n                <img class=\"p-r-13\" src=\"/assets/images/location.svg\" />\n                <ion-label class=\"fw-400 fs-12 color-white\"\n                  >{{cityName}}, {{countryName}}</ion-label\n                >\n              </ion-chip>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n    <ion-row class=\"p-b-18\">\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin ion-card-second\">\n          <ion-card-content class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col class=\"ion-text-center ion-no-padding self-center\">\n                <img src=\"../../assets/images/humidity.svg\" />\n              </ion-col>\n              <ion-col>\n                <div class=\"fw-700 fs-17\">\n                  <span class=\"color-white\">{{cloudCover}}%</span>\n                </div>\n                <div>\n                  <span class=\"fw-400 fs-12 color-white\">Humidity</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin ion-card-second\">\n          <ion-card-content class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col class=\"ion-text-center ion-no-padding self-center\">\n                <img src=\"../../assets/images/pressure.svg\" />\n              </ion-col>\n              <ion-col>\n                <div class=\"fw-700 fs-17\">\n                  <span class=\"color-white\">{{windDirection}}Hpa</span>\n                </div>\n                <div>\n                  <span class=\"fw-400 fs-12 color-white\">Presure</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin card-future\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <div class=\"fw-400 fs-24 ion-text-center\">\n                  <span class=\"color-white\">{{futureDay1}}°{{unit}}</span>\n                </div>\n                <div class=\"ion-text-center\">\n                  <span class=\"fw-500 fs-14 color-white\">{{futureDate1}}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin card-future\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <div class=\"fw-400 fs-24 ion-text-center\">\n                  <span class=\"color-white\">{{futureDay2}}°{{unit}}</span>\n                </div>\n                <div class=\"ion-text-center\">\n                  <span class=\"fw-500 fs-14 color-white\">{{futureDate2}}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin card-future\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <div class=\"fw-400 fs-24 ion-text-center\">\n                  <span class=\"color-white\">{{futureDay3}}°{{unit}}</span>\n                </div>\n                <div class=\"ion-text-center\">\n                  <span class=\"fw-500 fs-14 color-white\">{{futureDate3}}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map