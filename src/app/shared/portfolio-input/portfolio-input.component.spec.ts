import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInputComponent } from './portfolio-input.component';

describe('PortfolioInputComponent', () => {
  let component: PortfolioInputComponent;
  let fixture: ComponentFixture<PortfolioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
