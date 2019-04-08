import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  
  mascota = {id:235, nombre:'Rex', foto: 'https://www.duiops.net/seresvivos/photogallery/photo00000353/African%20Lion,%20Tanzania,%20Africa.jpg'};
  constructor() { }
  ngOnInit() {
  }

}
