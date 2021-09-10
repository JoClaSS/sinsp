import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewsatComponent } from './dialog-newsat.component';

describe('DialogNewsatComponent', () => {
  let component: DialogNewsatComponent;
  let fixture: ComponentFixture<DialogNewsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewsatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
