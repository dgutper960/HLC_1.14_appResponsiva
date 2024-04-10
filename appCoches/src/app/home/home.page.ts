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

 constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('https://raw.githubusercontent.com/dgutper960/HLC_1.14_appResponsiva/master/coches.json').subscribe((data: any[]) => {
      // Para cada coche, genera una URL de imagen única y asigna esa URL a la propiedad 'imagen' del coche
      this.coches = data.map((coche, index) => {
        // Generamos una URL de imagen única para cada coche.
        // Uusamos el índice para hacer la URL única o podemos usar algún otro dato del coche.
        coche.imagen = `https://source.unsplash.com/random/?car,${index}, ${coche.marca}, ${coche.modelo}`;
        return coche;
      });
    });
 }
}

