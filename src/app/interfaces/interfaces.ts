

export interface RespuestaProyectos {
  data: Proyectos[];
  links: Links;
  meta: Meta;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Links {
  first: string;
  last: string;
  prev?: any;
  next: string;
}

export interface Proyectos {
  id?: number;
  sat?: string;
  nombre?: string;
  departamento?: string;
  distrito?: string;
  estado?: string;
  avance?: string;
  viviendas?: string;
  expediente?: string;
}

export interface IProject {
  data: IRegionDescription[];
}


export interface IRegionDescription {
  id?: number;
  sat?: string;
  nombre?: string;
  departamento?: string;
  distrito?: string;
  estado?: string;
  avance?: string;
  viviendas?: string;
  expediente?: string;
  coordenadas: mapacoordenadas[];
}

export interface mapacoordenadas{
  lat?: string;
  lon?: string;
}