import {Component} from '@angular/core';
import {Libro} from '../common/libro'

const LIBROS : Libro[] = [
	{
	  	id : 1,
	  	name : 'Seven Nation Army',
	  	artistName : 'White Stripes',
	  	image : '/images/Thumb-01.jpg',
		price : 650
	},
	{
	  	id : 2,
	  	name : 'Perro come perro',
	  	artistName : 'Superlitio',
	  	image : '/images/Thumb-02.jpg',
		price : 999
	}
	
]

@Component({
  selector: 'libros',
  template : 
  `
    <h2>{{title}}</h2>
    <div class="libros_list">
    	<librobox
    		[libro]="libro_info"
    		*ngFor = "let libro_info of libros"
    	></librobox>
    </div>
  `
})

export class LibrosComponent{
  title : string = 'MY WISH LIST'
  libros : Libro[] = LIBROS;
  
}