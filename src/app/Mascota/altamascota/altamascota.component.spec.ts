import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltamascotaComponent } from './altamascota.component';

describe('AltamascotaComponent', () => {
  let component: AltamascotaComponent;
  let fixture: ComponentFixture<AltamascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltamascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltamascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
