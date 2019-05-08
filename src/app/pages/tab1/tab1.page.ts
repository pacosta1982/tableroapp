import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Meta, Proyectos } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  proyecto: Proyectos[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(){

    this.siguientes();
  }

  siguientes( event? ){

    this.projectService.getProjects()
    .subscribe( resp => {
      //console.log(resp.data);
      this.proyecto.push( ...resp.data );
      if (event) {
        event.target.complete();
        if (resp.data.length === 0) {
          event.target.disabled = true;
        }
      }
    });

  }

}
