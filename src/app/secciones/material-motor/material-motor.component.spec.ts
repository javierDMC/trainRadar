import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialMotorComponent } from './material-motor.component';

describe('MaterialMotorComponent', () => {
  let component: MaterialMotorComponent;
  let fixture: ComponentFixture<MaterialMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialMotorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
