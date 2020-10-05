import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var MapPage = /** @class */ (function () {
    function MapPage(geolocation) {
        this.geolocation = geolocation;
    }
    MapPage.prototype.ngOnInit = function () {
        this.options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: '...'
                })
            ],
            zoom: 5,
            center: latLng(46.879966, -121.726909)
        };
        var opt = {
            enableHighAccuracy: true, timeout: 60000, maximumAge: 0
        };
        this.geolocation.getCurrentPosition(opt).then(function (resp) {
            alert('lat ==> ' + resp.coords.latitude + '\n long ==> ' + resp.coords.longitude);
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
        }).catch(function (e) {
            alert(e);
        });
    };
    MapPage = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.page.html',
            styleUrls: ['./map.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.page.js.map