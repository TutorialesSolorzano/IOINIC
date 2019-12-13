import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSegment } from "@ionic/angular";
import { Observable } from "rxjs";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-segment",
  templateUrl: "./segment.page.html",
  styleUrls: ["./segment.page.scss"]
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment, { static: true }) segmento: IonSegment;

  superHeroes: Observable<any[]>;

  publisher: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
    this.segmento.value = "todos";
  }

  segmentChanged(ev: any) {
    const valorSegmento = ev.detail.value;
    if (valorSegmento === "todos") {
      this.publisher = "";
    } else {
      this.publisher = valorSegmento;
    }
  }
}
