import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fab",
  templateUrl: "./fab.page.html",
  styleUrls: ["./fab.page.scss"]
})
export class FabPage implements OnInit {
  data = Array(100);

  // Use matchMedia to check the user preference
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');



  constructor() {
    this.prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
  }

  darkMode(){
    document.body.classList.toggle('dark', true);
    console.log(this.prefersDark);
    

  }

  lightMode(){
    document.body.classList.toggle('dark', false);
    console.log(this.prefersDark);
  }
   
  toggleDarkTheme(shouldAdd) {
    console.log(shouldAdd);
    
    document.body.classList.toggle('dark', shouldAdd);
  }
  

 

  ngOnInit() {
   
  }
}
