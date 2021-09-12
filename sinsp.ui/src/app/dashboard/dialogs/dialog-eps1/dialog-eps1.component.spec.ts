import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEPS1Component } from './dialog-eps1.component';

describe('DialogEPS1Component', () => {
  let component: DialogEPS1Component;
  let fixture: ComponentFixture<DialogEPS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEPS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEPS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
