import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favoritos = [
    {id:230, nombre:'Laila', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:231, nombre:'Rex', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:232, nombre:'Inri', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:233, nombre:'Luna', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:234, nombre:'Sebes', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:235, nombre:'Laika', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:236, nombre:'Flurfils', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:237, nombre:'Bob', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:238, nombre:'Taxi', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:239, nombre:'Fuffy', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:240, nombre:'Rock', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'},
    {id:241, nombre:'Ahri', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'}
  ];

  filtro = '';

  escogerSeis(){
    return this.favoritos.filter( function(aFav,idx) {
      return idx<6;
    });
  }

  filtrarPorFiltro(str) {
    const subconj = this.favoritos.filter( function(aFav) {
      return (aFav.nombre.toLowerCase().indexOf( str.toLowerCase() ) >= 0 );
    });

    return subconj;
  }
  constructor() { }

  ngOnInit() {
  }

}
