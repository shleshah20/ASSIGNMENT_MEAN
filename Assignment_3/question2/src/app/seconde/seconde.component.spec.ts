import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeComponent } from './seconde.component';

describe('SecondeComponent', () => {
  let component: SecondeComponent;
  let fixture: ComponentFixture<SecondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
