import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMatComponent } from './buttons-mat.component';

describe('ButtonsMatComponent', () => {
  let component: ButtonsMatComponent;
  let fixture: ComponentFixture<ButtonsMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
