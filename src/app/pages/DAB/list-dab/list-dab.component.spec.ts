import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDABComponent } from './list-dab.component';

describe('ListDABComponent', () => {
  let component: ListDABComponent;
  let fixture: ComponentFixture<ListDABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDABComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
