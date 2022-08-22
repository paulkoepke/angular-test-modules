import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingGraphComponent } from './selling-graph.component';

describe('SellingGraphComponent', () => {
  let component: SellingGraphComponent;
  let fixture: ComponentFixture<SellingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
