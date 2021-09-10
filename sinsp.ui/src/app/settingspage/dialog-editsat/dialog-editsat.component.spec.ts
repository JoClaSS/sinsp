import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditsatComponent } from './dialog-editsat.component';

describe('DialogEditsatComponent', () => {
  let component: DialogEditsatComponent;
  let fixture: ComponentFixture<DialogEditsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditsatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
