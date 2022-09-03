import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclientComponent } from './viewclient.component';

describe('ViewclientComponent', () => {
  let component: ViewclientComponent;
  let fixture: ComponentFixture<ViewclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
