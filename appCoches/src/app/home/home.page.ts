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

 // Cargaremos los datos el JSON nada más abrir la aplicación
 constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://raw.githubusercontent.com/dgutper960/HLC_1.14_appResponsiva/master/coches.json').subscribe((data: any) => {
      this.coches = data;
    });
 }
}
