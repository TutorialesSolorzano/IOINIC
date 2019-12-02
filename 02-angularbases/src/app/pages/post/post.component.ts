import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  mensajes = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
    /*  .subscribe(
      (posts: any[]) => {
        console.log(posts);
        this.mensajes=posts;
      }
    ); */
  }

  excuchaClick( id: number ){
    console.log(id);
    
  }
}
