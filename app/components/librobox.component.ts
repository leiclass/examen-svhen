import {Component, Input} from '@angular/core';
import {Libro} from '../common/libro';

@Component({
  selector: 'librobox',
  template : 
  `
    <div class="libro">
    	<img [src]="libro.image">
    	<h2>{{libro.name}}</h2>
    	<span class="price">
    		{{libro.price | currency : 'USD': true : '1.2-2'}}
    	</span>
    	<br />
    	<button>Agregar al carrito</button>
    </div>
  `
})

export class LibroBoxComponent{
  @Input()
  libro : Libro;
  
}