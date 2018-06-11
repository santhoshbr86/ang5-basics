import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExObservablesComponent } from './ex-observables.component';

describe('ExObservablesComponent', () => {
  let component: ExObservablesComponent;
  let fixture: ComponentFixture<ExObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
