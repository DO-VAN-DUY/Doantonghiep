import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgpassComponent } from './fgpass.component';

describe('FgpassComponent', () => {
  let component: FgpassComponent;
  let fixture: ComponentFixture<FgpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
