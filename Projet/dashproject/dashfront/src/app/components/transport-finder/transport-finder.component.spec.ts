import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFinderComponent } from './transport-finder.component';

describe('TransportFinderComponent', () => {
  let component: TransportFinderComponent;
  let fixture: ComponentFixture<TransportFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
