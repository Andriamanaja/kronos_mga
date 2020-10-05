import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, circle, polygon } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx' ;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  options : any ;
  layersControl : any ;
  map: Map;

  constructor(private geolocation : Geolocation) {

  }

  ngOnInit() {

    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        { 
          maxZoom: 18, 
          attribution: '...' 
        }) 
      ],
      zoom: 5,
      center: latLng(46.879966, -121.726909)
    };


    let opt = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };
    
    this.geolocation.getCurrentPosition(opt).then((resp) => {
      alert ('lat ==> ' + resp.coords.latitude + '\n long ==> ' + resp.coords.longitude) ;
      
      /*this.layersControl = {
        baseLayers: {
          'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
          'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        },
        overlays: {
          'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
          'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
        }
  
      }*/

  }).catch (e => {
    alert (e) ;
  });

}

}
