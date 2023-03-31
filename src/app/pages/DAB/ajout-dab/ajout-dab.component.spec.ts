import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDABComponent } from './ajout-dab.component';

describe('AjoutDABComponent', () => {
  let component: AjoutDABComponent;
  let fixture: ComponentFixture<AjoutDABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDABComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
