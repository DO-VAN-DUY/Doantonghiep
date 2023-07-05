import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernvComponent } from './headernv.component';

describe('HeadernvComponent', () => {
  let component: HeadernvComponent;
  let fixture: ComponentFixture<HeadernvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadernvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadernvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
