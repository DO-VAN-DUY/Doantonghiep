import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieudongComponent } from './dieudong.component';

describe('DieudongComponent', () => {
  let component: DieudongComponent;
  let fixture: ComponentFixture<DieudongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieudongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieudongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
