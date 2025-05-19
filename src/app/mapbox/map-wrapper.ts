import { MapMouseEvent } from "mapbox-gl";
import { MapboxState } from "../models/mapbox-state";
import { Store } from "@ngrx/store";
import { MapboxActions } from "../states/mapbox/mapbox-action";
import { MapboxService } from "../services/mapbox.service";


export class MapWrapper {
  constructor(private map: mapboxgl.Map, private mapboxService: MapboxService) {
    this.initOnMouseOverEvent();
    this.initOnClickEvent();
  }

  private initOnMouseOverEvent() {
    this.map.on('mousemove', (e: MapMouseEvent) => {
      let newState: MapboxState = {
        lng: e.lngLat.lng,
        lat: e.lngLat.lat,
        zoom: this.map.getZoom(),
        bearing: this.map.getBearing()
      };
      
      this.mapboxService.setMapboxState(newState);
    });
  }

  private initOnClickEvent() {
    this.map.on('click', (e: MapMouseEvent) => {
      console.log(e.features)
    });
  }

  flyTo(lng: number, lat: number, zoom: number, pitch: number = 0) {
    this.map.flyTo({
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      bearing: this.map.getBearing(),
      speed: 1.2,
      curve: 1,
      easing(t) {
        return t;
      }
    });
  }
}