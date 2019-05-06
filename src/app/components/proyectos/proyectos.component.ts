import { Component, OnInit, Input } from '@angular/core';
import { Proyectos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {

  @Input() proyectos: Proyectos[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.proyectos);
  }
}
