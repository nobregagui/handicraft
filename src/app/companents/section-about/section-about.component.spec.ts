import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutComponent } from './section-about.component';

describe('SectionAboutComponent', () => {
  let component: SectionAboutComponent;
  let fixture: ComponentFixture<SectionAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAboutComponent]
    });
    fixture = TestBed.createComponent(SectionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
