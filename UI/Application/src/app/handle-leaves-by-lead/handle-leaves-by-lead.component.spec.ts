import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleLeavesByLeadComponent } from './handle-leaves-by-lead.component';

describe('HandleLeavesByLeadComponent', () => {
  let component: HandleLeavesByLeadComponent;
  let fixture: ComponentFixture<HandleLeavesByLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleLeavesByLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleLeavesByLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
