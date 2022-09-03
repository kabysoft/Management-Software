import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemeetingComponent } from './managemeeting.component';

describe('ManagemeetingComponent', () => {
  let component: ManagemeetingComponent;
  let fixture: ComponentFixture<ManagemeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagemeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagemeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
