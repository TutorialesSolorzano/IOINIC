import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;
  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
    setTimeout(()=>{
            this.loading.dismiss();
    },3000);
    this.presentLoading("Espere");
  }

  async presentLoading( message: string) {
    this.loading = await this.loadingCtrl.create({
      message
      //duration: 2000
    });
    await this.loading.present();

    /* const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!'); */
  }

}
