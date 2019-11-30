import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-singlepost",
  templateUrl: "./singlepost.component.html",
  styleUrls: ["./singlepost.component.css"]
})
export class SinglepostComponent implements OnInit {
  @Input() mensaje;
  @Output() clickPost = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  click() {
    this.clickPost.emit(this.mensaje.id);
  }
}
