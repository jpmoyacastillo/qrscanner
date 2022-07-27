import { Component } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService
  ) {}

  ionViewDidEnter() {
    // console.log('ionViewDidEnter Tab1Page');
  }

  ionViewDidLeave() {
    // console.log('ionViewDidLeave Tab1Page');
  }

  ionViewWillEnter() {
    // console.log('ionViewWillEnter Tab1Page');
    this.scan();
  }

  ionViewWillLeave() {
    // console.log('ionViewWillLeave Tab1Page');
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);

        if (!barcodeData.cancelled) {
          this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
        }
      })
      .catch((err) => {
        console.log('Error', err);
        // this.dataLocal.guardarRegistro('QR Code', 'https://coglocal.com');
        this.dataLocal.guardarRegistro(
          'QR Code',
          'geo:40.73151796986687,-74.06087294062502'
        );
      });
  }
}
