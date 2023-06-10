import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowCardComponent } from './stackoverflow-card.component';

describe('StackoverflowCardComponent', () => {
  let component: StackoverflowCardComponent;
  let fixture: ComponentFixture<StackoverflowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackoverflowCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackoverflowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
