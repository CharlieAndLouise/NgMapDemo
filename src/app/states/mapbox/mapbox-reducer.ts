import { createReducer, on } from "@ngrx/store";
import { MapboxState } from "@src/app/models/mapbox-state";
import { MapboxActions } from "./mapbox-action";

const initialMapboxState: MapboxState = {
  lng: 0,
  lat: 0,
  zoom: 0,
  bearing: 0,
};

export const MapboxReducer = createReducer(initialMapboxState, 
  on(MapboxActions.mouseOver, (state, { event }) => ({
    ...state,
    ...event
  }))
);