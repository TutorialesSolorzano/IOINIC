import { Component } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { Pelicula } from "../interfaces/iterfaces";
import { ModalController } from "@ionic/angular";
import { DetalleComponent } from "../components/detalle/detalle.component";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  textoBuscar = "";
  buscando = false;
  peliculas: Pelicula[] = [];

  ideas: string[] = ["Toy Story", "El Irlandes", "El Wuason"];

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  buscar(ev: any) {
    const valor: string = ev.detail.value;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;
    this.moviesService.buscarPelicula(valor).subscribe((resp) => {
      console.log(resp);
      this.peliculas = resp["results"];
      this.buscando = false;
    });
  }

  async detalle(peliculaId: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: peliculaId,
      },
    });
    modal.present();
  }
}
