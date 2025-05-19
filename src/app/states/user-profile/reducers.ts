import { createReducer, on } from "@ngrx/store";
import { UserProfile } from "@src/app/models/user-profile";
import { UserProfileActions } from "./actions";

const InitialState: UserProfile = {
  username: '',
};

export const UserProfileReducer = createReducer(
  InitialState,
   on(UserProfileActions.attach, (state, { profile }) => ({
     //...state,
     ...profile,
  })),
  on(UserProfileActions.detach, () => InitialState)
);