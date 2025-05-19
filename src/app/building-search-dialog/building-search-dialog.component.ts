import { Component } from '@angular/core';
import { AppCommonModule } from '../app-common.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Building } from '../models/building';

@Component({
  selector: 'app-building-search-dialog',
  imports: [ AppCommonModule ],
  templateUrl: './building-search-dialog.component.html',
  styleUrl: './building-search-dialog.component.scss'
})
export class BuildingSearchDialogComponent {
  
  displayedColumns = ['name', 'address', 'lng', 'lat'];
  dataSource: Building[] = [
    { 
      name: 'One World Trade Center', 
      address: '285 Fulton St, New York, NY 10007', 
      lng: -74.013382, lat: 40.712742
    },
  ];

  constructor(private dialogRef: MatDialogRef<BuildingSearchDialogComponent, Building>) {}

  selectBuilding(building: Building) {
    this.dialogRef.close(building);
  }

  static openDialog(matDialog: MatDialog) {
    let ref = matDialog.open<BuildingSearchDialogComponent, void, Building>(BuildingSearchDialogComponent, {
      width: '1200px',
      height: '700px',
    });
    
    return ref;
  }
}
