import { Component } from '@angular/core';
import { AppCommonModule } from '@src/app/app-common.module';
import { MapboxState } from '@src/app/models/mapbox-state';
import { MapboxService } from '@src/app/services/mapbox.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-bar',
  imports: [ AppCommonModule ],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.scss'
})
export class StatusBarComponent {
  mapboxState: MapboxState | undefined;
  private _mapboxSubscription: Subscription | undefined;
  constructor(private mapboxService:MapboxService) {}


  ngOnInit() {
    this._mapboxSubscription = this.mapboxService.getMapboxState().subscribe((state) => {
      this.mapboxState = state;
    });
  }

  ngOnDestroy() {
    this._mapboxSubscription?.unsubscribe();
  }
}
