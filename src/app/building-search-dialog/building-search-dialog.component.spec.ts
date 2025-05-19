import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSearchDialogComponent } from './building-search-dialog.component';

describe('BuildingSearchDialogComponent', () => {
  let component: BuildingSearchDialogComponent;
  let fixture: ComponentFixture<BuildingSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
