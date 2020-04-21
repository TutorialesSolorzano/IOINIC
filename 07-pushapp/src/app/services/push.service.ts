import { Injectable, EventEmitter } from "@angular/core";
import { OneSignal, OSNotification, OSNotificationPayload } from "@ionic-native/onesignal/ngx";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class PushService {
  mensajes: OSNotificationPayload[] = [
    /*  {
      title: "Titulo de la push",
      body: "Este es el body de la push",
      date: new Date()
    } */
  ];

  userId: string;

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal, private storage: Storage) {
    this.cargarMensajes();
  }

  configuracionInicial() {
    this.oneSignal.startInit(
      "7feb8c7f-4d85-4f6c-8a5a-5a04f4a71dbe",
      "713177311308"
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.Notification
    );

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log("Notificacion recibida", noti);
      this.notificacionRecibida( noti );
    });

    this.oneSignal.handleNotificationOpened().subscribe( async (noti) => {
      console.log("Notificacion abierta", noti);
      await this.notificacionRecibida( noti.notification );
    });

    //Obtener userIds
    this.oneSignal.getIds().then( info =>{
      this.userId = info.userId;
      console.log("userId", this.userId );
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida(noti: OSNotification) {
    await this.cargarMensajes();
    const payload = noti.payload;

    const existe = this.mensajes.find(
      (mensaje) => mensaje.notificationID === payload.notificationID
    );

    if (existe) {
      return;
    }

    this.mensajes.unshift(payload);

    this.pushListener.emit( payload );

    await this.gurdarMensajes();
  }

  gurdarMensajes() {
    this.storage.set("mensajes", this.mensajes);
  }

  async cargarMensajes() {
    this.mensajes = (await this.storage.get("mensajes")) || [];
    return this.mensajes;
  }

  async getMensajes(){
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  async borrarMensajes(){
    await this.storage.clear();
  }
}
