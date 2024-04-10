import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage {

 // Variable para almacenar el string del input filtro
 filtro: string = '';

 // Variable que almacena los datos que llegan del JSON
 coches: any;

 // Variable que va a recoger la imagen de unsplash
 imagen: any;

 // Cargaremos los datos el JSON nada más abrir la aplicación
 constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://raw.githubusercontent.com/dgutper960/HLC_1.14_appResponsiva/master/coches.json').subscribe((data: any) => {
      this.coches = data;
    });

     // Configuramos la solicitud para obtener la imagen como un Blob
    this.httpClient.get('https://source.unsplash.com/random/?car', { responseType: 'blob' }).subscribe((response: Blob) => {
      // Convertimos el Blob a un objeto URL para poder usarlo en el template
      this.imagen = URL.createObjectURL(response);
    });
 }
}
