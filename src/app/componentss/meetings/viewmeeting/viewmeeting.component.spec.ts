import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmeetingComponent } from './viewmeeting.component';

describe('ViewmeetingComponent', () => {
  let component: ViewmeetingComponent;
  let fixture: ComponentFixture<ViewmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
