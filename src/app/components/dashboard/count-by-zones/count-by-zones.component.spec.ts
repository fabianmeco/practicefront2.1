import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountByZonesComponent } from './count-by-zones.component';

describe('CountByZonesComponent', () => {
  let component: CountByZonesComponent;
  let fixture: ComponentFixture<CountByZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountByZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountByZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
