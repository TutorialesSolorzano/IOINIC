import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../interfaces/interfaces";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-noticia",
  templateUrl: "./noticia.component.html",
  styleUrls: ["./noticia.component.scss"]
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() indice: number;

  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, "_system");
  }

  async lanzarMenu(){
      const actionSheet = await this.actionSheetController.create({
        buttons: [ {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Favoritos',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favotite clicked');
          }}, {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  }
}
