import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuongnvComponent } from './luongnv.component';

describe('LuongnvComponent', () => {
  let component: LuongnvComponent;
  let fixture: ComponentFixture<LuongnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuongnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuongnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
