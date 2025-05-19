import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserProfile } from "@src/app/models/user-profile";

export const UserProfileSelector = createFeatureSelector<UserProfile>('userProfile');
export const UserNameSelector = createSelector(UserProfileSelector, 
  (userProfile: UserProfile) => userProfile.username
);