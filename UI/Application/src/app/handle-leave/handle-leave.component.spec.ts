import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleLeaveComponent } from './handle-leave.component';

describe('HandleLeaveComponent', () => {
  let component: HandleLeaveComponent;
  let fixture: ComponentFixture<HandleLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
