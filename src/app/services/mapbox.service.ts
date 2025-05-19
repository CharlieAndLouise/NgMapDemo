import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { MapboxState } from "../models/mapbox-state";
import { MapboxActions } from "../states/mapbox/mapbox-action";
import { MapboxStateSelector } from "../states/mapbox/mapbox-selector";

@Injectable({ providedIn: 'root'})
export class MapboxService {
  constructor(private store: Store<MapboxState>) {}

  getMapboxState() {
    return this.store.select(MapboxStateSelector);
  }

  setMapboxState(newState: MapboxState) {
    this.store.dispatch(MapboxActions.mouseOver({ event: newState }));
  }
}