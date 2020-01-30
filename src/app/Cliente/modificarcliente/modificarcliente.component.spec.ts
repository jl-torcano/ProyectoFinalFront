import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarclienteComponent } from './modificarcliente.component';

describe('ModificarclienteComponent', () => {
  let component: ModificarclienteComponent;
  let fixture: ComponentFixture<ModificarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
