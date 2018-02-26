import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedZonesComponent } from './speed-zones.component';

describe('SpeedZonesComponent', () => {
  let component: SpeedZonesComponent;
  let fixture: ComponentFixture<SpeedZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
