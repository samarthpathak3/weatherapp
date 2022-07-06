import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  constructor(public loadingController: LoadingController) {}

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
        response.onDidDismiss().then(() => {});
      });
  }
}
