import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSponsersComponent } from './about-sponsers.component';

describe('AboutSponsersComponent', () => {
  let component: AboutSponsersComponent;
  let fixture: ComponentFixture<AboutSponsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSponsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSponsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
