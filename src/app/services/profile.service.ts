import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserProfile } from "../models/user-profile";
import { UserNameSelector } from "../states/user-profile/selectors";
import { UserProfileActions } from "../states/user-profile/actions";
import { first, firstValueFrom, from, map, Observable, of, switchMap } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ProfileService {
  constructor(private profileStore: Store<UserProfile>) {

  }

  get profile$() {
    return this.profileStore.select(state => state);
  }

  get username$() {
    return this.profileStore.select(UserNameSelector);
  }

  login(username: string, password: string) {    
    this.profileStore.dispatch(UserProfileActions.attach({ profile: { username } }));
    localStorage.setItem('app-username', username);
  }

  tryGetProfile() {
    return firstValueFrom(this.username$.pipe(
      first(),
      map((username) => {
        if (!!username) {
          return username;
        }
        else {
          return localStorage.getItem('app-username'); 
        }
      })
    ));    
  }

  logout() {
    this.profileStore.dispatch(UserProfileActions.detach());
    localStorage.removeItem('app-username');
  }
}