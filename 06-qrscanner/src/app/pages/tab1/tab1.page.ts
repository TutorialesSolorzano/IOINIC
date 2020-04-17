import { Component } from "@angular/core";

import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { DataLocalService } from "../../services/data-local.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  slidesOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService
  ) {}

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log("Barcode data", barcodeData);
        if (!barcodeData.cancelled) {
          this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
        }
      })
      .catch((err) => {
        console.log("Error", err);
        //this.dataLocal.guardarRegistro( "QRCode", "https://www.promodescuentos.com/" );
        this.dataLocal.guardarRegistro(
          "QRCode",
          "geo:19.8046996,-100.1736378,18"
        );
      });
  }

  ionViewDidEnter() {
    //cuando la pagina se cargo por completo
    console.log("viewDidEnter");
  }

  ionViewDidLeave() {
    //cuando la pagina ya salio del punto de vista del usuario
    console.log("viewDidLeave");
  }

  ionViewWillEnter() {
    //se dispara cuando la pagina apenas va a cargar
    console.log("viewWillEnter");
    this.scan();
  }

  ionViewWillLeave() {
    //cuando la pagina apenas va a salir del punto de vista del usuario
    console.log("viewWillLeave");
  }
}
