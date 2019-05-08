import { Component, OnInit, Input } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coordenadas: string;
  constructor() { }

  ngOnInit() {

    //const lat = this.coordenadas.data[0].coordenadas.lat;
    //const lon = this.coordenadas.data[0].coordenadas.lon;
    console.log(this.coordenadas);
    const latlng = this.coordenadas.split(',');
    const lat = Number(latlng[0]);
    const lng = Number(latlng[1]);
    mapboxgl.accessToken = 'pk.eyJ1IjoicGFjb3N0YTE5ODIiLCJhIjoiY2p2ZTYyajR6MXNycDRlcnh2Nmdhb2UwdyJ9.QTt9WEYnP3teguI-lZWw-Q';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: 15
    });

    const marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);
    //console.log(this.coordenadas);
  } 

}
