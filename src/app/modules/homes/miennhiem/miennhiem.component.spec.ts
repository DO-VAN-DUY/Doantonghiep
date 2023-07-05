import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiennhiemComponent } from './miennhiem.component';

describe('MiennhiemComponent', () => {
  let component: MiennhiemComponent;
  let fixture: ComponentFixture<MiennhiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiennhiemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiennhiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
