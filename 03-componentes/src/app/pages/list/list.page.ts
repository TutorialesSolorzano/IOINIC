import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";
import { IonList, ToastController } from "@ionic/angular";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"]
})
export class ListPage implements OnInit {
  @ViewChild("lista", { static: false }) lista: IonList;

  usuarios: Observable<any>;
  constructor(
    private dataService: DataService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'middle',
      color: 'primary',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  favorite(user) {
    //console.log("favrote", user);
    this.presentToast('Favorite');
    this.lista.closeSlidingItems();
  }
  share(user) {
    //console.log("share", user);
    this.presentToast('Share');
    this.lista.closeSlidingItems();
  }
  unread(user) {
    console.log("unread", user);
    this.presentToastWithOptions();
    this.lista.closeSlidingItems();
  }
  read(user) {
    console.log("read", user);
    this.presentToastWithOptions();
    this.lista.closeSlidingItems();
  }
}
