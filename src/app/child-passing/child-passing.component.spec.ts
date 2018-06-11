import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPassingComponent } from './child-passing.component';

describe('ChildPassingComponent', () => {
  let component: ChildPassingComponent;
  let fixture: ComponentFixture<ChildPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
