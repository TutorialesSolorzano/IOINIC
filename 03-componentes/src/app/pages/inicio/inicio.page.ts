import { Component, OnInit } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"]
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: "american-football",
      name: "Action Sheet",
      redirectTo: "/action-sheet"
    },
    {
      icon: "appstore",
      name: "Alert",
      redirectTo: "/alert"
    },
    {
      icon: "beaker",
      name: "Avatar",
      redirectTo: "/avatar"
    },
    {
      icon: "radio-button-on",
      name: "Botones y Router",
      redirectTo: "/botones"
    },
    {
      icon: "card",
      name: "Cards",
      redirectTo: "/card"
    },
    {
      icon: "checkmark-circle-outline",
      name: "Checkbox",
      redirectTo: "/check"
    },
    {
      icon: "calendar",
      name: "DateTime",
      redirectTo: "/date-time"
    },
    {
      icon: "car",
      name: "Fab",
      redirectTo: "/fab"
    },
    {
      icon: "grid",
      name: "Grid & Rows",
      redirectTo: "/grid"
    },
    {
      icon: "infinite",
      name: "Infinite Scroll",
      redirectTo: "/infinite-scroll"
    },
    {
      icon: "hammer",
      name: "Inputs & Forms",
      redirectTo: "/input"
    },
    {
      icon: "list",
      name: "Lists & Sliding",
      redirectTo: "/list"
    }
  ];

  constructor(private splash: SplashScreen) {
    splash.show();
    window.setTimeout(function() {
      splash.hide();
    }, 3000);
  }

  ngOnInit() {
  
  }
}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
