import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectUserComponent } from './inspect-user.component';

describe('InspectUserComponent', () => {
  let component: InspectUserComponent;
  let fixture: ComponentFixture<InspectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
