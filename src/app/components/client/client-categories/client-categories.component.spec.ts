import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCategoriesComponent } from './client-categories.component';

describe('ClientCategoriesComponent', () => {
  let component: ClientCategoriesComponent;
  let fixture: ComponentFixture<ClientCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
