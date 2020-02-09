import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../interfaces/interfaces";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ActionSheetController } from "@ionic/angular";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { DataLocalService } from "../../services/data-local.service";

@Component({
  selector: "app-noticia",
  templateUrl: "./noticia.component.html",
  styleUrls: ["./noticia.component.scss"]
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocalService: DataLocalService
  ) {}

  ngOnInit() {}

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, "_system");
  }

  async lanzarMenu() {
    let favBoton;

    if (!this.enFavoritos) {
      favBoton = {
        text: "Favorito",
        icon: "star",
        cssClass: "action-dark",
        handler: () => {
          console.log("Favotite clicked");
          this.dataLocalService.guardaNoticia(this.noticia);
        }
      };
    } else {
      favBoton = {
        text: "Quitar Favorito",
        icon: "trash",
        cssClass: "action-dark",
        handler: () => {
          console.log("Quitar Favorito clicked");
          this.dataLocalService.borrarNoticia(this.noticia);
        }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: "Compartir",
          icon: "share",
          cssClass: "action-dark",
          handler: () => {
            console.log("Share clicked");
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              null,
              this.noticia.url
            );
          }
        },
        favBoton,
        {
          text: "Cancel",
          icon: "close",
          cssClass: "action-dark",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
