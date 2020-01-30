import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadousuarioComponent } from './listadousuario.component';

describe('ListadousuarioComponent', () => {
  let component: ListadousuarioComponent;
  let fixture: ComponentFixture<ListadousuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadousuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
