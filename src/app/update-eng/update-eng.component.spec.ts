import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEngComponent } from './update-eng.component';

describe('UpdateEngComponent', () => {
  let component: UpdateEngComponent;
  let fixture: ComponentFixture<UpdateEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
