import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommonModule } from '@src/app/app-common.module';
import { ProfileService } from '@src/app/services/profile.service';

@Component({
  selector: 'app-login',
  imports: [
    AppCommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private profileService: ProfileService) { 
    this.profileService.username$.subscribe((username) => {
      console.log('username', username);
    });
  }

  username = 'Blunder Owl';
  password = 'password';

  login() {
    this.profileService.login(this.username, this.password);
    let route = inject(Router);
    route.navigate(['/home']);
  }
}
