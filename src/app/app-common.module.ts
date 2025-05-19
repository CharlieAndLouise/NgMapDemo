import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';



const ImportedModules = [
  CommonModule,
  FormsModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatTableModule,
  
  //Dialog
  MatDialogContent, 
  MatDialogActions, 
  MatDialogTitle, 
  MatDialogClose
];

@NgModule({
  imports: [
    ...ImportedModules,
  ],
  exports: [
    ...ImportedModules, 
  ],
  declarations: [
    
  ],
  providers: [
    
  ]
})
export class AppCommonModule { }