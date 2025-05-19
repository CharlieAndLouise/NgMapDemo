import { createFeatureSelector } from "@ngrx/store";
import { MapboxState } from "@src/app/models/mapbox-state";

export const MapboxStateSelector = createFeatureSelector<MapboxState>('mapboxState');