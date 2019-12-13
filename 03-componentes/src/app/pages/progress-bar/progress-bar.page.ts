import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.page.html",
  styleUrls: ["./progress-bar.page.scss"]
})
export class ProgressBarPage implements OnInit {
  progress: number = 0.1;
  constructor() {}

  ngOnInit() {}

  cambioRango( ev:any ){
    console.log(ev.detail.value);
    this.progress = ev.detail.value/100;
    
  }
}
