import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];
 heroeBorrado: string = '';

  borrarHeroe(): void {

   this.heroeBorrado =this.heroes.shift() || '';

  }
}

