import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonhiemComponent } from './bonhiem.component';

describe('BonhiemComponent', () => {
  let component: BonhiemComponent;
  let fixture: ComponentFixture<BonhiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonhiemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonhiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
