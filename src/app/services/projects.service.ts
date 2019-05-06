import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaProyectos } from '../interfaces/interfaces';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  paginaProyectos = 0;

  constructor(private http: HttpClient) { }

  getProjects() {

    this.paginaProyectos ++;

    return this.http.post<RespuestaProyectos>(`${ URL }/api/details?page=${ this.paginaProyectos}`,'');
  }


}
