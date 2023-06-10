import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocardsComponent } from './portfoliocards.component';

describe('PortfoliocardsComponent', () => {
  let component: PortfoliocardsComponent;
  let fixture: ComponentFixture<PortfoliocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
