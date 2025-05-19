import { Component, computed, inject, input } from '@angular/core';
import { AppCommonModule } from '@src/app/app-common.module';
import { AuthorDialogComponent } from '../author-dialog/author-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navigation-menu',
  imports: [ AppCommonModule],
  providers: [ ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  /*
  @Input()
  menuItems: AppMenuItem[] = [
    {
      id: '1',
      label: 'Item 1',
      click: (id) => this.handleClick(id),
      children: [
        {
          id: '1-1',
          label: 'Sub Item 1-1',
          click: (id) => this.handleClick(id)
        },
        {
          id: '1-2',
          label: 'Sub Item 1-2',
          click: (id) => this.handleClick(id)
        }
      ]
    },
    {
      id: '2',
      label: 'Item 2',
      click: (id) => this.handleClick(id)
    }
  ];
  */
  private _dialogRef = inject(MatDialog);
  menuItems = input<AppMenuItem[]>([]);
  _additionalMenuItems: AppMenuItem[] = [
    {
      id: 'settings',
      label: 'Settings',
      children: [
        { id: 'author', label: 'Author', click: (id) => this.openAuthDialog() },
      ],
    }, 
  ];

  fullMenuItems = computed(() => {
    return [
      ...this.menuItems(),
      ...this._additionalMenuItems,
    ];
  });

  handleClick(id: string) {
    console.log(`Clicked item with id: ${id}`);
  }

  openAuthDialog() {
    
    AuthorDialogComponent.openDialog(this._dialogRef);
    /*
    this._dialogRef.open(AuthorDialogComponent, {
      width: '400px',
      height: '300px',
    });
    */
  }
}

export interface AppMenuItem {
  id: string;
  label: string;
  click?: (id: string) => void;
  children?: AppMenuItem[];
}
