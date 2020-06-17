import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowswerComponent } from './browswer.component';

describe('BrowswerComponent', () => {
  let component: BrowswerComponent;
  let fixture: ComponentFixture<BrowswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
