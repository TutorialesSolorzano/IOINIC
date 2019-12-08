import { Component, OnInit } from "@angular/core";
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
      component: PopInfoComponent
      /*         event: ev,
        translucent: true */
    });
    return await popover.present();
  }
}
