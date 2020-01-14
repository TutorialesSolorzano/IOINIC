import { Component, OnInit } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { MenuController } from "@ionic/angular";
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"]
})
export class InicioPage implements OnInit {
  componentes: Observable<Componente[]>;

  constructor(private splash: SplashScreen, private menu: MenuController, private dataService: DataService) {}

  ngOnInit() {
    this.componentes= this.dataService.getMenuOptions();
  }

  /* toggleMenu() {
    this.menu.toggle();
  } */
}
