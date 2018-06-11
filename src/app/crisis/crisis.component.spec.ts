import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisComponent } from './crisis.component';

describe('CrisisComponent', () => {
  let component: CrisisComponent;
  let fixture: ComponentFixture<CrisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
