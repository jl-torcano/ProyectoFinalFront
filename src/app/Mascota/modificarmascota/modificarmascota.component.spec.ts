import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarmascotaComponent } from './modificarmascota.component';

describe('ModificarmascotaComponent', () => {
  let component: ModificarmascotaComponent;
  let fixture: ComponentFixture<ModificarmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
