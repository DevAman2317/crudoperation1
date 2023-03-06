import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngListComponent } from './eng-list.component';

describe('EngListComponent', () => {
  let component: EngListComponent;
  let fixture: ComponentFixture<EngListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
