import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifclientComponent } from './modifclient.component';

describe('ModifclientComponent', () => {
  let component: ModifclientComponent;
  let fixture: ComponentFixture<ModifclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
