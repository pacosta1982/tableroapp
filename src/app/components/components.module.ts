import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    ProyectosComponent,
    ProyectoComponent,
    MapaComponent,
  ],
  exports:[
    ProyectosComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
