import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { PeliculaDetalle, Cast } from "../../interfaces/iterfaces";
import { ModalController } from "@ionic/angular";
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: "app-detalle",
  templateUrl: "./detalle.component.html",
  styleUrls: ["./detalle.component.scss"]
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];
  favIcon = "";
  existe=false;
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(
    private moviesSevice: MoviesService,
    private modalCtrl: ModalController,
    private dataLocalService: DataLocalService
  ) {}

  async ngOnInit() {
    //console.log("ID", this.id);
    
    this.existe = await this.dataLocalService.existePelicula( this.id );
    console.log("Existe en favoritos", this.existe);
    this.favIcon = this.existe ? "star" : "star-outline";

    this.moviesSevice.getPeliculaDetalle(this.id).subscribe(resp => {
      console.log(resp);
      this.pelicula = resp;
    });
    this.moviesSevice.getActoresPelicula(this.id).subscribe(resp => {
      console.log(resp);
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito(){
    this.dataLocalService.guardarPelicula( this.pelicula );
    this.existe=!this.existe;
    this.favIcon = this.existe ? "star" : "star-outline";
  }

}
