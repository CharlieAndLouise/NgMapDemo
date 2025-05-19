import { createActionGroup, props } from "@ngrx/store";
import { MapboxState } from "@src/app/models/mapbox-state";

export const MapboxActions = createActionGroup({
  source: 'Mapbox',
  events: {
    'mouseOver': props<{ event: MapboxState }>(),
  },
});