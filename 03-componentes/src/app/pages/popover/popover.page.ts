import { Component, OnInit, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopInfoComponent } from "../../components/pop-info/pop-info.component";

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"]
})
export class PopoverPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async mostratPop(ev: any) {
    const popover = await this.popoverController.create({
      component: PopInfoComponent,
      event: ev,
      mode: "ios",
      backdropDismiss: false

      /*         event: ev,
        translucent: true */
    });
    await popover.present();

    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    const { item }=data;
    console.log("padre",item );
  }
}
