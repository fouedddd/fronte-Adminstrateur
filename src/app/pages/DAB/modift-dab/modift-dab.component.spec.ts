import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiftDABComponent } from './modift-dab.component';

describe('ModiftDABComponent', () => {
  let component: ModiftDABComponent;
  let fixture: ComponentFixture<ModiftDABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiftDABComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiftDABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
