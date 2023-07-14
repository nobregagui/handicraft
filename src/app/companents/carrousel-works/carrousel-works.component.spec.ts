import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselWorksComponent } from './carrousel-works.component';

describe('CarrouselWorksComponent', () => {
  let component: CarrouselWorksComponent;
  let fixture: ComponentFixture<CarrouselWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselWorksComponent]
    });
    fixture = TestBed.createComponent(CarrouselWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
