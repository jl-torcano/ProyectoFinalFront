import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadomascotasComponent } from './listadomascotas.component';

describe('ListadomascotasComponent', () => {
  let component: ListadomascotasComponent;
  let fixture: ComponentFixture<ListadomascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadomascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadomascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
