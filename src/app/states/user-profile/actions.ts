import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserProfile } from "@src/app/models/user-profile";

export const UserProfileActions = createActionGroup({
  source: 'UserProfile',
  events: {
    'Attach': props<{ profile: UserProfile }>(),
    'Detach': emptyProps(),
  }   
});
