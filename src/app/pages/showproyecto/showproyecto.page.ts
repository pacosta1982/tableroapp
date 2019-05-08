import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { IProject } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showproyecto',
  templateUrl: './showproyecto.page.html',
  styleUrls: ['./showproyecto.page.scss'],
})
export class ShowproyectoPage implements OnInit {

  proyecto: IProject[] = [];
  id: string;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    //id =  this.route.snapshot.data['id'];
    this.id = this.route.snapshot.paramMap.get('id');
    this.projectService.showproject(this.id).subscribe(
      resp => {
        this.proyecto.push( resp );
        console.log(this.id);
    });
  }

}
