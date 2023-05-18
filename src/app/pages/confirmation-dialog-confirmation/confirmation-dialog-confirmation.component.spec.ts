import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogConfirmationComponent } from './confirmation-dialog-confirmation.component';

describe('ConfirmationDialogConfirmationComponent', () => {
  let component: ConfirmationDialogConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationDialogConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
