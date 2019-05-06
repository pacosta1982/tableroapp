import { Component, OnInit, Input } from '@angular/core';
import { Proyectos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent implements OnInit {

  
  @Input() proyecto: Proyectos = {};
  constructor() { }

  ngOnInit() {}

}
