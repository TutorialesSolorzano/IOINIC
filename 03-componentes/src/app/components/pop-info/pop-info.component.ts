import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-pop-info",
  templateUrl: "./pop-info.component.html",
  styleUrls: ["./pop-info.component.scss"]
})
export class PopInfoComponent implements OnInit {
  items = Array(40);

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  onClick(i: number) {
    console.log("Item", i);

    this.popoverCtrl.dismiss({
      item: i
    });
  }
}
