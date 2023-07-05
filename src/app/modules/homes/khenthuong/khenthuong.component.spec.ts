import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhenthuongComponent } from './khenthuong.component';

describe('KhenthuongComponent', () => {
  let component: KhenthuongComponent;
  let fixture: ComponentFixture<KhenthuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhenthuongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhenthuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
