import { Injectable } from "@angular/core";
import { Registro } from "../models/registro.model";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { File } from "@ionic-native/file/ngx";
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: "root",
})
export class DataLocalService {
  guardados: Registro[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private file: File,
    private emailComposer: EmailComposer
  ) {
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = (await this.storage.get("registros")) || [];
  }

  async guardarRegistro(format: string, text: string) {
    await this.cargarStorage();
    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);
    console.log(this.guardados);
    this.storage.set("registros", this.guardados);

    this.abrirRegistro(nuevoRegistro);
  }

  abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward("/tabs/tab2");

    switch (registro.type) {
      case "http":
        this.iab.create(registro.text, "_system");
        break;
      case "geo":
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`);
        break;
    }
  }

  enviarCorreo() {
    const arrTemp = [];
    const titulos = "Tipo, Formato, Creado en, Texto \n";

    arrTemp.push(titulos);

    this.guardados.forEach((registro) => {
      const linea = `${registro.type}, ${registro.format}, ${
        registro.created
      }, ${registro.text.replace(",", "_")}\n`;

      arrTemp.push(linea);
    });

    console.log(arrTemp.join(""));
    this.crearArchivoFisico( arrTemp.join("") );
  }

  crearArchivoFisico(text: string) {
    this.file
      .checkFile(this.file.externalDataDirectory, "registros.csv")
      .then((existe) => {
        console.log("Existe archivo", existe);
        return this.escribirEnArchivo(text);
      })
      .catch((err) => {
        return this.file
          .createFile(this.file.externalDataDirectory, "registros.csv", false)
          .then((creado) => {
            this.escribirEnArchivo(text);
          })
          .catch((err2) => {
            console.log("No se pudo crear el archivo", err2);
          });
      });
  }

  async escribirEnArchivo(text: string) {
    await this.file.writeExistingFile( this.file.externalDataDirectory, "registros.csv", text);
    console.log("Archivo creado");
    const archivo = `${ this.file.externalDataDirectory }registros.csv`;
    console.log(archivo);

    const email = {
      to: 'solorzano.tutoriales@gmail.com',
      //cc: 'erika@mustermann.de',
      //bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        archivo
      ],
      subject: 'BackUp de scans',
      body: 'FYI',
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);
    
  }
}
