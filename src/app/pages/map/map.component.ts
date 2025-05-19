import { Component } from '@angular/core';
import { AppMenuItem, NavigationMenuComponent } from '@src/app/components/navigation-menu/navigation-menu.component';

@Component({
  selector: 'app-map',
  imports: [
    NavigationMenuComponent,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  menuItems: AppMenuItem[] = [
    {
      id: 'file',
      label: 'File',      
    },
    {
      id: 'help',
      label: 'Help',
    },
    {
      id: 'settings',
      label: 'Settings',
    },    
  ];
}
