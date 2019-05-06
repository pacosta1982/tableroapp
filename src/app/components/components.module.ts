import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ProyectosComponent,
    ProyectoComponent
  ],
  exports:[
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
