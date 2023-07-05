import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuyenchuyenComponent } from './thuyenchuyen.component';

describe('ThuyenchuyenComponent', () => {
  let component: ThuyenchuyenComponent;
  let fixture: ComponentFixture<ThuyenchuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuyenchuyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThuyenchuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
