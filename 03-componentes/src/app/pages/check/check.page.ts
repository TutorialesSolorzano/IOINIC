import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: "primary",
      selected: "false",
      mode:"ios"
    },
    {
      name: "secondary",
      selected: "true",
      mode:"md"
    },
    {
      name: "tertiary",
      selected: "false",
      mode:"ios"
    },
    {
      name: "success",
      selected: "true",
      mode:"md"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick( check ){
    console.log({check});
    
  }

}
