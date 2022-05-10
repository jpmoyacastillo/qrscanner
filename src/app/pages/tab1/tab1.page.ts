import { Component } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

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

  constructor(private barcodeScanner: BarcodeScanner) {}

  ionViewDidEnter() {
    console.log('ionViewDidEnter Tab1Page');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave Tab1Page');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Tab1Page');
    this.scan();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave Tab1Page');
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
