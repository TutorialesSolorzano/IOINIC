import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
   
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();

      this.componentes= this.dataService.getMenuOptions();
    });
  }
}
