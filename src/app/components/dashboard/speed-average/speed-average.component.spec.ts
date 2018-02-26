import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedAverageComponent } from './speed-average.component';

describe('SpeedAverageComponent', () => {
  let component: SpeedAverageComponent;
  let fixture: ComponentFixture<SpeedAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
