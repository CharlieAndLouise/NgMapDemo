import { Component, inject } from '@angular/core';
import { AppCommonModule } from '@src/app/app-common.module';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-author-dialog',
  imports: [ AppCommonModule, ],
  templateUrl: './author-dialog.component.html',
  styleUrl: './author-dialog.component.scss'
})
export class AuthorDialogComponent {

  static openDialog(matDialog: MatDialog) {
    let ref = matDialog.open(AuthorDialogComponent, {
      width: '400px',
      height: '300px',
    });
    return ref;
  }
}
