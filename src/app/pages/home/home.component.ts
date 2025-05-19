import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppCommonModule } from '@src/app/app-common.module';
import { BuildingSearchDialogComponent } from '@src/app/building-search-dialog/building-search-dialog.component';
import { AppMenuItem, NavigationMenuComponent } from '@src/app/components/navigation-menu/navigation-menu.component';
import { StatusBarComponent } from '@src/app/components/status-bar/status-bar.component';
import { MapWrapper } from '@src/app/mapbox/map-wrapper';
import { MapboxService } from '@src/app/services/mapbox.service';
import { environment } from '@src/environments/environment.development';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-home',
  imports: [
    AppCommonModule,
    NavigationMenuComponent,
    StatusBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('map', { static: true }) mapContainer!: ElementRef;

  menuItems: AppMenuItem[] = [
    {
      id: 'buildings',
      label: 'Buildings',
      children: [
        { id: 'search', label: 'Search buildings...', click: (id) => this.showSearchBuildingDialog() },
      ]
    }
  ];
  private _searchBuildingDialogRef = inject(MatDialog);
  private _mapWrapper: MapWrapper | undefined;

  constructor(private mapboxService: MapboxService) {
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/blunderowl2018/cmat5jb4800t501sd3p25hjde',
      
      //style: 'https://data.onegeo.co/maps/styles/urban/?token=b0ce721f1d4a4f29', 
      
      zoom: 12,
      center: [-74.0060152, 40.7127281],
      accessToken: environment.mapbox.accessToken,
    });
    this._mapWrapper = new MapWrapper(map, this.mapboxService);
  }

  private showSearchBuildingDialog() {
    const ref = BuildingSearchDialogComponent.openDialog(this._searchBuildingDialogRef);
    ref.afterClosed().subscribe((building) => {
      if (building) {
        this._mapWrapper?.flyTo(building.lng, building.lat, 15, 45);
      }
    });
  }
}
